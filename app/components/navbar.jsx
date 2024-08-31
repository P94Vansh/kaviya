import style from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav id={style.nav}>
      <div id={style.logo}><img src="/pics/KAVIYA.png" width={70}  height={70} /></div>
      <div id={style.menu}>
        <hr />
        <hr />
        <hr />
      </div>
    </nav>
  );
}