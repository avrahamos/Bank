import { v4 } from "uuid";
import User from "./userModel";

export default class Account {
  id: string;
  accountNumber: number;
  balance: number;
  public created_at: Date;
  constructor(public user: User) {
    this.id = v4();
    this.accountNumber = 0;
    this.balance = 0;
    this.created_at = new Date();
  }
}
//home   יתרת חשבון ןפאנל של חיובי אשראי  אותם נקבל מ CreditComponents
//nav  בצד יהיה רשימה של אופציות לעבור לפרטי אשראי העברות אחרונות ויציאה והוא נשאר בצד כל הזמן
//page בדיפולט יהיה את home וכמובן את nav
//transfer יהיה רשימה של העברות אחרונות ממי עבר וכמה ובאיזה תאריך
//credit יהיה פאנל של חיוב קודם חיוב הבא
//אלה בנתיים המודלים שלי אני צריך לבנות קומפוננטות לפי זה בא נתחיל עם nav
