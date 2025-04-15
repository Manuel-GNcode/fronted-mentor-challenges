export const Item = ({urlImg, category, name, price}) => {
  return (
    <div>
      <div className="relative mb-8">
        <img className="rounded-2xl" src={urlImg} alt={name} />
        <button className="bg-white rounded-3xl border border-cart-Rose-500 absolute left-1/2 translate-[-50%] px-4 py-2 flex gap-2 font-semibold text-sm cursor-pointer"><img src="images/icon-add-to-cart.svg"></img> Add to Cart</button>
      </div>

      <p className="text-cart-Rose-500">{category}</p>
      <h3 className="text-base font-bold">{name}</h3>
      <p className="text-cart-Red font-bold">$ {price}</p>
    </div>
  )
}

