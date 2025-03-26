const SectionAll = ({children, title, bgUrl}) => {
  return (
    <section className={`h-[650px] bg-[url(${bgUrl})] bg-center bg-cover flex`}>
      <div className="px-7 pb-12 text-center flex flex-col gap-6 mt-auto">
        <h2 className="font-fraunces font-extrabold text-3xl text-Dark-desaturated-cyan">{title}</h2>
        <p className="font-barlow text-Dark-desaturated-cyan">{children}</p>
      </div>
    </section>
  )
}

export default SectionAll
