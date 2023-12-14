

import { useState } from "react";
import FoodCard from "../../Shared/FoodCard";
import SearchBar from "../../Shared/SearchBar";
import Skeleton from "../../Shared/Skeleton";
import useFetch from "../Hooks/useFetch";

const Foods = () => {
    const [search, setSearch] = useState("")
    const { data, loading, error } = useFetch()
    if (loading) {
        return <Skeleton></Skeleton>
    }
    if (error) {
        return <h1 className="text-2xl lg:text-6xl text-center text-red-700">Empty Data</h1>
    }
    let filterData = data
    if (search !== "") {
        filterData = data.filter(item => item.category.toLowerCase().includes(search.toLowerCase()))
    }
    console.log(search);
    return (
        <>
            <div className="w-4/12 mt-6 px-6 md:px-36"><SearchBar setSearch={setSearch}></SearchBar></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-36 py-4 mx-auto">
                {
                    filterData?.map(product => <FoodCard
                        key={product._id}
                        product={product}
                    ></FoodCard>)
                }
            </div>

        </>
    );
};

export default Foods;

