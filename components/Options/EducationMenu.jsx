"use client"

import { useSelector, useDispatch } from "react-redux"
import {functionName} from "@app/GlobalRedux/Features/sidebar/sidebarMenu"
const Education = () => {

  const folderList = useSelector((state) => state.menu.education);

  return (
    <div>
      {folderList[0]?.foldername}
    </div>
  )
}

export default Education
