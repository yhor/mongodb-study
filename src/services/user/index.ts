

export class User {
  constructor(private name: string | any) {}

  async getUserList() {
    try {
      return this.name;
    } catch (e) {
      throw e;
    }
  }
}