export const Technology = ({children, number, title, imgUrl}) => {
  return (
    <section className="flex justify-between gap-4">
      <img className="w-25" src={imgUrl} alt="Retro pc" />
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl text-Soft-red font-bold">{number}</h2>
        <h3 className="font-bold text-lg hover:text-Soft-red cursor-pointer">{title}</h3>
        <p className="text-Dark-grayish-blue">{children}</p>
      </div>
    </section>
  )
}
