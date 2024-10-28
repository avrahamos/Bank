import { v4 } from "uuid";

export default class User {
  id: string;
  creditNumber: number[];
  password: string;
  public created_at: Date;
  constructor(public name: string, public accountNumber: number) {
    this.id = v4();
    this.creditNumber = [];
    this.password = "";
    this.created_at = new Date();
  }
}
