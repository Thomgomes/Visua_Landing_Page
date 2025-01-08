const Sobre = () => {
  return (
    <div className="mx-base_mobile lg:mx-base_desktop flex flex-col text-center p">
      <div>
        <h1 className="text-6xl font-extrabold">Sobre Nós</h1>
      </div>
      <div className="text-xl lg:px-about_and_final pt-mid_desktop">
        <p>
          O Visua é um projeto acadêmico desenvolvido como parte da disciplina
          de Design Centrado no Ser Humano, com o objetivo de promover autonomia
          e inclusão para pessoas com deficiência visual. Este aplicativo
          permite o escaneamento de objetos e códigos de barras, fornecendo
          informações detalhadas, acessíveis e claras sobre os itens
          identificados.
        </p>
        <p>
          Esta página é uma reformulação do Visua, com o objetivo de
          transformá-lo em um design mais intuitivo e funcional, proporcionando
          uma melhor experiência para o usuário.
        </p>
      </div>
      <div className="pt-mid_desktop pb-section_separator_mobile lg:pb-section_separator_desktop">
        <a
          className="px-5 py-1 bg-black text-2xl font-bold rounded-2xl"
          href="https://remarkable-blancmange-895ad4.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça o Projeto Inicial
        </a>
      </div>
    </div>
  );
};

export default Sobre;
