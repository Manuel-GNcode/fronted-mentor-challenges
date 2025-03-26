const Section = ({children, title, imgUrl}) => {
  return (
    <section className="h-[650px]">
      <img src={imgUrl} alt="section image" />
      <div className="px-7 pt-12 text-center flex flex-col gap-6">
        <h2 className="font-fraunces font-extrabold text-3xl text-Very-dark-desaturated-blue">{title}</h2>
        <p className="font-barlow text-Very-dark-grayish-blue">{children}</p>
        <a className="font-fraunces font-extrabold text-Very-dark-desaturated-blue border-b-2 border-b-Yellow w-fit px-2 mx-auto cursor-pointer">LEARN MORE</a>
      </div>
    </section>
  )
}

export default Section
