import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Col, Row, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../Assets/scss/layoutLogin.scss";
import loginLogo from "../../../Assets/image/loginLogo.webp";
import { checkLogin } from "../../../Services/account";

function LayoutLogin() {
  const navigate = useNavigate();
  const [noti, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const name = values.username;
    const password = values.password;
    const check = await checkLogin(name, password);
    if (check) { 
      navigate("/admin");
    } else {
      noti.error({
        message: `Mật khẩu không đúng`,
        placement: "top",
      });
      form.resetFields();
    }
  };

  return (
    <>
      <div className="layoutLogin">
        <div className="layoutLogin__left">
          <div className="layoutLogin__left__header">
            {contextHolder}
            <h1>Chào mừng bạn đã quay trở lại</h1>
            <p>
              Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp
              lý tưởng
            </p>
          </div>

          <Row justify="space-around" align="middle">
            <Col span={12}>
              <Form onFinish={onFinish}>
                <Form.Item name="username">
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <a className="login-form-forgot" href="">
                    Quên mật khẩu
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    ĐĂNG NHẬP
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <div className="layoutLogin__left__footer">
            <strong>Bạn gặp khó khăn khi tạo tài khoản?</strong>
            <p>
              Bạn chưa có tài khoản?{" "}
              <NavLink to="/register">Đăng ký ngay</NavLink>
            </p>
            <p>Vui lòng gọi tới số (024) 6680 5588 (giờ hành chính).</p>
            <p>© 2016. All Rights Reserved. TopCV Vietnam JSC.</p>
          </div>
        </div>

        <div className="layoutLogin__right">
          <div className="layoutLogin__right__background">
            <div className="layoutLogin__right__background__title">
              <img src={loginLogo} />
              <h1>
                Tiếp lợi thế <br /> Nối thành công
              </h1>
              <p>
                TopCV - Hệ sinh thái nhân sự tiên phong ứng dụng công nghệ tại
                Việt Nam
              </p>
            </div>
            <div className="layoutLogin__right__background__arow"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LayoutLogin;
