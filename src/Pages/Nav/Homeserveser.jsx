// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";


const Homeserveser = () => {
  const service=useServices()
// const [service,setService]=useState([])
//     useEffect(()=>{
//         fetch('http://localhost:5000/services')
//         .then(res=>res.json())
//         .then(data=>{
//             setService(data);
//         })
//     },[])

    return (
        <div>
          <div className="text-center mt-5">
          <h1 className="text-2xl text-orange-500 font-bold">Our services</h1> 
           <h1 className="text-4xl font-bold">Our service Area</h1> 
           <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which donot look even slightly believable. </p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    {
        service.map(singleSevice=>{
            return <div key={singleSevice._id}>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={singleSevice.img} alt="Shoes" className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{singleSevice.title}</h2>
    <p>Price: $ {singleSevice.price}</p>
    <div className="card-actions">
      <Link to={`/checkout/${singleSevice._id}`}> <button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
            </div>
        })
    }
</div>

        </div>
    );
};

export default Homeserveser;