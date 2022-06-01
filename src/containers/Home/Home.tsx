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
                <PageTitle title="INTRODUCTION" description="Frontend Developer"/>
                
                <p className={styles['home-description']}>My name is Elvis and i am Frontend Developer. I have worked with many technologies but i more likies React js and Next js. Everyday i study a new some thing, so i will cumply one of my dreams, improve the world using technology.
                </p>
            </div>
        </div>
  );
};

export {Home};

