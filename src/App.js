import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} hideProgressBar />
    </>
  );
};

export default App;
