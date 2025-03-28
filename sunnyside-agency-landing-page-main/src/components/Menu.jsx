export const Menu = () => {
  return (
    <div className="absolute bg-white w-[85%] flex flex-col top-16 p-8 justify-center items-center gap-4 font-barlow text-Dark-grayish-blue before:absolute before:size-5 before:right-0 before:top-[-20px] before:border-[20px] before:border-white before:border-t-transparent before:border-l-transparent">
      <a className="w-fit px-8 py-2 rounded-4xl hover:bg-Yellow hover:text-black hover:font-fraunces hover:uppercase" href="#">About</a>
      <a className="w-fit px-8 py-2 rounded-4xl hover:bg-Yellow hover:text-black hover:font-fraunces hover:uppercase" href="#">Services</a>
      <a className="w-fit px-8 py-2 rounded-4xl hover:bg-Yellow hover:text-black hover:font-fraunces hover:uppercase" href="#">Projects</a>
      <a className="w-fit px-8 py-2 rounded-4xl hover:bg-Yellow hover:text-black hover:font-fraunces hover:uppercase" href="#">Contact</a>
    </div>
  )
}

