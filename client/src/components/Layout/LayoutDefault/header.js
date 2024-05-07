import { BellOutlined, CommentOutlined } from "@ant-design/icons";
import headerLeft from "../../../Assets/image/headerLeft.webp";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();

  const Login = () => {
    Navigate(`/login`);
  };
  const Register = () => {
    Navigate(`/register`);
  };
  const Apply = () => {
    Navigate(`/apply`);
  };


  return (
    <>
      <div className="layoutdefault__header">
        <Row>
          <Col span={4} className="layoutdefault__header__right">
            <div className="layoutdefault__header__right__logo">
              <img src={headerLeft} />
            </div>
          </Col>

          <Col span={12} className="layoutdefault__header__middle">
            <ul className="layoutdefault__header__middle__menu">
              <li className="layoutdefault__header__middle__menu__title">
                <p>Việc làm</p>
              </li>
              <li className="layoutdefault__header__middle__menu__title">
                <p>Hồ sơ & CV</p>
              </li>
              <li className="layoutdefault__header__middle__menu__title">
                <p>Công ty</p>
              </li>
              <li className="layoutdefault__header__middle__menu__title">
                <p>Phát triển sự nghiệp</p>
              </li>
            </ul>
          </Col>

          <Col span={8} className="layoutdefault__header__left">
            <div>
              <a>
                <BellOutlined />
              </a>
            </div>
            <div>
              <a>
                <CommentOutlined />
              </a>
            </div>
            <div onClick={Login} className="nav">Đăng Nhập</div>
            <div onClick={Register} className="nav">Đăng Ký</div>
            <div onClick={Apply} className="nav">Nộp CV</div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Header;
