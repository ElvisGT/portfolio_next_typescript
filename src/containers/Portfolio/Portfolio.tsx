import {PageTitle} from '@components/PageTitle/PageTitle';
import {Projects} from '@components/Portfolio/Projects';
import {data} from '@components/Portfolio/data';
import styles from '@static/css/style.module.css';


const Portfolio = () => {
    
    return(
        <div className={styles.portfolio} id="portfolio">
            <PageTitle title="PORTFOLIO" description="My projects"/>

            <section className={styles['portfolio-container']}>
            {data.map(item => (
                    <div key={item.id}>
                        <Projects img={item.img} 
                                  alt={item.img}
                                  description={item.description}
                                  github={item.github}
                                  hosting={item.hosting}
                        />
                    </div>
                ))
            }
            </section>
        </div>
    );
};

export {Portfolio};