

import { useEffect, useState } from "react";
import FoodCard from "../../Shared/FoodCard";
import SearchBar from "../../Shared/SearchBar";
import Skeleton from "../../Shared/Skeleton";
import useFetch from "../Hooks/useFetch";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";





const Foods = () => {
    const { count } = useLoaderData()
    // console.log(count);
    const [food, setFood] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const numberOfPages = Math.ceil(count / itemsPerPage)

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${currentPage}&skip=${itemsPerPage}`)
            .then(res => res.json())
            .then((data) => {
                setFood(data)
            })
    }, [currentPage, itemsPerPage])



    // one type pagination >>>>>>


    // const pages = [...Array(numberOfPages).keys()];

    //     second type pagination >>>>>>>
    const pages = [];
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    // console.log(pages);
    const handleItemsPerPage = e => {
        const value = parseInt(e.target.value)
        console.log(value);
        setItemsPerPage(value)
        setCurrentPage(1)
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < 8) {
            setCurrentPage(currentPage + 1)
        }
    }

    const [search, setSearch] = useState("")
    const { data, loading, error } = useFetch()
    if (loading) {
        return <Skeleton></Skeleton>
    }
    if (error) {
        return <h1 className="text-2xl lg:text-6xl text-center text-red-700">Empty Data</h1>
    }
    let filterData = food
    if (search !== "") {
        filterData = food.filter(item => item.category.toLowerCase().includes(search.toLowerCase()))
    }

    // console.log(search);
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


            <div className="flex justify-center">
                <button onClick={handlePreviousPage} className="flex items-center btn hover:text-white hover:bg-gray-700 mr-1"><IoIosArrowBack /><p>Previous</p></button>

                {
                    pages.map(page => <button
                        className="lg:btn md:btn hover:text-white hover:bg-gray-700 mr-2"
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page + 1}</button>)
                }
                <select onChange={handleItemsPerPage} className=" hover:text-white hover:bg-gray-700 mr-2" name="" value={itemsPerPage} id="">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <button onClick={handleNextPage} className="flex items-center btn hover:text-white hover:bg-gray-700 mr-1">
                    <p>Next</p><IoIosArrowForward /></button>

            </div >

        </>
    );
};

export default Foods;

