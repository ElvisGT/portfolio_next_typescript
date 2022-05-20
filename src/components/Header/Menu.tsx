import Image from 'next/image';
import Link from 'next/link';
import styles from '@static/css/style.module.css';


const Menu = ({handleClick}) => {
    return(
        <>
            <Image className={styles['header-icon-close']} src="https://i.ibb.co/S6dDFwf/icons8-cancelar-32-2.png" alt="icono de cerrar" onClick={handleClick}/>
                <div className={styles['header-menu']}>
                    <Link href="#home" className={styles['header-vinculo']}>Inicio</Link>
                    <Link href="#services" className={styles['header-vinculo']}>Servicios</Link>
                    <Link href="#portfolio" className={styles['header-vinculo']}>Portafolio</Link>
                    <Link href="#blog" className={styles['header-vinculo']}>Blog</Link>
                    <Link href="#contact" className={styles['header-vinculo']}>Contacto</Link>
                    <div className={styles['header-contact']}>
                        <Link className={styles['contact-vinculo']} href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer"><Image className={styles['contact-img']} src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" alt="Facebook"/></Link>
                        <Link className={styles['contact-vinculo']} href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer" ><Image className={styles['contact-img']} src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" alt="Github" /></Link>
                        <Link className={styles['contact-vinculo']} href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer"><Image className={styles['contact-img']} src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" alt="LinkedIn" /></Link>
                    </div>
                </div>
        </>
    );
}

export {Menu}