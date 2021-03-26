import React, { useEffect } from "react";
import Tables from "./Tables";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import { Button } from "antd";

const President = (props) => {
  const bearAction = bindActionCreators(bearActions, useDispatch());

  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  allDistrict.sort((a, b) => a.electorate - b.electorate);

  useEffect(() => {
    bearAction.getData();
    if (!localStorage.getItem("login")) {
      props.history.push("/login");
    }
  }, []);

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
