import Terminal from "./Terminal"

const MainBody = () => {
  return (
    <div className=" text-vs-white-1 w-full flex flex-col justify-between h-[100vh]">
      <div className="w-full h-10 bg-vs-gray-4"></div>
      <div></div>
      <Terminal/>
    </div>
  )
}

export default MainBody