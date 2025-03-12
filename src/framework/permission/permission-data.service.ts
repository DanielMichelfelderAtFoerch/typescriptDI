import { Service } from "typedi";
import { LoggingService } from "../logging.service";

@Service()
export class PermissionDataService {
    constructor(
        private _loggingService: LoggingService
    ) {
    }
    getAllPermissions() {
        // Load data from a web service
        this._loggingService.log('Getting permissions from the web service');
        return ['canShowAge', 'canShowName'];
    }
}