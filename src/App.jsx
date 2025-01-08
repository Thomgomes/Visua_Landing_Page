import Hero from "./components/hero";
import Link from "./components/links";

function App() {
  return (
    // <div className="mx-base_mobile lg:mx-base_desktop">
    <>
      {/* section inicial */}
      <Hero />
      {/* section sobre nós */}
      <section className="bg-svg-about2 bg-no-repeat bg-cover bg-center ">
        <div className="mx-base_mobile lg:mx-base_desktop flex flex-col text-center p">
          <div>
            <h1 className="text-6xl font-extrabold">Sobre Nós</h1>
          </div>
          <div className="text-xl lg:px-about_and_final pt-mid_desktop">
            <p>
              O Visua é um projeto acadêmico desenvolvido como parte da
              disciplina de Design Centrado no Ser Humano, com o objetivo de
              promover autonomia e inclusão para pessoas com deficiência visual.
              Este aplicativo permite o escaneamento de objetos e códigos de
              barras, fornecendo informações detalhadas, acessíveis e claras
              sobre os itens identificados.
            </p>
            <p>
              Esta página é uma reformulação do Visua, com o objetivo de
              transformá-lo em um design mais intuitivo e funcional,
              proporcionando uma melhor experiência para o usuário.
            </p>
          </div>
          <div className="pt-mid_desktop pb-section_separator_mobile lg:pb-section_separator_desktop">
            <button className="px-5 py-1 bg-black text-2xl font-bold rounded-2xl">
              Conheça o Projeto Inicial
            </button>
          </div>
        </div>
      </section>
      {/* secrion Desing */}
      <section className="h-screen w-screen bg-svg-desing bg-no-repeat bg-cover bg-center">
        Desing
      </section>
      {/* <section className="h-screen w-screen bg-svg-desing bg-no-repeat bg-cover bg-center">Desing</section> */}

      {/* section links        */}
      <section className="bg-svg-end bg-no-repeat bg-contain bg-right-bottom">
        <div className="mx-base_mobile lg:mx-base_desktop flex flex-col text-center p">
          <div>
            <h1 className="text-6xl font-extrabold">Acesse o meu Portfólio</h1>
            <p className="text-3xl font-semibold">E outras redes Sociais!</p>
          </div>
          <nav className="pt-20 pb-about_and_final flex justify-center gap-5">
            <Link
              link="https://www.instagram.com/thom_gomes/"
              img="/instagram.svg"
              alt="Instagram"
            />
            <Link
              link="https://thomgomes.vercel.app"
              img="/thomty.gif"
              alt="Thomty logo"
            />
            <Link
              link="https://github.com/Thomgomes"
              img="/github.svg"
              alt="Github"
            />
            
          </nav>
        </div>
      </section>
    </>
    // </div>
  );
}

export default App;
