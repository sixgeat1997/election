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
      "???????????????????????? 1",
      "???????????????????????? 2",
      "???????????????????????? 3",
      "???????????????????????? 4",
      "???????????????????????? 5",
      "???????????????????????? 6",
      "???????????????????????? 7",
      "???????????????????????? 8",
      "???????????????????????? 9",
      "???????????????????????? 10",
      "???????????????????????? 11",
      "???????????????????????? 12",
      "???????????????????????? 13",
    ],
    datasets: props.showPresident
      ? [
          {
            label: "??????????????????????????? 1",
            backgroundColor: "#FF3399",
            data: data.num13 ? Object.assign([], data.num13) : [],
          },
          {
            label: "??????????????????????????? 2",
            backgroundColor: "#9900CC",
            data: data.num14 ? Object.assign([], data.num14) : [],
          },
        ]
      : [
          {
            label: "??????????????? 1",
            backgroundColor: "#FF6666",
            data: data.num1 ? Object.assign([], data.num1) : [],
          },
          {
            label: "??????????????? 2",
            backgroundColor: "#FF6699",
            data: data.num2 ? Object.assign([], data.num2) : [],
          },
          {
            label: "??????????????? 3",
            backgroundColor: "#FF66CC",
            data: data.num3 ? Object.assign([], data.num3) : [],
          },
          {
            label: "??????????????? 4",
            backgroundColor: "#FF66FF",
            data: data.num4 ? Object.assign([], data.num4) : [],
          },
          {
            label: "??????????????? 5",
            backgroundColor: "#FF99CC",
            data: data.num5 ? Object.assign([], data.num5) : [],
          },
          {
            label: "??????????????? 6",
            backgroundColor: "#FFCCFF",
            data: data.num6 ? Object.assign([], data.num6) : [],
          },
          {
            label: "??????????????? 7",
            backgroundColor: "#333366",
            data: data.num7 ? Object.assign([], data.num7) : [],
          },
          {
            label: "??????????????? 8",
            backgroundColor: "#663366",
            data: data.num8 ? Object.assign([], data.num8) : [],
          },
          {
            label: "??????????????? 9",
            backgroundColor: "#663399",
            data: data.num9 ? Object.assign([], data.num9) : [],
          },
          {
            label: "??????????????? 10",
            backgroundColor: "#6633CC",
            data: data.num10 ? Object.assign([], data.num10) : [],
          },
          {
            label: "??????????????? 11",
            backgroundColor: "#9933FF",
            data: data.num11 ? Object.assign([], data.num11) : [],
          },
          {
            label: "??????????????? 12",
            backgroundColor: "#9933CC",
            data: data.num12 ? Object.assign([], data.num12) : [],
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
            text: props.title,
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
