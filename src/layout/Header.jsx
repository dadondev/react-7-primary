import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container fixed z-10 top-0 mx-auto w-full bg-white shadow-[0px_0px_2px_1px_rgba(0,0,0,.25)] max-w-full flex justify-between px-6 max-h-[64px] h-full items-center">
      <div>
        <Link to="" className="text-[24px]">
          dummy<b>JSON</b>
        </Link>
      </div>
      <div>
        <ul className="text-base text-black flex items-center gap-4">
          <NavLink to="home" className="aLink">
            Home
          </NavLink>
          <NavLink to="" className="aLink">
            Docs
          </NavLink>
          <a
            href="https://github.com/Ovi/DummyJSON"
            target="blank"
            className="aLink"
          >
            Github
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
