const Footer = () => {
  return (
    <footer className="text-white text-center pb-4">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">thom_gomes</span> /{" "}
        <span className="font-semibold">thomty</span>. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
