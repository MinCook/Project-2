import "../../Assets/scss/layoutSearch.scss";
import { useState, useEffect } from "react";
import { getJob } from "../../Services/job";
import { Tag } from "antd";
import { NavLink } from "react-router-dom";

function ApiJobs(props) {
  const infor = props;
  const select = infor.page[0].select;
  const page = infor.page[0].page;
  const [data, setData] = useState([]);

  useEffect(() => {
    var start = (page - 1) * 4 +1;
    var end = start + 3;

    const fetchApi = async () => {
      const res = await getJob()
      if (select === "HighToLow") {
        var newData = res.sort( (item1, item2) => item2.salary-item1.salary ).splice(start-1,end)
        
      } 
      else  {
      var newData = res.sort( (item1, item2) => item1.salary-item2.salary).splice(start-1,end)
      }
      setData(newData)
    };

    fetchApi();
  }, [select, page]);

  return (
    <>
      {data &&
        data.map((item) => (
          <>
            <div className="ApiJobs__item">
              <div className="ApiJobs__item__wrap">
                <Tag color="green">{item.name}</Tag>
                <p>
                  Ngôn ngữ:{" "}
                  {item.tags.map((language) => (
                    <Tag>{language}</Tag>
                  ))}
                </p>
                <p>Lương: {item.salary}$</p>
                <p>
                  Thành phố:{" "}
                  {item.city.map((city) => (
                    <Tag>{city}</Tag>
                  ))}
                </p>
                <h6>
                  <NavLink to={`/jobs/${item.id}`}>Xem thêm</NavLink>
                </h6>
              </div>
            </div>
          </>
        ))}
    </>
  );
}
export default ApiJobs;
