

const Booking = ({ booking ,handleDelete }) => {
    const {_id , img, service, date, price } = booking;
    
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-36 h-36 rounded">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {date}
            </td>
            <td className="text-xl text-[#FF3811] font-bold">{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">confirm</button>
            </th>
        </tr>
    );
};

export default Booking;