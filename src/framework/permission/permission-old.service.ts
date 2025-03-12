import { Service } from "typedi";
import { PermissionLocalStorageRepository } from "./permission-local-storage-repository";
import { IPermissionService } from "./permission-service.interface";

@Service()
export class PermissionOldService implements IPermissionService {

    constructor(
        private readonly _permissionRepository: PermissionLocalStorageRepository
    ) {
    }


    public canShowAge(): boolean {
        return this._permissionRepository.getAllPermissions().includes('canShowAge');
    }

    public canShowName(): boolean {
        return this._permissionRepository.getAllPermissions().includes('canShowName');

    }
}