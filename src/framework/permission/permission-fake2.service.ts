import { Service } from "typedi";
import { IPermissionService } from "./permission-service.interface";


@Service()
export class PermissionFake2Service implements IPermissionService {

    public canShowAge(): boolean {
        return false;
    }

    public canShowName(): boolean {
        return false;
    }
}
