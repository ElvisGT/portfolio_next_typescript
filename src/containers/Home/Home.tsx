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
                  {'Hi there 👋 I\'m Elvis and I\'m a Frontend Developer, I have been working with technologies like React JS and Next JS (those are my favorite tools). I\'m always open face new challenges and in my free time, I always try to learn new things that can help me to improve my skills to become a better web developer.'}
                </p>
            </div>
        </div>
  );
};

export {Home};

