import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { iApp } from 'src/app/interfaces/app.interface';
import { iTheme } from 'src/app/interfaces/theme.interface';
import { AppAction } from 'src/app/states/action/app.action';
import { AppState } from 'src/app/states/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private stateDetails: iApp;
  @Select(AppState) appState$: Observable<iApp>;

  constructor(
    private store: Store
  ) { 
    this.appState$.subscribe((state: iApp) => {
      this.stateDetails = state;
    });
  }

  /**
   * Update the application state
   * @param appState app state details
  */
  public updateAppState(appState: iApp): void {
    this.store.dispatch(
      new AppAction(appState)
    );
  }

  /**
   * update elastic search connection status
   * @param connection offline or online
  */
  public updateConnectionStatus(connection: 'offline' | 'offline'): void {
   
    const app: iApp = {
      ...this.stateDetails,
      lastUpdated: new Date(),
    }
    this.updateAppState(app);
  }

  /**
   * update the system theme state
   * @param theme theme details
  */
  public updateTheme(theme: iTheme): void {
    const app: iApp = {
      ...this.stateDetails,
      lastUpdated: new Date(),
      theme
    };
    this.updateAppState(app);
  }

  /**
   * Update the company name state
   * @param name company name
   */
  public updateCompanyName(name: string): void {
    const app: iApp = {
      ...this.stateDetails,
      lastUpdated: new Date(),
    };
    this.updateAppState(app);
  }
  
}
