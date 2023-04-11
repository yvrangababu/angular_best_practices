import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { iApp } from "src/app/interfaces/app.interface";
import { AppAction } from "../action/app.action";
import { ThemeState } from "./theme.state";


@State<iApp>({
    name: 'app',
    children: [
        ThemeState
    ],
    defaults: {
        theme: {
            name: 'light',
            choosedTheme: 'custom'
        },
        lastUpdated: new Date(),
    }
})

@Injectable()

export class AppState {

  @Selector()
  static getApplicationState(state: iApp) {
      return state;
  }

  @Action(AppAction)
  updateAppStatus(ctx: StateContext<iApp>, {payload}: AppAction) {
    const state = ctx.getState();
    return ctx.setState({
      ...state,
      ...payload
    });
  }

}