import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Header from "./layout/Header";
import "./App.css";
import Main from "./layout/Main";
const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div className="lf:grid lg:grid-rows-[64px_1fr] h-full overflow-hidden">
        <Header></Header>
        <Main />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
