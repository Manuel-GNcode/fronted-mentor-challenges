import { useState } from "react"

export const Item = ({urlImg, category, name, price}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = ()=>{
    setQuantity(quantity+1);
  }
  const decrement = ()=>{
    if (quantity > 0) setQuantity(quantity-1);
  }

  return (
    <div className="">
      <div className="relative mb-8">
        <img className="rounded-2xl" src={urlImg} alt={name} />
        {
          quantity ?
          <span className="flex bg-cart-Red absolute left-1/2 translate-[-50%] px-4 py-2 w-[150px] rounded-3xl justify-between">
            <button onClick={decrement} className="size-6 flex justify-center p-1 cursor-pointer border border-cart-Rose-50 rounded-full"><img src="images/icon-decrement-quantity.svg" alt="less btn" /></button>
            <p className="text-cart-Rose-50">{quantity}</p>
            <button onClick={increment} className="size-6 flex justify-center p-1 cursor-pointer border border-cart-Rose-50 rounded-full"><img src="images/icon-increment-quantity.svg" alt="plus btn" /></button>
          </span>
          : <button onClick={increment} className="bg-cart-Rose-50 rounded-3xl border border-cart-Rose-500 absolute left-1/2 translate-[-50%] w-[150px] px-4 py-2 flex justify-center gap-2 font-semibold text-sm cursor-pointer"><img src="images/icon-add-to-cart.svg"></img> Add to Cart</button>
        }
      </div>

      <p className="text-cart-Rose-500">{category}</p>
      <h3 className="text-base font-bold">{name}</h3>
      <p className="text-cart-Red font-bold">$ {price}</p>
    </div>
  )
}

