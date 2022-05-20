import React from 'react';


const BlogItem = ({dateTime,img,alt,title,description,link}) => {

    return(
        <React.Fragment>
                <div className="item-card"
                    data-aos="flip-right"
                    data-aos-delay="30"
                    data-aos-duration="400"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">

                    <h2 className="date-time">{dateTime}</h2>
                    <img className="item-card-img" src={img} alt={alt}/>
                    <h3 className="item-card-title">{title}</h3>
                    <p className="item-card-description">{description}</p>
                    <a href={link} target={"_blank"} rel="noreferrer" className="item-card-vinculo" title="Ir al sitio de la noticia">Leer más<img className="item-card-arrow-img" src="https://i.ibb.co/cQ1m9Bt/icons8-chebr-n-hacia-la-derecha-30-1.png" alt="right arrow" title="Ir al sitio de la noticia"/></a>
                </div>
        </React.Fragment>
    );
}

export {BlogItem};