import { PageTitle } from '../PageTitle/PageTitle';
import styles from '@static/css/style.module.css';
import Image from 'next/image';

const socialMedia = [
  {id: 1, name: 'LinkedIn', href: 'https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/', imgSrc: 'https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png'},
  {id: 2, name: 'Facebook', href: 'https://www.facebook.com/elvis.giltorres/', imgSrc: 'https://i.ibb.co/N37fLYQ/icons8-facebook-50.png'},
  {id: 3, name: 'GitHub', href: 'https://github.com/ElvisGT', imgSrc: 'https://i.ibb.co/Fbfdvz5/icons8-github-64.png'},
  {id: 4, name: 'Mail', href: 'mailto:elvisgiltorres@gmail.com', imgSrc: 'https://i.ibb.co/tqWG9BL/icons8-google-plus-64.png'},
];

const Footer = () => {
    return(
        <div className={styles.footer}>
            <PageTitle title="CONTACTO"/>
            <div className={styles['footer-contacts']} id="contact">

              {
                socialMedia.map(social => (
                  <div key={social.id} className={styles['footer-contacts-container']}>
                    <Image className={styles['contact-img']}
                           src={social.imgSrc}
                           alt={`${social.name} Icon`}
                           width={30}
                           height={30}/>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      <button className={styles['footer-vinculo']}>{social.name}</button>
                    </a>
                  </div>
                ))
              }

            </div>

            <div className={styles['footer-upArrow']}>
                <a href="#home" title="Ir al inicio">
                    <Image className={styles['footer-upArrow-img']}
                            src="https://i.ibb.co/vV3Tb3B/icons8-arriba-en-cuadrado-64.png"
                            alt="flecha hacia arriba"
                            width={40}
                            height={40}/>
                </a>
            </div>

            <p className={styles['footer-icon']}>
                Iconos por{` `}
                <a  target={"_blank"} rel="noreferrer"
                        href="https://icons8.com"
                        title="Link a Icons8">

                        <button className={styles['footer-icon-vinculo']}>Icons8</button>
                </a>
            </p>
            <p className={styles['footer-icon']}>
                Imágenes por{` `}
                <a target={"_blank"} rel="noreferrer"
                        href="https://pexels.com"
                        title="Link a Pexels">

                        <button className={styles['footer-icon-vinculo']}>Pexels</button>
                </a>
            </p>

            <h3 className={styles['footer-derechos']} >Todos los derechos reservados 2022.</h3>

        </div>
    );
};


export {Footer};
