import { useState, useEffect } from "react"

const Problems = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(prev=>(prev+1))
            setTimeout(() => {
                setCount(prev=>(prev+1))
                setTimeout(() => {
                    setCount(prev=>(prev+1))
                  }, 1000);
              }, 2000);
          }, 3000);
    }, [])


  return (
    <div className="py-2 h-64 w-full overflow-y-scroll">
        { count>=0 && ">>  Problems? Huh? I dont have them!"}
        <br />
        { count>=1 && ">>  Wanna know how?"}
        <br />
        { count>=2 && ">>  Cause I keep solving them!"}
    </div>
  )
}

export default Problems
