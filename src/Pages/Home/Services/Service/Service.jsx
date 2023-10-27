import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id , title, img, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="service" className="rounded-xl md:h-[250px] w-full" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="font-medium flex items-center justify-between text-xl">
                    <p className='text-[#FF3811]'>Price : ${price}</p>
                    <Link to={`/service/${_id}`}>
                        <span className='btn btn-circle bg-white border-none text-xl text-[#FF3811] hover:bg-[#FF3811] hover:text-white'><FaArrowRight></FaArrowRight></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;