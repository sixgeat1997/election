import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import { Table } from "antd";

const Admin = () => {
  const form = useSelector((state) => state.form);
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  allDistrict.sort((a, b) => a.number - b.number);

  const [xx, setXx] = useState([]);
  const [YY, setYY] = useState();
  const [ZZ, setZZ] = useState();
  const add = () => {
    console.log(form);
    bearAction.addData({ ...form });
  };

  const resetData = () => {
    bearAction.resetData();
  };

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "หมายเลข 1",
          value: "หมายเลข 1",
        },
        {
          text: "หมายเลข 2",
          value: "หมายเลข 2",
        },
        {
          text: "หมายเลข 3",
          value: "หมายเลข 3",
        },
        {
          text: "หมายเลข 4",
          value: "หมายเลข 4",
        },
        {
          text: "หมายเลข 5",
          value: "หมายเลข 5",
        },
        {
          text: "หมายเลข 6",
          value: "หมายเลข 6",
        },
        {
          text: "หมายเลข 7",
          value: "หมายเลข 7",
        },
        {
          text: "หมายเลข 8",
          value: "หมายเลข 8",
        },
        {
          text: "หมายเลข 9",
          value: "หมายเลข 9",
        },
        {
          text: "หมายเลข 10",
          value: "หมายเลข 10",
        },
        {
          text: "หมายเลข 11",
          value: "หมายเลข 11",
        },
        {
          text: "หมายเลข 12",
          value: "หมายเลข 12",
        },
        {
          text: "นายกเบอร์ 1",
          value: "นายกเบอร์ 1",
        },
        {
          text: "นายกเบอร์ 2",
          value: "นายกเบอร์ 2",
        },
      ],
      onFilter: (value, record) => record.name.search(value) == 0,
    },
    {
      title: "หน่วยเลือกตั้ง",
      dataIndex: "electorate",
      key: "electorate",
      width: "20%",
      align: "center",
      filters: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
        {
          text: "3",
          value: "3",
        },
        {
          text: "4",
          value: "4",
        },
        {
          text: "5",
          value: "5",
        },
        {
          text: "6",
          value: "6",
        },
        {
          text: "7",
          value: "7",
        },
        {
          text: "8",
          value: "8",
        },
        {
          text: "9",
          value: "9",
        },
        {
          text: "10",
          value: "10",
        },
        {
          text: "11",
          value: "11",
        },
        {
          text: "12",
          value: "12",
        },
      ],
      onFilter: (value, record) => record.electorate.indexOf(value) == 0,

      sorter: (a, b) => a.electorate - b.electorate,
    },
    {
      title: "คะแนน",
      dataIndex: "point",
      key: "point",
      width: "20%",
      align: "center",

      sorter: (a, b) => a.point - b.point,
    },
  ];

  const retrieve = () => {
    test();
  };

  const test = () => {
    const xxx = [];
    const yy = [];
    const zz = [];

    allDistrict.map((item, index) => {
      if (item.district == 1) {
        xxx.push({
          ...item,
          name:
            item.number == 13
              ? "นายกเบอร์ " + (+item.number - 12)
              : item.number == 14
              ? "นายกเบอร์ " + (+item.number - 12)
              : "หมายเลข " + item.number,
          key: Math.floor(Math.random() * 1000000),
        });
      } else if (item.district == 2) {
        yy.push({
          ...item,
          name:
            item.number == 13
              ? "นายกเบอร์ " + (+item.number - 12)
              : item.number == 14
              ? "นายกเบอร์ " + (+item.number - 12)
              : "หมายเลข " + item.number,
          key: Math.floor(Math.random() * 1000000),
        });
      } else if (item.district == 3) {
        zz.push({
          ...item,
          name:
            item.number == 13
              ? "นายกเบอร์ " + (+item.number - 12)
              : item.number == 14
              ? "นายกเบอร์ " + (+item.number - 12)
              : "หมายเลข " + item.number,
          key: Math.floor(Math.random() * 1000000),
        });
      }
    });
    setXx(xxx);
    setYY(yy);
    setZZ(zz);
  };

  useEffect(() => {
    bearAction.getData();
    retrieve();
  }, []);

  return (
    <div>
      <div>
        <label>district</label>
        <input
          onChange={(e) => {
            bearAction.changeDistricr(e.target.value);
          }}
        />
        <label>electorate</label>
        <input
          onChange={(e) => {
            bearAction.changeElec(e.target.value);
          }}
        />
        <label>team</label>

        <input
          onChange={(e) => {
            bearAction.changeTeam(e.target.value);
          }}
        />
        <label>number</label>

        <input
          onChange={(e) => {
            bearAction.changeNumber(e.target.value);
          }}
        />
        <button onClick={add}> click</button>
        <button onClick={retrieve}> ดึงข้อมูล</button>
        <button disabled onClick={resetData}>
          {" "}
          รีเซ็ต
        </button>
      </div>
      <h1>เขต 1</h1>
      {xx ? (
        <Table columns={columns} dataSource={xx} bordered size="small" />
      ) : (
        ""
      )}
      <h1>เขต 2</h1>
      {xx ? (
        <Table columns={columns} dataSource={YY} size="small" bordered />
      ) : (
        ""
      )}
      <h1>เขต 3</h1>
      {xx ? (
        <Table columns={columns} dataSource={ZZ} size="small" bordered />
      ) : (
        ""
      )}
    </div>
  );
};

export default Admin;
