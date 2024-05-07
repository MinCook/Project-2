import Slider from "react-slick";
import NextArrow from "../../../Utils/nextArrow";
import PrevArrow from "../../../Utils/prevArrow";
import { Row, Col } from "antd";
import section31 from "../../../Assets/image/section31.webp";
import section32 from "../../../Assets/image/section32.webp";
import section33 from "../../../Assets/image/section33.webp";
import section34 from "../../../Assets/image/section34.webp";
import section35 from "../../../Assets/image/section35.webp";
import section36 from "../../../Assets/image/section36.webp";
import section37 from "../../../Assets/image/section37.webp";
import section38 from "../../../Assets/image/section38.webp";
import section39 from "../../../Assets/image/section39.webp";
import section310 from "../../../Assets/image/section310.webp";
import section311 from "../../../Assets/image/section311.webp";
import section312 from "../../../Assets/image/section312.webp";
import section321 from "../../../Assets/image/section321.webp";
import section322 from "../../../Assets/image/section322.webp";
import section323 from "../../../Assets/image/section323.webp";
import section324 from "../../../Assets/image/section324.webp";
import section325 from "../../../Assets/image/section325.webp";


function SectionThree() {
  const settings = {
    arrow: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="layoutsearch__sectionthree">
        <div className="layoutsearch__sectionthree__part1">
          <h1>Top ngành nghề nổi bật</h1>
          <p>Bạn muốn tìm việc mới? Xem danh sách việc làm</p>

          <Slider {...settings}>
            <div className="slider__box">
              <div>
                <img src={section31} />
                <span>Kinh doanh/ Bán hàng</span>
                <p>12.229 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section32} />
                <span>IT phần mềm</span>
                <p>2.997 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section33} />
                <span>Công nghệ thông tin</span>
                <p>2.576 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section34} />
                <span>Hành chính / Văn phòng</span>
                <p>3.671việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section35} />
                <span>Giáo dục đào tạo</span>
                <p>3.260 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section36} />
                <span>Tư vấn</span>
                <p>4.258 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section37} />
                <span>Marketing/ Truyền thông</span>
                <p>5.608 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section38} />
                <span>Vận tải/ Kho vận</span>
                <p>1.064 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section39} />
                <span>Kiểm toán/ Kế toán</span>
                <p>2.536 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section310} />
                <span>Thư ký/ Trợ lý</span>
                <p>668 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section311} />
                <span>Thiết kế đồ họa</span>
                <p>1.032 việc làm</p>
              </div>
            </div>

            <div className="slider__box">
              <div>
                <img src={section312} />
                <span>Xây dựng</span>
                <p>1.178 việc làm</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="layoutsearch__sectionthree__part2">
          <h2> Giải thưởng và thành tựu</h2>
        <div className="layoutsearch__sectionthree__part2__list">
          <Row>
            <Col span={12}>
            <div className="layoutsearch__sectionthree__part2__list__item">
              <img src={section321}/>
              <h6>Top 10 doanh nghiệp ICT Việt Nam 2022</h6>
            </div>
            </Col>

            <Col  span={12}>
            <div className="layoutsearch__sectionthree__part2__list__item">
              <img src={section322}/>
              <h6>TopCV được vinh danh trong Top 10 doanh nghiệp công nghệ thông tin Việt Nam 2021</h6>
            </div>
            </Col>

            <Col  span={12}>
            <div className="layoutsearch__sectionthree__part2__list__item">
              <img src={section323}/>
              <h6>Giải thưởng Sao Khuê 2022</h6>
            </div>
            </Col>

            <Col  span={12}>
            <div className="layoutsearch__sectionthree__part2__list__item">
              <img src={section324}/>
              <h6>Sản phẩm Công nghệ số Make in Viet Nam 2022</h6>
            </div>
            </Col>


            <Col  span={12}>
            <div className="layoutsearch__sectionthree__part2__list__item">
              <img src={section325}/>
              <h6>Top 15 Google for Startups Accelerator: Southeast Asia</h6>
            </div>
            </Col>

          </Row>
        </div>
        </div>
      </div>
    </>
  );
}
export default SectionThree;
