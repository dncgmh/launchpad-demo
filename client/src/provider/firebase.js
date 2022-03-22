const projectsDb = [
  {
    slug: 'cheesus',
    name: 'Cheesus',
    saleType: 'ido',
    projectAirdrop: true,
    shortDescription: 'Cheesus is an on-chain analytics platform for DeFi and NFT portfolio management.',
    description:
      '<p>Cheesus is the next-gen data analytics platform for the future of crypto.<br><br>On-chain DeFi trading tools allow traders to easily and comprehensively track their DEX activity, while revolutionary NFT analytics allow investors to manage their portfolio of Metaverse assets easily and effectively.<br><br>Their on-chain instruments monitor all EVM compatible DEX\'s, as well as Metaverse ecosystems on Ethereum, Solana, Polygon, and many more.<br><br>Cheesus\' social, gamified approach makes investing fun for beginners, while providing a rich, detailed set of tools that deliver deep insight for the most advanced investors.<br><br>Functionalities include:<br>- Personal portfolio management for DeFi and NFT assets, including trading history, profit/loss calculation, gas fees, and tax calculations for decentralized transactions<br>- DeFi and Metaverse analytics and data aggregation<br>- Chain Explorer for any NFT Gaming Metaverse<br>- Tools for tracking on-chain activity metaverses on Solana, all EVM chains, Polkadot & Kusama, Near, and Cardano, among others<br>- DeFi and Metaverse analytics and data aggregation<br>- Copytrading to aid in the discovery of the best DEX traders and analyze their profit/loss, and identify winning trading strategies<br>- Automated Copytrading for any transaction<br>- Ratings for projects on various blockchains</p><img src="https://static.equinox.fund/projects/cheesus/cheesus-banner-1.jpg" alt="CHEESUS" />',
    media: {
      logo: 'https://static.equinox.fund/projects/cheesus/cheesus-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/cheesus/cheesus-banner-1.jpg',
      youtubeLiveId: 'JyHJN5ODgXI',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/cheesus/cheesus-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 150000,
    schedule: {
      participationOpenDate: '2021-11-30T05:00:00.000Z',
      participationCloseDate: '2021-12-06T05:00:00.000Z',
      poolOpenDate: '2021-12-06T11:00:00.000Z',
      tokenDistributionDate: '2021-12-20T12:00:00.000Z'
    },
    token: {
      symbol: 'CHEESUS',
      price: 0.038,
      contractAddress: '',
      vesting: '30% released on TGE, 30% month one, 30% month two, 10% month three',
      firstClaimWithClaimUrl: false
    },
    social: {
      telegram: 'https://t.me/cheesus_MAIN_eng',
      twitter: 'https://twitter.com/CheesusDeFi',
      medium: '',
      whitepaper:
        'https://168aggregator.notion.site/DeFi-Rating-Multichain-DeFi-Dashboard-Analytical-Platform-c23701169e35493f801dff7dc0b42ac1',
      website: 'https://cheesus.ai/en'
    },
    contracts: {
      summer: '0xF7481D28E7FF383CD83dc1C70a99bD5e6A09cE1D',
      vernal: '0x91f1f9406e9710a9Be0AF16770523556883CE767',
      winter: '0x9D3c3D3C3b1d7fEF82347Bd24d804b02fB152Da5',
      autumnal: '0x606831Bb422B6639c79C52a81f5Ef6aC5242EAFb',
      'vernal-fcfs': '0x17cA1B51Ed07baCAad0C4B90c0A7Eb567854db3F',
      'winter-fcfs': '0x1fc15f1B7F45130e2CC678a0334A91f2cf2dA154',
      'autumnal-fcfs': '0x8cFD75Bf11e9b0AFBb742Aa6cd5347E22aD1Ea9B',
      bonus: '0x231eeD224f789B2920f17e30BEC607f5eA2C14f5'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-12-06T11:00:00.000Z',
        totalRaise: 9500,
        allocation: 38,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal']
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-12-06T11:00:00.000Z',
        totalRaise: 12500,
        allocation: 50,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['winter']
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-12-06T11:00:00.000Z',
        totalRaise: 15000,
        allocation: 60,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['vernal']
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-12-06T11:00:00.000Z',
        totalRaise: 105472,
        allocation: 103,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        allowParticipationFor: ['summer']
      },
      {
        name: 'autumnal-fcfs',
        label: 'Autumnal FCFS',
        type: 'fcfs',
        openTime: '2021-12-06T12:00:00.000Z',
        totalRaise: 2112,
        allocation: 16,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal']
      },
      {
        name: 'winter-fcfs',
        label: 'Winter FCFS',
        type: 'fcfs',
        openTime: '2021-12-06T12:00:00.000Z',
        totalRaise: 2184,
        allocation: 21,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['winter']
      },
      {
        name: 'vernal-fcfs',
        label: 'Vernal FCFS',
        type: 'fcfs',
        openTime: '2021-12-06T12:00:00.000Z',
        totalRaise: 2522,
        allocation: 26,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['vernal']
      },
      {
        name: 'bonus',
        label: 'Praise Cheesus!',
        type: 'fcfs',
        openTime: '2021-12-06T14:30:00.000Z',
        totalRaise: 26145,
        allocation: 35,
        artwork: 'https://static.equinox.fund/projects/cheesus/cheesus-logo-1.jpg'
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'crypto-alien-babes',
    name: 'Crypto Alien Babes',
    saleType: 'ino',
    projectAirdrop: true,
    projectNetwork: 'eth',
    shortDescription: 'On a planet in the Metaverse, brave and beautiful warriors are awaiting their rebirth...',
    description:
      '<p>Inside their Crypto-eggs, they slumber and wait...<br><br>For the calling of their new partners on earth and a tight-knit community...<br><br>With unmatched skill, amazing powers, an unwavering dedication to a cause, and stalwart in their beliefs, they will attune to their mates to guide them in their quest.<br><br>Their mission is to rid the earth of bad actors and parasites who would deny our civilization access to the benefits of the Blockchain.<br><br>They are the Crypto Alien Babes, and they are coming!<br><br>The CAB will champion a new breed of NFT’s. One where strong utility drives value and provides passive income through repeating royalties, and an ongoing anime series, rich in content and with a community, engaged like no other.<br><br>There will only be 1,111 CAB.  Ever.<br><br>Each of them will be unique.<br><br>And they will be forever immortalized in the Blockchain. And love and be loved by whoever is their partner.<br><br>The future is here.  Are you ready?</p><img src="https://static.equinox.fund/projects/crypto-alien-babes/crypto-alien-babes-banner-1.jpg" alt="CAB" />',
    media: {
      logo: 'https://static.equinox.fund/projects/crypto-alien-babes/crypto-alien-babes-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/crypto-alien-babes/crypto-alien-babes-banner-1.jpg',
      youtubeLiveId: 'TmyVh1pJV-o',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/crypto-alien-babes/crypto-alien-babes-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 493500,
    schedule: {
      participationOpenDate: '2021-11-11T09:00:00.000Z',
      participationCloseDate: '2021-11-15T05:00:00.000Z',
      poolOpenDate: '2021-11-15T11:00:00.000Z',
      tokenDistributionDate: '2021-11-19T11:00:00.000Z'
    },
    token: {
      symbol: '',
      price: 1175,
      contractAddress: '',
      vesting: ''
    },
    social: {
      telegram: '',
      twitter: 'https://twitter.com/cryptoalienbabe',
      medium: '',
      whitepaper: 'https://cryptoalienbabes.io/SpaceMap',
      website: 'https://cryptoalienbabes.io'
    },
    contracts: {
      autumnal: '0x959Ef6519fAbf1e1b7136cC8AeE02a462B0D73C0',
      winter: '0xc1c7263173e748654aa80E667Fc0899a4F3afEac',
      vernal: '0xCc0b942232a652eA456f8B22b2b896D5dD781927',
      summer: '0x2D0583484eb6D10B0F73F197C4d7eCA72A3D6B3A',
      bonus: '0x1283368B28b2B3DAa74D0D45a1dC9ce6d1ee4a49',
      'bonus-final': '0x28E4Ae3d620Bd59021C2BC446f0C93afBD1BC743'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-11-15T11:00:00.000Z',
        totalRaise: 31725,
        artwork: 'https://static.equinox.fund/projects/crypto-alien-babes/artworks/autumnal.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-11-15T11:00:00.000Z',
        totalRaise: 41125,
        artwork: 'https://static.equinox.fund/projects/crypto-alien-babes/artworks/winter.png',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-11-15T11:00:00.000Z',
        totalRaise: 49350,
        artwork: 'https://static.equinox.fund/projects/crypto-alien-babes/artworks/vernal.png',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'lottery',
        openTime: '2021-11-15T11:00:00.000Z',
        totalRaise: 370125,
        artwork: 'https://static.equinox.fund/projects/crypto-alien-babes/artworks/summer.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'bonus',
        label: 'Babe Bonus',
        type: 'fcfs',
        openTime: '2021-11-16T12:00:00.000Z',
        totalRaise: 266725,
        artwork: 'https://static.equinox.fund/projects/crypto-alien-babes/crypto-alien-babes-logo-1.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'bonus-final',
        label: 'Final Offering',
        type: 'fcfs',
        openTime: '2021-11-17T11:00:00.000Z',
        totalRaise: 32900,
        artwork: 'https://static.equinox.fund/projects/crypto-alien-babes/crypto-alien-babes-logo-1.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    saleType: 'ino',
    projectAirdrop: true,
    slug: 'cryptoblades',
    name: 'CryptoBlades',
    shortDescription: 'CryptoBlades is a new Play to Earn metaverse blockchain game on Binance Smart Chain.',
    description:
      '<p>CryptoBlades is a Play to Earn NFT RPG developed by Riveted Games on the Binance Smart Chain platform. The game revolves around the acquisition of legendary Blades and powerful Heroes to wield them. Players may participate in combat using their assets to earn SKILL tokens. Assets are player owned NFTs minted in the ERC-721 standard which may be traded on the proprietary marketplace.</p><p>The world of CryptoBlades: Kingdoms will be a 5000x5000 area, with 25 million claimable territory locations. This large area will be subdivided into 50x50 chunks for a total of 400 “chunks”.</p><p>The entire world will reside on one blockchain per game instance, but there may be multiple game instances across multiple blockchains. The game is on Binance Smart Chain, and will expand to other chains in the future.</p><img src="https://static.equinox.fund/projects/cryptoblades/cryptoblades-banner-1.jpg" alt="CryptoBlades" /> <img src="https://static.equinox.fund/projects/cryptoblades/cryptoblades-land-prices-1.jpg" alt="CryptoBlades" />',
    media: {
      logo: 'https://static.equinox.fund/projects/cryptoblades/cryptoblades-logo-1.png',
      thumbnail: 'https://static.equinox.fund/projects/cryptoblades/cryptoblades-banner-1.png',
      youtubeLiveId: '',
      cloudfareVideoId: '5f686151d4fd0a9aeef5fd9b07bb9413',
      background: 'https://static.equinox.fund/projects/cryptoblades/cryptoblades-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 441500,
    schedule: {
      participationOpenDate: '',
      participationCloseDate: '',
      poolOpenDate: '2021-10-22T12:00:00.000Z',
      tokenDistributionDate: '2021-10-27T11:00:00.000Z'
    },
    token: {
      symbol: 'NFT',
      price: 0,
      contractAddress: '',
      vesting: ''
    },
    social: {
      telegram: 'https://t.me/cryptoblades_general',
      twitter: 'https://twitter.com/bladescrypto',
      medium: 'https://cryptoblades.medium.com/',
      whitepaper: 'https://cryptoblades.gitbook.io/cryptoblades-kingdoms/',
      website: 'https://cryptobladeskingdoms.io/'
    },
    poolsInstructions:
      '<h4><strong>Pool information</strong></h4><p>Summer NFT holders get initial access to the sale for 12 hours; Vernal holders get 6 hours; Winter holders get 3 hours; then the sale opens to all Equinox token holders. There are limited numbers of lands available for purchase at each tier, so get yours before the chance is gone.</p><p>See what time your NFT grants you access using the timeline information below.</p>',
    contracts: {
      emperor: '0x959D5147cA719Fd19b112Db24b2348fb4d82547c',
      duke: '0x120b5722cE176b2c4ce5B95127E6A8a10C1AD77b',
      baron: '0xC1c782A92630384C3A60277bd803b9693D033039',
      'baron-bonus': '0xe5f240C6141e67Df2111979739e7d9BA74DF31a7'
    },
    pools: [
      {
        name: 'emperor',
        label: 'Emperor',
        type: 'fcfs',
        allocation: 5000,
        openTime: '2021-10-22T12:00:00.000Z',
        totalRaise: 125000,
        artwork: 'https://static.equinox.fund/projects/cryptoblades/pool-graphic-tier-3.png'
      },
      {
        name: 'duke',
        label: 'Duke',
        type: 'fcfs',
        allocation: 288,
        openTime: '2021-10-22T12:00:00.000Z',
        totalRaise: 144000,
        artwork: 'https://static.equinox.fund/projects/cryptoblades/pool-graphic-tier-2.png'
      },
      {
        name: 'baron',
        label: 'Baron',
        type: 'fcfs',
        allocation: 100,
        openTime: '2021-10-22T12:00:00.000Z',
        totalRaise: 44700,
        artwork: 'https://static.equinox.fund/projects/cryptoblades/pool-graphic-tier-1.png',
        soldout: true
      },
      {
        name: 'baron-bonus',
        label: 'Baron Flash Sale',
        type: 'fcfs',
        allocation: 100,
        openTime: '2021-10-25T12:00:00.000Z',
        totalRaise: 127800,
        artwork: 'https://static.equinox.fund/projects/cryptoblades/pool-graphic-tier-1.png'
      }
    ],
    poolsTimeline: [
      {
        name: 'summer',
        label: 'Summer',
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        date: '2021-10-22T12:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'vernal',
        label: 'Vernal',
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        date: '2021-10-23T00:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'winter',
        label: 'Winter',
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        date: '2021-10-23T06:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'autumnal',
        label: 'Autumnal',
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        date: '2021-10-23T09:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'digicorp',
    name: 'DigiCorp',
    saleType: 'ido',
    projectAirdrop: false,
    shortDescription:
      'Digicorp provides a decentralized, quantum safe and blockchain secured foundational layer for the Metaverse.',
    description:
      '<p>DigiCorp was founded on the belief that a safe, secure, decentralized world should be achievable and accessible for all. We’re a team of blockchain experts, tech leaders and market specialists, here to give people back control over their identities, data and digital lives. Our mission is to build a collaborative, transparent future, full of decentralized solutions that communities, businesses and institutions across the world can benefit from.<br><br>Every day, we apply our core principles of knowledge, value and self-sovereignty to pioneer the kind of technology that can revolutionize systems across the world.<br><br>We see how digital lives are becoming more significant, and we’re acting now – to bring this opportunity for freedom and security to life for the people who need it most.<br><br>Our four elements – DigiThree, DigiLife, DigiWare, and DigiAcademy – allow us to focus on the diverse needs of enterprises, consumers and developers, bringing bespoke solutions designed to protect and elevate each audience into the digital future.<br><br>Among our core team and advisors are some of the pioneers of DigiByte and ThreeFold – open source technologies that form the foundational layer of the DigiCorp services.<br><br>Our partnership with ThreeFold and use of DigiByte blockchain technology means we can draw on expertise, support and advice from developers within the ThreeFold and DigiByte communities – so you can always count on services backed by industry-leading insight.</p><img src="https://static.equinox.fund/projects/digicorp/digicorp-banner-1.jpg" alt="DIGICORP" />',
    media: {
      logo: 'https://static.equinox.fund/projects/digicorp/digicorp-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/digicorp/digicorp-banner-1.jpg',
      youtubeLiveId: '',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/digicorp/digicorp-cover-1.jpg'
    },
    ended: false,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 400000,
    schedule: {
      participationOpenDate: '2021-12-13T09:00:00.000Z',
      participationCloseDate: '2021-12-21T05:00:00.000Z',
      poolOpenDate: '2021-12-21T11:00:00.000Z',
      tokenDistributionDate: ''
    },
    token: {
      symbol: 'DGMV',
      price: 0.3,
      contractAddress: '',
      vesting: '10% unlocked at listing, one month cliff, then 90% released daily over 3 months.',
      firstClaimWithClaimUrl: true
    },
    social: {
      telegram: 'https://t.me/DigiCorpLabsCommunity',
      twitter: 'https://twitter.com/DigiCorpLabs',
      medium: '',
      whitepaper: 'https://www.digicorplabs.com/digimetaverse/#the-whitepaper',
      website: 'https://www.digicorplabs.com'
    },
    contractAddress: '',
    pools: [
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-12-21T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        allowParticipationFor: ['summer']
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-12-21T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['vernal']
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-12-21T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['winter']
      },
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-12-21T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal']
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'dopewarz',
    name: 'DopeWarz',
    saleType: 'ido',
    projectAirdrop: false,
    shortDescription:
      'DopeWarz is a comprehensive Metaverse, full with a virtual economy that enables people to buy and sell virtual DrugZ to earn real world tradable assets.',
    description:
      '<p>DopeWarz is a blockchain game-based MMO experience where you virtually buy and sell drugs to create and expand your drug empire, increase your influence across different Cityz & BlockZ and upgrade your in-game characters “DopeZ” and operational centrez (DOZ).<br><br>The game takes inspiration from the original DopeWars (1998) & Drug Lord (1991), where through buying and selling drugs you make use of the market arbitrage present in different districts, to maximize profits. Essentially, buying Drugs at a low price and selling them at a higher price.<br><br>To differ from the original Dope Wars, DopeWarz will use a top-down pixelated 2D environment to showcase the simulations happening on screen, so players will be able to visualize the beautiful drug and gang-infested world of DopeWarz in real-time.</p><img src="https://static.equinox.fund/projects/dopewarz/dopewarz-banner-1.jpg" alt="DOPEWARZ" />',
    media: {
      logo: 'https://static.equinox.fund/projects/dopewarz/dopewarz-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/dopewarz/dopewarz-banner-1.jpg',
      youtubeLiveId: '',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/dopewarz/dopewarz-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 200000,
    schedule: {
      participationOpenDate: '2021-11-23T05:00:00.000Z',
      participationCloseDate: '2021-12-01T05:00:00.000Z',
      poolOpenDate: '2021-12-01T11:00:00.000Z',
      tokenDistributionDate: '2021-12-01T16:30:00.000Z'
    },
    token: {
      symbol: 'DRUG',
      price: 0.03,
      contractAddress: '0x27e2A0E643c7f17959F84C345d2123B77bbd412c',
      vesting: '20% released on TGE, then 80% unlocked over 5 months.'
    },
    social: {
      telegram: 'https://t.me/dopewarz',
      twitter: 'https://twitter.com/DopeWarzCrypto',
      medium: 'https://blog.dopewarz.io/',
      whitepaper: 'https://whitepaper.dopewarz.io/',
      website: 'https://www.dopewarz.io'
    },
    contracts: {
      autumnal: '0x4bEB4d910f61e5c5E89Fe0fA20f8f0aAeb6012cC',
      winter: '0x97c3Ac4af640D6bAD55462CD3c86762AbCd4D3a4',
      vernal: '0xC297930Dd547FDa15c4731b32B6b370195d0E190',
      summer: '0x6e2a9Fc5ED9384B5D8db1ca37cD53c3C34d8623D',
      'autumnal-fcfs': '0x9CdAEEef4A1A9A3608C6898eb7cf997d3Db2ca3a',
      'winter-fcfs': '0x8F4dB0283eb1B03515416B168A6B3b0FC80E6135',
      'vernal-fcfs': '0x9933dFE4B5dA15ea8C6AB5f4dbA10b0e0a158388',
      bonus: '0x03f57494Ff8d83d5dd27BdE5f4203E283acc166C'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-12-01T11:00:00.000Z',
        totalRaise: 7425,
        allocation: 33,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal'],
        soldout: true
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-12-01T11:00:00.000Z',
        totalRaise: 10800,
        allocation: 48,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['winter'],
        soldout: true
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-12-01T11:00:00.000Z',
        totalRaise: 14175,
        allocation: 63,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['vernal'],
        soldout: true
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-12-01T11:00:00.000Z',
        totalRaise: 152352,
        allocation: 144,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        allowParticipationFor: ['summer'],
        soldout: true
      },
      {
        name: 'autumnal-fcfs',
        label: 'Autumnal FCFS',
        type: 'fcfs',
        openTime: '2021-12-01T12:00:00.000Z',
        totalRaise: 3750,
        allocation: 15,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal'],
        soldout: true
      },
      {
        name: 'winter-fcfs',
        label: 'Winter FCFS',
        type: 'fcfs',
        openTime: '2021-12-01T12:00:00.000Z',
        totalRaise: 4400,
        allocation: 20,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['autumnal'],
        soldout: true
      },
      {
        name: 'vernal-fcfs',
        label: 'Vernal FCFS',
        type: 'fcfs',
        openTime: '2021-12-01T12:00:00.000Z',
        totalRaise: 5000,
        allocation: 25,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['autumnal'],
        soldout: true
      },
      {
        name: 'bonus',
        label: '420 Special',
        type: 'fcfs',
        openTime: '2021-12-01T14:45:00.000Z',
        totalRaise: 14000,
        allocation: 30,
        artwork: 'https://static.equinox.fund/projects/dopewarz/dopewarz-logo-1.jpg',
        soldout: true
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'gamesta',
    name: 'Gamesta',
    round: 'public',
    saleType: 'ido',
    projectAirdrop: true,
    projectNetwork: 'matic',
    shortDescription: 'The first AI Powered Gaming Guild.',
    description:
      '<p>Gamesta Guild believes the value of any game is created by the network of players playing it. Each player, regardless of his wealth or means, represents the same value in a digital game, investing their time and contributing to an ever evolving metaverse.<br><br>Now, through blockchain technology, game developers can finally reward the loyalty of those players.<br><br>Furthermore, in-game NFT’s are revolutionizing the way a gamer can build intrinsic value, but with the competition so intense, players from emerging economies sometimes cannot afford the initial outlay to purchase those assets.<br><br>Enter Gamesta, the A.I. powered guild, enabling investors to connect and empower thousands of under privileged players throughout the world.<br><br>Let’s unleash GameFi together!</p><img src="https://static.equinox.fund/projects/gamesta/gamesta-banner-1.jpg" alt="Gamesta" />',
    media: {
      logo: 'https://static.equinox.fund/projects/gamesta/gamesta-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/gamesta/gamesta-banner-1.jpg',
      youtubeLiveId: '',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/gamesta/gamesta-background.jpg'
    },
    ended: false,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 150000,
    schedule: {
      participationOpenDate: '2021-12-10T09:00:00.000Z',
      participationCloseDate: '2021-12-15T05:00:00.000Z',
      poolOpenDate: '2021-12-15T11:00:00.000Z',
      tokenDistributionDate: ''
    },
    token: {
      symbol: 'GSG',
      price: 0.08,
      contractAddress: '',
      vesting: '15% released at TGE, remaining 85% unlocked over 5 months.'
    },
    social: {
      telegram: 'https://t.me/gamestaguild',
      twitter: 'https://twitter.com/gamestaguild',
      medium: 'https://blog.gamesta.ai',
      whitepaper: 'https://bit.ly/3jEK7yD',
      website: 'https://gamesta.ai'
    },
    contractAddress: '',
    pools: [
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-12-15T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        allowParticipationFor: ['summer']
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-12-15T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['vernal']
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-12-15T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['winter']
      },
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-12-15T11:00:00.000Z',
        totalRaise: 0,
        allocation: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal']
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'gamestation',
    name: 'Gamestation',
    saleType: 'ido',
    projectAirdrop: false,
    shortDescription:
      "Gamestation is a decentralized multi-chain gaming launchpad and marketplace. Don't just play your favorite games. Be part of them.",
    description:
      '<p>GameStation aims to be the One-Stop-Shop for GameFi. The platform features a launchpad, a marketplace to trade, lend, and borrow in-game assets, and, along with its roadmap, a community event & tournament system. GameStation allows teams to develop and launch their play-to-earn (P2E) blockchain games while creating a community of like minds focused on participating in developing their favorite games. Gamers, on their side, can access private sales of their favorite games and organize events and compete against other players.</p><p>$GAMER, GameStation\'s token, powers the platform. Its utilities are accessing private sales, trading in the marketplace, and, when implemented, creating and participating in community events.</p><img src="https://static.equinox.fund/projects/gamestation/gamestation-banner-1.png" alt="Gamestation" />',
    media: {
      logo: 'https://static.equinox.fund/projects/gamestation/gamestation-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/gamestation/gamestation-banner-1.png',
      youtubeLiveId: 'BvPe2a_qI5A',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/gamestation/gamestation-background.jpg'
    },
    ended: true,
    currency: 'USDT',
    network: 'polygon',
    totalRaise: 150000,
    schedule: {
      participationOpenDate: '2021-10-24T09:00:00.000Z',
      participationCloseDate: '2021-10-26T05:00:00.000Z',
      poolOpenDate: '2021-10-26T09:30:00.000Z',
      tokenDistributionDate: '2021-10-28T14:20:00.000Z'
    },
    token: {
      symbol: 'GAMER',
      price: 0.1,
      contractAddress: '0x3f6b3595ecf70735d3f48d69b09c4e4506db3f47',
      claimUrl: 'https://app.gamestation.io',
      vesting: '20% TGE, remaining 80% released daily over two months.'
    },
    social: {
      telegram: 'https://t.me/GameStationIO_Ann',
      twitter: 'https://twitter.com/gamestationIO',
      medium: 'https://medium.com/gamestationio',
      whitepaper: 'https://docsend.com/view/xdx3q8vxd95k487n',
      website: 'https://gamestation.io'
    },
    contracts: {
      autumnal: '0x92d9d6Aa84cD267c713041ccE273013d1C32a5Da',
      winter: '0x49269985b41312cF79bBc027422e1B55fC4dCfBF',
      vernal: '0x61e8D5c2c010196406bc46926D3eAB8f9C67C5E1',
      summer: '0xb0B47478FB8759f52742f8a18e283C8be159F98C',
      'autumnal-fcfs': '0x86D8A38f30C0273969B8D4244a835C193b884Afe',
      'winter-fcfs': '0xBAE7Ece15849aeAB60A8D43c4B56EbE2cF6707CF',
      'vernal-fcfs': '0x4f30134974Ddb8c506941b80463cB425FbBDE95D',
      bonus: '0xa8eCceF2eCCE8df949903aAE8eEB23e7E5cf3236'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-10-26T09:30:00.000Z',
        totalRaise: 5712,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-10-26T09:30:00.000Z',
        totalRaise: 10488,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-10-26T09:30:00.000Z',
        totalRaise: 18865,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-10-26T09:30:00.000Z',
        totalRaise: 108130,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'autumnal-fcfs',
        label: 'Autumnal Runners Up',
        type: 'fcfs',
        openTime: '2021-10-26T11:00:00.000Z',
        totalRaise: 1720,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'winter-fcfs',
        label: 'Winter Runners Up',
        type: 'fcfs',
        openTime: '2021-10-26T11:00:00.000Z',
        totalRaise: 1476,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'vernal-fcfs',
        label: 'Vernal Runners Up',
        type: 'fcfs',
        openTime: '2021-10-26T11:00:00.000Z',
        totalRaise: 2074,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'bonus',
        label: 'Summer Special',
        type: 'fcfs',
        openTime: '2021-10-27T11:00:00.000Z',
        totalRaise: 3400,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink: ''
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'gamex-black',
    name: 'GAMEX BLACK',
    saleType: 'ino',
    projectAirdrop: true,
    projectNetwork: 'polygon',
    shortDescription: 'VIP Access... the GAMEX BLACK NFT',
    description:
      '<p>This season, Gamesta are minting a limited edition set of VIP NFT\'s designed to give additional perks and uplift to the Gamesta ecosystem.<br><br>In addition to staking, GAMEX Black Cards will enable special membership access such as:<br><br>- Increased voting weight in the DAO (10x for Black Card holders)<br>- Uplift in Staking Rewards (additional 15% for Black Card holders)<br>- Access to private round allocations (Black Card holders only)<br>- Access to Gamesta VIP events (Black Card holders only)<br>- Special VIP Zone in the Gamesta Metaverse<br>- Access to beta test games<br>- Early access to inside information on upcoming sales and events curated by our team of researchers and partnerships.<br><br>Minting will be limited.  Only 200 Black VIP Cards will exist for early supporters who get in now.</p><img src="https://static.equinox.fund/projects/gamex-black/gamex-black-banner-1.jpg" alt="GAMEX" />',
    media: {
      logo: 'https://static.equinox.fund/projects/gamex-black/gamex-black-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/gamex-black/gamex-black-banner-1.jpg',
      youtubeLiveId: 'aDDkTZ3tLFM',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/gamex-black/gamex-black-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 332500,
    schedule: {
      participationOpenDate: '2021-11-26T12:00:00.000Z',
      participationCloseDate: '2021-11-29T05:00:00.000Z',
      poolOpenDate: '2021-11-29T11:00:00.000Z',
      tokenDistributionDate: ''
    },
    token: {
      symbol: '',
      price: 0,
      contractAddress: '',
      vesting: 'NFTs will be airdropped to the participating wallet.',
      firstClaimWithClaimUrl: false
    },
    social: {
      telegram: 'https://t.me/gamestaguild',
      twitter: 'https://twitter.com/gamestaguild',
      medium: 'https://blog.gamesta.ai',
      whitepaper: 'https://bit.ly/3jEK7yD',
      website: 'https://beta.gamesta.ai/'
    },
    contracts: {
      'black-card': '0x1216DDA4d5e5dBb142f0e12fa3216efE5fDbf74c'
    },
    pools: [
      {
        name: 'black-card',
        label: 'GAMEX Black Card',
        type: 'lottery',
        openTime: '2021-11-29T11:00:00.000Z',
        totalRaise: 332500,
        allocation: 17500,
        artwork: 'https://static.equinox.fund/projects/gamex-black/artworks/black-card.jpg',
        allowParticipationFor: ['autumnal', 'winter', 'vernal', 'summer'],
        soldout: true
      }
    ],
    poolsInstructions:
      '<h4><strong>Pool information</strong></h4><p>Summer NFT holders get initial access to the sale for 30 minutes; Vernal holders get 1 hour; Winter holders get 1.5 hour; then the sale opens to all Equinox NFT holders. There are 19 GAMEX Black Card available for purchase, so get your before the chance is gone.</p><p>See what time your NFT grants you access using the timeline information below.</p>',
    poolsTimeline: [
      {
        name: 'summer',
        label: 'Summer',
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        date: '2021-11-29T11:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'vernal',
        label: 'Vernal',
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        date: '2021-11-29T11:30:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'winter',
        label: 'Winter',
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        date: '2021-11-29T12:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'autumnal',
        label: 'Autumnal',
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        date: '2021-11-29T12:30:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'gamex-platinum',
    name: 'GAMEX PLATINUM',
    saleType: 'ino',
    projectAirdrop: true,
    projectNetwork: 'polygon',
    shortDescription: 'VIP Access... the GAMEX PLATINUM NFT',
    description:
      '<p>This season, Gamesta are minting a limited edition set of VIP NFT\'s designed to give additional perks and uplift to the Gamesta ecosystem.<br><br>In addition to staking, GAMEX Platinum Cards will enable special membership access such as:<br><br>- Increased voting weight in the DAO (2x for Platinum Card Holders)<br>- Uplift in Staking Rewards (additional 5% for Platinum Holders)<br>- Special VIP Zone in the Gamesta Metaverse<br>- Access to beta test games<br>- Early access to inside information on upcoming sales and events curated by our team of researchers and partnerships.<br><br>Minting will be limited.  Only 2,000 Platinum Cards will be created for early supporters who get in now.</p><img src="https://static.equinox.fund/projects/gamex-platinum/gamex-platinum-banner-1.jpg" alt="GAMEX" />',
    media: {
      logo: 'https://static.equinox.fund/projects/gamex-platinum/gamex-platinum-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/gamex-platinum/gamex-platinum-banner-1.jpg',
      youtubeLiveId: 'aDDkTZ3tLFM',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/gamex-platinum/gamex-platinum-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 150000,
    schedule: {
      participationOpenDate: '2021-11-25T09:00:00.000Z',
      participationCloseDate: '2021-11-29T05:00:00.000Z',
      poolOpenDate: '2021-11-29T12:00:00.000Z',
      tokenDistributionDate: ''
    },
    token: {
      symbol: '',
      price: 0,
      contractAddress: '',
      vesting: 'NFTs will be airdropped to the participating wallet.',
      firstClaimWithClaimUrl: false
    },
    social: {
      telegram: 'https://t.me/gamestaguild',
      twitter: 'https://twitter.com/gamestaguild',
      medium: 'https://blog.gamesta.ai',
      whitepaper: 'https://bit.ly/3jEK7yD',
      website: 'https://beta.gamesta.ai/'
    },
    contracts: {
      autumnal: '0x29787453B4a786506174c8F709d5896Fa8f4cf70',
      winter: '0x6f15721e7D83E4566AE635bE55B2DaF5158e87C2',
      vernal: '0x3cdE28FAC696891DeCc2C6f776Df32Cd3DC52236',
      summer: '0xac3D0Aa2f3Bf79153A9401D932eb8cD67C4Cd403'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-11-29T12:00:00.000Z',
        totalRaise: 13500,
        allocation: 1500,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal'],
        soldout: true
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-11-29T12:00:00.000Z',
        totalRaise: 21000,
        allocation: 1500,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['winter'],
        soldout: true
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-11-29T12:00:00.000Z',
        totalRaise: 25500,
        allocation: 1500,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['vernal'],
        soldout: true
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'lottery',
        openTime: '2021-11-29T12:00:00.000Z',
        totalRaise: 90000,
        allocation: 1500,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        allowParticipationFor: ['summer'],
        soldout: true
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'league-of-ancients',
    name: 'League of Ancients',
    round: 'public',
    saleType: 'ino',
    projectAirdrop: false,
    shortDescription:
      'League of Ancients is a DoTA 2 & League of Legends inspired top down PvPvP, P2E game on BSC and soon to bridge to other chains.',
    description:
      '<h4><strong>Please Note:<br>The NFTs purchased here on Equinox do not come with bundled LoA tokens.</strong></h4><br><p>League of Ancients (LOA) is a MOBA NFT-game inspired by DOTA2 and League of Legends. LOA aspires to create an engaging community with a thriving economy; focusing on Free-to-Play and Play-to-Earn mechanics by leveraging on blockchain technology.<br><br>LOA\'s model is a zero-barrier entry model where anyone can play and progress in the game with no upfront costs required. With this model, LOA\'s aim is to transform the eSports scene where everybody can earn like a professional gamer. This project is venturing into a genre with a player base of over 250 million worldwide. 99.99% of the existing global player base generates NO income from the sport. We aim to change that and give all players an opportunity to enjoy the game and earn a living anytime, anywhere and on any mobile device.<br><br>The MOBA genre became popular when DoTA was first introduced into eSports scene over 20 years ago. It has since then grown exponentially, to become the foundation of the most iconic eSports tournament worldwide. Fast forward twenty years and the gaming world is still obsessed with playing MOBA games. The average player spends 8 hours a day playing MOBA games; simply because this competitive genre provides endless replay value via its strategic, team oriented and adrenaline fueled battles. We see League of Ancients as the latest evolution for MOBA games where players can convert their enjoyment and commitment into real world assets.</p><img src="https://static.equinox.fund/projects/league-of-ancients/league-of-ancients-banner-1.jpg" alt="LEAGUE" />',
    media: {
      logo: 'https://static.equinox.fund/projects/league-of-ancients/league-of-ancients-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/league-of-ancients/league-of-ancients-banner-1.jpg',
      youtubeLiveId: 'GEBCPmwcaa0',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/league-of-ancients/league-of-ancients-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 82500,
    schedule: {
      participationOpenDate: '2021-11-30T15:00:00.000Z',
      participationCloseDate: '2021-12-11T05:00:00.000Z',
      poolOpenDate: '2021-12-11T11:00:00.000Z',
      tokenDistributionDate: ''
    },
    token: {
      symbol: '',
      price: 0,
      contractAddress: '',
      vesting: ''
    },
    social: {
      telegram: 'https://t.me/leagueofancients',
      twitter: 'https://twitter.com/LOAOfficialMOBA',
      medium: '',
      whitepaper: 'https://league-of-ancients-v2.gitbook.io/whitepaper/',
      website: 'https://leagueofancients.com/'
    },
    poolsInstructions:
      '<h4><strong>Please Note:<br>The NFTs purchased here on Equinox do not come with bundled LoA tokens.</strong></h4><br><h4><strong>Pool Information</strong></h4><br><p>Each NFT holder can participate in all three pools.<br>Lottery winners will be chosen for each pool.  Winners with a Summer NFT get exclusive access for the first 30 minutes;  After 30 minutes the pools will allow access to Vernal winners, then 30 minutes later access to Winter winners, then Autumnal winners, and 30 minutes after that access will be given to all NFT holders who confirmed participation.</p><p>See what time your NFT grants you access using the timeline information below.</p>',
    poolsTimeline: [
      {
        name: 'summer',
        label: 'Summer',
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        date: '2021-12-11T11:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'vernal',
        label: 'Vernal',
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        date: '2021-12-11T11:30:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'winter',
        label: 'Winter',
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        date: '2021-12-11T12:00:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'autumnal',
        label: 'Autumnal',
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        date: '2021-12-11T12:30:00.000Z',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      }
    ],
    pools: [
      {
        name: 'genesis',
        label: 'Genesis Capsule',
        type: 'lottery',
        openTime: '2021-12-11T11:00:00.000Z',
        totalRaise: 6600,
        allocation: 1100,
        artwork: 'https://static.equinox.fund/projects/league-of-ancients/genesis-capsule-1.jpg',
        allowParticipationFor: ['summer', 'vernal', 'winter', 'autumnal']
      },
      {
        name: 'alpha',
        label: 'Alpha Capsule',
        type: 'lottery',
        openTime: '2021-12-11T11:00:00.000Z',
        totalRaise: 16500,
        allocation: 330,
        artwork: 'https://static.equinox.fund/projects/league-of-ancients/alpha-capsule-1.jpg',
        allowParticipationFor: ['summer', 'vernal', 'winter', 'autumnal']
      },
      {
        name: 'beta',
        label: 'Beta Capsule',
        type: 'lottery',
        openTime: '2021-12-11T11:00:00.000Z',
        totalRaise: 59400,
        allocation: 33,
        artwork: 'https://static.equinox.fund/projects/league-of-ancients/beta-capsule-1.jpg',
        allowParticipationFor: ['summer', 'vernal', 'winter', 'autumnal']
      },
      {
        name: 'bonus',
        label: 'The Last Razzle (Beta Capsule)',
        type: 'fcfs',
        openTime: '2021-12-11T15:15:00.000Z',
        totalRaise: 35508,
        allocation: 33,
        artwork: 'https://static.equinox.fund/projects/league-of-ancients/beta-capsule-1.jpg',
        allowParticipationFor: ['summer', 'vernal', 'winter', 'autumnal']
      }
    ],
    contracts: {
      genesis: '0x396B8fee47798a4b7817F26ea6d673c7BdbB505C',
      alpha: '0x4Ee751dE44EF7a012cB40A9Ca1Db946711c660Cf',
      beta: '0x32eBf0952359Bc4F15FF484CF5B4e9A01ec1036d',
      bonus: '0xd8b62573Ef416844522d04f7D25d2f976534CD9B'
    },
    restrictedCountries: ['USA']
  },
  {
    slug: 'moonboots',
    name: 'Moonboots',
    saleType: 'ino',
    projectAirdrop: true,
    projectNetwork: 'eth',
    shortDescription: '',
    description:
      '<p>MyMoonBoots is a Blockchain inspired community built by some of the most prominent leaders within the industry. The vision is to give back to our community the benefits of knowledge, network & huge experience amassed over the years as we take MoonBoots into the Metaverse.<br><br>This collection was spearheaded by talented Artist Max van Gorkum A.K.A Sublight & his team at Make’ em Say Animation Studio. Each artwork is original, with its own inspiration and guest artist appearances for the rarest of pieces.<br><br>They are infused with insane benefits & rewards, including utility within the MyMoonBoots Community & ecosystem, DeFi Magic & access to the most promising blockchain start-ups.</p><img src="https://static.equinox.fund/projects/moonboots/moonboots-banner-1.jpg" alt="MOONBOOTS" />',
    media: {
      logo: 'https://static.equinox.fund/projects/moonboots/moonboots-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/moonboots/moonboots-banner-1.jpg',
      youtubeLiveId: '',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/moonboots/moonboots-cover-1.jpg'
    },
    ended: false,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 0,
    schedule: {
      participationOpenDate: '',
      participationCloseDate: '2021-12-23T05:00:00.000Z',
      poolOpenDate: '2021-12-23T11:00:00.000Z',
      tokenDistributionDate: ''
    },
    token: {
      symbol: '',
      price: 0,
      contractAddress: '',
      vesting: '',
      firstClaimWithClaimUrl: false
    },
    social: {
      telegram: 'https://t.me/MoonBootsCommunity',
      twitter: 'https://twitter.com/MoonBootsCap',
      medium: 'https://medium.com/@MoonBootsCap/the-mb1-genesis-nft-collection-4d521b89d2e6',
      whitepaper: '',
      website: 'https://www.mymoonboots.io'
    },
    contractAddress: '',
    pools: [],
    restrictedCountries: ['USA']
  },
  {
    slug: 'nft4play',
    name: 'NFT4Play',
    round: 'public',
    saleType: 'ino',
    projectAirdrop: true,
    shortDescription:
      'NFT4Play is a Play2Earn iGaming platform which requires players to use the 4PLAY token to play and power up NFT cards.',
    description:
      '<p>Members are able to compete against each other for prizes and can place side bets in crypto.<br><br>Games will include NFT card games and eSports, tapping into some of the biggest global communities.<br><br>We will build a wide variety of sports and fantasy card games where players must pay 4PLAY (no more than 25c a game) to play against each other.<br><br>They will be competing against each other in leagues and competitions to win prizes and bragging rights.<br><br>In addition, they can place bets against each other in crypto with the winner taking all.<br><br>Players will be able to earn and win gaming assets that can be used in the eSports game wrapped in NFTs instead of NFT playing cards.<br><br>Creating global tournaments with real prizes allows us to quickly leverage a huge community.</p><img src="https://static.equinox.fund/projects/nft4play/nft4play-banner-1.jpg" alt="NFT4Play" />',
    media: {
      logo: 'https://static.equinox.fund/projects/nft4play/nft4play-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/nft4play/nft4play-banner-1.jpg',
      youtubeLiveId: '',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/nft4play/nft4play-background.jpg'
    },
    schedule: {
      participationOpenDate: '',
      participationCloseDate: '',
      poolOpenDate: '2022-01-07T11:00:00.000Z',
      tokenDistributionDate: ''
    },
    ended: false,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 0,
    token: {
      symbol: '4PLAY',
      price: 0,
      contractAddress: '',
      vesting: ''
    },
    social: {
      telegram: 'https://t.me/NFT4PlayOfficial',
      twitter: 'https://twitter.com/Nft4Play',
      medium: 'https://nft4play.medium.com/',
      whitepaper: 'https://docsend.com/view/dewdumrb5xzwjiph',
      website: 'https://www.nft4play.com'
    },
    contractAddress: '',
    pools: [],
    restrictedCountries: ['USA']
  },
  {
    slug: 'scottybeam-public',
    name: 'Scotty Beam',
    round: 'public',
    saleType: 'ido',
    projectAirdrop: false,
    shortDescription: 'Teleport any NFT to any Chain.',
    description:
      '<p>Scotty Beam is the world\'s first cross-chain NFT teleport, validator and peer-to-peer exchange. Scotty works with all EVM-compatible blockchains, filling the gaps in the NFT industry and empowering projects with cutting-edge technologies.</p><img src="https://static.equinox.fund/projects/scottybeam/public/scotty-beam-banner-1.png" alt="Zone" />',
    media: {
      logo: 'https://static.equinox.fund/projects/scottybeam/public/scottybeam-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/scottybeam/public/scotty-beam-banner-1.png',
      youtubeLiveId: 'colEcGcEQks',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/scottybeam/scottybeam-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 200000,
    schedule: {
      participationOpenDate: '2021-11-05T09:00:00.000Z',
      participationCloseDate: '2021-11-10T05:00:00.000Z',
      poolOpenDate: '2021-11-10T11:00:00.000Z',
      tokenDistributionDate: '2021-11-10T15:00:00.000Z'
    },
    token: {
      symbol: 'SCOTTY',
      price: 0.04,
      contractAddress: '0x000351d035d8bbf2aa3131ebfecd66fb21836f6c',
      vesting: '20% released at TGE, linear monthly unlock for 4 months.',
      claimUrl: 'https://claim.scottybeam.io',
      firstClaimWithClaimUrl: true
    },
    social: {
      telegram: 'https://t.me/ScottyBeamIO',
      twitter: 'https://twitter.com/ScottyBeamIO',
      medium: 'https://scottybeam.medium.com/',
      whitepaper: 'https://scottybeam.io/assets/scotty-whitepaper.pdf',
      website: 'https://scottybeam.io'
    },
    contracts: {
      autumnal: '0x1A8d0dC70127bf1FCabe2d03Bd0d8aC8Db74aceC',
      winter: '0xd88cd7168d4Db206De655Af26B33B757fD26f1D1',
      vernal: '0x6D02A6F325d5880a945D16bbA83a1493552278af',
      summer: '0xb555f1a5444a837D02464BD7B3806CB8E8a9d9b4',
      'autumnal-fcfs': '0xb24F74ec140de6122E4F3e796B007DB75c131323',
      'winter-fcfs': '0x55C74f6854510b83654f75c58a0646987Cf138AB',
      'vernal-fcfs': '0x1924D015Cb00DdebcB694508f9A3C9cA3d98bcfA',
      bonus: '0x1e6A61F68b5211826D4c0ebc57bD254F75C5D29B'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-11-10T11:00:00.000Z',
        totalRaise: 3960,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-11-10T11:00:00.000Z',
        totalRaise: 6840,
        contractAddress: '0xd88cd7168d4Db206De655Af26B33B757fD26f1D1',
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-11-10T11:00:00.000Z',
        totalRaise: 12194,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-11-10T11:00:00.000Z',
        totalRaise: 158400,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'autumnal-fcfs',
        label: 'Autumnal Runners Up',
        type: 'fcfs',
        openTime: '2021-11-10T12:00:00.000Z',
        totalRaise: 3294,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'winter-fcfs',
        label: 'Winter Runners Up',
        type: 'fcfs',
        openTime: '2021-11-10T12:00:00.000Z',
        totalRaise: 4116,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'vernal-fcfs',
        label: 'Vernal Runners Up',
        type: 'fcfs',
        openTime: '2021-11-10T12:00:00.000Z',
        totalRaise: 6419,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      },
      {
        name: 'bonus',
        label: 'ScottyBeam Bonus',
        type: 'fcfs',
        openTime: '2021-11-10T14:00:00.000Z',
        totalRaise: 6650,
        artwork: 'https://static.equinox.fund/projects/scottybeam/scottybeam-logo-1.jpg',
        buyNftLink: ''
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'scottybeam',
    name: 'Scotty Beam',
    round: 'private',
    saleType: 'ido',
    projectAirdrop: false,
    shortDescription: 'Teleport any NFT to any Chain.',
    description:
      '<p>Scotty Beam is the world\'s first cross-chain NFT teleport, validator and peer-to-peer exchange. Scotty works with all EVM-compatible blockchains, filling the gaps in the NFT industry and empowering projects with cutting-edge technologies.</p><img src="https://static.equinox.fund/projects/scottybeam/scotty-beam-banner-1.png" alt="Zone" />',
    media: {
      logo: 'https://static.equinox.fund/projects/scottybeam/scottybeam-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/scottybeam/scotty-beam-banner-1.png',
      youtubeLiveId: 'omDSG4uOTDE',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/scottybeam/scottybeam-background.jpg'
    },
    schedule: {
      participationOpenDate: '2021-11-01T09:00:00.000Z',
      participationCloseDate: '2021-11-05T05:00:00.000Z',
      poolOpenDate: '2021-11-05T11:00:00.000Z',
      tokenDistributionDate: '2021-11-10T15:00:00.000Z'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 100000,
    token: {
      symbol: 'SCOTTY',
      price: 0.03,
      contractAddress: '0x000351d035d8bbf2aa3131ebfecd66fb21836f6c',
      claimUrl: 'https://claim.scottybeam.io',
      vesting: '5% released at TGE, linear monthly unlock for 12 months.',
      firstClaimWithClaimUrl: true
    },
    social: {
      telegram: 'https://t.me/ScottyBeamIO',
      twitter: 'https://twitter.com/ScottyBeamIO',
      medium: 'https://scottybeam.medium.com/',
      whitepaper: 'https://scottybeam.io/assets/scotty-whitepaper.pdf',
      website: 'https://scottybeam.io'
    },
    contracts: {
      autumnal: '0x417DD9E9bf12B0A9FFC2AE0eBE9b6562653F1667',
      winter: '0x4fc60e79eFD994cB5761728e54E6F27d850Dbc85',
      vernal: '0x5264759dfe2277162bCf2D7392EeA1d898EfAAC3',
      summer: '0x4896bd58F239920Ef2D22a0afF0d79c43B49363f',
      'autumnal-fcfs': '0x6E06d2dB5B849fea939B10F4AE533B69BF18F38b',
      'winter-fcfs': '0xEDF2B5b74B15c45E4b496765077e27994CBF52D7',
      'vernal-fcfs': '0xBF5BBa01e695770D4121E757132cE9827eb39032',
      bonus: '0xa5732af4fB7E03d0a6585E8E4873b5863b3d6C6B'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-11-05T11:00:00.000Z',
        totalRaise: 2880,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-11-05T11:00:00.000Z',
        totalRaise: 4680,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-11-05T11:00:00.000Z',
        totalRaise: 7280,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-11-05T11:00:00.000Z',
        totalRaise: 76720,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'autumnal-fcfs',
        label: 'Autumnal Runners Up',
        type: 'fcfs',
        openTime: '2021-11-05T12:00:00.000Z',
        totalRaise: 1888,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'winter-fcfs',
        label: 'Winter Runners Up',
        type: 'fcfs',
        openTime: '2021-11-05T12:00:00.000Z',
        totalRaise: 2184,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'vernal-fcfs',
        label: 'Vernal Runners Up',
        type: 'fcfs',
        openTime: '2021-11-05T12:00:00.000Z',
        totalRaise: 3477,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'bonus',
        label: 'ScottyBeam Bonus',
        type: 'fcfs',
        openTime: '2021-11-05T16:30:00.000Z',
        totalRaise: 10927,
        artwork: 'https://static.equinox.fund/projects/scottybeam/scottybeam-logo-1.jpg',
        buyNftLink: ''
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'sin-city',
    name: 'Sin City',
    saleType: 'ido',
    projectAirdrop: false,
    shortDescription: 'The R-rated metaverse. Build your own empire on the blockchain.',
    description:
      '<p>Sin City is a ‘Rated R’ Metaverse game, based upon the most controversial places in the world. 15,000 parcels of digital real estate will be available to be purchased, where users can buy and develop on their land to build their empire in a bid to become the ultimate kingpin! The play-to-earn game will be based on underworld activities, where only the masters of the dark arts will survive and thrive.</p><p>This will be a highly social orientated platform, which will use multi chain technology. You can build clubs for your friends to hangout, venues for online events and even play on other NFT gaming protocols belonging to our limited partners.</p><img src="https://static.equinox.fund/projects/sin-city/sin-city.jpg" alt="Sin City" />',
    media: {
      logo: 'https://static.equinox.fund/projects/sin-city/sin-city-avatar.jpg',
      thumbnail: 'https://static.equinox.fund/projects/sin-city/sin-city.jpg',
      youtubeLiveId: 'F66T1zVbkqA',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/sin-city/sin-city-background.jpg'
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 100000,
    schedule: {
      participationOpenDate: '2021-10-15T09:00:00.000Z',
      participationCloseDate: '2021-10-17T08:00:00.000Z',
      poolOpenDate: '2021-10-17T09:30:00.000Z',
      tokenDistributionDate: '2021-10-17T11:45:00.000Z'
    },
    token: {
      symbol: 'SIN',
      price: 0.02,
      contractAddress: '0x6397de0f9aedc0f7a8fa8b438dde883b9c201010',
      vesting: '25% TGE, remaining vested over 3 months at 25% per month.'
    },
    social: {
      telegram: 'https://t.me/sincitytoken',
      twitter: 'https://twitter.com/sincitytoken',
      medium: 'https://medium.com/@Sin_City',
      whitepaper: 'https://sin-city.io/sincity/Whitepaperv1.pdf',
      website: 'https://sin-city.io/sincity/'
    },
    contracts: {
      autumnal: '0x2172072bdec33Ec6DcCcFE18eF235b39237B3C1e',
      winter: '0xe4aCE00157174edaBB2Ea7f39ca88915DBf2AE0B',
      vernal: '0x1545124E1735896cB409aCE8f53B290F05b11ADb',
      summer: '0x11230fb35481761e8931FdEE850112ad09f1cd54',
      'autumnal-fcfs': '0x259Dcf7e03503D83020336F0a989f57aD38De143',
      'winter-fcfs': '0xa8eCceF2eCCE8df949903aAE8eEB23e7E5cf3236',
      'vernal-fcfs': '0x69a83D27E1Bc996B87078dA542bF547C35273A48',
      bonus: '0x1079f679C89c6585B5fDA3b73c346722358A904E'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-10-17T09:30:00.000Z',
        totalRaise: 8180,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-10-17T09:30:00.000Z',
        totalRaise: 9206,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-10-17T09:30:00.000Z',
        totalRaise: 10780,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-10-17T09:30:00.000Z',
        totalRaise: 56664,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'autumnal-fcfs',
        label: 'Autumnal Runners Up',
        type: 'fcfs',
        openTime: '2021-10-17T10:30:00.000Z',
        totalRaise: 4405,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'winter-fcfs',
        label: 'Winter Runners Up',
        type: 'fcfs',
        openTime: '2021-10-17T10:30:00.000Z',
        totalRaise: 4957,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'vernal-fcfs',
        label: 'Vernal Runners Up',
        type: 'fcfs',
        openTime: '2021-10-17T10:30:00.000Z',
        totalRaise: 5805,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'bonus',
        label: 'NOX Summer Special',
        type: 'fcfs',
        openTime: '2021-10-17T13:45:00.000Z',
        totalRaise: 11036,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'spark-era',
    name: 'Spark Era',
    round: 'public',
    saleType: 'ido',
    projectAirdrop: false,
    shortDescription:
      'Spark Era is a blockchain-based Massive Multiplayer Online Role-playing Game (MMORPG) by Firework Games.',
    description:
      '<p>Designed with NFT assets at it\'s core, this play-to-earn interstellar GameFi metaverse allows players to earn tradable DeFi assets through gameplay.<br><br>In the background of a cruel camp confrontation guided by the Law of Dark Forest, gamers can play the role of Star Citizens of different races, pilot over 1,000 kinds of ships, explore over 20,000 galaxies, and hundreds of millions of planets. Players can form fleet alliances, join guilds, and participate in interstellar wars for glory and GameFi rewards.<br><br>The game includes the construction and upgrade of spaceships, interstellar commercial trade, NFT empowered mineral mining, NFT card battle, planetary auction, star port construction, galactic exploration, and strategic confrontation under the Law of Dark Forest.<br><br>Gameplay will feature staking of NFT assets, community events in the Spark Era metaverse, and Decentralized Finance (DeFi) services.<br><br>Spark Era will create a legendary faction gameplay. Players can choose their faction, get honor points in metaverse events, and win seasonal rewards.<br><br>The game will also provide dungeon boss-fighting gameplay. Players from all over the world will need to cooperate to fight against the invasion of evil forces.<br><br>Survive and fight under the Law of the Dark Forest, win glory for your faction guild, and earn lucrative financial DeFi gains!</p><img src="https://static.equinox.fund/projects/spark-era/spark-era-banner-1.jpg" alt="SPARK-ERA" />',
    media: {
      logo: 'https://static.equinox.fund/projects/spark-era/spark-era-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/spark-era/spark-era-banner-1.jpg',
      youtubeLiveId: '',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/spark-era/spark-era-background.jpg'
    },
    ended: false,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 250000,
    schedule: {
      participationOpenDate: '2021-12-03T05:00:00.000Z',
      participationCloseDate: '2021-12-22T05:00:00.000Z',
      poolOpenDate: '2021-12-22T11:00:00.000Z',
      tokenDistributionDate: ''
    },
    token: {
      symbol: 'FIRE',
      price: 0.008,
      contractAddress: '',
      vesting: '20% released TGE, then 20% released monthly for 4 months.'
    },
    social: {
      telegram: 'https://t.me/FireworkGames_group',
      twitter: 'https://twitter.com/SparkeraGame',
      medium: 'https://fireworkgames.medium.com/',
      whitepaper: 'https://intro.firework.games/files/Firework_Games_Whitepaper_en.pdf',
      website: 'https://www.firework.games/'
    },
    contractAddress: '',
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-12-22T11:00:00.000Z',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        allowParticipationFor: ['autumnal']
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-12-22T11:00:00.000Z',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        allowParticipationFor: ['winter']
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-12-22T11:00:00.000Z',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        allowParticipationFor: ['vernal']
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-12-22T11:00:00.000Z',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        allowParticipationFor: ['summer']
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'zone-public',
    name: 'Zone',
    round: 'public',
    saleType: 'ido',
    projectAirdrop: true,
    projectNetwork: 'algorand',
    shortDescription:
      'ZONE is a community-driven GameFi ecosystem built on the Algorand blockchain. It is engineered to be the easiest, most versatile, and most adaptable GameFi ecosystem in the DeFi space.',
    description:
      '<p>ZONE is the first ever GameFi ecosystem built on the Algorand blockchain, pioneering the first project of its type on the blockchain.<br><br>Unlike any other GameFi ecosystem in existence, Zone can bring any non-blockchain game into GameFi through the ZONE protocol.<br><br>This means users can directly challenge friends, on-chain, in popular games like Dota 2, Clash Royale, CS-GO, League of Legends, and more, using ZONE tokens. Unlike blockchain games, these games represent potentially billions of users for the protocol.<br><br>Discord has 150 million active users per month. Zobo, a gamefi bot by ZONE, extends all the functionality of the protocol to Discord servers, bringing the place where all gamers hang out to the world of GameFi.<br><br>With its fee-sharing model, Zobo offers monetizing opportunities to 6 million sports and e-sports Discord server owners, ensuring a revenue stream where none existed, similar to what Adsense did for the early internet websites. Zobo is already in 5,000 Discord servers.<br><br>The global fantasy sports market is expected to grow to $22.31 billion in 2021. With Zone, users can form virtual sports teams and emulate their favorite fantasy leagues directly on the blockchain, completely decentralized.<br><br>The mainstream user doesn’t want to deal with blockchain headaches. Zone bridges web2 games to web3 without requiring users to manage any complex wallets or keys.<br><br>ZONE is cross-compatible with other blockchains making it the GameFi ecosystem for all gamers everywhere.</p><img src="https://static.equinox.fund/projects/zone-public/zone-public-banner-1.jpg" alt="ZONE-PUBLIC" />',
    media: {
      logo: 'https://static.equinox.fund/projects/zone-public/zone-public-logo-1.jpg',
      thumbnail: 'https://static.equinox.fund/projects/zone-public/zone-public-banner-1.jpg',
      youtubeLiveId: '',
      cloudfareVideoId: '',
      background: 'https://static.equinox.fund/projects/zone/zone-background.jpg'
    },
    ended: false,
    currency: 'BUSD',
    network: 'bsc',
    totalRaise: 300000,
    schedule: {
      participationOpenDate: '',
      participationCloseDate: '',
      poolOpenDate: '',
      tokenDistributionDate: ''
    },
    token: {
      symbol: 'ZONE',
      price: 0.05,
      contractAddress: '',
      vesting: '33% TGE, 33% month two, 34% month three.'
    },
    social: {
      telegram: 'https://t.me/ZoneByXTZ',
      twitter: 'https://twitter.com/xtz_esports?lang=en',
      medium: 'https://blog.zone.game/',
      whitepaper: 'https://docsend.com/view/j22evyxhdhc78d3w',
      website: 'https://zone.game/'
    },
    contractAddress: '',
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        allowParticipationFor: ['autumnal']
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        allowParticipationFor: ['winter']
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        allowParticipationFor: ['vernal']
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '',
        totalRaise: 0,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        allowParticipationFor: ['summer']
      }
    ],
    restrictedCountries: ['USA']
  },
  {
    slug: 'zone',
    name: 'Zone',
    saleType: 'ido',
    round: 'private',
    projectAirdrop: true,
    shortDescription: 'Challenge friends.  Play to earn.  Win big.',
    description:
      '<p>ZONE is a community-driven GameFi ecosystem built on the Algorand blockchain. It is engineered to be the easiest, most versatile, and most adaptable GameFi ecosystem in the DeFi space.</p><img src="https://static.equinox.fund/projects/zone/banner.png" alt="Zone" />',
    media: {
      logo: 'https://static.equinox.fund/projects/zone/logo.jpg',
      thumbnail: 'https://static.equinox.fund/projects/zone/banner.png',
      youtubeLiveId: 'WJdgoJ_JnNc',
      cloudfareVideoId: ''
    },
    ended: true,
    currency: 'BUSD',
    network: 'bsc',
    projectNetwork: 'algorand',
    totalRaise: 500000,
    schedule: {
      participationOpenDate: '2021-10-26T09:00:00.000Z',
      participationCloseDate: '2021-11-01T05:00:00.000Z',
      poolOpenDate: '2021-11-01T11:00:00.000Z',
      tokenDistributionDate: '',
      background: 'https://static.equinox.fund/projects/zone-public/zone-background.jpg'
    },
    token: {
      symbol: 'ZONE',
      price: 0.032,
      contractAddress: '',
      vesting: '5% released on TGE, then a 6 month cliff and linear release for 6 months.'
    },
    social: {
      telegram: 'https://t.me/ZoneByXTZ',
      twitter: 'https://twitter.com/xtz_esports?lang=en',
      medium: 'https://medium.com/@teamzone',
      whitepaper: 'https://docsend.com/view/j22evyxhdhc78d3w',
      website: 'https://zone.game/'
    },
    contracts: {
      autumnal: '0x19b296861317249D0cf4ccC1D664D175708Ab6fA',
      winter: '0x2a34a8bA5B0B09E29d2f12F76Cc9670e6e02fFC7',
      vernal: '0xd2C1aC282D38AcdFeEE0A3E196c2b2008aEB8403',
      summer: '0xD4CaB93Ba4a5A897Ae35c7e93379a10bCaA814f9',
      'autumnal-fcfs': '0x117ceAF3F51D7677Df52f1dd320E572c69e6E368',
      'winter-fcfs': '0x18818C27a07C8ca25DF55e2562AAe6C229870361',
      'vernal-fcfs': '0xB6A58d83A1BB3Ab48A380632De653b6671E75eb0',
      bonus: '0x5C70f3d79f468456D37444636a41689388DB3b3E'
    },
    pools: [
      {
        name: 'autumnal',
        label: 'Autumnal',
        type: 'lottery',
        openTime: '2021-11-01T11:00:00.000Z',
        totalRaise: 21924,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'winter',
        label: 'Winter',
        type: 'lottery',
        openTime: '2021-11-01T11:00:00.000Z',
        totalRaise: 35045,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'vernal',
        label: 'Vernal',
        type: 'lottery',
        openTime: '2021-11-01T11:00:00.000Z',
        totalRaise: 61275,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'summer',
        label: 'Summer',
        type: 'guaranteed',
        openTime: '2021-11-01T11:00:00.000Z',
        totalRaise: 364994,
        artwork: 'https://nft.equinoxlaunch.com/artwork/04_EX_SUMMER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/2663750/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'autumnal-fcfs',
        label: 'Autumnal Runners up',
        type: 'fcfs',
        openTime: '2021-11-01T12:00:00.000Z',
        totalRaise: 2992,
        artwork: 'https://nft.equinoxlaunch.com/artwork/01_EX_AUTUMNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/8164283/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'winter-fcfs',
        label: 'Winter Runners Up',
        type: 'fcfs',
        openTime: '2021-11-01T12:00:00.000Z',
        totalRaise: 4830,
        artwork: 'https://nft.equinoxlaunch.com/artwork/02_EX_WINTER.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/4706618/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'vernal-fcfs',
        label: 'Vernal Runners Up',
        type: 'fcfs',
        openTime: '2021-11-01T12:00:00.000Z',
        totalRaise: 8700,
        artwork: 'https://nft.equinoxlaunch.com/artwork/03_EX_VERNAL.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6',
        soldout: true
      },
      {
        name: 'bonus',
        label: 'Zone Bonus Bonanza',
        type: 'fcfs',
        openTime: '2021-11-02T12:00:00.000Z',
        totalRaise: 70260,
        artwork: 'https://static.equinox.fund/projects/zone/logo.jpg',
        buyNftLink:
          'https://app.liquidifty.io/0xed840de2c93ba3bfaf3d9aa79bfcdc869b77de09/352349/0xD4e837465607d5a5A0A937cb80C304C2840E0aE6'
      }
    ],
    restrictedCountries: ['USA']
  }
];

export const getProjects = () => {
  // const projects = reactive([]);
  // onMounted(async () => {
  //   const projectsDb = await getDocs(query(collection(db, 'projects')));
  //   projectsDb.forEach((p) => projects.push(p.data()));
  // });
  return { projects: projectsDb };
};

export const getProject = (id) => {
  // const project = ref({});
  // onMounted(async () => {
  //   console.log(`===> ~ getProject ~ id`, id);
  //   const projectsDb = await getDoc(doc(db, 'projects', id));
  //   console.log(`===> ~ onMounted ~ projectsDb`, projectsDb);
  //   project.value = projectsDb.data();
  // });
  return { project: projectsDb.find((p) => p.slug === id) };
};

// projectsDb.map((p) => {
//   console.log("p :>> ", p);
//   setDoc(doc(db, "projects", p.slug), p, { merge: true });
// });
