import { iApp } from "src/app/interfaces/app.interface";

export class AppAction {
    static readonly type = '[Application State] Add';
    constructor(public payload: iApp) {}
}
