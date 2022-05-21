import { useEffect, useState } from 'react';
import {MenusState} from '@type/index';
import {MenusHeader} from '@interface/index';


export const useHeader = () : MenusHeader => {
    const [menu,setMenu] = useState<MenusState>(false);
    const [menuDesktop,setMenuDesktop] = useState<MenusState>(true);
    const [icon_menu,setIcon_menu] = useState<MenusState>(true);
    const [icon_close,setIcon_close] = useState<MenusState>(false);
    

    const handleClick = () : void => {
        setMenu(!menu);
        setIcon_menu(!icon_menu);
        setIcon_close(!icon_close);
    };
    
    
    
    useEffect(() => {
        //Esto es para medir en todo momento si se hace scroll
        window.onscroll = () => {
            const scroll:number = document.documentElement.scrollTop || document.body.scrollTop;
            if(scroll > 200){
                setMenu(false);
            }else if(scroll < 300 && screenSize < 768) {
                    setIcon_menu(true);
            }
        };
        
        //Esto es para evaluar en todo momento si se redimensiona la pantalla
        let screenSize:number = window.screen.width; //esto es para saber el tamanio de la pantalla
        
        //Si el tamanio de la pantalla es mayor a 768 se activa el menu
        if(screenSize >= 768){
            setMenuDesktop(true);
            setMenu(false);
            setIcon_menu(false);

        }
        else{
                setMenuDesktop(false);

            }
        
        window.onresize = () => {
            window.location.reload();
            
        };

    },[]);
    
    return {
        menu,
        menuDesktop,
        icon_menu,
        handleClick
    };

};
   