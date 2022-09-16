export class ComponentStackVO {
  private value: string;
  constructor(componentStack: string) {
    if (componentStack === '') {
      throw new Error('componentStack can not be empty');
    }
    this.value = componentStack;
  }
}
