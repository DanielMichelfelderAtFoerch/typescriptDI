import { Service } from "typedi";

@Service()
export class HomeDataService {
    getHomeData() {
        return {
            title: 'Home',
            message: 'Welcome to the home page.'
        };
    }
}