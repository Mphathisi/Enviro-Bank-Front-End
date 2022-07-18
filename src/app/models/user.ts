import { Bankaccount } from "./bankaccount";
export class User {
    id!: number;
    name!: string;
    surname!: string;
    email!: string;
    idNumber!: string;
    password!: string;
    roles!: string[];
    bankAccounts!: Bankaccount[];
    
}
