// import { LoggingService } from "../framework/logging.service";

import { LoggingService } from "../framework/logging.service";


function easy(construcor: Function): void {
    console.log("Klassname: ", construcor.name);
}

@easy
export class DecoratorExample2Easy {
    constructor(public apiUrl: string, public timeout: number) { }
}


// ------------------------------------------------------------------


type returnTypeEasyWithParams = (constructor: Function) => void;

function easyWithParams(logAppenString: string): returnTypeEasyWithParams {

    return (constructor: Function) => {
        console.log("Log: ", logAppenString + " " + constructor.name);
    }
}


@easyWithParams("This must be added to the log")
export class DecoratorExample2EasyWithParams {
    constructor(public apiUrl: string, public timeout: number) { }
}

// ------------------------------------------------------------------

function easyWithContext(): Function {

    return (constructor: Function, context: ClassDecoratorContext) => {
        if (context.kind !== "class") {
            throw Error("this can't work fine!");
        }

        console.log("Klassname: ", constructor.name);
        console.log("context.kind", context.kind);
        console.log("context.metadata", context.metadata);
        console.log("context.name", context.name);

        return constructor;
    }

}


@easyWithContext()
export class DecoratorExample2WithContext {

    constructor(
        private _id: number,
        public name: string,
        private _loggingService: LoggingService
    ) {


    }
    public getName() {
        this._loggingService.log("Name: " + this.name + " ID: " + this._id);
        return this.name;
    }
}

// -----------------------------------

type Constructor<T = any> = new (...args: any[]) => T;

function readParams() {
    return <T extends Constructor>(target: T, context: ClassDecoratorContext) => {
        return class extends target {
            constructor(...args: any[]) {
                console.log(`📌 Klasse: ${context.name}`);
                console.log(`📝 Konstruktor-Parameter:`, args);
                super(...args);
            }
        };
    };
}


@readParams()
export class DecoratorExample2ReadParams {

    constructor(
        private _id: number,
        public name: string,
        private _loggingService: LoggingService
    ) {


    }
    public getName() {
        this._loggingService.log("Name: " + this.name + " ID: " + this._id);
        return this.name;
    }
}

