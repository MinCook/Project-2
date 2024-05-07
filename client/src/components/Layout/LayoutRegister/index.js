import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification, Spin } from "antd";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import "../../../Assets/scss/layoutLogin.scss";
import loginLogo from "../../../Assets/image/loginLogo.webp";
import { useState } from "react";
import { checkName, createAccount } from "../../../Services/account";
import { generateToken } from "../../../Utils/generateToken";

function LayoutRegister() {
  const [loading, setLoading] = useState(false);
  const [noti, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    const name = values.name;
    const password = values.password;
    const checkPassword = values.checkPassword;
    const getToken = generateToken();
    const options = {
      name: name,
      password: password,
      token: getToken,
    };

    if (password === checkPassword) {
      const check = await checkName(name);
      if (check.length > 0) {
        noti.error({
          message: `Tài khoản đã đăng ký`,
          placement: "top",
        });
        form.resetFields();
      } else {
        const create = await createAccount(options);
        noti.success({
          message: `Đã tạo thành công`,
          placement: "top",
        });
        form.resetFields();
      }
    } 
    else {
      setTimeout(() => {
        noti.error({
          message: `Mật khẩu không đúng!`,
          placement: "top",
        });
        form.setFieldsValue({
          password: "",
          checkPassword: "",
        });
      }, 100);
    }
  };

  return (
    <>
      <div className="layoutLogin">
        <div className="layoutLogin__left">
          <div className="layoutLogin__left__header">
            {contextHolder}
            <h1>Chào mừng bạn đến với TopCV</h1>
            <p>
              Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp
              lý tưởng
            </p>
          </div>

          <Row justify="space-around" align="middle">
            <Col span={12}>
              <Spin spinning={loading}>
                <Form onFinish={handleFinish} form={form}>
                  <span>Tên đăng nhập</span>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>

                  <span>Mật khẩu</span>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>

                  <span>Xác nhận mật khẩu</span>
                  <Form.Item
                    name="checkPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      ĐĂNG KÍ
                    </Button>
                  </Form.Item>
                </Form>
              </Spin>
            </Col>
          </Row>
          <div className="layoutLogin__left__footer">
            <p>
              Bạn đã có tài khoản? <NavLink to="/login">Đăng nhập ngay</NavLink>
            </p>
            <strong>Bạn gặp khó khăn khi tạo tài khoản?</strong>
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
export default LayoutRegister;
