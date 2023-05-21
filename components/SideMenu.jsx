"use client"

const SideMenu = ({data}) => {
  return (
    <div className=" bg-vs-gray-5 absolute left-[65px] w-80 h-[100vh] z-10 mt-8 shadow-lg p-5 transition-all ease-out duration-700">
      <div className="flex flex-row items-center justify-between">
        <h3 className=" font-sans text-vs-white-1 font-light">{data?.header}</h3>
        <h3 className=" font-sans text-vs-white-1 font-light mb-2 cursor-pointer">...</h3>
      </div>
      <input className="w-full h-8 bg-vs-gray-2 my-4 focus:outline-none focus:border-none px-2 text-vs-white-2"/>
    </div>
  )
}

export default SideMenu