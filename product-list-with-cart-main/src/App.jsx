import { useScreenWidth } from "./hooks/useScreenWidth.js";
import { Item } from "./components/Item.jsx";
import { foodBase } from "./database/foodBase.js";
import { Empty } from "./components/Empty.jsx";

function App() {
  const screenWidth = useScreenWidth();

  const getImageUrl = (item) => {
    if (screenWidth > 1024) return item.url + 'desktop.jpg';
    if (screenWidth > 640) return item.url + 'tablet.jpg';
    return item.url + 'mobile.jpg';
  };

  return (
    <main className="font-cart-redhattext p-6 bg-cart-Rose-100 lg:flex lg:gap-6 lg:p-14">
      <section>
        <h1 className="font-[900] text-4xl mb-6">Desserts</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            foodBase.map(item => (
              <Item key={item.id} urlImg={getImageUrl(item)} category={item.category} name={item.name} price={item.price}></Item>
            ))
          }
        </div>
      </section>

      <section className="bg-cart-Rose-50 rounded-xl p-4 mt-6 lg:min-w-72 lg:h-fit lg:mt-0">
        <h2 className="font-bold text-xl text-cart-Red mb-6">Your cart (0)</h2>
        <Empty></Empty>
      </section>
    </main>
  )
}

export default App;
