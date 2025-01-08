import Hero from "./components/hero";

function App() {
  return (
    // <div className="mx-base_mobile lg:mx-base_desktop">
    <>
      {/* section inicial */}
      <Hero/>
      <section className="h-screen w-screen bg-svg-about2 bg-no-repeat bg-cover bg-center ">
        sobre nós
      </section>
      <section className="h-screen w-screen bg-svg-desing bg-no-repeat bg-cover bg-center">
        Desing
      </section>
      {/* <section className="h-screen w-screen bg-svg-desing bg-no-repeat bg-cover bg-center">Desing</section> */}
      <section className="h-screen w-screen bg-svg-end bg-no-repeat bg-contain bg-bottom">
        Port
      </section>
    </>
    // </div>
  );
}

export default App;
