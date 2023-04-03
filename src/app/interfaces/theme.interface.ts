export interface iTheme {
    name: 'light' | 'dark';
    choosedTheme: 'custom' | 'system';
}

export interface iThemeProperties {
    name: 'light' | 'dark';
    properties: any;
}