const ItemServices = ({serviceName,serviceIMG,serviceALT}) => {
    return (
            <>
                <div className="services-card-item"  
                        data-aos="fade-left"
                        data-aos-delay="30"
                        data-aos-duration="500"
                        data-aos-easing="ease-in"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center" >
                        
                        <img className="services-card-img" src={serviceIMG} alt={serviceALT}/>
                        <p className="services-card-serviceName">{serviceName}</p>
                </div>
            </>
    );

}


export {ItemServices};