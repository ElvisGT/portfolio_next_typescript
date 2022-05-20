import Image from 'next/image';
import Link from 'next/link';
import styles from '@static/css/style.module.css';


const BlogItem = ({dateTime,img,alt,title,description,link}) => {

    return(
        <>
                <div className={styles['item-card']}
                    data-aos="flip-right"
                    data-aos-delay="30"
                    data-aos-duration="400"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">

                    <h2 className={styles['date-time']}>{dateTime}</h2>
                    <Image className={styles['item-card-img']} src={img} alt={alt}/>
                    <h3 className={styles['item-card-title']}>{title}</h3>
                    <p className={styles['item-card-description']}>{description}</p>
                    <Link href={link} target={"_blank"} rel="noreferrer" className={styles['item-card-vinculo']} title="Ir al sitio de la noticia">Leer más<Image className={styles['item-card-arrow-img']} src="https://i.ibb.co/cQ1m9Bt/icons8-chebr-n-hacia-la-derecha-30-1.png" alt="right arrow" title="Ir al sitio de la noticia"/></Link>
                </div>
        </>
    );
}

export {BlogItem};