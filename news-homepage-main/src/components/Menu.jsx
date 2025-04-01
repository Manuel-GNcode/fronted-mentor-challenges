const Menu = ({isOpen}) => {
  return (
    <div className={"absolute flex flex-col gap-4 bg-white w-64 py-4 h-dvh pl-4 text-xl transition-[right] duration-300 ease-in top-full "+
      (isOpen? "right-0" : "right-[-256px]")
    }>
      <a className="hover:text-Soft-red" href="#">Home</a>
      <a className="hover:text-Soft-red" href="#">New</a>
      <a className="hover:text-Soft-red" href="#">Popular</a>
      <a className="hover:text-Soft-red" href="#">Trending</a>
      <a className="hover:text-Soft-red" href="#">Categories</a>
    </div>
  )
}

export default Menu
