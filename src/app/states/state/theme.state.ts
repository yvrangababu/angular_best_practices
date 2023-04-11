import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { iTheme } from "src/app/interfaces/theme.interface";
import { UpdateTheme } from "../action/theme.action";

const browserTheme: 'dark' | 'light' = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const storedTheme: 'dark' | 'light' | null = localStorage.getItem('theme') !== null ? localStorage.getItem('theme')  === 'light' ? 'light' : 'dark' : null;
const choosedBy: 'custom' | 'system' | null = localStorage.getItem('choosenBy') !== null ? localStorage.getItem('choosenBy') === 'custom' ? 'custom' : 'system' : null;

@State<iTheme>({
    name: 'theme',
    defaults: {
        name: storedTheme ? storedTheme: 'dark',
        choosedTheme: choosedBy ? choosedBy : 'custom'
    }
})

@Injectable()

export class ThemeState {

  constructor() { }

  @Selector()
  static getApplicationState(state: iTheme) {
      return state;
  }

  @Action(UpdateTheme)
  updateTheme(ctx: StateContext<iTheme>, { payload }: UpdateTheme) {
    const state = ctx.getState();
    return ctx.setState({
      ...state,
      ...payload
    });
  }

}