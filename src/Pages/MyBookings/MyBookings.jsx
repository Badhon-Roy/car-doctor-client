import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking/Booking";
import Swal from "sweetalert2";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [myBookings, setMyBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [url])

    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/bookings/${id}`,{
                method : "DELETE"
              })
              .then(res  => res.json())
              .then(data =>{
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
                const remaining = myBookings.filter(booking => booking._id !== id)
                setMyBookings(remaining)
              })
            }
          })
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8">My Bookings : {myBookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold">
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myBookings.map(booking => <Booking key={booking._id}
                                handleDelete={handleDelete} booking={booking}></Booking>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyBookings;