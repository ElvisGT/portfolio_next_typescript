import Image from 'next/image';
import { PropsItemServices } from '@interface/index';
import styles from '@static/css/style.module.css';


const ItemServices = ({serviceName,serviceIMG,serviceALT} : PropsItemServices) => {
    return (
            <>
                <div className={styles['services-card-item']} 
                        data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-delay="10"
                        data-aos-duration="500"
                        data-aos-easing="ease-in"
                        data-aos-mirror="false"
                        data-aos-once="true"
                        data-aos-anchor="#home" >
                        
                        <Image className={styles['services-card-img']} 
                            src={serviceIMG} 
                            alt={serviceALT}
                            width={50}
                            height={50}/>
                        <p className={styles['services-card-serviceName']}>{serviceName}</p>
                </div>
            </>
    );

};


export {ItemServices};