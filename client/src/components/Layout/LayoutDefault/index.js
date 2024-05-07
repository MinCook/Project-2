import { Layout } from "antd";
import"../../../Assets/scss/layoutDefault.scss"
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  return (
    <>
      <Layout className="layoutdefault">
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </>
  );
}
export default LayoutDefault;
