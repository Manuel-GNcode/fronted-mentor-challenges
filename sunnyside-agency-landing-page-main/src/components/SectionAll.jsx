const SectionAll = ({children, title, bgUrl}) => {
  return (
    <section className={`h-[550px] flex relative md:w-[50%]`}>
      <img className="absolute z-[-1] object-top object-cover w-full h-full md:hidden" src={"mobile/"+bgUrl} alt="bg image" />
      <img className="absolute z-[-1] object-top object-cover w-full h-full hidden md:block" src={"desktop/"+bgUrl} alt="bg image" />
      <div className="px-7 pb-12 text-center flex flex-col gap-6 mt-auto">
        <h2 className="font-fraunces font-[900] text-3xl text-Dark-desaturated-cyan">{title}</h2>
        <p className="font-barlow text-Dark-desaturated-cyan">{children}</p>
      </div>
    </section>
  )
}

export default SectionAll
