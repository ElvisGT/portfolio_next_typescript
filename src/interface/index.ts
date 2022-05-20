export interface DateApi {
    title:string,
    dateTime:string,
    link:string,
    img:string,
    alt:string,
    description:string,

}

export interface MenusHeader {
    menu:boolean,
    menuDesktop:boolean,
    icon_menu:boolean,
    handleClick:() => void,
}

export interface PropsHeader {
    handleClick? : () => void,

}

export interface PropsPageTitle {
    title:string,
    description:string,
}

export interface PropsProjects {
    img:string,
    alt:string,
    description:string,
    github:string,
    hosting:string,
}

export interface PropsItemServices {
    serviceName:string,
    serviceIMG:string,
    serviceALT:string,
}