import { Service } from "typedi";
import { PageBaseController } from "../page.base-controller";
import { HomePageService } from "./home-page.service";

@Service()
export class HomeController extends PageBaseController {
    templatePath = 'pages/home/home.template.html';
    model: unknown;
    public title = 'Home';
    public menuId = 'home';

    constructor(
        private _homePageService: HomePageService
    ) {
        super();
        this.model = this._homePageService.getModel();
    }
}