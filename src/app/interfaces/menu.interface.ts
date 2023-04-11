export interface iMenu {
    name: string;
    path: string;
    redirect?:boolean;
    icon?:string;
    children?:iMenu[];
}

export interface iMenuContent{
    name: string;
    menu: iMenu[];
}