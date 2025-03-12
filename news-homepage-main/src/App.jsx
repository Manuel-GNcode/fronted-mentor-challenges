function App() {

  return (
    <>
      <nav className="flex justify-between mb-8">
        <img src="src/assets/logo.svg" alt="Logo" />
        <button className="cursor-pointer" aria-label="boton de menu">
          <img src="src/assets/icon-menu.svg" alt="Burger menu" />
        </button>
      </nav>

      <article>
        <figure className="mb-4">
          <img src="src/assets/image-web-3-mobile.jpg" alt="background-primary" />
        </figure>
        <section>
          <h1 className="text-[45px]/12 font-extrabold mb-4">The Bright Future of Web 3.0?</h1>
          <div>
            <p className="text-Dark-grayish-blue mb-4">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className="bg-Soft-red font-bold px-8 py-2 tracking-widest">READ MORE</button>
          </div>
        </section>
      </article>

      <article>
        <h2>New</h2>
        <section>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </section>
        <section>
          <h3>The Downsides of AI Artistry</h3>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </section>
        <section>
          <h3>Is VC Funding Drying Up?</h3>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </section>
      </article>

      <article>
        <section>
          <img src="src/assets/image-retro-pcs.jpg" alt="Retro pc" />
          <div>
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </section>
        <section>
          <img src="src/assets/image-top-laptops.jpg" alt="keyword" />
          <div>
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </section>
        <section>
          <img src="src/assets/image-gaming-growth.jpg" alt="Hand with a controller" />
          <div>
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </section>
      </article>
    </>
  )
}

export default App
