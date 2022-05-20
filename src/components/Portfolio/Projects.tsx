import Image from 'next/image';
import Link from 'next/link';
import styles from '@static/css/style.module.css';
import { PropsProjects } from '@interface/index';


const Projects = ({img,alt,description,github,hosting} : PropsProjects) => {

    return(
        <> 
            <div className={styles['portfolio-project-item']}
                        data-aos="fade-in"
                        data-aos-delay="30"
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
                    <Link className={styles['project-item-vinculo']} 
                            target={"_blank"} rel="noreferrer" 
                            href={github} title="Ver código en Github">Github</Link>
                    <Link className={styles['project-item-vinculo']} 
                            target={"_blank"} rel="noreferrer" 
                            href={hosting} title="Probar sitio en producción">Probar</Link>
                </div>
            </div>
        </>
    );

}

export {Projects};
