const Client = ({children, imgUrl, name, job}) => {
  return (
    <div className="pt-16 text-center px-7">
      <img className="size-18 rounded-full mx-auto" src={imgUrl} alt="people" />
      <p className="my-8 font-barlow text-Very-dark-grayish-blue">{children}</p>
      <h3 className="font-fraunces font-[900] text-Very-dark-desaturated-blue">{name}</h3>
      <p className="font-barlow text-sm text-Grayish-blue">{job}</p>
    </div>
  )
}

export default Client
