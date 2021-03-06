import Image from 'next/image';
import styles from '@static/css/style.module.css';
import { PropsProjects } from '@interface/index';

const Projects = ({img,alt,description,github,hosting} : PropsProjects) => {

    return(
        <>
            <div className={styles['portfolio-project-item']}
                        data-aos="fade-in"
                        data-aos-delay="20"
                        data-aos-duration="400"
                        data-aos-easing="ease-in"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">

                <Image className={styles['project-item-img']}
                        src={img}
                        alt={alt}
                        width={250}
                        height={250}/>

                <p className={styles['project-item-description']}>{description}</p>
                <div className={styles['project-item-vinculo-container']}>
                    <div className={styles['project-item-vinculo-buttom']}>
                        <a target={"_blank"} rel="noreferrer"
                                href={github} >
                                <button className={styles['project-item-vinculo']} title="See code on GitHub">Repo</button>
                        </a>
                    </div>
                    <div className={styles['project-item-vinculo-buttom']}>
                        <a target={"_blank"} rel="noreferrer"
                                href={hosting}>
                                <button className={styles['project-item-vinculo']} title="Website in prodduction">Demo</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );

};

export {Projects};
