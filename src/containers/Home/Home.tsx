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
                <PageTitle title="INTRODUCCIÓN" description="Frontend Developer React JS"/>
                
                <p className={styles['home-description']}>Mi nombre es Elvis y soy Frontend Developer React JS. Estudio diariamente de forma autodidacta para superarme y aprender nuevas tecnologías. No creo en las cosas imposibles, pienso que con perseverancia, sacrificio y esmero todo se puede lograr.
                </p>
            </div>
        </div>
  );
};

export {Home};

