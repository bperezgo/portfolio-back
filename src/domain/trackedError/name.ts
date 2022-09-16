export class NameVO {
  private value: string;
  constructor(name: string) {
    if (name === '') {
      throw new Error('Name can not be empty');
    }
    this.value = name;
  }
}
