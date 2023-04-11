import { OverlayContainer } from '@angular/cdk/overlay';
import { HostBinding, Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { darkTheme, lightTheme } from 'src/app/configurations/theme.config';
import { iApp } from 'src/app/interfaces/app.interface';
import { iTheme, iThemeProperties } from 'src/app/interfaces/theme.interface';
import { AppState } from 'src/app/states/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private systemTheme: 'light' | 'dark' = 'dark';
  private currentTheme: 'light' | 'dark' = 'light';
  private systemTheme$: BehaviorSubject<string> = new BehaviorSubject<string>(this.systemTheme);
  public systemThemeChanged$: Observable<string> = this.systemTheme$.asObservable();

  @Select(AppState) appState$: Observable<iApp>;
  @HostBinding('class') public className: string = 'material-light';

  constructor(
    private overlay: OverlayContainer
  ) {
    // listen for app state change
    this.appState$.subscribe((state: iApp) => {
      if (this.currentTheme !== state.theme.name) {
        this.setTheme(state.theme);
      }
    });
  }

  public setTheme(theme: iTheme): void {
    // setting the current theme
    this.currentTheme = theme.name;
    // processing the theme properties based on theme name
    let themeProperties: iThemeProperties = this.currentTheme === 'dark' ? darkTheme : lightTheme;
    Object.keys(themeProperties.properties).forEach((property: any) => {
      document.documentElement.style.setProperty(
        property,
        themeProperties.properties[property]
      );
    });

    localStorage.setItem('theme', this.currentTheme);
    localStorage.setItem('choosenBy', theme.choosedTheme);

    this.updateMaterialTheme(theme.name);
  }

  public getCurrentTheme(): iTheme {
    return {
      name: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
      choosedTheme: localStorage.getItem('choosenBy') === 'custom' ? 'custom' : 'system'
    }
  }

  public setSystemTheme(darkTheme: boolean): void {
    this.systemTheme = darkTheme ? 'dark' : 'light';
    this.systemTheme$.next(this.systemTheme);
  }

  
  /**
   * Changing the material themes and overlay
   * @param theme  Either dark or light
   */
  private updateMaterialTheme(theme: 'dark' | 'light') {
    this.currentTheme = theme;
    this.className = theme == 'dark' ? 'material-dark' : 'material-light';

    if (theme == 'dark') {
      this.loadCss('dark.css', theme);
      this.overlay.getContainerElement().classList.remove('material-light');
      this.overlay.getContainerElement().classList.add('material-dark');
    } else {
      this.loadCss('default.css', theme);
      this.overlay.getContainerElement().classList.add('material-light');
      this.overlay.getContainerElement().classList.remove('material-dark');
    }
  }

  /**
  * Ant Design changes
  * @param href Pass bundleName ad href 
  * @param id Thme Name 
  * @returns 
 */
   private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = '/assets/themes/' + href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

}
