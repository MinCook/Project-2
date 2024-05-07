// import { useState, useEffect } from "react";
// import { getChart } from "../../../Services/chart";
import { Line } from "@ant-design/charts";
function Chart() {

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const res = await getChart();
  //     const salary = res.map(item => (item.salary))
  //     setData(salary);
  //   };
  //   fetchApi();
  // }, []);

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 6 },
  ];

  const config = {
    data,
    height: 200,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return (
    <>
  <Line {...config}/>
    </>
  );
}
export default Chart;
