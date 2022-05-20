import styles from '@static/css/style.module.css';


const ItemServices = ({serviceName,serviceIMG,serviceALT}) => {
    return (
            <>
                <div className={styles['services-card-item']} 
                        data-aos="fade-left"
                        data-aos-delay="30"
                        data-aos-duration="500"
                        data-aos-easing="ease-in"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center" >
                        
                        <img className={styles['services-card-img']} src={serviceIMG} alt={serviceALT}/>
                        <p className={styles['services-card-serviceName']}>{serviceName}</p>
                </div>
            </>
    );

}


export {ItemServices};