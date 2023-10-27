import { Link, useLoaderData } from "react-router-dom";


const ServicesDetails = () => {
    const service = useLoaderData()
    const { _id ,title, img, price } = service;
    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-8 underline">{title}</h3>
            <img src={img} alt="" />
            <p>Price : ${price}</p>
            <div className="flex justify-end mr-4 my-8">
                <Link to={`/checkout/${_id}`} >
                    <button className="btn btn-secondary">Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetails;