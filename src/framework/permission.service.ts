import { Service } from "typedi";
import { PermissionLocalStorageRepository } from "./permission-local-storage-repository";

@Service()
export class PermissionService {

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