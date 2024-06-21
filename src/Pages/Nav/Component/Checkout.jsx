import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Firebase/AuthProvider";

const Checkout = () => {
const {user}=useContext(AuthContext)
//console.log(user);
    //----------------------
  const service = useLoaderData();
  const { title, _id,price ,img} = service;
//-----------------------
  const handelCheckOut=event=>{
    event.preventDefault()
const form=event.target
const name=form?.name?.value;
const date=form?.date?.value;
const email=user?.email;
console.log(form);
const booking={
    customerName:name,
    email,
    img,
    date,
    service:title,
    service_id:_id,
    price:price,
};
console.log(booking);



fetch('http://localhost:5000/bookings',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(booking)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
   if(data.insertedId){
    alert('service book successfully add')
   }
})
  }
  //----------------------

  return (
    <div className="text-3xl text-center">
      Book Service: {title}
      <form onSubmit={handelCheckOut} className="card-body">
     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="date"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={'$'+ price}
            className="input input-bordered"
            required
          />
        </div>
        
     </div>
        <div>
            <input  className="btn bg-orange-500 btn-block" type="submit" value="Order Confirm" />
        </div>

        
      </form>
    </div>
  );
};

export default Checkout;
