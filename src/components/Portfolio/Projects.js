import styles from '@static/css/style.module.css';


const Projects = ({img,alt,description,github,hosting}) => {

    return(
        <> 
            <div className={styles['portfolio-project-item']}
                        data-aos="fade-in"
                        data-aos-delay="30"
                        data-aos-duration="400"
                        data-aos-easing="ease-in"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
            
                <img className={styles['project-item-img']} src={img} alt={alt}/>
                <p className={styles['project-item-description']}>{description}</p>
                <div className={styles['project-item-vinculo-container']}> 
                    <a className={styles['project-item-vinculo']} target={"_blank"} rel="noreferrer" href={github} title="Ver código en Github">Github</a>
                    <a className={styles['project-item-vinculo']} target={"_blank"} rel="noreferrer" href={hosting} title="Probar sitio en producción">Probar</a>
                </div>
            </div>
        </>
    );

}

export {Projects};
