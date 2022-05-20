import React from 'react';
import {Menu} from './Menu';
import {MenuDesktop} from './MenuDesktop';
import Image from 'next/image';
import { useHeader } from '@hooks/useHeader';
import styles from '@static/css/style.module.css';



export const Header = () => {
    const {menu,icon_menu,menuDesktop,handleClick} = useHeader();
              
    return(
        <div className={styles.header} id="home">
            <h1 className={styles['header-name']} id="header-name-animation">ElvisGT</h1>

            {/*Mostrar icono de menu*/}
            {icon_menu &&
               <Image className={styles['header-icon-menu']} 
                        src="https://i.ibb.co/Q8TW0J6/icons8-men-32.png" 
                        alt="icono de menu" 
                        onClick={handleClick} 
                        width={40}
                        height={40}/>
            }

            {/*Mostrar el menu*/}
            {menu && 
                <Menu handleClick={handleClick} />        
            }
            
            {/*Mostrar el menu Desktop*/}
            {menuDesktop &&
                <MenuDesktop />
            }
                
        </div>
    );
}


