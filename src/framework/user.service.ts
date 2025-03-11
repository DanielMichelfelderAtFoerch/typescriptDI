import { Service } from "typedi";

@Service()
export class UserService {
    getUserAge(): number {
        return 30;
    }
    getUserName(): string {
        return 'John Doe';
    }
}