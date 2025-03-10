import { PermissionLocalStorageRepository } from "./permission-local-storage-repository";

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