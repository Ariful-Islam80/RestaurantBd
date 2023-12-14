import { useState } from 'react';

const Category = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (element) => {
    setSelectedCategory(element);
    setCategory(element);
  };

  return (
    <>
      <div className="dropdown mt-8">
        <div className="flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Category</h3>
          </div>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold space-y-2">
          <button className='text-left' onClick={() => handleChange('Biryani')}>Biryani</button>
          <button className='text-left' onClick={() => handleChange('Meat')}>Meat</button>
          <button className='text-left' onClick={() => handleChange('Berger')}>Burger</button>
          <button className='text-left' onClick={() => handleChange('Sandwich')}>Sandwich</button>
          <button className='text-left' onClick={() => handleChange('Pasta')}>Pasta</button>
          <button className='text-left' onClick={() => handleChange('Drinks')}>Drinks</button>
        </ul>
      </div>
    </>
  );
};

export default Category;
