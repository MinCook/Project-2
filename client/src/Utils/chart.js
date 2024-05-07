// import { useState, useEffect } from "react";
// import { getChart } from "../../../Services/chart";
import { Line } from "@ant-design/charts";
function Chart() {

    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchApi = async () => {
        const res = await getChart();
        const salary = res.map(item => (item.salary))
        setData(salary);
      };
      fetchApi();
    }, []);
  
  
  
    const config = {
      data:data,
      height: 400,
      xField: 'lương',
    };
    return (
      <>
    <Line {...config} />
      </>
    );
  }
  export default Chart;
  