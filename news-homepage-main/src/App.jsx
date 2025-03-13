import { Technology } from "./components/technology"

function App() {

  return (
    <>
      <nav className="flex justify-between mb-8">
        <img src="src/assets/logo.svg" alt="Logo" />
        <button className="cursor-pointer" aria-label="boton de menu">
          <img src="src/assets/icon-menu.svg" alt="Burger menu" />
        </button>
      </nav>

      <article className="mb-8">
        <figure className="mb-4">
          <img src="src/assets/image-web-3-mobile.jpg" alt="background-primary" />
        </figure>
        <section>
          <h1 className="text-[45px]/12 font-extrabold mb-4">The Bright Future of Web 3.0?</h1>
          <div>
            <p className="text-Dark-grayish-blue mb-4">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className="bg-Soft-red font-bold px-8 py-2 tracking-widest cursor-pointer hover:bg-Very-dark-blue hover:text-Off-white">READ MORE</button>
          </div>
        </section>
      </article>

      <article className="bg-Very-dark-blue text-Off-white p-4 mb-8">
        <h2 className="text-Soft-orange mb-4 font-bold text-2xl">New</h2>
        <section>
          <h3 className="font-bold mb-2">Hydrogen VS Electric Cars</h3>
          <p className="text-Grayish-blue">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </section>
        <section className="border-y-Grayish-blue border-y-1 my-4 py-4">
          <h3 className="font-bold mb-2">The Downsides of AI Artistry</h3>
          <p className="text-Grayish-blue">What are the possible adverse effects of on-demand AI image generation?</p>
        </section>
        <section>
          <h3 className="font-bold mb-2">Is VC Funding Drying Up?</h3>
          <p className="text-Grayish-blue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </section>
      </article>

      <article className="flex flex-col gap-8">
        <Technology number='01' title='Reviving Retro PCs' imgUrl='src/assets/image-retro-pcs.jpg'>What happens when old PCs are given modern upgrades?</Technology>
        <Technology number='02' title='Top 10 Laptops of 2022' imgUrl='src/assets/image-top-laptops.jpg'>Our best picks for various needs and budgets.</Technology>
        <Technology number='03' title='The Growth of Gaming' imgUrl='src/assets/image-gaming-growth.jpg'>How the pandemic has sparked fresh opportunities.</Technology>
      </article>
    </>
  )
}

export default App
