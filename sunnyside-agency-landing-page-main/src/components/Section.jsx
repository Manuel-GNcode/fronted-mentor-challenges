const Section = ({children, title, imgUrl}) => {
  return (
    <section>
      <img src={imgUrl} alt="section image" />
      <div className="px-7 py-12 text-center flex flex-col gap-6">
        <h2 className="font-fraunces font-extrabold text-3xl text-Very-dark-desaturated-blue">{title}</h2>
        <p className="font-barlow text-Very-dark-grayish-blue">{children}</p>
        <p className="font-fraunces font-extrabold text-Very-dark-desaturated-blue border-b-2 border-b-Yellow w-fit px-2 mx-auto">LEARN MORE</p>
      </div>
    </section>
  )
}

export default Section
