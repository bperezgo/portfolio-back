export class MessageVO {
  private value: string;
  constructor(message: string) {
    if (message === '') {
      throw new Error('message can not be empty');
    }
    this.value = message;
  }
}
