export class StackVO {
  private value: string;
  constructor(stack: string) {
    if (stack === '') {
      throw new Error('stack can not be empty');
    }
    this.value = stack;
  }
}
