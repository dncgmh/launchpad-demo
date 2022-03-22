// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/utils/SafeERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract RocketOneSale is ReentrancyGuard, Ownable {
	using SafeERC20 for IERC20;
	using SafeMath for uint256;

	IERC20 public immutable busdToken; //Stable coin token contract address
	IERC20 public saleToken; //Sale token contract address
	uint256 public immutable hardcapUsd; //hardcap value as usd
	uint256 public immutable totalSellAmountToken; //total amount to be sold
	uint256 public maxBuyValue; //max buying value per investor
	uint256 public minBuyValue; //min buying value per investor
	bool public contractStatus; //Contract running status
	uint256 public startTime; //IDO participation start time
	uint256 public endTime; //IDO participation end time
	uint256 public totalSoldAmountToken; //total sold amount as token
	uint256 public totalSoldAmountUsd; // total sold amount as usd
	uint256 public lockTime; //unlock date to get claim
	address[] public whitelistedAddresses; //whitelisted address as array
	uint256[] public claimRoundsDate; //all claim rounds
	uint256 public totalClaimPercent;
	bool public isFcfs;

	//whitelisted user data per user
	struct whitelistedInvestorData {
		uint256 totalBuyingAmountUsd;
		uint256 totalBuyingAmountToken;
		uint256 claimRound;
		bool isWhitelisted;
		uint256 lastClaimDate;
		uint256 claimedValue;
		address investorAddress;
		uint256 totalAllocation;
		bool iWillBuy;
	}
	//claim round periods
	struct roundDatas {
		uint256 roundStartDate;
		uint256 roundPercent;
	}
	//mappings to reach relevant information
	mapping(address => whitelistedInvestorData) public _investorData;
	mapping(uint256 => roundDatas) public _roundDatas;

	constructor(
		IERC20 _busdAddress,
		IERC20 _saleToken,
		bool _contractStatus,
		uint256 _hardcapUsd,
		uint256 _totalSellAmountToken,
		uint256 _maxBuyValue,
		uint256 _minBuyValue,
		uint256 _startTime,
		uint256 _endTime,
		bool _isFcfs
	) public {
		require(
			_startTime < _endTime,
			"start block must be less than finish block"
		);
		require(
			_endTime > block.timestamp,
			"finish block must be more than current block"
		);
		busdToken = _busdAddress;
		saleToken = _saleToken;
		contractStatus = _contractStatus;
		hardcapUsd = _hardcapUsd;
		totalSellAmountToken = _totalSellAmountToken;
		maxBuyValue = _maxBuyValue;
		minBuyValue = _minBuyValue;
		startTime = _startTime;
		endTime = _endTime;
		isFcfs = _isFcfs;
	}

	event NewBuying(
		address indexed investorAddress,
		uint256 amount,
		uint256 timestamp
	);

	//modifier to change contract status
	modifier mustNotPaused() {
		require(!contractStatus, "Paused!");
		_;
	}

	// function to change status of contract
	function changePause(bool _contractStatus) public onlyOwner nonReentrant {
		contractStatus = _contractStatus;
	}

	function changeSaleTokenAddress(IERC20 _contractAddress)
		external
		onlyOwner
		nonReentrant
	{
		saleToken = _contractAddress;
	}

	function changeStartTime(uint256 _startTime)
		external
		nonReentrant
		onlyOwner
	{
		startTime = _startTime;
	}

	function changeFinishTime(uint256 _finishTime)
		external
		nonReentrant
		onlyOwner
	{
		endTime = _finishTime;
	}

	//return all whitelisted addresses as array
	function getWhitelistedAddresses()
		public
		view
		returns (whitelistedInvestorData[] memory)
	{
		return whitelistedAddresses;
	}

	//calculate token amount according to deposit amount
	function calculateTokenAmount(uint256 amount)
		public
		view
		returns (uint256)
	{
		return (totalSellAmountToken.mul(amount)).div(hardcapUsd);
	}

	function returnUserInfo(address _addresss)
		public
		view
		returns (
			uint256,
			uint256,
			uint256,
			bool,
			uint256,
			uint256,
			address,
			uint256,
			bool
		)
	{
		whitelistedInvestorData storage investor = _investorData[_addresss];
		return (
			investor.totalBuyingAmountUsd,
			investor.totalBuyingAmountToken,
			investor.claimRound,
			investor.isWhitelisted,
			investor.lastClaimDate,
			investor.claimedValue,
			investor.investorAddress,
			investor.totalAllocation,
			investor.iWillBuy
		);
	}

	function changeFcfs(bool _value) external nonReentrant onlyOwner {
		isFcfs = _value;
	}

	//buys token if passing controls
	function buyToken(uint256 busdAmount) external nonReentrant mustNotPaused {
		require(block.timestamp >= startTime);
		require(block.timestamp <= endTime);
		whitelistedInvestorData storage investor = _investorData[msg.sender];
		if (!isFcfs) {
			require(investor.isWhitelisted, "You're not whitelisted");
		}
		require(
			busdAmount >= minBuyValue,
			"You cannot buy less than minimum limit"
		);
		require(
			maxBuyValue >= busdAmount,
			"your amount cannot be bigger than max"
		);
		require(
			investor.totalAllocation >=
				investor.totalBuyingAmountUsd.add(busdAmount),
			"You cannot buy more than your allocation"
		);
		require(
			hardcapUsd >= totalSoldAmountUsd.add(busdAmount),
			"hardcap value exceed"
		);
		require(busdToken.transferFrom(msg.sender, address(this), busdAmount));
		uint256 totalTokenAmount = calculateTokenAmount(busdAmount);
		investor.totalBuyingAmountUsd = investor.totalBuyingAmountUsd.add(
			busdAmount
		);
		investor.totalBuyingAmountToken = investor.totalBuyingAmountToken.add(
			totalTokenAmount
		);
		totalSoldAmountToken = totalSoldAmountToken.add(totalTokenAmount);
		totalSoldAmountUsd = totalSoldAmountUsd.add(busdAmount);
		emit NewBuying(msg.sender, busdAmount, block.timestamp);
	}

	//emergency withdraw function in worst cases
	function emergencyWithdrawAllBusd() external nonReentrant onlyOwner {
		require(
			busdToken.transfer(msg.sender, busdToken.balanceOf(address(this)))
		);
	}

	//change lock time to prevent missing values
	function changeLockTime(uint256 _lockTime) external nonReentrant onlyOwner {
		lockTime = _lockTime;
	}

	//emergency withdraw for tokens in worst cases
	function withdrawTokens() external nonReentrant onlyOwner {
		require(
			saleToken.transfer(msg.sender, saleToken.balanceOf(address(this)))
		);
	}

	// Change iWillBuy
	function iWillBuy(bool _value) external nonReentrant {
		whitelistedInvestorData storage investor = _investorData[msg.sender];
		investor.iWillBuy = _value;
	}

	//claim tokens according to claim periods
	function claimTokens() external nonReentrant {
		require(block.timestamp >= lockTime, "bad lock time");
		whitelistedInvestorData storage investor = _investorData[msg.sender];
		require(investor.isWhitelisted, "you are not whitelisted");
		uint256 investorRoundNumber = investor.claimRound;
		roundDatas storage roundDetail = _roundDatas[investorRoundNumber];
		require(
			roundDetail.roundStartDate != 0,
			"Claim rounds are not available yet."
		);
		require(
			block.timestamp >= roundDetail.roundStartDate,
			"round didn't start yet"
		);
		require(
			investor.totalBuyingAmountToken >=
				investor.claimedValue.add(
					investor
						.totalBuyingAmountToken
						.mul(roundDetail.roundPercent)
						.div(100)
				),
			"already you got all your tokens"
		);
		require(
			saleToken.transfer(
				msg.sender,
				investor
					.totalBuyingAmountToken
					.mul(roundDetail.roundPercent)
					.div(100)
			),
			"bad transfer"
		);
		investor.claimRound = investor.claimRound.add(1);
		investor.lastClaimDate = block.timestamp;
		investor.claimedValue = investor.claimedValue.add(
			investor.totalBuyingAmountToken.mul(roundDetail.roundPercent).div(
				100
			)
		);
	}

	//add new claim round
	function addNewClaimRound(
		uint256 _roundNumber,
		uint256 _roundStartDate,
		uint256 _claimPercent
	) external nonReentrant onlyOwner {
		require(_claimPercent.add(totalClaimPercent) <= 100);
		require(_claimPercent > 0);
		totalClaimPercent = totalClaimPercent.add(_claimPercent);
		roundDatas storage roundDetail = _roundDatas[_roundNumber];
		roundDetail.roundStartDate = _roundStartDate;
		roundDetail.roundPercent = _claimPercent;
		claimRoundsDate.push(_roundStartDate);
	}

	function changeMaxMinBuyLimit(uint256 _maxBuyLimit, uint256 _minBuyLimit)
		external
		onlyOwner
		nonReentrant
	{
		maxBuyValue = _maxBuyLimit;
		minBuyValue = _minBuyLimit;
	}

	function changeDataOfUser(
		address _user,
		uint256 _allocation,
		bool _whitelistStatus
	) external onlyOwner nonReentrant {
		whitelistedInvestorData storage investor = _investorData[_user];
		investor.totalAllocation = _allocation;
		investor.investorAddress = _user;
		investor.isWhitelisted = _whitelistStatus;
	}

	function updateUsersToWhitelist(
		address[] memory _whitelistedAddresses,
		uint256[] memory _allocation
	) external onlyOwner nonReentrant {
		for (uint256 i = 0; i < _whitelistedAddresses.length; i++) {
			whitelistedInvestorData storage investor = _investorData[
				_whitelistedAddresses[i]
			];
			investor.investorAddress = _whitelistedAddresses[i];
			investor.totalAllocation = _allocation[i];
			investor.isWhitelisted = true;
			whitelistedAddresses.push(_whitelistedAddresses[i]);
		}
	}
}
