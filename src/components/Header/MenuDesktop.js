import  styles  from '@static/css/style.module.css';

const MenuDesktop = () => {
    return(
        <>
                <div className={styles['header-menu-desktop']}>
                    <a href="#home" className={styles['header-vinculo']}>Inicio</a>
                    <a href="#services" className={styles['header-vinculo']}>Servicios</a>
                    <a href="#portfolio" className={styles['header-vinculo']}>Portafolio</a>
                    <a href="#blog" className={styles['header-vinculo']}>Blog</a>
                    <a href="#contact" className={styles['header-vinculo']}>Contacto</a>
                    <div className={styles['header-contact']}>
                        <a className={styles['contact-vinculo']} href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer"><img className={styles['contact-img']} src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" alt="Facebook" /></a>
                        <a className={styles['contact-vinculo']} href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer"><img className={styles['contact-img']} src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" alt="Github" /></a>
                        <a className={styles['contact-vinculo']} href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer"><img className={styles['contact-img']} src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" alt="Linkedin" /></a>
                    </div>
                </div>
        </>
    );
}

export {MenuDesktop}