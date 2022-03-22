export class DialogMessage {
  static dialogRef;

  static showMessage({ status, title, description }: { status?: string; title?: string; description?: string } = {}) {
    this.dialogRef.value.status = status;
    this.dialogRef.value.title = title;
    this.dialogRef.value.description = description;
    this.dialogRef.value.openModal();
  }
}
