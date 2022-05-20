import {PageTitle} from '@components/PageTitle/PageTitle';
import {Projects} from '@components/Portfolio/Projects';
import {data} from '@components/Portfolio/data';

const Portfolio = () => {
    
    return(
        <div className="portfolio" id="portfolio">
            <PageTitle title="PORTAFOLIO" description="Mis proyectos"/>

            <section className="portfolio-container">
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