import { Input, Select, Form, Button, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import sectiononeinner from "../../../Assets/image/section1inner.webp";
import section1find from "../../../Assets/image/section1--find.webp";
import section1company from "../../../Assets/image/section1--company.webp";
import { date } from "../../../Utils/getDate";
import { useNavigate } from "react-router-dom";
import Chart from "./chart";


function SectionOne() {
  const datetime = date();
  const navigate = useNavigate()
  const menu = [
    {
      key: 1,
      value: "Hà Nội",
    },
    {
      key: 2,
      value: "Hồ Chí Minh",
    },
    {
      key: 3,
      value: "Đà Nẵng",
    },
  ];
  const onFinish = (e) => {
    const keySearch = e.keySearch ;
    const city = e.city ;
    navigate(`/jobs?keySearch=${keySearch}&city=${city}`)
  };

  return (
    <>
      <div className="layoutsearch__sectionone">
        <div className="layoutsearch__sectionone__wrap">
          <Row>
            <Col span={12}>
              <div>
                <h4>Công nghệ AI dự đoán, cá nhân hoá việc làm</h4>
                <h2>Công ty phù hợp dành cho bạn.</h2>

                <Form className="form" onFinish={onFinish}>
                  <Row>
                    <Col span={10}>
                      <Form.Item
                        name="keySearch"
                        className="form__text"
                        colon={false}
                        label={
                          <a>
                            <FontAwesomeIcon
                              icon={faMagnifyingGlass}
                              className="form__icon"
                            />
                          </a>
                        }
                      >
                        <Input
                          type="text"
                          placeholder="Nhập từ khóa tìm kiếm ..."
                        />
                      </Form.Item>
                    </Col>
                    <Col span={10}>
                      <Form.Item
                        name="city"
                        className="form__select"
                        colon={false}
                        label={
                          <a>
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="form__icon"
                            />
                          </a>
                        }
                      >
                        <Select options={menu}></Select>
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                          Tìm kiếm
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
                <div className="layoutsearch__sectionone__wrap__img">
                  <img src={sectiononeinner} />
                </div>
              </div>
            </Col>

            <Col span={12} className="form__col--right">
              <Row>
                <Col span={12} className="form__col--right--item">
                  <img src={section1find} />
                  Thị trường việc làm hôm nay:{" "}
                </Col>
                <Col span={12} className="form__col--right--item">
                  {datetime}{" "}
                </Col>
                <Col span={12} className="form__col--right--item">
                  Việc làm đang tuyển:
                </Col>
                <Col span={12} className="form__col--right--item">
                  Việc làm mới hôm nay:
                </Col>
              </Row>
              <Row>
                <Col span={12} className="form__col--right--item">
                  <img src={section1company} />
                  Nhu cầu tuyển dụng theo
                </Col>
              </Row>
              <div className="chart">
                <Chart />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default SectionOne;
