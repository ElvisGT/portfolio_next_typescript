import Image from 'next/image';
import Link from 'next/link';
import {DateApi} from '@interface/index';
import styles from '@static/css/style.module.css';


const BlogItem = ({dateTime,img,alt,title,description,link}:DateApi) => {

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
                    <Image className={styles['item-card-img']} 
                            src={img} 
                            alt={alt}
                            width={300}
                            height={200}/>
                    <h3 className={styles['item-card-title']}>{title}</h3>
                    <p className={styles['item-card-description']}>{description}</p>
                    <Link href={link} className={styles['item-card-vinculo']}> 
                        <a href={link}
                            target="_blank" 
                            rel="noreferrer"
                            style={{textDecoration:"none"}}  
                            title="Go to the site of the notice">
                            <button className={styles.readMore}>Read more
                            <Image className={styles['item-card-arrow-img']} 
                                    src="https://i.ibb.co/cQ1m9Bt/icons8-chebr-n-hacia-la-derecha-30-1.png" 
                                    alt="right arrow" 
                                    title="Go to the site of the notice"
                                    width={15}
                                    height={15}/>
                            </button>
                        </a>
                    </Link>
                </div>
        </>
    );
};

export {BlogItem};