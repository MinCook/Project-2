import { useEffect, useState } from "react";
import { deleteCV, getCV } from "../../../Services/cv";
import { Row, Col, Button } from "antd";
import "../../../Assets/scss/layoutManage.scss";
import { CloseOutlined } from "@ant-design/icons";


function LayoutManageCV() {
  const [data, setData] = useState();

  const fetchApi = async () => {
    const res = await getCV();
    setData(res);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const handleClick= async(event )=>{
    const id =event.currentTarget.id;
   const del = await deleteCV(id);
    fetchApi()
  }
  return (
    <>
      <div className="layoutManageCV">
        <h2>DANH SÁCH HỒ SƠ XIN VIỆC</h2>
        <Row>
          {data &&
            data.map((item) => (
              <Col span={5} className="item">
                <Button className="item__btn" id={item.id} onClick={handleClick}>
                  <CloseOutlined />
                </Button>
                <p>Họ và tên: {item.name}</p>
                <p>Số điện thoại: {item.phone}</p>
                <p>Email: {item.email}</p>
                <p>Vị trí ứng tuyển: {item.position}</p>
                <p>Mục tiêu bản thân: {item.target}</p>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}
export default LayoutManageCV;



// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 1
// },
// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 2
// },
// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 3
// },
// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 4
// },
// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 5
// },
// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 6
// },
// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 7
// },
// {
//   "name": "Trần hoàng công minh",
//   "phone": "0905964129",
//   "email": "tranminh20@gmail.com",
//   "facebook": "minhtran",
//   "address": "156 tran cao van",
//   "position": "frontend",
//   "target": "Lorem",
//   "id": 8
// }