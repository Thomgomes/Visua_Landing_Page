import Header from "./header";
import Text_Box from "./text_box";

const Hero = () => {
  return (
    <section className="bg-svg-hero bg-no-repeat bg-contain bg-left-top">
      <div className="mx-base_mobile lg:mx-base_desktop ">
        <Header />
        <div className="mx-mid_mobile lg:mx-mid_desktop">
          <div className="mx-mid_mobile lg:mx-mid_desktop">
            <h1 className="text-6xl font-extrabold">Visua</h1>
            <p className="text-sm text-gray ">
              Descubra os recursos incríveis que tornam o mundo mais simples
              para todos!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-3 justify-center items-center py-hero_space_mobile lg:py-hero_space_desktop">
            <Text_Box
              title="Intereja com Objetos"
              text="Use sua câmera para interagir com objetos ao seu redor"
            />
            <Text_Box
              title="Histórico Inteligente"
              text="Aproveite o sistema de histórico para acessar objetos já escaneados sem a necessidade de escaneá-los novamente, e salve suas interações favoritas."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
