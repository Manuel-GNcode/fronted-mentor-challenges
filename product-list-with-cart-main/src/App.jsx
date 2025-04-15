import { Item } from "./components/Item.jsx";
import { foodBase } from "./database/foodBase.js";
import { Empty } from "./components/Empty.jsx";

function App() {

  return (
    <main className="font-cart-redhattext p-6 bg-cart-Rose-100">
      <section>
        <h1 className="font-[900] text-4xl mb-6">Desserts</h1>
        <div className="flex flex-col gap-6">
          {
            foodBase.map(item=><Item key={item.id} urlImg={item.url+'mobile.jpg'} category={item.category} name={item.name} price={item.price}></Item>
            )
          }
        </div>
      </section>

      <section className="bg-cart-Rose-50 rounded-xl p-4 mt-6">
        <h2 className="font-bold text-xl text-cart-Red mb-6">Your cart (0)</h2>
        <Empty></Empty>
      </section>
    </main>
  )
}

export default App
