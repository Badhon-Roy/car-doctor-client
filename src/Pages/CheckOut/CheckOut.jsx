import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";


const CheckOut = () => {
    const service = useLoaderData()
    const {_id , title , img , price} = service;
    const {user} = useContext(AuthContext)
    const handleCheckOut = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const booking = {customerName: name,
            date , email , price,img ,
            service_id : _id ,
            service : title
        }
        fetch('http://localhost:5000/bookings',{
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                swal("booking", "successful", "success")
            }
        })
    }
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-8">Book Service : {title}</h2>
            <div className="p-16 bg-red-300 rounded mb-4">
                <form onSubmit={handleCheckOut}>
                    <div className="grid grid-cols-2 gap-4 text-xl ">
                        <div>
                            <label htmlFor="">Name</label> <br />
                            <input className="w-full py-2 rounded-lg px-4 text-xl" type="text" name="name" defaultValue={user?.displayName} id="" required />
                        </div>
                        <div>
                            <label htmlFor="">Date</label> <br />
                            <input  className="w-full py-2 rounded-lg px-4 text-xl" type="date" name="date" id="" required />
                        </div>
                        <div>
                            <label htmlFor="">Email</label><br />
                            <input className="w-full py-2 rounded-lg px-4 text-xl" type="email" name="email" defaultValue={user?.email} id="" required />
                        </div>
                        <div>
                            <label htmlFor="">Price</label><br />
                            <input className="w-full py-2 rounded-lg px-4 text-xl" type="price" name="price" defaultValue={'$' + price} id="" required />
                        </div>
                    </div>
                    <input className="btn btn-block my-4 btn-secondary normal-case text-xl" type="submit" value="Order Confirm" />
                </form>
            </div>

        </div>
    );
};

export default CheckOut;