import { deleteCompany, getCompany } from "../../../Services/company";
import { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Row, Col, Button } from "antd";

function LayoutInfoCompany() {
  const [data, setData] = useState();
  const fetchApi = async () => {
    const res = await getCompany();
    setData(res);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const handleClick = async (event) => {
    const id = event.currentTarget.id;
    const del = await deleteCompany(id);
    fetchApi();
  };
  return (
    <>
      <div className="layoutManageCV">
        <h2>DANH SÁCH CÔNG TY CẦN TUYỂN</h2>
        <Row>
          {data &&
            data.map((item) => (
              <Col span={5} className="item">
                <Button
                  className="item__btn"
                  id={item.id}
                  onClick={handleClick}
                >
                  <CloseOutlined />
                </Button>

                <p>{item.companyName}</p>

                <p>Số điện thoại: {item.phone}</p>
                <p>Địa chỉ: {item.address}</p>
                <p>Website: {item.website}</p>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}
export default LayoutInfoCompany;
