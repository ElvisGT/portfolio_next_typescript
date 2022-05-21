import Image from 'next/image';
import Link from 'next/link';
import styles from '@static/css/style.module.css';
import { PropsHeader } from '@interface/index';


const Menu = ({handleClick} : PropsHeader) => {
    return(
        <>
            <img className={styles['header-icon-close']} 
                    src="https://i.ibb.co/S6dDFwf/icons8-cancelar-32-2.png" 
                    alt="icono de cerrar" 
                    onClick={handleClick}
                   />
                
            <div className={styles['header-menu']}>
                <Link href="#home">
                    <a className={styles['header-vinculo']}>Inicio</a>
                </Link>
                <Link href="#services">
                    <a className={styles['header-vinculo']}>Servicios</a>
                </Link>
                <Link href="#portfolio">
                    <a className={styles['header-vinculo']}>Portafolio</a>
                </Link>
                <Link href="#blog">
                    <a className={styles['header-vinculo']}>Blog</a>
                </Link>
                <Link href="#contact">
                    <a className={styles['header-vinculo']}>Contacto</a>
                </Link>
                <div className={styles['header-contact']}>
                    <Link className={styles['contact-vinculo']} href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer">
                        <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png"   
                                alt="Facebook"
                                width={30}
                                height={30}/>
                    </Link>
                    <Link className={styles['contact-vinculo']} href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer" >
                        <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" 
                                alt="Github"
                                width={30}
                                height={30} />
                    </Link>
                    <Link className={styles['contact-vinculo']} href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer">
                        <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" 
                                alt="LinkedIn"
                                width={30}
                                height={30} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export {Menu}