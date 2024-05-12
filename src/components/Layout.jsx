import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <h1 className="text-center pt-1 pb-3">Quiz Maker</h1>

      <Outlet />
    </Container>
  );
};

export default Layout;
