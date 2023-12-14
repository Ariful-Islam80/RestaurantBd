
const Banner = () => {
  return (
    <>

      <div
        className="=w-full overflow-hidden after:clear-both after:block after:content-['']">

        <div className="relative">
          <div className="absolute top-1/4 left-1/4">
            <h2 className=" text-2xl lg:text-6xl text-white hover:text-black mb-4">Our Expansive Restaurant</h2>
            <p className="text-xl lg:text-4xl text-white hover:text-black">Exquisite dining, opulent ambiance, unparalleled service in our Expansive Restaurant.</p>
          </div>
          <img
            src="https://source.unsplash.com/featured/?restaurant"
            className="w-full h-[80svh] bg-cover "
            alt="Wild Landscape" />
          <div className="absolute top-2/3 left-1/4">
            <button className="btn  btn-wide text-xl lg:text-2xl text-white hover:text-black bg-blue-600 border-none ">Explore</button>
          </div>

        </div>




      </div>




    </>
  )
}

export default Banner