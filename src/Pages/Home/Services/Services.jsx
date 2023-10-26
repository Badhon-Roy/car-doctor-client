import { useEffect, useState } from "react";
import Service from "./Service/Service";


const Services = () => {
    const [services , setServices] =  useState([])
    useEffect(()=>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="my-32 md:px-0 px-4">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="text-xl">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn bg-[#FF3811] text-white hover:bg-[#d43110] normal-case text-xl" >More Services</button>
            </div>
        </div>
    );
};

export default Services;