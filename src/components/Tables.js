import React, { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";

const Tables = (props) => {
  const [data, setData] = useState({});
  const getDataset = () => {
    const disDatanum1 = [];
    const disDatanum2 = [];
    const disDatanum3 = [];
    const disDatanum4 = [];
    const disDatanum5 = [];
    const disDatanum6 = [];
    const disDatanum7 = [];
    const disDatanum8 = [];
    const disDatanum9 = [];
    const disDatanum10 = [];
    const disDatanum11 = [];
    const disDatanum12 = [];
    const disDatanum13 = [];
    const disDatanum14 = [];
    props.allDistrict.map((item, index) => {
      if (item.district == props.district && item.number == 1) {
        disDatanum1.push(item.point);
      } else if (item.district == props.district && item.number == 2) {
        disDatanum2.push(item.point);
      } else if (item.district == props.district && item.number == 3) {
        disDatanum3.push(item.point);
      } else if (item.district == props.district && item.number == 4) {
        disDatanum4.push(item.point);
      } else if (item.district == props.district && item.number == 5) {
        disDatanum5.push(item.point);
      } else if (item.district == props.district && item.number == 6) {
        disDatanum6.push(item.point);
      } else if (item.district == props.district && item.number == 7) {
        disDatanum7.push(item.point);
      } else if (item.district == props.district && item.number == 8) {
        disDatanum8.push(item.point);
      } else if (item.district == props.district && item.number == 9) {
        disDatanum9.push(item.point);
      } else if (item.district == props.district && item.number == 10) {
        disDatanum10.push(item.point);
      } else if (item.district == props.district && item.number == 11) {
        disDatanum11.push(item.point);
      } else if (item.district == props.district && item.number == 12) {
        disDatanum12.push(item.point);
      } else if (item.district == props.district && item.number == 13) {
        disDatanum13.push(item.point);
      } else if (item.district == props.district && item.number == 14) {
        disDatanum14.push(item.point);
      }
    });
    setData({
      ...data,
      num1: disDatanum1,
      num2: disDatanum2,
      num3: disDatanum3,
      num4: disDatanum4,
      num5: disDatanum5,
      num6: disDatanum6,
      num7: disDatanum7,
      num8: disDatanum8,
      num9: disDatanum9,
      num10: disDatanum10,
      num11: disDatanum11,
      num12: disDatanum12,
      num13: disDatanum13,
      num14: disDatanum14,
    });
  };

  const state = {
    labels: [
      "หน่วยที่ 1",
      "หน่วยที่ 2",
      "หน่วยที่ 3",
      "หน่วยที่ 4",
      "หน่วยที่ 5",
      "หน่วยที่ 6",
      "หน่วยที่ 7",
      "หน่วยที่ 8",
      "หน่วยที่ 9",
      "หน่วยที่ 10",
      "หน่วยที่ 11",
      "หน่วยที่ 12",
      "หน่วยที่ 13",
    ],
    datasets: [
      {
        label: "เบอร์ 1",
        backgroundColor: "#FF6666",
        data: data.num1 ? Object.assign([], data.num1) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 2",
        backgroundColor: "#FF6699",
        data: data.num2 ? Object.assign([], data.num2) : [],
        //sdata: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 3",
        backgroundColor: "#FF66CC",
        data: data.num3 ? Object.assign([], data.num3) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 4",
        backgroundColor: "#FF66FF",
        data: data.num4 ? Object.assign([], data.num4) : [],
        //sdata: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 5",
        backgroundColor: "#FF99CC",
        data: data.num5 ? Object.assign([], data.num5) : [],
        //        data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 6",
        backgroundColor: "#FFCCFF",
        data: data.num6 ? Object.assign([], data.num6) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 7",
        backgroundColor: "#333366",
        data: data.num7 ? Object.assign([], data.num7) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 8",
        backgroundColor: "#663366",
        data: data.num8 ? Object.assign([], data.num8) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 9",
        backgroundColor: "#663399",
        data: data.num9 ? Object.assign([], data.num9) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 10",
        backgroundColor: "#6633CC",
        data: data.num10 ? Object.assign([], data.num10) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 11",
        backgroundColor: "#9933FF",
        data: data.num11 ? Object.assign([], data.num11) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "เบอร์ 12",
        backgroundColor: "#9933CC",
        data: data.num12 ? Object.assign([], data.num12) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "นายกเบอร์ 1",
        backgroundColor: "#00EE00",
        data: data.num13 ? Object.assign([], data.num13) : [],
        //data: [65, 59, 80, 81, 56],
      },
      {
        label: "นายกเบอร์ 2",
        backgroundColor: "red",
        data: data.num14 ? Object.assign([], data.num14) : [],
        //data: [65, 59, 80, 81, 56],
      },
    ],
  };

  useMemo(() => {
    getDataset();
  }, [props.allDistrict]);
  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "เขต " + props.district,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Tables;
