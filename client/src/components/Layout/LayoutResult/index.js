import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { searchService } from "../../../Services/searchService";
import { Row, Col, Button, Tag } from "antd";
import "../../../Assets/scss/layoutSearch.scss";

function LayoutResult() {
  const [param, setParam] = useSearchParams();
  const keySearch = param.get("keySearch") || " ";
  const citySearch = param.get("city") || " ";
  const [data, setData] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await searchService(
        `jobs?keySearch=${keySearch}&city=${citySearch}`
      );
      setData(res);
    };
    fetchApi();
  }, []);

  return (
    <>
      {data && (
        <div className="layoutResult">
          <Button>
            <NavLink to="/">Quay lại</NavLink>
          </Button>
          <h3>Kết quả tìm kiếm: {data.length}</h3>
          <Row>
            {data.map((item) => (
              <Col>
                <div className="layoutResult__item">
                  <p>Vị trí: {item.name}</p>
                  <p>Lương: {item.salary}</p>
                  <p>
                    Yêu cầu:{" "}
                    {item.tags.map((skill) => (
                      <Tag>{skill}</Tag>
                    ))}
                  </p>
                  <p>
                    Thành phố:{" "}
                    {item.city.map((skill) => (
                      <Tag>{skill}</Tag>
                    ))}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
}
export default LayoutResult;
