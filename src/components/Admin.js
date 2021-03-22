import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import { Table, Switch, Space, Row, Col } from "antd";

const Admin = () => {
  const [userPoint, setUserpoint] = useState([]);
  const form = useSelector((state) => state.form);
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  allDistrict.sort((a, b) => a.number - b.number);
  const districtChilden = [];

  const [xx, setXx] = useState([]);
  const [YY, setYY] = useState();
  const [ZZ, setZZ] = useState();
  let datax = [...xx];
  const add = () => {
    console.log(form);
    bearAction.addData({ ...form });
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

  let data = [
    {
      key: 1,
      name: "เขต 1",
      age: 60,
      children: [
        {
          key: 12,
          name: "หน่วยที่ 1",
          age: 30,
          children: [...userPoint],
        },
        {
          key: 13,
          name: "หน่วยที่ 2",
          age: 30,
          children: [...userPoint],
        },
      ],
    },
  ];

  const retrieve = () => {
    test();
    showTable();
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
              ? "นายกเบอร์" + (+item.number - 12)
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

  const showTable = async () => {
    if (allDistrict) {
      const x = [];
      await allDistrict.map((item, index) => {
        const v = {
          key:
            "" +
            item.district +
            "" +
            item.electorate +
            "" +
            item.team +
            "" +
            item.number,
          name:
            item.number == 13
              ? "นายกเบอร์ " + (+item.number - 12)
              : item.number == 14
              ? "นายกเบอร์ " + (+item.number - 12)
              : "หมายเลข " + item.number,
          point: item.point,
        };
        if (item.district == 1 && item.electorate == 1) {
          x.push(v);
          if (x.length == 14) {
            const eletorate = {
              key: Math.floor(Math.random() * 1000000),
              name: "หน่วยที่ 1",
              children: [...x],
            };
            districtChilden.push(eletorate);
          }
        } else if (item.district == 1 && item.electorate == 2) {
        }
      });
      setUserpoint(x);
    }
  };

  useEffect(() => {
    bearAction.getData();
    retrieve();
  }, []);

  function TreeData() {
    return (
      <>
        <Table columns={columns} dataSource={data} size="small" />
      </>
    );
  }
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
        <button onClick={retrieve}> retrieve</button>
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
