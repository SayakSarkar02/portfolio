"use client"

import { useSelector, useDispatch } from "react-redux"
import {setBody} from "@app/GlobalRedux/Features/sidebar/sidebarMenu"

const Education = () => {

  const data = useSelector((state) => state.menu.body);
  console.log("Hi data",data);

  return (
    <div>
      Education
      <br />
      {data.title}
      <br />
      {data.board}
      <br />
      {data.description}
      <br />
      {data.percentage}
    </div>
  )
}

export default Education
