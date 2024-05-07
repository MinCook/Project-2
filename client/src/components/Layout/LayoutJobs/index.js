import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { searchService } from "../../../Services/searchService";
import Header from "../LayoutDefault/header";
import Footer from "../LayoutDefault/footer";
import { Button } from "antd";
function LayoutJobs() {
  const param = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const res1 = await searchService("jobs");
      const Item1 = res1.find((item) => (item.id == param.id ));
      const res2 = await searchService("company");
      const Item2 = res2.find((item) => item.id = Item1.id);
      const final = { ...Item1, ...Item2 };
      setData(final);
    };
    fetchApi();
  }, [param]);

  return (
    <>
      <Header />
      <div className="resultSearch">
        <Button ><NavLink to="/">Trang chủ</NavLink></Button>
        { data &&(
          <>
          <h1>{data.name}</h1>
          <table>
            <tr>
              <th>Tên công ty:</th>
              <td>{data.companyName}</td>
            </tr>


            <tr>
              <th>Tuyển dụng:</th>
              <td>{data.name}</td>
            </tr>


            <tr>
              <th>Lương:</th>
              <td>${data.salary}</td>
            </tr>


            <tr>
              <th>Mô tả :</th>
              <td>{data.description}</td>
            </tr>

            <tr>
              <th>Số lượng :</th>
              <td>{data.quantityPeople}</td>
            </tr>


            <tr>
              <th>Địa chỉ:</th>
              <td>{data.address}</td>
            </tr>



          </table>
          </>
        )

        }
      </div>
      <Footer />
    </>
  );
}
export default LayoutJobs;
