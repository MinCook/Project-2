import "../../../Assets/scss/layoutAdmin.scss";
import { Outlet, useNavigate } from "react-router-dom";
import {
  BankOutlined,
  FileTextOutlined,
  ProjectOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/image/adminLogo.jfif"

function LayoutAdmin() {
  const navigate = useNavigate();
  const { Header, Footer, Sider, Content } = Layout;
  const handleLogout = () => {
    navigate("/");
  };
  const menu =[
      {
        key: "1",
        icon: <BankOutlined />,
        label:  <NavLink to="info-company">Thông tin công ty</NavLink>,
      },
      {
        key: "2",
        icon: <ProjectOutlined />,
        label: <NavLink to="manage-job">Quản lý việc làm</NavLink>,
      },
      {
        key: "3",
        icon: <FileTextOutlined />,
        label: <NavLink to="manage-cv">Quản lý CV</NavLink>,
      },
  ]
  return (
    <>
      <div className="layoutAdmin">
        <Layout>
          <Sider className="layoutAdmin__sider" theme="light">
    <div className="image">   <img src={logo}/></div>
            <Menu
              theme="light"
              items={menu}
            />
          </Sider >
          <Layout>
            <Header className="layoutAdmin__header">
              <Button onClick={handleLogout} >Đăng xuất</Button>
            </Header>
            <Content className="layoutAdmin__content" style={{minHeight:'600px'}}>
              <Outlet />
            </Content>
            <Footer className="layoutAdmin__footer">
              © 2014-2023 TopCV Vietnam JSC. All rights reserved.
            </Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
export default LayoutAdmin;
