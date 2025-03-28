const Section = ({children, title, imgUrl, reverse}) => {
  return (
    <section className={`h-[650px] w-full md:flex md:h-fit ${reverse?"md:flex-row-reverse":""}`}>
      <img className="w-full max-h-[300px] object-cover md:hidden" src={"mobile/"+imgUrl} alt="section image" />
      <img className="w-[50%] max-h-[700px] object-cover hidden md:block" src={"desktop/"+imgUrl} alt="section image" />
      <div className="px-7 pt-12 text-center flex flex-col gap-6 md:w-[50%] md:justify-center md:pt-0 md:text-left">
        <h2 className="font-fraunces font-[900] text-3xl text-Very-dark-desaturated-blue">{title}</h2>
        <p className="font-barlow text-Very-dark-grayish-blue">{children}</p>
        <a className="font-fraunces font-[900] text-Very-dark-desaturated-blue border-b-2 border-b-Yellow w-fit px-2 mx-auto cursor-pointer md:mx-0">LEARN MORE</a>
      </div>
    </section>
  )
}

export default Section
