import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import { Table } from "antd";
import { database } from "../_helpers/Firebase";
import { Button, Input } from "antd";

const Admin = (props) => {
  const form = useSelector((state) => state.form);
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  const [useData, setUseData] = useState();
  allDistrict.sort((a, b) => a.number - b.number);

  const alldata = database.ref("allData/");
  alldata.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(Object.values(data).length);
    if (data) {
      Object.values(data).sort((a, b) => b.number - a.number);
    }
  });
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
    if (!localStorage.getItem("login")) {
      props.history.push("/login");
    }
  }, []);

  return (
    <div>
      <div>
        <Button onClick={retrieve}> ดึงข้อมูล</Button>
        <Button disabled onClick={resetData}>
          {" "}
          รีเซ็ต
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem("login");
            props.history.push("/login");
          }}
          danger
        >
          {" "}
          ออกจากระบบ
        </Button>
        <Input
          placeholder="เขต"
          onChange={(e) => {
            bearAction.changeDistricr(e.target.value);
          }}
        />
        <Input
          placeholder="หน่วยที่"
          onChange={(e) => {
            bearAction.changeElec(e.target.value);
          }}
        />

        <Input
          placeholder="ทีมที่"
          onChange={(e) => {
            bearAction.changeTeam(e.target.value);
          }}
        />

        <Input
          placeholder="หมายเลข"
          onChange={(e) => {
            bearAction.changeNumber(e.target.value);
          }}
        />
        <Button disabled onClick={add}>
          {" "}
          เพิ่มข้อมูล
        </Button>
        <br></br>
        <br></br>
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
