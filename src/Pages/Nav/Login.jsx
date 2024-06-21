import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login/login.svg"
// import { AuthContext } from "../../Firebase/AuthProvider";
// import { useContext } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {signIn}=useAuth()
   // const {signIn}=useContext(AuthContext)
    const location=useLocation()
  //  console.log(location);
  const navigate=useNavigate()

    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
  //  console.log(email,password);
  //-----------------------
  signIn(email,password)
  .then(result=>{
    const loggedInUser=result.user;
    console.log(loggedInUser);

    const user={email}
    


   //----------------get acess token


axios.post('http://localhost:5000/jwt',user, {withCredentials:true})
.then(res=>{
  console.log(res.data);
  if(res.data.success){
    navigate(location?.state ? location?.state : '/')
  }

})
//------------------

  })
  .catch(error=>{
    console.log(error);
  })
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-5 lg:flex-row">
          <div className="w-1/2">
           <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           
            <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-4xl text-center font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <h1></h1>
                <button  className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="p-4 text-center font-semibold" >New To Car Doctor<Link to='/signup' className="text-orange-500 underline ml-2">Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
