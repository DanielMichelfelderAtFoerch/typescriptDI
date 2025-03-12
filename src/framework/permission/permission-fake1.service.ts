import { Service } from "typedi";
import { IPermissionService } from "./permission-service.interface";

@Service()
export class PermissionFake1Service implements IPermissionService {

    public canShowAge(): boolean {
        return true;
    }

    public canShowName(): boolean {
        return true;
    }
}

