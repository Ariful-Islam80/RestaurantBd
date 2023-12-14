import { Link } from "react-router-dom";


const FoodCard = ({ product }) => {
    const { _id, name, img, category, price } = product;
    return (
        <>
            <Link to={`/checkOut/${_id}`}>
            <div className='card  card-compact  bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:duration-1000'>
              
              <figure><img className="h-[300px] w-full " src={img} alt="AppleProducts" /></figure>
              <div className="space-y-4 p-6 ">
                  <div>
                      <h2 className="text-xl lg:text-4xl">{name}</h2>
                      <p><strong>{category}</strong></p>
                      <p className="font-bold"><span>$ </span>{price}</p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                         <button className="flex items-center btn w-full btn-info text-xl text-white">Details</button>
                     
                  </div>
              </div>


          </div>
            </Link>


        </>
    );
};

export default FoodCard;