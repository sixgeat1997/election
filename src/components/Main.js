import React, { useEffect, useState } from "react";
import { Button, Col, Row, Tabs, Select, Input } from "antd";
import Cards from "./Cards";
import db from "../_helpers/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import Form from "antd/lib/form/Form";

const Main = (props) => {
  let [numberForm, setNumberForm] = useState({
    unit: "1",
    district: "1",
  });
  const [show, setShow] = useState(false);
  const [unitDistrict, setUnitDistrict] = useState({
    unit: "1",
    district: "1",
  });
  const { TabPane } = Tabs;
  const { Option } = Select;
  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล
  useEffect(() => {
    bearAction.getData();
    if (!localStorage.getItem("user")) {
      props.history.push("/login");
    }
  }, []);

  const NavTabs = () => (
    <Tabs>
      <TabPane key="1111">
        <Row>
          <Col span={24}>
            {" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1>
                เขตที่ {numberForm.district} หน่วยที่ {numberForm.unit}{" "}
              </h1>
            </div>
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
                          mainId={item.id}
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
                          mainId={item.id}
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
                          mainId={item.id}
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
                          mainId={item.id}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
        </Row>
      </TabPane>
      <TabPane key="2222">
        <Row>
          <Col span={24}>
            {" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1>
                เขตที่ {numberForm.district} หน่วยที่ {numberForm.unit}{" "}
              </h1>
            </div>
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
                          mainId={item.id}
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
                          mainId={item.id}
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
                          mainId={item.id}
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
                          mainId={item.id}
                        />
                      </div>
                    );
                  }
                })
              : ""}
          </Col>
        </Row>
      </TabPane>
      <TabPane key="333">
        <Row>
          <Col span={24}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1>
                เขตที่ {numberForm.district} หน่วยที่ {numberForm.unit}{" "}
              </h1>
            </div>
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
                          mainId={item.id}
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
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                          mainId={item.id}
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
                          mainId={item.id}
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
                          pre={true}
                          number={item.number}
                          team={item.team}
                          point={item.point}
                          id={item.number - 1}
                          numberForm={numberForm}
                          mainId={item.id}
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
      <div>
        <Select
          defaultValue={numberForm.unit}
          style={{ width: 120 }}
          onChange={(key) => {
            setUnitDistrict({ ...unitDistrict, district: key });
            setShow(false);
          }}
        >
          <Option value="1">เขตที่ 1</Option>
          <Option value="2">เขตที่ 2</Option>
          <Option value="3">เขตที่ 3</Option>
        </Select>
        <Select
          defaultValue={numberForm.unit}
          style={{ width: 120 }}
          onChange={(value) => {
            setUnitDistrict({ ...unitDistrict, unit: value });
            setShow(false);
          }}
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
      </div>

      <Button
        onClick={() => {
          setNumberForm({ ...unitDistrict });
          setShow(true);
        }}
      >
        แสดงข้อมูล
      </Button>
      {show ? (
        <NavTabs />
      ) : (
        <div>
          <h2>1.เลือกเขต</h2>
          <h2>2.เลือกหน่วย</h2>
          <h2>3.แสดงข้อมูล</h2>
        </div>
      )}
    </div>
  );
};

export default Main;
