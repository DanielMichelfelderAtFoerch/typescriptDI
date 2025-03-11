import { Service } from "typedi";
import { LoggingConfigurationModel } from "./logging-configuration.model";

@Service()
export class LoggingConfigurationService {

    getLogConfiguration(): LoggingConfigurationModel {
        return new LoggingConfigurationModel();
    }
}