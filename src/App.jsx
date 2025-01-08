import Hero from "./components/hero";
import Sobre from "./components/sobre";
import Desing from "./components/desing";
import End from "./components/end";

function App() {
  return (
    <main>
      {/* section inicial */}
      <section className="bg-svg-hero bg-no-repeat bg-contain bg-left-top">
        <Hero />
      </section>
      {/* section sobre nós */}
      <section className="bg-svg-about2 bg-no-repeat bg-cover bg-center py-section_separator_mobile md:py-section_separator_desktop">
        <Sobre/>
      </section>

      {/* secrion Desing */}
      <section className="bg-svg-desing bg-no-repeat bg-cover bg-center pb-section_separator_mobile md:pb-section_separator_desktop">
        <Desing />
      </section>
      {/* section links        */}
      <section className="bg-svg-end bg-no-repeat bg-contain bg-right-bottom">
        <End />
      </section>
    </main>
  );
}

export default App;
