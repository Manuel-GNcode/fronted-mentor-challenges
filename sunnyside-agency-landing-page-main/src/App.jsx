import Section from "./components/Section";
import SectionAll from "./components/SectionAll";
import Client from "./components/Client";
import { Menu } from "./components/Menu";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
    <header className="flex justify-between mt-8 px-8 absolute w-full">
      <img src="logo.svg" alt="logo" />
      <button onClick={()=>setMenu(!menu)} className="cursor-pointer">
        <img src="icon-hamburger.svg" alt="hamburger" />
      </button>

      {menu && <Menu></Menu>}
    </header>

    <main>
      <section className="h-dvh text-center bg-[url(mobile/image-header.jpg)] bg-center bg-cover pt-[200px]">
        <h1 className="tracking-widest font-fraunces text-5xl font-[900] text-white">WE ARE CREATIVES</h1>
        <img className="mx-auto mt-12" src="icon-arrow-down.svg" alt="arrow" />
      </section>

      <Section title='Transform your brand' imgUrl='mobile/image-transform.jpg'>
        We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.
      </Section>

      <Section title='Stand out to the right audience' imgUrl='mobile/image-stand-out.jpg'>
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
      </Section>

      <SectionAll title='Graphic design' bgUrl='mobile/image-graphic-design.jpg'>
        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. 
      </SectionAll>

      <SectionAll title='Photography' bgUrl='mobile/image-orange.jpg'>
        Increase your credibility by getting the most stunning, high-quality photos that improve your business image. 
      </SectionAll>

      <section>
        <h2 className="font-fraunces text-center pt-12 text-xl font-[700] tracking-widest text-Grayish-blue">CLIENT TESTIMONIALS</h2>

        <Client imgUrl="image-emily.jpg" name="Emily R." job="Marketing Director">
          We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
        </Client>

        <Client imgUrl="image-thomas.jpg" name="Thomas S." job="Chief Operating Officer">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
        </Client>

        <Client imgUrl="image-jennie.jpg" name="Jennie F." job="Business Owner">
          Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
        </Client>
      </section>

      <section className="flex flex-wrap mt-12">
        <img className="w-[50%]" src="mobile/image-gallery-milkbottles.jpg" alt="milkbottles" />
        <img className="w-[50%]" src="mobile/image-gallery-orange.jpg" alt="orange"/>
        <img className="w-[50%]" src="mobile/image-gallery-cone.jpg" alt="icecream"/>
        <img className="w-[50%]" src="mobile/image-gallery-sugar-cubes.jpg" alt="sugar"/>
      </section>

      <footer className="bg-emerald-200 py-12 px-7 text-Dark-desaturated-cyan">
        <h3 className="font-extrabold text-3xl text-center">sunnyside</h3>
        <div className="font-barlow mt-6 flex justify-center gap-6">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a><img src="icon-facebook.svg" alt="facebook" /></a>
          <a><img src="icon-instagram.svg" alt="instagram" /></a>
          <a><img src="icon-twitter.svg" alt="twitter" /></a>
          <a><img src="icon-pinterest.svg" alt="pinterest" /></a>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App
