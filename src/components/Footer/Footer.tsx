import { PageTitle } from '../PageTitle/PageTitle';
import styles from '@static/css/style.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return(
        <div className={styles.footer}>    
            <PageTitle title="CONTACT"/>
            <div className={styles['footer-contacts']} id="contact">
                <div className={styles['footer-contacts-container']}>
                    <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" 
                                alt="icono de Linkedin"
                                width={30}
                                height={30}/>
                    <Link href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer">
                        <button className={styles['footer-vinculo']}>LinkedIn</button>
                    </Link>
                </div>
                
                <div className={styles['footer-contacts-container']}>
                    <Image className={styles['contact-img']} 
                                    src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" 
                                    alt="icono de Facebook"
                                    width={30}
                                    height={30}
                                    />
                    <Link  href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer">
                            <button className={styles['footer-vinculo']}>Facebook</button>
                    </Link>
                </div>
                
                <div className={styles['footer-contacts-container']}>
                    <Image className={styles['contact-img']} 
                                    src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" 
                                    alt="icono de Github"
                                    width={30}
                                    height={30}
                                    />
                    <Link  href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer">
                            <button className={styles['footer-vinculo']}>Github</button>
                    </Link>
                </div>
                
                <div className={styles['footer-contacts-container']}>
                    <Image className={styles['contact-img']} 
                                src="https://i.ibb.co/tqWG9BL/icons8-google-plus-64.png" 
                                alt="icono de Mail"
                                width={30}
                                height={30}
                                />  
                    <Link  href="mailto:elvisgiltorres@gmail.com" target={"_blank"} rel="noreferrer">
                        <button className={styles['footer-vinculo']}>Mail</button>
                    </Link>
                </div>
                
            </div>  

            <div className={styles['footer-upArrow']}> 
                <Link href="#home" title="Ir al inicio">
                    <Image className={styles['footer-upArrow-img']} 
                            src="https://i.ibb.co/vV3Tb3B/icons8-arriba-en-cuadrado-64.png" 
                            alt="flecha hacia arriba"
                            width={40}
                            height={40}/>
                </Link>
            </div>
    
            
            <p className={styles['footer-icon']}>
                Icons of{` `}
                <Link  target={"_blank"} rel="noreferrer" 
                        href="https://icons8.com" 
                        title="Link a Icons8">
                        
                        <button className={styles['footer-icon-vinculo']}>Icons8</button>
                </Link>
            </p>
            <p className={styles['footer-icon']}>
                Images of{` `}
                <Link target={"_blank"} rel="noreferrer" 
                        href="https://pexels.com" 
                        title="Link a Pexels">
                        
                        <button className={styles['footer-icon-vinculo']}>Pexels</button>
                </Link>
            </p>
    
            <h3 className={styles['footer-derechos']} >All right reserved 2022.</h3>

            
        </div>
    );
};


export {Footer};