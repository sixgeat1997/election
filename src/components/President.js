import React, { useEffect } from "react";
import Tables from "./Tables";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
const President = () => {
  const bearAction = bindActionCreators(bearActions, useDispatch());

  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  allDistrict.sort((a, b) => a.electorate - b.electorate);

  useEffect(() => {
    bearAction.getData();
  }, []);

  return (
    <div>
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
