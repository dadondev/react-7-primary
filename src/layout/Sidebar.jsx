import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="ld:bg-[#ebebeb] lg:block h-full md:bg-white lg:max-w-[170px]">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="cursor-pointer drawer-button bg-[#ebebeb] rounded-[50%] flex items-center justify-center w-10 h-10 p-0 border-none no-animation hover:bg-[#ebebeb] absolute top-3 z-10 right-3 lg:static lg:hidden"
          >
            a
          </label>
        </div>
        <div className="drawer-side pt-16 lg:p-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base text-black">
            {/* Sidebar content here */}
            <Link to="" className="mb-3 linkSide">
              <a>Test</a>
            </Link>
            <Link to="limit" className="linkSide">
              <a>Limiting Reacourdces</a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
