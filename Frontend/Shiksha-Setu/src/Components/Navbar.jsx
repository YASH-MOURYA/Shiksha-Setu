export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <a href="/">Home</a> |
      <a href="/login"> Login </a> |
      <a href="/register"> Register </a> |
      <a href="/courses"> Courses </a>
    </nav>
  );
}
