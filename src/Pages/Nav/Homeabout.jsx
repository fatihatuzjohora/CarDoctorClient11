import person from "../../assets/about_us/person.jpg"
import parts from "../../assets/about_us/parts.jpg"

const Homeabout = () => {
    return (
        <div>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
  <div className="relative">
  <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
  <img src={parts} className="w-1/2 absolute top-1/2 right-5 border-8 border-white rounded-lg shadow-2xl" />
  </div>
    <div className="p-6">
        <h1 className="font-bold text-orange-400">About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <button className="btn bg-orange-500">Get More Info</button>
    </div>
  </div>
</div>       
        </div>
    );
};

export default Homeabout;