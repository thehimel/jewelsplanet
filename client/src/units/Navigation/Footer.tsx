const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full border-t py-4">
      <div className="container mx-auto flex justify-center">
        <p>JewelsPlanet &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
