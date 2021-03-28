import React, { useEffect, useState } from "react";
import Tables from "./Tables";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import { Button } from "antd";

const President = (props) => {
  const bearAction = bindActionCreators(bearActions, useDispatch());

  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  allDistrict.sort((a, b) => a.electorate - b.electorate);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalPoint = (num) => {
    let x = [0, 0];
    x = allDistrict
      ? allDistrict
          .filter((item) => item.number == num)
          .map((item) => +item.point)
          .reduce(reducer)
      : x.reducer(reducer);
    return x;
  };

  useEffect(() => {
    bearAction.getData();
    if (!localStorage.getItem("login")) {
      props.history.push("/login");
    }
  }, []);
  let tm2;
  let tm1;
  return (
    <div>
      <Button
        onClick={() => {
          props.history.push("/admin");
        }}
      >
        {" "}
        ย้อนกลับ
      </Button>

      <div>
        <h1>{"คะแนนรวมเบอร์ 1 : " + totalPoint(13)}</h1>
        <h1>{"คะแนนรวมเบอร์ 2 : " + totalPoint(14)}</h1>
      </div>
      <Tables
        allDistrict={allDistrict}
        district={1}
        showPresident={true}
        title="เขตที่ 1 (นายก)"
      />
      <Tables
        allDistrict={allDistrict}
        district={2}
        showPresident={true}
        title="เขตที่ 2 (นายก)"
      />
      <Tables
        allDistrict={allDistrict}
        district={3}
        showPresident={true}
        title="เขตที่ 3 (นายก)"
      />
    </div>
  );
};

export default President;
