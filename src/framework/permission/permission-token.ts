import { Token } from "typedi";
import { IPermissionService } from "./permission-service.interface";

export const PERMISSON_TOKEN = new Token<IPermissionService>('framework.permission.IPermissionService');