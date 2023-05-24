"use client";

import { useState, useEffect } from "react";


import SideMenu from "@components/SideMenu";
import MainBody from "./MainBody";

import { useSelector, useDispatch } from "react-redux"
import {arrSelect} from "@app/GlobalRedux/Features/sidebar/sidebarSlice"

const MidSec = (
  ) => {

    const open = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();

  // Sidebar Height Issue Fix
  const [sidebarHeight, setSidebarHeight] = useState('100vh');
  useEffect(() => {
    const updateSidebarHeight = () => {
      setSidebarHeight(`${window.innerHeight}px`);
    };

    if (typeof window !== 'undefined') {
      // Set the initial height
      updateSidebarHeight();

      // Update the height on window resize
      window.addEventListener('resize', updateSidebarHeight);

      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('resize', updateSidebarHeight);
      };
    }
  }, []);

  const loadedData = [
    {header:"EDUCATION: QUALIFICATION"},
    {header:"ACHIEVEMENTS:"},
    {header:"CONTACT:"},
    {header:"PROJECTS:"},
    {header:"TECH STACKS:"},
    {header:"WORK EXPERIENCE:"},
  ];

  const selected = "border-white text-vs-white-1 border-l-[3px]"
  const deselected = "border-l-[3px] border-transparent text-vs-white-2"

  return (
    <>

    {/* Sidebar */}
      <div style={{ height: sidebarHeight }} className={` sidebar bg-vs-gray-3 absolute left-0 w-16 z-10 pt-10 pb-6 flex flex-col justify-between`}>
        <div className="">
          <button onClick={()=>{dispatch(arrSelect(0))}} className={(open==0? selected : deselected) + " flex items-center justify-center w-full py-3 hover:bg-white/5 hover:text-vs-white-1 hover:cursor-pointer"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon w-7 flex items-center justify-center"
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M1002.65 357.325L529.357 122.93a38.4 38.4 0 00-34.1 0L22.017 357.325a38.4 38.4 0 00.717 69.171l184.422 86.528v275.2c0 12.34 5.94 23.962 15.975 31.13 76.8 55.244 179.456 85.657 289.177 85.657 109.773 0 212.429-30.413 289.178-85.657a38.451 38.451 0 0015.974-31.13v-275.2l184.474-86.528a38.4 38.4 0 00.717-69.171zm-261.99 410.47c-61.492 38.605-143.514 60.467-228.353 60.467s-166.81-21.862-228.352-60.467V549.12l212.02 99.482a37.99 37.99 0 0032.665 0l212.02-99.482v218.675zM512.306 571.443L127.437 390.81l384.87-190.618L897.23 390.81 512.307 571.443zM76.8 519.117v215.961a38.4 38.4 0 11-76.8-.05V519.065a38.4 38.4 0 1176.8.05z"></path>
            </svg>
          </button>

          <button onClick={()=>{dispatch(arrSelect(1))}} className={ (open==1? selected : deselected) + " flex items-center justify-center text-vs-white-2 w-full py-3 hover:bg-white/5 hover:text-vs-white-1 hover:cursor-pointer"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon w-9"
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M512 288.6c-78.2 0-141.9 63.6-141.9 141.9S433.8 572.4 512 572.4s141.9-63.6 141.9-141.9S590.2 288.6 512 288.6zm0 243.2c-55.9 0-101.3-45.5-101.3-101.3 0-55.9 45.5-101.3 101.3-101.3s101.3 45.5 101.3 101.3c0 55.9-45.4 101.3-101.3 101.3z"></path>
              <path d="M704.5 430.5C704.5 324.3 618.2 238 512 238s-192.5 86.4-192.5 192.5C319.5 536.7 405.8 623 512 623s192.5-86.3 192.5-192.5zM512 602.8c-95 0-172.3-77.3-172.3-172.3S417 258.2 512 258.2s172.3 77.3 172.3 172.3S607 602.8 512 602.8z"></path>
              <path d="M777.1 680.3c15.4-20.4 20-47 11.7-71.7l-14.2-42.7c-5.9-17.7 2.2-37.2 18.8-45.4l40.3-20.1c26.6-13.3 43.2-40.1 43.2-69.8s-16.5-56.5-43.2-69.8l-40.2-20.1c-16.6-8.3-24.7-27.9-18.9-45.5l14.2-42.7c9.4-28.2 2.2-58.9-18.8-79.9-21-21.1-51.7-28.3-79.9-18.8L647.4 168c-17.6 5.9-37.1-2.2-45.5-18.8L581.8 109c-13.3-26.6-40.1-43.2-69.8-43.2-29.8 0-56.5 16.5-69.8 43.2l-20.1 40c-8.3 16.6-27.9 24.7-45.5 18.9l-42.7-14.2c-28.2-9.4-58.9-2.2-79.9 18.8-21 21.1-28.3 51.7-18.8 79.9l14.2 42.7c5.9 17.6-2.2 37.1-18.8 45.5l-40.2 20.1c-26.6 13.3-43.2 40.1-43.2 69.8 0 29.7 16.5 56.5 43.2 69.8l40.2 20.1c16.6 8.3 24.7 27.9 18.9 45.5l-14.2 42.7c-8.8 26.2-3.2 54.5 14.5 75.3l-74.3 159.3c-6.2 13.4-3.8 29.2 6.1 40.2 9.9 10.9 25.2 14.9 39.2 10.2l2.5-.9 72.7-48.8 10.6 87.5.7 2c4.9 14.5 18 24.3 33.2 25h1.7c14.6 0 27.7-8.5 33.6-22l72.7-174c14.5 20.6 38 32.9 63.7 32.9 27.4 0 52.3-14.1 66.5-37.1l74 177.8.2.4c6 13.5 19 22 33.7 22h1.9c15.3-.8 28.3-10.7 33-25.2l.6-1.9 10.6-87.4 72.8 48.8 2.5.9c13.8 4.8 29.1.8 39-10.1 10-11 12.4-26.8 6.1-40.4l-76-162.8zM344.2 906.4l-9.7-79.8-.7-2c-6.5-19-27.3-29.3-46.4-23l-2.6.9-66.5 44.7 65.3-140c15.9 5.5 33.5 5.8 50.3.2l42.7-14.2c17.6-5.9 37.1 2.2 45.5 18.8l1.8 3.7-79.7 190.7zM565.8 694l-1.9 3.9c-1.3 1.7-2.2 3.7-2.9 5.8L545.6 734c-6.5 13-19.1 20.8-33.6 20.8s-27.1-7.8-33.6-20.7l-12.7-25.4c-.7-2.3-1.7-4.3-3.1-6.2l-4.3-8.6c-8.4-16.8-22.6-30-39.9-37.2-9.6-4-19.7-6-29.9-6-8.3 0-16.6 1.3-24.6 4l-42.7 14.2c-11.4 3.8-23.2 2.1-32.7-4.3-1.1-1.1-2.4-2.1-3.8-2.9-.7-.6-1.3-1.2-2-1.8-10.3-10.3-13.7-24.6-9-38.4l14.2-42.7c5.9-17.8 5.2-37.2-2-54.6-7.2-17.3-20.4-31.5-37.2-40l-40.2-20.1c-13-6.5-20.7-19-20.7-33.6 0-14.6 7.8-27.1 20.7-33.6l40.2-20.1c16.8-8.4 30-22.6 37.2-39.9 7.2-17.4 7.9-36.7 2-54.6l-14.2-42.7c-4.6-13.8-1.2-28.1 9-38.4 10.3-10.3 24.6-13.6 38.4-9l42.7 14.2c17.8 5.9 37.2 5.2 54.6-2 17.3-7.2 31.5-20.4 40-37.2l20.1-40.2c6.5-13 19-20.7 33.6-20.7s27.1 7.8 33.6 20.7l20.1 40.2c8.4 16.8 22.6 30 39.9 37.2 17.4 7.2 36.7 7.9 54.6 2l42.7-14.2c13.8-4.6 28.1-1.2 38.4 9 10.3 10.3 13.6 24.6 9 38.4l-14.2 42.7c-5.9 17.8-5.2 37.2 2 54.6 7.2 17.3 20.4 31.5 37.2 40l40.2 20.1c13 6.5 20.7 19 20.7 33.6 0 14.6-7.8 27.1-20.7 33.6l-40.1 20.1c-16.9 8.4-30.1 22.6-37.3 40-7.2 17.4-7.9 36.8-1.9 54.6l14.2 42.7c4.6 13.8 1.2 28.1-9 38.4l-.4.4c-.9.7-1.7 1.4-2.5 2.2-10 8.2-23 10.6-35.5 6.4l-42.7-14.2c-17.8-5.9-37.2-5.2-54.6 2-17.3 7.2-31.5 20.4-40 37.2zm177.9 108.4l-2.6-.9c-19-6.3-39.4 3.7-46.3 22.6l-.8 2.2-9.7 80-81.7-195.7c8.7-15.8 27.7-23.3 44.8-17.6l42.7 14.2c18.1 6.1 37.2 5.2 54.2-1.7l65.9 141.3-66.5-44.4z"></path>
            </svg>
          </button>

          <button onClick={()=>{dispatch(arrSelect(2))}} className={ (open==2? selected : deselected) + " flex items-center justify-center text-vs-white-2 w-full py-3 hover:bg-white/5 hover:text-vs-white-1 hover:cursor-pointer"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon w-7"
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M512 164.7c12.9 0 25.9.7 39.1 2.1 163.3 17.9 294.5 153.8 307 317.6 5.4 71.2-10.4 138-42.2 195.2-15.8 28.4-13.8 63.3 2.4 91.4l27.5 47.5c10.4 18-2.6 40.4-23.3 40.4h-286l.7-1c-8.4.7-16.8 1-25.1 1-23.3 0-46.5-2.6-69.8-7.6C300.1 820.5 187.4 704 168 559.9c-28.5-213 136.5-395.1 344-395.2m0-100.5c-129.1 0-251.9 55.8-337 153-85 97.2-123.8 226.9-106.5 356 24.8 184.7 166.4 336 352.4 376.4 30.3 6.6 61 9.9 91.2 9.9 5.5 0 11-.1 16.4-.3 2.7.2 5.3.3 8 .3h286c45.4 0 87.7-24.4 110.4-63.8 22.7-39.3 22.7-88.2-.1-127.5L906.7 723c40.4-75 58.2-160 51.6-246.3C942.3 266.1 771.9 89.9 562 67c-16.6-1.9-33.4-2.8-50-2.8z"></path>
              <path d="M281.09999999999997 511.9a50.3 50.3 0 10100.6 0 50.3 50.3 0 10-100.6 0zM461.7 511.9a50.3 50.3 0 10100.6 0 50.3 50.3 0 10-100.6 0zM642.3000000000001 511.9a50.3 50.3 0 10100.6 0 50.3 50.3 0 10-100.6 0z"></path>
            </svg>
          </button>

          <button onClick={()=>{dispatch(arrSelect(3))}} className={ (open==3? selected : deselected) + " flex items-center justify-center text-vs-white-2 w-full py-3 hover:bg-white/5 hover:text-vs-white-1 hover:cursor-pointer"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon w-7"
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M904 120H120c-30.9 0-56 25.1-56 56v560c0 30.9 25.1 56 56 56h280v56h-84c-15.5 0-28 12.5-28 28s12.5 28 28 28h392c15.5 0 28-12.5 28-28s-12.5-28-28-28h-84v-56h280c30.9 0 56-25.1 56-56V176c0-30.9-25.1-56-56-56zM568 848H456v-56h112v56zm336-112H120v-56h784v56zM120 624V176h784v448H120z"></path>
            </svg>
          </button>

          <button onClick={()=>{dispatch(arrSelect(4))}} className={ (open==4? selected : deselected) + " flex items-center justify-center text-vs-white-2 w-full py-3 hover:bg-white/5 hover:text-vs-white-1 hover:cursor-pointer"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon w-7"
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1026 1024"
            >
              <path d="M128.512 735.744c-17.408 0-34.304-3.584-50.176-10.24-15.872-6.656-29.184-15.872-40.96-27.136-11.264-11.264-20.48-25.088-27.136-40.96C3.584 641.536 0 625.152 0 607.232c0-17.408 3.584-34.304 10.24-49.664 6.656-15.36 15.872-28.672 27.136-40.448 11.264-11.264 25.088-20.48 40.96-27.136 15.872-6.656 32.256-10.24 50.176-10.24 3.584 0 7.168 0 10.24.512s6.144.512 9.216.512L325.12 266.24c-3.072-6.144-5.12-12.8-6.144-19.968-1.024-7.168-1.536-14.848-1.536-22.528 0-17.408 3.584-34.304 10.24-50.176 6.656-15.872 15.872-29.184 27.136-40.96s25.088-20.48 40.96-27.136c15.872-6.656 32.256-10.24 50.176-10.24 17.408 0 34.304 3.584 50.176 10.24 15.872 6.656 29.184 15.872 40.96 27.136 11.264 11.264 20.48 25.088 27.136 40.96 6.656 15.872 10.24 32.256 10.24 50.176 0 14.336-2.048 28.16-6.656 41.472-4.608 12.8-10.752 25.088-18.432 36.864l153.6 343.552 88.064-157.184c-6.656-10.24-12.288-21.504-16.384-34.304-4.096-12.288-6.144-25.6-6.144-39.424 0-17.408 3.584-34.304 10.24-50.176s15.872-29.184 27.136-40.96c11.264-11.264 25.088-20.48 40.96-27.136 15.872-6.656 32.256-10.24 50.176-10.24 17.408 0 34.304 3.584 50.176 10.24 15.872 6.656 29.696 15.872 41.472 27.136s20.992 25.088 27.648 40.96 10.24 32.256 10.24 50.176-3.584 35.328-10.24 50.688c-6.656 15.872-15.872 29.696-27.648 41.472s-25.6 20.992-41.472 27.648c-15.872 6.656-32.256 10.24-50.176 10.24h-22.016L788.48 701.952c13.312 12.288 24.064 26.112 31.744 42.496 7.68 16.384 11.776 34.304 11.776 53.76 0 17.408-3.584 34.304-10.24 50.176-6.656 15.872-15.872 29.696-27.648 41.472s-25.6 20.992-40.96 27.648c-15.36 6.656-32.256 10.24-50.176 10.24s-34.816-3.584-50.176-10.24c-15.36-6.656-28.672-15.872-40.448-27.648-11.264-11.776-20.48-25.6-27.136-41.472-6.656-15.872-10.24-32.256-10.24-50.176 0-19.456 3.584-37.376 11.264-53.76s17.92-30.72 31.232-42.496L460.288 352.768c-6.144 1.024-10.752 2.048-14.336 2.048-9.728 0-18.944-1.024-27.648-3.584s-16.896-5.632-25.088-9.216L238.08 538.112c6.144 10.24 10.752 21.504 14.336 33.28 3.584 11.776 5.632 24.064 5.632 36.864 0 17.408-3.584 34.304-10.24 50.176-6.656 15.872-15.872 29.184-27.648 40.96-11.776 11.264-25.6 20.48-40.96 27.136-15.36 6.144-32.256 9.216-50.688 9.216z"></path>
            </svg>
          </button>

          <button onClick={()=>{dispatch(arrSelect(5))}} className={ (open==5? selected : deselected) + " flex items-center justify-center text-vs-white-2 w-full py-3 hover:bg-white/5 hover:text-vs-white-1 hover:cursor-pointer"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon w-7"
              fill="currentColor"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path d="M885.333 256h-160v-57.6c-2.133-40.533-36.266-70.4-76.8-70.4H349.867c-40.534 2.133-72.534 34.133-72.534 74.667V256H138.667C98.133 256 64 290.133 64 330.667v490.666C64 861.867 98.133 896 138.667 896h746.666C925.867 896 960 861.867 960 821.333V330.667C960 290.133 925.867 256 885.333 256zm-544-53.333c2.134-6.4 6.4-10.667 12.8-10.667h296.534c6.4 0 10.666 6.4 10.666 10.667V256h-320v-53.333zM138.667 320h746.666c6.4 0 10.667 4.267 10.667 10.667v128H128v-128c0-6.4 4.267-10.667 10.667-10.667zM416 522.667h192V576c0 6.4-4.267 10.667-10.667 10.667H426.667c-6.4 0-10.667-4.267-10.667-10.667v-53.333zM885.333 832H138.667c-6.4 0-10.667-4.267-10.667-10.667V522.667h224V576c0 40.533 34.133 74.667 74.667 74.667h170.666C637.867 650.667 672 616.533 672 576v-53.333h224v298.666c0 6.4-4.267 10.667-10.667 10.667z"></path>
            </svg>
          </button>
        </div>

        <div>
        <div className={" flex items-center justify-center text-vs-white-2 w-full py-3 hover:text-vs-white-1 hover:cursor-pointer"}>
          <svg
          className="w-7"
          viewBox="0 0 107 107"
          stroke="currentColor"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg">
            <circle cx="53.5" cy="53.5" r="49" stroke="currentColor" stroke-width="9"/>
            <circle cx="53.5" cy="43.5" r="21" stroke="currentColor" stroke-width="9"/>
            <path d="M87 90C83 81.5 74.2107 65 53.5 65C32.7893 65 24 81.5 21 90" stroke="currentColor" stroke-width="9"/>
          </svg>
        </div>
        <div className={" flex items-center justify-center text-vs-white-2 w-full py-3 mb-4 hover:text-vs-white-1 hover:cursor-pointer"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon w-7 transition-transform duration-500 ease-out hover:rotate-90"
            fill="currentColor"
            overflow="hidden"
            viewBox="0 0 1024 1024"
          >
            <path d="M972.466 405.738l-98.05-19.639c-4.935-14.171-10.751-27.932-17.182-41.243l55.538-83.327c16.935-25.373 13.577-59.203-8.007-80.726l-61.558-61.558c-12.39-12.389-28.731-18.758-45.298-18.758-12.246 0-24.636 3.523-35.428 10.751l-83.326 55.517c-13.373-6.47-27.134-12.225-41.305-17.16L618.21 51.523C612.251 21.584 585.958.06 555.465.06h-87.033c-30.492 0-56.766 21.544-62.745 51.463l-19.64 98.07c-14.17 4.936-27.932 10.71-41.243 17.161l-83.285-55.517a63.86 63.86 0 00-35.49-10.75c-16.546 0-32.887 6.368-45.277 18.757l-61.537 61.558c-21.564 21.564-24.922 55.353-8.007 80.726l55.517 83.327c-6.472 13.352-12.226 27.092-17.14 41.284l-98.113 19.618C21.553 411.738.01 438.012.01 468.504v87.033c0 30.492 21.543 56.786 51.462 62.746l98.071 19.68c4.936 14.17 10.71 27.932 17.14 41.243l-55.475 83.326c-16.936 25.373-13.557 59.203 8.007 80.726l61.558 61.558c12.39 12.39 28.73 18.758 45.277 18.758a63.697 63.697 0 0035.448-10.751l83.327-55.537c13.352 6.491 27.093 12.246 41.284 17.181l19.619 98.05c5.98 29.94 32.253 51.483 62.745 51.483h87.033c30.493 0 56.787-21.564 62.746-51.483l19.68-98.05c14.17-4.935 27.932-10.751 41.243-17.181l83.327 55.537a63.877 63.877 0 0035.427 10.751c16.567 0 32.93-6.369 45.319-18.758l61.558-61.558c21.563-21.564 24.922-55.353 8.007-80.726l-55.538-83.326c6.492-13.373 12.246-27.134 17.182-41.305l98.05-19.618c29.919-5.919 51.483-32.254 51.483-62.746v-87.033c0-30.492-21.564-56.766-51.483-62.746zM861.842 575.155a63.845 63.845 0 00-47.858 41.756 327.768 327.768 0 01-14.294 34.362c-9.952 20.438-8.253 44.582 4.321 63.422l55.558 83.326-61.558 61.558-83.326-55.537a63.992 63.992 0 00-35.49-10.751 64.054 64.054 0 00-27.87 6.369c-11.14 5.365-22.568 10.239-34.425 14.375-21.379 7.414-37.25 25.64-41.694 47.858l-19.68 98.112h-87.032l-19.619-98.112c-4.443-22.24-20.314-40.444-41.734-47.858a330.292 330.292 0 01-34.404-14.294c-8.826-4.32-18.37-6.43-27.912-6.43-12.45 0-24.8 3.625-35.49 10.751L226.01 859.62l-61.558-61.558 55.517-83.326c12.574-18.881 14.212-43.005 4.383-63.36-5.386-11.14-10.199-22.567-14.335-34.424-7.434-21.38-25.66-37.25-47.879-41.694l-98.07-19.68-.062-87.074 98.112-19.618c22.198-4.444 40.445-20.315 47.878-41.735 4.137-11.816 8.888-23.284 14.294-34.404 9.912-20.417 8.253-44.54-4.362-63.38l-55.476-83.327 61.538-61.558L309.315 220a63.992 63.992 0 0035.49 10.751 64.12 64.12 0 0027.87-6.369c11.1-5.365 22.568-10.198 34.404-14.334 21.4-7.434 37.27-25.66 41.735-47.858l19.639-98.071 87.033-.041 19.618 98.112c4.444 22.198 20.315 40.444 41.755 47.878 11.816 4.137 23.264 8.888 34.363 14.294 8.867 4.28 18.37 6.41 27.933 6.41 12.45 0 24.799-3.625 35.489-10.751l83.326-55.517 61.558 61.558-55.558 83.326c-12.573 18.881-14.17 42.964-4.382 63.36 5.365 11.1 10.24 22.567 14.376 34.404 7.413 21.4 25.639 37.27 47.858 41.735l98.05 19.638.102 87.033-98.111 19.64zM511.99 288.008c-123.67 0-223.993 100.303-223.993 223.972 0 123.71 100.303 223.992 223.993 223.992S735.982 635.669 735.982 511.98c0-123.67-100.303-223.972-223.992-223.972zm0 419.99c-108.208 0-195.978-87.79-195.978-195.978 0-108.207 87.77-195.977 195.978-195.977 108.187 0 195.978 87.77 195.978 195.977 0 108.188-87.812 195.978-195.978 195.978zm0-323.988C441.278 384.01 384 441.288 384 512c0 70.691 57.278 127.99 127.99 127.99 70.691 0 127.99-57.299 127.99-127.99S582.68 384.01 511.99 384.01zm0 224.013c-52.998 0-96.003-43.005-96.003-96.003s43.005-96.002 96.003-96.002 96.002 43.004 96.002 96.002c0 52.978-43.004 96.003-96.002 96.003z"></path>
          </svg>
        </div>
        </div>
      </div>


    {/* Side Menu */}
    <div
      
    className="flex flex-row transition-all duration-300 ease-in-out ml-16">
      {/* <AnimatePresence> */}
        { (
          <div
          className={(open!==-1? "w-1/4": "overflow-clip w-0") + " transition-all duration-300 ease-in-out "}
            
          >
            <SideMenu data={open===-1?"":loadedData[open]}/>
          </div>
        )}
      {/* </AnimatePresence> */}
        
          <div
            className={`${open>-1? " w-3/4 " : " w-full "} transition-all duration-300 ease-in-out`}
            
            
          >
            <MainBody
            // toggleTerminal={toggleTerminal} isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen}
            data={open===-1?"":loadedData[open]}
            />
          </div>
        
        </div>
    </>
  );
};

export default MidSec;
