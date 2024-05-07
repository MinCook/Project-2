import { Button, Form, Input, Upload, DatePicker,notification } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "../../../Assets/scss/layoutApply.scss";
import { createCV } from "../../../Services/cv";
import avatar from "../../../Assets/image/avatar.webp";
import {  useState } from "react";
import { NavLink } from "react-router-dom";

function LayoutApply() {
  const [nofi, contextHolder] = notification.useNotification();
const [reload, setReload] = useState(false)
  const [data, setData] = useState({
      name: "",
      phone: "",
      email: "",
      facebook: "",
      address: "",
      position: "",
      target: "",
  })
  const handleChange =   (values) => {
    const value = values.target.value;
    setData({
      ...data,
      [values.target.name]: value,
    })

  }
  const handeClick =  ()=>{
      const cv = createCV(data);
      nofi.success({
        message: 'XIN CHÚC MỪNG BẠN',
        description:
          'ĐÃ NỘP CV THÀNH CÔNG',
         placement: 'top',
      });
      setData([])
     setTimeout(()=>{
      window.location.reload(false);
     },100)
  }

  return (
    <>
      <div className="layoutApply">
      <Button className="btn__back" ><NavLink to="/">Trang chủ</NavLink></Button>
        <h1>HỒ SƠ XIN VIỆC</h1>
        {contextHolder}      
        <div className="layoutApply__section1">
          <Form className="form1">
            <Form.Item >
              <Input
                prefix={<PhoneOutlined />}
                type="text"
                placeholder="Phone"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              ></Input>
            </Form.Item>

            <Form.Item >
              <Input
                type="text"
                name="email"
                placeholder="Email"
                prefix={<MailOutlined />}
                value={data.email}
                onChange={handleChange}
              ></Input>
            </Form.Item>

            <Form.Item >
              <Input
                type="text"
                placeholder="Facebook"
                name="facebook"
                prefix={<FacebookOutlined />}
                value={data.facebook}
                onChange={handleChange}
              ></Input>
            </Form.Item>

            <Form.Item >
              <Input
                type="text"
                name="address"
                placeholder="Address"
                prefix={<HomeOutlined />}
                value={data.address}
                onChange={handleChange}
              ></Input>
            </Form.Item>
          </Form>
        </div>

        <div className="layoutApply__section2">
          <Form className="form2">

            <Form.Item className="form2__right">
              <Form.Item className="form2__right__name" >
                <Input type="text" placeholder="Họ và tên"
                name="name"
                 value={data.name}
                 onChange={handleChange}></Input>
              </Form.Item>

              <Form.Item className="form2__right__position" >
                <Input type="text" placeholder="vị trí"
                name="position"
                 value={data.position}
                 onChange={handleChange}></Input>
              </Form.Item>

              <Form.Item className="form2__right__target" >
                <Input type="text" placeholder="mục tiêu" 
                name="target"  
                value={data.target} 
                onChange={handleChange}></Input>
              </Form.Item>

            </Form.Item>

            <Form.Item>
              <Upload>
                <div className="form2__img">
                  <img src={avatar} />
                </div>
              </Upload>
            </Form.Item>
          </Form>
        </div>

        <div className="layoutApply__section3">
          <h3>Kinh nghiệm làm việc</h3>
          <div className="layoutApply__section3__form1">
            <Form>
              <Form.Item>
                <DatePicker.RangePicker />
              </Form.Item>
              <Form.Item>
                <Input type="text" placeholder="Tên công ty"></Input>
              </Form.Item>
            </Form>
          </div>
          <div className="layoutApply__section3__form2">
            <Form.Item>
              <Input type="text" placeholder="Vị trí công việc" ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                placeholder="Mô tả kinh nghiệm của bạn"
              ></Input>
            </Form.Item>
          </div>
        </div>

        <div className="layoutApply__section4">
          <div className="layoutApply__section4__form1">
            <h3>Học vấn</h3>
            <Form>
              <Form.Item>
                <Input type="text" placeholder="Tên trường học"></Input>
              </Form.Item>
              <Form.Item>
                <Input type="text" placeholder="Ngành học/ Môn học"></Input>
              </Form.Item>
              <Form.Item>
                {" "}
                <DatePicker.RangePicker />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  placeholder="Mô tả quá trình học tập và thành tích của bạn"
                ></Input>
              </Form.Item>
            </Form>
          </div>
          <div className="layoutApply__section4__form2">
            <h3>Các kỹ năng</h3>
            <Form layout="vertical">
              <Form.Item>
                <Input type="text" placeholder="Tên kỹ năng"></Input>
              </Form.Item>
              <Form.Item>
                <Input type="text" placeholder="Mô tả kỹ năng"></Input>
              </Form.Item>
            </Form>
          </div>

          <div className="layoutApply__section4__form3">
            <h3>Chứng chỉ</h3>

            <Form >
              <Form.Item>
                <Input type="text" placeholder="Thời gian"></Input>
              </Form.Item>
              <Form.Item>
                <Input type="text" placeholder="Tên chứng chỉ"></Input>
              </Form.Item>
            </Form>
          </div>
        </div>
        

        <Button className="btn__apply" onClick={handeClick}>Nộp đơn</Button>
        

      </div>
    </>
  );
}
export default LayoutApply;
