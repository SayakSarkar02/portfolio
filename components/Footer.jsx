const Footer = () => {
  return (
    <div className=" bg-vs-blue-3 z-20 text-white w-screen h-6 absolute bottom-0 px-2 flex flex-row items-center justify-between">
      
      <div className="flex flex-row items-center">
      <div title="I am currently on my main branch" className="hover:bg-white/20 cursor-pointer px-3 flex flex-row items-center justify-start gap-2">
        <svg className="w-3" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 5C13.5304 5 14.0391 4.78929 14.4142 4.41421C14.7893 4.03914 15 3.53043 15 3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1C12.4696 1 11.9609 1.21071 11.5858 1.58579C11.2107 1.96086 11 2.46957 11 3C11 3.53043 11.2107 4.03914 11.5858 4.41421C11.9609 4.78929 12.4696 5 13 5ZM13 5V6C13 8.5 11 9 11 9L5 11C5 11 3 11.5 3 14V15M3 5C3.53043 5 4.03914 4.78929 4.41421 4.41421C4.78929 4.03914 5 3.53043 5 3C5 2.46957 4.78929 1.96086 4.41421 1.58579C4.03914 1.21071 3.53043 1 3 1C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3C1 3.53043 1.21071 4.03914 1.58579 4.41421C1.96086 4.78929 2.46957 5 3 5ZM3 5V15M3 15C3.53043 15 4.03914 15.2107 4.41421 15.5858C4.78929 15.9609 5 16.4696 5 17C5 17.5304 4.78929 18.0391 4.41421 18.4142C4.03914 18.7893 3.53043 19 3 19C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17C1 16.4696 1.21071 15.9609 1.58579 15.5858C1.96086 15.2107 2.46957 15 3 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h3>main</h3>
      </div>
      <svg className="w-8 px-2 hover:bg-white/20" width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.1212 10.9051V9.49003C20.1212 4.80174 16.3109 1.00001 11.6117 1.00001C10.3333 0.998434 9.07109 1.28523 7.91891 1.83903C6.76674 2.39284 5.75431 3.1994 4.95702 4.19866M3.12738 8.09252V9.5076C3.12738 14.2011 6.93576 18 11.6369 18C12.9116 17.9982 14.1698 17.7119 15.3199 17.1622C16.47 16.6125 17.4829 15.8131 18.2849 14.8222" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 9.50003L3.08938 7.41064L5.27374 9.50003M22.2737 9.50003L20.1844 11.5894L18 9.50003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3 className="cursor-default max-sm:hidden">Find some Easter-Eggs if you can</h3>
      <a className="cursor-default sm:hidden" href="mailto:sayaksarkar73@gmail.com">Mail Me Now</a>

    </div>
  )
}

export default Footer