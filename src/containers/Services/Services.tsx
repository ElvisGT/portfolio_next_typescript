import { PageTitle } from '@components/PageTitle/PageTitle';
import {ItemServices} from '@components/Services/ItemServices';
import styles from '@static/css/style.module.css';


const Services = () => {


    return(
        <div className={styles.services} id="services">
                <PageTitle title="SERVICIOS" description="Tecnologías con las que desarrollo sitios web"/>

                <div className={styles['services-card']}>
                    <ItemServices serviceName="HTML5" serviceIMG="https://i.postimg.cc/qqP7qFY8/icons8-html-5-50.png" serviceALT="Foto del logo de HTML5"/>

                    <ItemServices serviceName="CSS3" serviceIMG="https://i.postimg.cc/GhtPyTft/icons8-css3-50.png" serviceALT="Foto del logo de CSS3" />

                    <ItemServices serviceName="React JS" serviceIMG="https://i.postimg.cc/cLYnRRBx/icons8-reaccionar-50.png" serviceALT="Foto del logo de React"/>

                    <ItemServices serviceName="Git" serviceIMG="https://i.postimg.cc/cJ0rfVJh/icons8-git-50.png" serviceALT="Foto del logo de Git" />

                    <ItemServices serviceName="JavaScript" serviceIMG="https://i.ibb.co/d2ycmhM/icons8-javascript-50.png" serviceALT="Foto del logo de Javascript" />

                    <ItemServices serviceName="Github" serviceIMG="https://i.ibb.co/9VskQXz/icons8-github-50.png" serviceALT="Foto del logo de Github" />

                    <ItemServices serviceName="TypeScript" serviceIMG="https://i.ibb.co/qnD7R2N/icons8-typescript-50.png" serviceALT="Foto del logo de Typescript" />

                    <ItemServices serviceName="Bootstrap" serviceIMG="https://i.ibb.co/c83spFB/icons8-oreja-50.png" serviceALT="Foto del logo de Bootstrap" />

                    <ItemServices serviceName="Redux" serviceIMG="https://i.ibb.co/F6QZw6s/icons8-redux-50.png" serviceALT="Foto del logo de Redux" />
                    
                    <ItemServices serviceName="Sass" serviceIMG="https://i.ibb.co/3Y9nYjm/icons8-sass-50-1.png" serviceALT="Foto del logo de Sass" />



                </div>
        </div>

    );
};


export {Services};
