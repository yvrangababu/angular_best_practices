import { iTheme } from "src/app/interfaces/theme.interface";

export class UpdateTheme {
    static readonly type = '[Theme State] Update';
    constructor(public payload: iTheme) {}
}
