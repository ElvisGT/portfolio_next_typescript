import { PageTitle } from '../PageTitle/PageTitle';
import styles from '@static/css/style.module.css';


const Footer = () => {
    return(
        <div className={styles.footer}>    
            <PageTitle title="CONTACTO"/>
            <div className={styles['footer-contacts']} id="contact">
                <a className={styles['footer-vinculo']} href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer"><img className={styles['contact-img']} src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" alt="icono de Linkedin"/>LinkedIn</a>
                <a className={styles['footer-vinculo']} href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer"><img className={styles['contact-img']} src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" alt="icono de Facebook"/>Facebook</a>
                <a className={styles['footer-vinculo']} href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer"><img className={styles['contact-img']} src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" alt="icono de Github"/>Github</a>
                <a className={styles['footer-vinculo']} href="mailto:elvisgiltorres@gmail.com" target={"_blank"} rel="noreferrer"><img className={styles['contact-img']} src="https://i.ibb.co/tqWG9BL/icons8-google-plus-64.png" alt="icono de Mail"/>Mail</a>
            </div>  

            <div className={styles['footer-upArrow']}> 
                <a href="#home" title="Ir al inicio">
                    <img className={styles['footer-upArrow-img']} src="https://i.ibb.co/vV3Tb3B/icons8-arriba-en-cuadrado-64.png" alt="flecha hacia arriba"/>
                </a>
            </div>
    
            
            <p className={styles['footer-icon']}>Iconos de <a className="footer-icon-vinculo" target={"_blank"} rel="noreferrer" href="https://icons8.com" title="Link a Icons8">Icons8</a></p>
            <p className={styles['footer-icon']}>Imágenes de <a className="footer-icon-vinculo" target={"_blank"} rel="noreferrer" href="https://pexels.com" title="Link a Pexels">Pexels</a></p>
    
            <h3 className={styles['footer-derechos']} >Todos los derechos reservados 2022.</h3>

            
        </div>
    );
}


export {Footer};