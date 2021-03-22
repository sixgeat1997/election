import React, { useEffect, useState } from "react";
import { Card, Col, Row, Tabs, Select } from "antd";
import Cards from "./Cards";
import db from "../_helpers/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import Item from "antd/lib/list/Item";

const Main = () => {
  let [numberForm, setNumberForm] = useState({
    unit: "1",
    district: "1",
  });
  const { TabPane } = Tabs;
  const { Option } = Select;
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล

  useEffect(() => {
    bearAction.getData();
  }, []);

  const setUnit = (value) => {
    setNumberForm({ ...numberForm, unit: value });
  };

  function callback(key) {
    setNumberForm({ ...numberForm, district: key });
  }

  const NavTabs = () => (
    <Tabs defaultActiveKey={numberForm.district} onChange={callback}>
      <TabPane tab="เขต 1" key="1">
        <Row>
          <Col span={24}>
            <Select
              defaultValue={numberForm.unit}
              style={{ width: 120 }}
              onChange={setUnit}
            >
              <Option value="1">หน่วยที่ 1</Option>
              <Option value="2">หน่วยที่ 2</Option>
              <Option value="3">หน่วยที่ 3</Option>
              <Option value="4">หน่วยที่ 4</Option>
              <Option value="5">หน่วยที่ 5</Option>
              <Option value="6">หน่วยที่ 6</Option>
              <Option value="7">หน่วยที่ 7</Option>
              <Option value="8">หน่วยที่ 8</Option>
              <Option value="9">หน่วยที่ 9</Option>
              <Option value="10">หน่วยที่ 10</Option>
              <Option value="11">หน่วยที่ 11</Option>
              <Option value="12">หน่วยที่ 12</Option>
              <Option value="13">หน่วยที่ 13</Option>
            </Select>
          </Col>
        </Row>
        <Row> หน่วยที่ {numberForm.unit}</Row>
        <Row></Row>
        <Row>
          <Col span={12}>
            {allDistrict
              ? allDistrict.map((item, index) => {
                  if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "1" &&
                    item.number == 13
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  } else if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "1"
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
          <Col span={12}>
            {allDistrict
              ? allDistrict.map((item, index) => {
                  if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "2" &&
                    item.number == 14
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  } else if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "2"
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="เขต 2" key="2">
        <Row>
          <Col span={24}>
            <Select
              defaultValue={numberForm.unit}
              style={{ width: 120 }}
              onChange={setUnit}
            >
              <Option value="1">หน่วยที่ 1</Option>
              <Option value="2">หน่วยที่ 2</Option>
              <Option value="3">หน่วยที่ 3</Option>
              <Option value="4">หน่วยที่ 4</Option>
              <Option value="5">หน่วยที่ 5</Option>
              <Option value="6">หน่วยที่ 6</Option>
              <Option value="7">หน่วยที่ 7</Option>
              <Option value="8">หน่วยที่ 8</Option>
              <Option value="9">หน่วยที่ 9</Option>
              <Option value="10">หน่วยที่ 10</Option>
              <Option value="11">หน่วยที่ 11</Option>
              <Option value="12">หน่วยที่ 12</Option>
            </Select>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col span={12}>
            {allDistrict
              ? allDistrict.map((item, index) => {
                  if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "1" &&
                    item.number == 13
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  } else if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "1"
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
          <Col span={12}>
            {allDistrict
              ? allDistrict.map((item, index) => {
                  if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "2" &&
                    item.number == 14
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  } else if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "2"
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="เขต 3" key="3">
        <Row>
          <Col span={24}>
            <Select
              defaultValue={numberForm.unit}
              style={{ width: 120 }}
              onChange={setUnit}
            >
              <Option value="1">หน่วยที่ 1</Option>
              <Option value="2">หน่วยที่ 2</Option>
              <Option value="3">หน่วยที่ 3</Option>
              <Option value="4">หน่วยที่ 4</Option>
              <Option value="5">หน่วยที่ 5</Option>
              <Option value="6">หน่วยที่ 6</Option>
              <Option value="7">หน่วยที่ 7</Option>
              <Option value="8">หน่วยที่ 8</Option>
              <Option value="9">หน่วยที่ 9</Option>
              <Option value="10">หน่วยที่ 10</Option>
              <Option value="11">หน่วยที่ 11</Option>
              <Option value="12">หน่วยที่ 12</Option>
            </Select>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col span={12}>
            {allDistrict
              ? allDistrict.map((item, index) => {
                  if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "1" &&
                    item.number == 13
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  } else if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "1"
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
          <Col span={12}>
            {allDistrict
              ? allDistrict.map((item, index) => {
                  if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "2" &&
                    item.number == 14
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  } else if (
                    item.electorate == numberForm.unit &&
                    item.district == numberForm.district &&
                    item.team == "2"
                  ) {
                    return (
                      <div key={index}>
                        <Cards
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );

  return (
    <div>
      <NavTabs />
    </div>
  );
};

export default Main;
