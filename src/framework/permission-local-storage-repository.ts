import { Service } from "typedi";

@Service()
export class PermissionLocalStorageRepository {
    getAllPermissions(): string[] {
        return ['canShowAge', 'canShowName'];
    }
}