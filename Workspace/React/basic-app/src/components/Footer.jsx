function Footer({ name, email }) {
  return (
    <footer className="footer">
      <h3>{name}의 풋터(footer) 컴포넌트입니다.</h3>
      <hr />
      <p>email: {email}</p>
    </footer>
  );
}

export default Footer;
