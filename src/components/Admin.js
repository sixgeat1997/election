import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import { Table, Switch, Space } from "antd";

const Admin = () => {
  const [userPoint, setUserpoint] = useState([]);
  const form = useSelector((state) => state.form);
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  allDistrict.sort((a, b) => a.number - b.number);
  const districtChilden = [];

  const add = () => {
    console.log(form);
    bearAction.addData({ ...form });
  };

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "คะแนน",
      dataIndex: "age",
      key: "age",
      width: "10%",
    },
    {
      title: "คะแนน",
      dataIndex: "point",
      key: "point",
      width: "10%",
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
          name: "หน่วยที่ 2",
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
    showTable();
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
            console.log(districtChilden);
          }
        } else if (item.district == 1 && item.electorate == 2) {
        }
      });
      setUserpoint(x);
    }
  };

  useEffect(() => {
    bearAction.getData();
  }, []);

  function TreeData() {
    return (
      <>
        <Table columns={columns} dataSource={data} />
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
      {TreeData()}
    </div>
  );
};

export default Admin;
