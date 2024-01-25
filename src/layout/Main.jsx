import Content from "./Content";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <div className="grid lg:grid-cols-[170px_1fr] max-h-full max-h-full h-full w-full md:grid-cols-1 mt-16">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;
