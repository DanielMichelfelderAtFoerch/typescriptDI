import { Inject, Service } from "typedi";
import { LoggingService } from "../../framework/logging.service";
import { UserService } from "../../framework/user.service";
import { HomeDataService } from "./home-data.service";
import { HomeModel } from "./home.model";
import { IPermissionService } from "../../framework/permission/permission-service.interface";
import { PERMISSON_TOKEN } from "../../framework/permission/permission-token";

@Service()
export class HomePageService {

    constructor(
        private _loggingService: LoggingService,
        private _userService: UserService,
        private _homeDataSerivce: HomeDataService,
        @Inject(PERMISSON_TOKEN) private _permissionService: IPermissionService
    ) {

    }

    public getModel(): HomeModel {
        this._loggingService.debug('Getting model');
        const model = new HomeModel();
        model.name = this._userService.getUserName();

        const data = this._homeDataSerivce.getHomeData();
        model.text = data.message;

        if (this._permissionService.canShowAge() === true) {
            model.age = this._userService.getUserAge();
            model.showAge = true;
        }

        return model;
    }
}