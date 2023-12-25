import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import { useLoaderData } from "react-router-dom";



const Profile = () => {
    const myCartData = useLoaderData()
    const [refresh, setRefresh] = useState(myCartData);
    console.log(refresh);
    console.log(myCartData);

    const handleDelete = (_id) => {

        fetch(`http://localhost:5000/addCart${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                    )
                    const remaining = refresh.filter(items => items._id !== _id);
                    setRefresh(remaining);
                }
            })
    }

    const user = useContext(AuthContext)
    // console.log(user.email);
    return (
        <>
            <section className="flex items-center bg-stone-200  font-poppins dark:bg-gray-700 ">
                <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">

                    <div className=" mx-auto mb-4 bg-white rounded-lg shadow-md p-5">
                        <img className="w-32 h-32 rounded-full mx-auto" src alt="Profile picture" />
                        <h2 className="text-center text-2xl font-semibold mt-3">{name}</h2>
                    </div>

                    <div className="p-8 bg-gray-50 dark:bg-gray-800">
                        <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">Added Product</h2>

                        <div className="flex  flex-wrap -mx-4">
                            <div className="w-full px-4 mb-8 xl:mb-0">
                                <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                    <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                        <h2 className="font-bold text-gray-500 dark:text-gray-400">Product name</h2>
                                    </div>
                                    <div className="hidden px-4 lg:block lg:w-2/12">
                                        <h2 className="font-bold text-gray-500 dark:text-gray-400">Price</h2>
                                    </div>
                                    <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                                        <h2 className="font-bold text-gray-500 dark:text-gray-400">Quantity</h2>
                                    </div>
                                    <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                                        <h2 className="font-bold text-gray-500 dark:text-gray-400"> Action</h2>
                                    </div>
                                </div>
                                <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                                    {refresh?.map((items, id) =>
                                        <div key={id} className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                            <div className="w-full px-4 mb-6  md:w-4/6 lg:w-6/12 md:mb-0">
                                                <div className="flex flex-wrap items-center -mx-4">
                                                    <div className="w-full px-4 mb-3 md:w-1/3">
                                                        <div className="w-full h-96 md:h-24 md:w-24">
                                                            <img src={items.img} alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                    </div>
                                                    <div className="w-2/3 px-4">
                                                        <h2 className="mb-2 text-xl font-bold dark:text-gray-400">{items.name}</h2>
                                                        {/* <p className="text-gray-500 dark:text-gray-400 ">Picture frame</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden px-4 lg:block lg:w-2/12">
                                                <p className="text-lg font-bold text-blue-500 dark:text-gray-400">{items.price}</p>
                                            </div>
                                            <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                                                <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
                                                    <button className="py-2 hover:text-gray-700 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                                        </svg>
                                                    </button>
                                                    <input type="number" className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-right" placeholder="1" />
                                                    <button className="py-2 hover:text-gray-700 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                                                <div className="flex justify-end text-2xl  lg:text-4xl">
                                                    <button onClick={() => handleDelete(items._id)} className="py-4 px-4 text-red-600 text-2xl"><MdDelete /></button>
                                                    
                                                </div>
                                            </div>
                                        </div>)}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>




        </>
    );
};

export default Profile;