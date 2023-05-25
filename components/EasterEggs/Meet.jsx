const Meet = ({setMeet, stop}) => {
  return (
    <div>
      <div style={{ width: window.innerWidth, height:window.innerHeight }} className='absolute bottom-0 left-0 bg-[#1f2122] flex items-center justify-center'>
        <div onClick={()=>{setMeet(false);stop();}} className='absolute top-20 right-20 w-8 h-8 bg-red-700 rounded-full text-white text-xl leading-none cursor-pointer hover:bg-red-500 text-center pb-1 flex items-center justify-center font-sans'>x</div>
        <img src="/assets/meet.png" className='h-[90%] self-end  object-cover' alt="meet"/>
      </div>
    </div>
  )
}

export default Meet
