import Section from "./components/Section";
import SectionAll from "./components/SectionAll";

function App() {

  return (
    <>
    <header className="flex justify-between mt-8 px-8 absolute w-full">
      <img src="logo.svg" alt="logo" />
      <button className="cursor-pointer">
        <img src="icon-hamburger.svg" alt="hamburger" />
      </button>
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
    </main>
    </>
  )
}

export default App
