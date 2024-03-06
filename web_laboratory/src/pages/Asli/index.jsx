import { lazy } from "react";
import LoginContent from "../../content/LoginContent.json";

const Login = lazy(() => import("../../components/LoginForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Asli = () => {
  return (
    <Container>
      <ScrollToTop />
      <Login
        title={LoginContent.title}
        content={LoginContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Asli;
