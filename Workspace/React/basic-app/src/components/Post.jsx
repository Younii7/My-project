const Post = () => {
  const subjects = ["웹서비스 프로그래밍", "자바", "프론트엔드"];

  return (
    <ul className="subject-list">
      {subjects.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default Post;
