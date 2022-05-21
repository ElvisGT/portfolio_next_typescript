import {Menu} from './Menu';
import {MenuDesktop} from './MenuDesktop';
import { useHeader } from '@hooks/useHeader';
import styles from '@static/css/style.module.css';




export const Header = () => {
    const {menu,icon_menu,menuDesktop,handleClick} = useHeader();
              
    return(
        <div className={styles.header} id="home">
            <h1 className={styles['header-name']} id={styles['header-name-animation']}>ElvisGT</h1>

            {/*Mostrar icono de menu*/}
            {icon_menu &&
               <img className={styles['header-icon-menu']} 
                        src="https://i.ibb.co/Q8TW0J6/icons8-men-32.png" 
                        alt="icono de menu" 
                        onClick={handleClick} 
                        />
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
};


