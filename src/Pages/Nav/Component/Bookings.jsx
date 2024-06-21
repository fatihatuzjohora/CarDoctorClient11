import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import UseAxiosScecure from "../../../Hooks/UseAxiosScecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure=UseAxiosScecure()


  //const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {

    axiosSecure.get(url, {withCredentials:true})
    .then(res=>{
        setBookings(res.data);
    })

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url,axiosSecure]);
  //--------------------------
  const handleDelete=id=>{
    const proceed=confirm('are you sure you want to delete')
    if(proceed){
fetch(`http://localhost:5000/bookings/${id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.deletedCount>0){
        alert('deleted Successfully')
        const remaining=bookings.filter(booking=>booking._id !== id)
        setBookings(remaining)
    }
})
    }
  }

  const handleBookingConfirm=id=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
const reamining=bookings.filter(booking=>booking._id !==id)
const updated=bookings.find(booking=>booking._id ===id)
updated.status='confirm'
const newBookings=[updated,...reamining]
setBookings(newBookings)
        }
    })
  }

  return (
    <div>
      <h1 className="text-4xl text-center">Your Bookings:{bookings.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => {
              return (
                <tr key={booking._id}>
                  <th>
                    <button onClick={()=>handleDelete(booking._id)} className="btn btn-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-24 h-24">
                        {booking.img && (
                          <img
                            src={booking.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{booking.service}</td>
                  <td>{booking.date}</td>
                  <td>{booking.price}</td>
                  <th>
                   { 
                   booking.status === 'confirm'? <span className="font-bold text-primary">Confirmed</span>:
                    <button onClick={()=>handleBookingConfirm(booking._id)} className="btn btn-ghost btn-xs">Please Confirm</button> 
                    }
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
