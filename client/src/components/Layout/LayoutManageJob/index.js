// import "../../../Assets/scss/layoutManage.scss";
// import "../../../Assets/scss/layoutSearch.scss";

import { deleteJob, getJob } from "../../../Services/job";
import { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Row, Col, Button, Tag } from "antd";

function LayoutManageJob() {
  const [data, setData] = useState();
  const fetchApi = async () => {
    const res = await getJob();
    setData(res);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const handleClick = async (event) => {
    const id = event.currentTarget.id;
    const del = await deleteJob(id);
    fetchApi();
  };
  return (
    <>
      <div className="layoutManageCV">
        <h2>DANH SÁCH CẦN TUYỂN</h2>
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
                <strong >{item.name}</strong>
                <p>
                  Ngôn ngữ:
                  {item.tags.map((language) => (
                    <Tag>{language}</Tag>
                  ))}
                </p>
                <p>Lương: {item.salary}$</p>
                <p>
                  Thành phố:
                  {item.city.map((city) => (
                    <Tag>{city}</Tag>
                  ))}
                </p>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}
export default LayoutManageJob;
