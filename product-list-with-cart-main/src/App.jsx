import { Item } from "./components/Item.jsx";
import { foodBase } from "./database/foodBase.js";

function App() {

  return (
    <main className="font-cart-redhattext p-6">
      <section>
        <h1 className="font-[900] text-4xl mb-6">Desserts</h1>
        <div className="">
          <Item urlImg={'/images/image-baklava-mobile.jpg'} category={'waffle'} name={'my palto'} price={'2.50'}></Item>
        </div>
      </section>

      <section>
        <h2>Your card</h2>
      </section>
    </main>
  )
}

export default App
