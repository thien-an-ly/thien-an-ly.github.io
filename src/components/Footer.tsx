export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-secondaryVariant 
    pb-4 pt-2
    font-body font-light text-primaryVariant"
    >
      <div className="container mx-auto text-center">
        <div className="mt-2">
          Reach me via{" "}
          <a
            href="mailto:lythienan164@gmail.com"
            target="_blank"
            rel="noreferer"
            className="inline-block w-9 
            font-normal text-secondary 
            hover:font-bold hover:text-primary"
          >
            email
          </a>{" "}
          or through{" "}
          <a
            href="/contact"
            className="inline-block w-7 
            font-normal text-secondary 
            hover:font-bold hover:text-primary"
          >
            here
          </a>
          .
        </div>
      </div>
    </footer>
  );
};
