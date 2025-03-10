import { PageBaseController } from "../page.base-controller";
import { HomeModel } from "./home.model";

export class HomeController extends PageBaseController {
    templatePath = 'pages/home/home.template.html';
    model: unknown;
    public title = 'Home';
    public menuId = 'home';
    constructor() {
        super();
        const homeModel = new HomeModel();
        homeModel.name = 'John Doe';
        homeModel.age = 25;
        homeModel.text = "Thisk is hard coded text";
        this.model = homeModel;
    }
}