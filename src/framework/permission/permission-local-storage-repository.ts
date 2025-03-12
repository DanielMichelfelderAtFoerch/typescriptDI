import { Service } from "typedi";

@Service()
export class PermissionLocalStorageRepository {
    getAllPermissions(): string[] {
        // Load data from local storage
        return ['canShowAge', 'canShowName'];
    }
}