import { Link } from "react-router-dom";
import Banner from "../../Pages/Banner/Banner";
import Category from "./Category";
import FoodCard from "../../Shared/FoodCard";
import useFetch from "../../Pages/Hooks/useFetch";
import Skeleton from "../../Shared/Skeleton";
import { useState } from "react";



const Home = () => {
    const [category, setCategory] = useState(null)
    // console.log(category);
    const { data, loading, error } = useFetch()
    if (loading) {
        return <Skeleton></Skeleton>
    }
    if (error) {
        return <h1 className="text-2xl lg:text-6xl text-center text-red-700">Empty Data</h1>
    }
    let filterData = data
    if (category !== null) {
        filterData = data.filter(item => item.category === category)
    }


    return (

        <>

            <Banner></Banner>
            <Category setCategory={setCategory}></Category>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-36 py-4 mx-auto">
                {
                    filterData?.slice(0, 8)?.map(product => <FoodCard
                        key={product._id}
                        product={product}
                    ></FoodCard>)
                }
            </div>
            <div className="flex justify-center">


                <Link to='/foods' className="btn btn-outline btn-info w-4/12 text-xl lg:text-2xl "><strong className="text-white">See All</strong></Link>


            </div>


        </>
    );
};

export default Home;