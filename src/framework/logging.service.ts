import { LogLevel } from "./log-level.enum";
import { LoggingConfigurationService } from "./logging-configuration.service";

export class LoggingService {

    private _logLevel: LogLevel = LogLevel.Debug;

    constructor(
        private _loggingConfigurationService: LoggingConfigurationService
    ) {
        this._logLevel = this._loggingConfigurationService.getLogConfiguration().logLevel;
    }


    public log(message: string): void {
        if (this._logLevel >= LogLevel.Debug) {
            console.log(message);
        }
    }
    public error(message: string): void {
        if (this._logLevel >= LogLevel.Error) {
            console.error(message);
        }
    }
    public warn(message: string): void {
        if (this._logLevel >= LogLevel.Warning) {
            console.warn(message);
        }
    }
    public info(message: string): void {
        if (this._logLevel >= LogLevel.Info) {
            console.info(message);
        }
    }
    public debug(message: string): void {
        if (this._logLevel >= LogLevel.Debug) {
            console.debug(message);
        }
    }
}