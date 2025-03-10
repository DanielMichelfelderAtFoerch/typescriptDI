import { LoggingService } from "../../framework/logging.service";
import { PermissionService } from "../../framework/permission.service";
import { UserService } from "../../framework/user.service";
import { HomeDataService } from "./home-data.service";
import { HomeModel } from "./home.model";

export class HomePageService {

    constructor(
        private _loggingService: LoggingService,
        private _userService: UserService,
        private _homeDataSerivce: HomeDataService,
        private _permissionService: PermissionService
    ) {

    }

    public getModel(): HomeModel {
        this._loggingService.debug('Getting model');
        const model = new HomeModel();
        model.name = this._userService.getUserName();

        const data = this._homeDataSerivce.getHomeData();
        model.text = data.message;

        if (this._permissionService.canShowAge()) {
            model.age = this._userService.getUserAge();
            model.showAge = true;
        }

        return model;
    }
}