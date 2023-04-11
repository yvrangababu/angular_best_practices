import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/controllers/layout/theme.service';
import { StateService } from 'src/app/controllers/state/state.service';
import { iApp } from 'src/app/interfaces/app.interface';
import { iTheme } from 'src/app/interfaces/theme.interface';
import { AppState } from 'src/app/states/state/app.state';

@Component({
  selector: 'app-them-configuration',
  templateUrl: './them-configuration.component.html',
  styleUrls: ['./them-configuration.component.scss']
})
export class ThemConfigurationComponent implements OnInit {
  @Select(AppState) appState$: Observable<iApp>;
  public theme: 'light' | 'dark';
  public choosenBy: 'custom' | 'system';
  public systemTheme: string;

  constructor(
    private ts: ThemeService,
    private stateService: StateService,
  ) { 
    localStorage.getItem('choosenBy');
    this.listenForBrowserThemeChange();
    this.systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? '#000' : '#fff';
  }

  public ngOnInit(): void {
    this.listenThemeChange();
  }

  private listenThemeChange(): void {
    this.appState$.subscribe((state: iApp) => {
      this.theme = state.theme.name;
      this.choosenBy = state.theme.choosedTheme;
    });
  }

  public setTheme(theme: 'light' | 'dark', choosenBy: 'custom' | 'system'): void {

    let currentTheme: 'light' | 'dark';

    if (choosenBy === 'system') {
      currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      currentTheme = theme;
    }

    const themeState: iTheme = {
      name: currentTheme, 
      choosedTheme: choosenBy
    };

    // Update the system state
    this.stateService.updateTheme(themeState);
  }

  private listenForBrowserThemeChange(): void {
    this.ts.systemThemeChanged$.subscribe((theme: 'light' | 'dark') => {
      this.theme = theme;
      this.choosenBy = this.choosenBy === 'system' ? 'system': 'custom';
      this.systemTheme = theme === 'dark' ? '#000' : '#fff';
    });

  }
  
}
