import { Bankaccount } from "./bankaccount";
import { Role } from "./role";
export class User {
    id!: number;
    name!: string;
    surname!: string;
    email!: string;
    idNumber!: string;
    password!: string;
    roles!: Role[];
    bankAccounts!: Bankaccount[];
    
}
