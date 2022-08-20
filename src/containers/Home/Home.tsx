import {PageTitle} from '@components/PageTitle/PageTitle';
import Image from 'next/image';
import styles from '@static/css/style.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
            <div className={styles['home-img-container']}>
                <Image className={styles['home-img']}
                        src="https://i.ibb.co/nDJ2gQF/IMG-20220413-190104.jpg"
                        alt="foto de Elvis"
                        width={250}
                        height={250} />
            </div>
            <div className={styles['home-container']}>
                <PageTitle title="Elvis, Frontend Developer"/>

                <p className={styles['home-description']}>
                  {'Hola 👋 mi nombre es Elvis y soy un Frontend Developer React.js. Construyo sitios web responsive y siguiendo las mejores prácticas. Soy un apasionado de la tecnología, en especial la programación. Mi mayor sueño es mejorar el mundo haciendo uso de tecnología.'}
                </p>
            </div>
            
            {/*Descargar CV*/}
            <a className={styles['home-CV']} href="https://drive.google.com/u/0/uc?id=1bC3YxkjfGKNKX-NsAwIcwnLbaKv23W75&export=download" target={"_blank"} rel="preload">Descargar CV</a>
            
        </div>
  );
};

export {Home};

