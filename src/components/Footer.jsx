const Footer = () => {
  const today = new Date();

  return (
    <footer className="groceries-footer">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
