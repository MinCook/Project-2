import section41 from "../../../Assets/image/section41.webp"
import section42 from "../../../Assets/image/section42.webp"
import section43 from "../../../Assets/image/section43.webp"
import section431 from "../../../Assets/image/section431.webp"
import section432 from "../../../Assets/image/section432.webp"
import section433 from "../../../Assets/image/section433.webp"
import section434 from "../../../Assets/image/section434.webp"
import section435 from "../../../Assets/image/section435.webp"
import section436 from "../../../Assets/image/section436.webp"
import section42logo from "../../../Assets/image/section42logo.webp"
import { Col, Row,QRCode, Space } from "antd";

function SectionFour() {
  return (
    <>
      <div className="layoutsearch__sectionfour">
        <div className="layoutsearch__sectionfour__part1">
          <Row>
            <Col span={12}>
              <div className="layoutsearch__sectionfour__part1__left">
                <img src={section41} />
              </div>
            </Col>

          <Col span={12}>
            <h2>Kiến tạo sự nghiệp của riêng bạn với ứng dụng TopCV</h2>
            <h3>“Tất cả trong một”</h3>
            <p>Trải nghiệm tạo CV, tìm việc, ứng tuyển và hơn thế nữa - chỉ với một ứng dụng duy nhất. Bắt đầu ngay hôm nay!</p>
          <h3>Tải ứng dụng ngay</h3>
          <div className="layoutsearch__sectionfour__part1__right" >
          <div className="layoutdefault__footer__rowone__QR">
              <Space direction="vertical" align="center">
                <QRCode type="svg" value="https://ant.design/" size={160} />
              </Space>
            </div>
          <div className="layoutsearch__sectionfour__part1__right__img">
            <img src={section42}/>
            <img src={section43}/>
          </div>
          </div>
          </Col>


          </Row>
        </div>

        <div className="layoutsearch__sectionfour__part2">
          <div className="layoutsearch__sectionfour__part2__header">
            <h1>Con số ấn tượng</h1>
            <div className="layoutsearch__sectionfour__part2__header__title">
              TopCV là công ty công nghệ nhân sự (HR Tech) hàng đầu Việt Nam. Với năng lực lõi là công nghệ, đặc biệt là trí tuệ nhân tạo (AI), sứ mệnh của TopCV đặt ra cho mình là thay đổi thị trường tuyển dụng - nhân sự ngày một hiệu quả hơn. Bằng công nghệ, chúng tôi tạo ra nền tảng cho phép người lao động tạo CV, phát triển được các kỹ năng cá nhân, xây dựng hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng và tiếp cận với các cơ hội việc làm phù hợp.
              </div>
         
          <div className="layoutsearch__sectionfour__part2__header__row">

            <div className="layoutsearch__sectionfour__part2__header__row__item">
            <div className="layoutsearch__sectionfour__part2__header__row__item__background">
              <h2>540.000+</h2>
              <span>Nhà tuyển dụng uy tín</span>
              <p>Các nhà tuyển dụng đến từ tất cả các ngành nghề và được xác thực bởi TopCV</p>
            </div>
            </div>

            <div className="layoutsearch__sectionfour__part2__header__row__item">
            <div className="layoutsearch__sectionfour__part2__header__row__item__background">
              <h2>200.000+</h2>
              <span>Doanh nghiệp hàng đầu</span>
              <p>TopCV được nhiều doanh nghiệp hàng đầu tin tưởng và đồng hành, trong đó có các thương hiệu nổi bật như Samsung, Viettel, Vingroup, FPT, Techcombank,...</p>
            </div>
            </div>

          </div>

          <div className="layoutsearch__sectionfour__part2__header__row2">
            
            <div className="layoutsearch__sectionfour__part2__header__row__item">
            <div className="layoutsearch__sectionfour__part2__header__row__item__background">
              <h2>2.000.000+</h2>
              <span>Việc làm đã được kết nối</span>
              <p>TopCV đồng hành và kết nối hàng nghìn ứng viên với những cơ hội việc làm hấp dẫn từ các doanh nghiệp uy tín.</p>
            </div> 
            </div>


            <img src={section42logo}/>
         


            <div className="layoutsearch__sectionfour__part2__header__row__item">
             <div className="layoutsearch__sectionfour__part2__header__row__item__background">
             <h2>1.200.000+</h2>
              <span>Lượt tải ứng dụng</span>
             <p>Hàng triệu ứng viên sử dụng ứng dụng TopCV để tìm kiếm việc làm, trong đó có 60% là ứng viên có kinh nghiệm từ 3 năm trở lên.</p> 
             </div>
            </div>

          </div>
          </div>
          <div className="layoutsearch__sectionfour__part2__footer"></div>
        </div>














        
        <div className="layoutsearch__sectionfour__part3">
          <h2>Báo chí nói về TopCV</h2>
          <Row>
            <Col span={4}>
              <div>
                <img src={section431}/>
              </div>
            </Col>
            <Col span={4}>
              <div>
                <img src={section432}/>
              </div>
            </Col>
            <Col span={4}>
              <div>
                <img src={section433}/>
              </div>
            </Col>
            <Col span={4}>
              <div>
                <img src={section434}/>
              </div>
            </Col>
            <Col span={4}>
              <div>
                <img src={section435}/>
              </div>
            </Col>
            <Col span={4}>
              <div>
                <img src={section436}/>
              </div>
            </Col>
          </Row>
        </div>
      
      </div>
    </>
  );
}
export default SectionFour;
