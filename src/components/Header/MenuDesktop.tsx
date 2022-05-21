import Image from 'next/image';
import Link from 'next/link';
import styles from '@static/css/style.module.css';

const MenuDesktop = () => {
    return(
        <>
            <div className={styles['header-menu-desktop']}>
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
                    <Link href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer">
                        <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" 
                                alt="Facebook"
                                width={30}
                                height={30} />
                    </Link>
                    <Link href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer">
                        <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" 
                                alt="Github"
                                width={30}
                                height={30} />
                    </Link>
                    <Link  href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer">
                        <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png"  
                                alt="Linkedin"
                                width={30}
                                height={30} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export {MenuDesktop}