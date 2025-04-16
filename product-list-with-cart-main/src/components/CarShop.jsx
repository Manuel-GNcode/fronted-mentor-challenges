export const CarShop = ({itemList, handleRemove}) => {
  return (
    <div>
      {itemList.map(item=><p key={item.name}>{item.name}</p>)}
    </div>
  )
}

