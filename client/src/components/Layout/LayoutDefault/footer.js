import { HomeOutlined, SolutionOutlined } from "@ant-design/icons";
import { Col, Row,QRCode, Space } from "antd";
import footerLogo1 from "../../../Assets/image/footerLogo1.webp";
import footerLogo2 from "../../../Assets/image/footerLogo2.webp";
import footerLogo3 from "../../../Assets/image/footerLogo3.webp";
import footerLogo4 from "../../../Assets/image/footerLogo4.webp";

function Footer() {
  return (
    <>
      <div className="layoutdefault__footer">
        <h4>Công ty Cổ phần TopCV Việt Nam</h4>

        <Row className="layoutdefault__footer__rowone">
          <Col span={20}>
            <div className="layoutdefault__footer__rowone__title">
              <div>
                <a>
                  <SolutionOutlined />
                </a>
                <span>
                  Giấy phép đăng ký kinh doanh số: <strong> 0107307178 </strong>
                </span>
              </div>
              <div>
                <a>
                  <HomeOutlined />
                </a>
                <span>
                  Trụ sở HN:{" "}
                  <strong>
                    Tòa FS - GoldSeason số 47 Nguyễn Tuân, P.Thanh Xuân Trung,
                    Q.Thanh Xuân, Hà Nội
                  </strong>
                </span>
              </div>
              <div>
                <a>
                  <HomeOutlined />
                </a>
                <span>
                  Trụ sở HCM:{" "}
                  <strong>
                    Tòa nhà Dali, 24C Phan Đăng Lưu, P.6, Q.Bình Thạnh, TP HCM
                  </strong>
                </span>
              </div>
            </div>
          </Col>

          <Col span={4}>
            <div className="layoutdefault__footer__rowone__QR">
              <Space direction="vertical" align="center">
                <QRCode type="svg" value="https://ant.design/" size={120} />
              </Space>
            </div>
          </Col>
        </Row>

        <strong>Hệ sinh thái HR Tech của TopCV</strong>

        <Row gutter={[20, 20]} className="layoutdefault__footer__rowtwo">
          <Col span={6} className="layoutdefault__footer__rowtwo__block">
            <div className="layoutdefault__footer__rowtwo__block__wrap">
              <div className="layoutdefault__footer__rowtwo__block__wrap__img">
                <img src={footerLogo1} />
              </div>
              <span className="layoutdefault__footer__rowtwo__block__wrap__title">
                Nền tảng công nghệ tuyển dụng thông minh trên TopCV
              </span>
            </div>
          </Col>

          <Col span={6} className="layoutdefault__footer__rowtwo__block">
            <div className="layoutdefault__footer__rowtwo__block__wrap">
              <div className="layoutdefault__footer__rowtwo__block__wrap__img">
                <img src={footerLogo2} />
              </div>
              <span className="layoutdefault__footer__rowtwo__block__wrap__title">
                Nền tảng quản lý & gia tăng trải nghiệm nhân viên HappyTime.vn
              </span>
            </div>
          </Col>

          <Col span={6} className="layoutdefault__footer__rowtwo__block">
            <div className="layoutdefault__footer__rowtwo__block__wrap">
              <div className="layoutdefault__footer__rowtwo__block__wrap__img">
                <img src={footerLogo3} />
              </div>
              <span className="layoutdefault__footer__rowtwo__block__wrap__title">
                Nền tảng thiết lập và đánh giá năng lực nhân viên TestCenter
              </span>
            </div>
          </Col>

          <Col span={6} className="layoutdefault__footer__rowtwo__block">
            <div className="layoutdefault__footer__rowtwo__block__wrap">
              <div className="layoutdefault__footer__rowtwo__block__wrap__img">
                <img src={footerLogo4} />
              </div>
              <span className="layoutdefault__footer__rowtwo__block__wrap__title">
                Giải pháp quản trị tuyển dụng hiệu suất cao SHiring
              </span>
            </div>
          </Col>
        </Row>

        <div className="layoutdefault__footer__end">
          © 2014-2023 TopCV Vietnam JSC. All rights reserved.
        </div>
      </div>
    </>
  );
}
export default Footer;
