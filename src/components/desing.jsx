import Slider_Carrossel from "./slider";

const Desing = () => {
  return (
    <div className="flex flex-col text-center p">
      <h1 className="text-6xl font-extrabold">Desing</h1>
      {/* Carrosel Mobile */}
      <Slider_Carrossel title="Mobile" data="mobile" />
      {/* Carrosel Desktop */}
      <Slider_Carrossel title="Desktop" data="desktop" />
    </div>
  );
};

export default Desing;
