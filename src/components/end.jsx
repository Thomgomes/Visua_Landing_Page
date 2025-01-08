import Footer from "./footer";
import Link from "./links";

const End = () => {
  return (
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
      <Footer />
    </div>
  );
};

export default End;
