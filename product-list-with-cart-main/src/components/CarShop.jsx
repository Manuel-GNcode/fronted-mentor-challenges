export const CarShop = ({ itemList, handleRemove }) => {

  return (
    <>
      <div className="flex flex-col gap-2 text-sm">
        {itemList.map(item => {
          return (
            <div key={item.name} className="flex justify-between items-center border-b border-b-cart-Rose-100 pb-2">
              <div>
                <h2 className="font-semibold text-cart-Rose-900">{item.name}</h2>
                <p className="space-x-2">
                  <b className="text-cart-Red">(x{item.quantity}) </b>
                  <span className="text-cart-Rose-400">@{item.price} </span>
                  <span className="text-cart-Rose-500 font-[400]">${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              </div>
              <button onClick={()=>handleRemove(item)} className="border border-cart-Rose-500 p-1 rounded-full cursor-pointer h-fit"><img src="images/icon-remove-item.svg" alt="remove button" /></button>
            </div>
          )
        })}
      </div>
      <div className="flex justify-between items-center my-4 text-sm font-semibold text-cart-Rose-500"><p>Order Total</p> <b className="text-cart-Rose-900 text-xl">${itemList.reduce((acc, crr)=>acc+(crr.quantity*crr.price), 0).toFixed(2)}</b></div>
      <div className="flex justify-center bg-cart-Rose-100 rounded-xl text-sm py-4 text-cart-Rose-500">
        <img src="images/icon-carbon-neutral.svg" alt="carbon icon" />
        <p>This is a <b>carbon-neutral</b> delivery</p>
      </div>
      <button className="bg-cart-Red text-cart-Rose-50 w-full mt-4 px-6 py-2 rounded-3xl cursor-pointer">Confirm Order</button>
    </>
  )
}

