import {BlogItem} from '@components/Blog/BlogItem';
import {useBlog} from '@hooks/useBlog';
import { PageTitle } from '@components/PageTitle/PageTitle';
import styles from '@static/css/style.module.css';


const Blog = () => {
    var url_img : string; // declaracion de variable para setear la url de la imagen del post
    const API : string = "https://newsdata.io/api/1/news?apikey=pub_6547d847408d34ede1e81dcb8d10856ec8b9&country=es,us,ca,cn&category=technology,entertainment,science&language=es&page=1"; 

    
    const news = useBlog(API);


    return(
        <div className={styles.blog} id="blog">
                <PageTitle title="ÚLTIMAS NOTICIAS" description="Últimas noticias acerca de tegnología, entretenimiento y ciencia."/>
                {news === undefined 
                
                    ? 
                        <>
                            <h1 className={styles.loading}>Cargando...</h1> 
                            <div className={styles['loading-box']}>
                                <div className={styles['loading-box-item']}></div>
                            </div>
                        </>

                    :

                        <div className={styles['blog-container']}>
                        {news.slice(0,3).map((item) => (
                            
                            item.image_url !== null  ? url_img = item.image_url 
                                : url_img = "https://i.ibb.co/QXBX6Nw/pexels-vie-studio-4439425-1.jpg",
                            //si la imgen de la api es null le seteo la url mia

                            <div key={item.title}>
                                
                                <BlogItem dateTime={item.pubDate} img={url_img} alt={item.title} title={item.title} description={item.description} link={item.link}/>
                                
                            </div>
                        ))
                        }
                    </div>

                }   
        </div>

    )
}

export {Blog};