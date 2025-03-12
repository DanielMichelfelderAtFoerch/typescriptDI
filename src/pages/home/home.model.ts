export class HomeModel {
    public name: string | undefined;
    public age: number | undefined;
    public text: string | undefined;
    public showAge: boolean;

    constructor() {
        this.showAge = false;
    }
}