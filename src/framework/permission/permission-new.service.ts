import { Service } from "typedi";
import { IPermissionService } from "./permission-service.interface";
import { PermissionDataService } from "./permission-data.service";

@Service()
export class PermissionNewService implements IPermissionService {

    constructor(
        private readonly _permissionDataService: PermissionDataService
    ) {
    }


    public canShowAge(): boolean {
        return this._permissionDataService.getAllPermissions().includes('canShowAge');
    }

    public canShowName(): boolean {
        return this._permissionDataService.getAllPermissions().includes('canShowName');

    }
}