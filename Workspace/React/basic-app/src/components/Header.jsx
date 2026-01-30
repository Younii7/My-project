function Header({ name, title }) {
  return (
    <header className="header">
      <h3>{name}의 헤더입니다.</h3>
      <h3>제목은 {title}</h3>
    </header>
  );
}

export default Header;