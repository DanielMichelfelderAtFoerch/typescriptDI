import { LoggingConfigurationModel } from "./logging-configuration.model";

export class LoggingConfigurationService {

    getLogConfiguration(): LoggingConfigurationModel {
        return new LoggingConfigurationModel();
    }
}