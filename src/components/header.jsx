import Link from "./links";

const Header = () => {
  return (
    <header className="py-5">
      <div>
        <nav>
          <ul className="flex justify-between">
            <div>
              <Link
                link="https://thomgomes.vercel.app"
                img="/thomty.gif"
                alt="Thomty logo"
              />
            </div>
            <div>
              <Link
                link="https://visuaweb.vercel.app/"
                img="/logo_visua.png"
                alt="Visua logo"
              />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
