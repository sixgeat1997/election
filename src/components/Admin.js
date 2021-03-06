import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import { Table } from "antd";
import { database } from "../_helpers/Firebase";
import { Button, Input } from "antd";
import Tables from "./Tables";
import "./Admin.css";
import { flushSync } from "react-dom";

const Admin = (props) => {
  const form = useSelector((state) => state.form);
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  allDistrict.sort((a, b) => a.electorate - b.electorate);
  const [useData, setUseData] = useState();
  const [xx, setXx] = useState([]);
  const [YY, setYY] = useState();
  const [ZZ, setZZ] = useState();
  const add = () => {
    console.log(form);
    bearAction.addData({ ...form });
  };
  const [currentPoint, setCurrent] = useState();

  const updateCurrentPoint = () => {
    const name =
      "d" +
      form.district +
      "s" +
      form.electorate +
      "t" +
      form.team +
      "n" +
      form.number;
    const x = allDistrict.find((item) => item.id == name);
    console.log(x);
    x
      ? bearAction.updatePoint({ ...x, point: +currentPoint })
      : alert("กรอกข้อมูลผิด");
  };

  const resetData2 = (dis, ele) => {
    bearAction.resetData2({ dist: dis, elel: ele });
  };

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
    console.log(xxx);
    setYY(yy);
    setZZ(zz);
  };

  const usetables = (dis) => {
    return (
      <div>
        <table key={dis}>
          <thead>เขต : {dis}</thead>
          <tbody>
            <tr>
              <th>หมายเลข</th>
              <th>หน่วยที่ 1</th>
              <th>หน่วยที่ 2</th>
              <th>หน่วยที่ 3</th>
              <th>หน่วยที่ 4</th>
              <th>หน่วยที่ 5</th>
              <th>หน่วยที่ 6</th>
              <th>หน่วยที่ 7</th>
              <th>หน่วยที่ 8</th>
              <th>หน่วยที่ 9</th>
              <th>หน่วยที่ 10</th>
              <th>หน่วยที่ 11</th>
              <th>หน่วยที่ 12</th>
              {dis != 1 ? "" : <th>หน่วยที่ 13</th>}
            </tr>
            <tr>
              <td>นายกเบอร์ 1</td>
              {allDistrict.map((item, index) => {
                let x = 0;
                if (item.district == dis && item.number == 13 && item.id) {
                  return <td key={index}>{item.point}</td>;
                }
              })}
            </tr>
            <tr>
              <td>นายกเบอร์ 2</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 14) {
                  return <td key={index}>{item.point}</td>;
                }
              })}
            </tr>
            <tr>
              <td>เบอร์ 1</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 1) {
                  return <td key={index}>{item.point}</td>;
                }
              })}
            </tr>
            <tr>
              <td>เบอร์ 2</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 2) {
                  return <td key={index}>{item.point}</td>;
                }
              })}
            </tr>
            <tr>
              <td>เบอร์ 3</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 3) {
                  return <td key={index}>{item.point}</td>;
                }
              })}
            </tr>
            <tr>
              <td>เบอร์ 4</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 4)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 5</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 5)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 6</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 6)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 7</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 7)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 8</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 8)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 9</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 9)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 10</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 10)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 11</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 11)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
            <tr>
              <td>เบอร์ 12</td>
              {allDistrict.map((item, index) => {
                if (item.district == dis && item.number == 12)
                  return <td key={index}>{item.point}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <Button
            onClick={() => {
              props.history.push("/president");
            }}
          >
            {" "}
            Municipal president
          </Button>
          <Button disabled onClick={retrieve}>
            {" "}
            ดึงข้อมูล
          </Button>
          <Button disabled onClick={() => resetData2(1, 13)}>
            {" "}
            รีเซ็ตเขต 1
          </Button>
          <Button disabled onClick={() => resetData2(2, 12)}>
            {" "}
            รีเซ็ตเขต 2
          </Button>
          <Button disabled onClick={() => resetData2(3, 12)}>
            {" "}
            รีเซ็ตเขต 3
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("login");
              localStorage.removeItem("user");
              props.history.push("/login");
            }}
            danger
          >
            {" "}
            ออกจากระบบ
          </Button>
        </div>
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
        <Input
          placeholder="คะแนน"
          onChange={(e) => {
            bearAction.changePoint(e.target.value);
            setCurrent(e.target.value);
          }}
        />
        <Button onClick={updateCurrentPoint}> อัพเดทข้อมูล</Button>
        <br></br>
        <br></br>
      </div>
      {usetables(1)}
      <br></br>
      {usetables(2)}
      <br></br>
      {usetables(3)}
      <br></br>
      <br></br>
      <Tables
        allDistrict={allDistrict}
        district={1}
        showPresident={false}
        title="เขตที่ 1 (สมาชิก)"
      />
      <Tables
        allDistrict={allDistrict}
        district={2}
        showPresident={false}
        title="เขตที่ 2 (สมาชิก)"
      />
      <Tables
        allDistrict={allDistrict}
        district={3}
        showPresident={false}
        title="เขตที่ 3 (สมาชิก)"
      />
    </div>
  );
};

export default Admin;
