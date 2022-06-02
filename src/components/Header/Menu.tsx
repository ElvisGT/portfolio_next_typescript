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
                    <button className={styles['header-vinculo']}>Home</button>
                </Link>
                <Link href="#services">
                    <button className={styles['header-vinculo']}>Services</button>
                </Link>
                <Link href="#portfolio">
                    <button className={styles['header-vinculo']}>Portfolio</button>
                </Link>
                <Link href="#contact">
                    <button className={styles['header-vinculo']}>Contact</button>
                </Link>
                <div className={styles['header-contact']}>
                    <a className={styles['contact-vinculo']} href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer">
                        <Image className={styles['contact-img']}
                                src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png"
                                alt="Facebook"
                                width={30}
                                height={30}/>
                    </a>
                    <a className={styles['contact-vinculo']} href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer" >
                        <Image className={styles['contact-img']}
                                src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png"
                                alt="Github"
                                width={30}
                                height={30} />
                    </a>
                    <a className={styles['contact-vinculo']} href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target="_blank" rel="noreferrer">
                        <Image className={styles['contact-img']}
                                src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png"
                                alt="LinkedIn"
                                width={30}
                                height={30} />
                    </a>
                </div>
            </div>
        </>
    );
};

export {Menu};
