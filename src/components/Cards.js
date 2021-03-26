import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bearActions } from "../features/store/stroe";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../features/counter/counterSlice";

import "./Cards.css";

import president1 from "../img/President/1.jpg";
import president2 from "../img/President/2.JPG";

import D1_1 from "../img/District11/1.PNG";
import D1_2 from "../img/District11/2.PNG";
import D1_3 from "../img/District11/3.PNG";
import D1_4 from "../img/District11/4.PNG";
import D1_5 from "../img/District11/5.PNG";
import D1_6 from "../img/District11/6.PNG";
import D1_7 from "../img/District1/7.PNG";
import D1_8 from "../img/District1/8.PNG";
import D1_9 from "../img/District1/9.PNG";
import D1_10 from "../img/District1/10.PNG";
import D1_11 from "../img/District1/11.PNG";
import D1_12 from "../img/District1/12.PNG";

import D2_1 from "../img/District12/1.PNG";
import D2_2 from "../img/District12/2.PNG";
import D2_3 from "../img/District12/3.PNG";
import D2_4 from "../img/District12/4.PNG";
import D2_5 from "../img/District12/5.PNG";
import D2_6 from "../img/District12/6.PNG";
import D2_7 from "../img/District2/7.PNG";
import D2_8 from "../img/District2/8.PNG";
import D2_9 from "../img/District2/9.PNG";
import D2_10 from "../img/District2/10.PNG";
import D2_11 from "../img/District2/11.PNG";
import D2_12 from "../img/District2/12.PNG";

import D3_1 from "../img/District13/1.PNG";
import D3_2 from "../img/District13/2.PNG";
import D3_3 from "../img/District13/3.PNG";
import D3_4 from "../img/District13/4.PNG";
import D3_5 from "../img/District13/5.PNG";
import D3_6 from "../img/District13/6.PNG";
import D3_7 from "../img/District3/7.PNG";
import D3_8 from "../img/District3/8.PNG";
import D3_9 from "../img/District3/9.PNG";
import D3_10 from "../img/District3/10.PNG";
import D3_11 from "../img/District3/11.PNG";
import D3_12 from "../img/District3/12.PNG";

const Cards = (props) => {
  const picD3 = [
    D3_1,
    D3_2,
    D3_3,
    D3_4,
    D3_5,
    D3_6,
    D3_7,
    D3_8,
    D3_9,
    D3_10,
    D3_11,
    D3_12,
    president1,
    president2,
  ];

  const picD2 = [
    D2_1,
    D2_2,
    D2_3,
    D2_4,
    D2_5,
    D2_6,
    D2_7,
    D2_8,
    D2_9,
    D2_10,
    D2_11,
    D2_12,
    president1,
    president2,
  ];

  const picD1 = [
    D1_1,
    D1_2,
    D1_3,
    D1_4,
    D1_5,
    D1_6,
    D1_7,
    D1_8,
    D1_9,
    D1_10,
    D1_11,
    D1_12,
    president1,
    president2,
  ];

  const bearAction = bindActionCreators(bearActions, useDispatch());
  const allDistrict = useSelector((state) => state.allDistrict); //ดึงข้อมูล

  const [allData, setData] = useState(allDistrict);

  const addPoint = () => {
    allData.map((item, index) => {
      if (item.id == props.mainId) {
        console.log(item.id);
        bearAction.updatePoint({
          district: item.district,
          electorate: item.electorate,
          team: item.team,
          number: item.number,
          point: +item.point + 1,
          id: item.id,
        });
      }
    });
  };

  const subPoint = () => {
    allData.map((item, index) => {
      if (item.id == props.mainId) {
        bearAction.updatePoint({
          district: item.district,
          electorate: item.electorate,
          team: item.team,
          number:
            props.id == "president1" || props.id == "president2"
              ? "0"
              : item.number,
          point: +item.point - 1,
          id: item.id,
        });
      }
    });
  };

  const getPic = () => {};
  const getContent = () => {};
  useEffect(() => {}, []);

  return (
    <div>
      <div className="site-card-wrapper">
        <Row>
          {props.numberForm.district == 1 ? (
            <Col span={24}>
              <Card
                title={
                  props.pre
                    ? props.number == 13
                      ? "นายกเบอร์ " + (+props.number - 12)
                      : props.number == 14
                      ? "นายกเบอร์ " + (+props.number - 12)
                      : "หมายเลข " + props.number
                    : "หมายเลข " + props.number
                }
                bordered={true}
              >
                <div className="">
                  <p>คะแนน :{props.point}</p>
                  <div className="btn-card">
                    <div className="img-main">
                      <img
                        alt="ไม่พบข้อมูล"
                        src={picD1[Math.floor(props.id)]}
                      />
                    </div>
                    <div
                      className="increment"
                      onClick={() => {
                        addPoint();
                      }}
                    >
                      <h1>+</h1>
                    </div>
                    <div
                      className="decrement"
                      onClick={() => {
                        subPoint();
                      }}
                    >
                      <h1>-</h1>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ) : (
            ""
          )}
          {props.numberForm.district == 2 ? (
            <Col span={24}>
              <Card
                title={
                  props.pre
                    ? props.number == 13
                      ? "นายกเบอร์ " + (+props.number - 12)
                      : props.number == 14
                      ? "นายกเบอร์ " + (+props.number - 12)
                      : "หมายเลข " + props.number
                    : "หมายเลข " + props.number
                }
                bordered={true}
              >
                <div className="">
                  <p>คะแนน :{props.point}</p>
                  <div className="btn-card">
                    <div className="img-main">
                      <img
                        alt="ไม่พบข้อมูล"
                        src={picD2[Math.floor(props.id)]}
                      />
                    </div>
                    <div
                      className="increment"
                      onClick={() => {
                        addPoint();
                      }}
                    >
                      <h1>+</h1>
                    </div>
                    <div
                      className="decrement"
                      onClick={() => {
                        subPoint();
                      }}
                    >
                      <h1>-</h1>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ) : (
            ""
          )}
          {props.numberForm.district == 3 ? (
            <Col span={24}>
              <Card
                title={
                  props.pre
                    ? props.number == 13
                      ? "นายกเบอร์ " + (+props.number - 12)
                      : props.number == 14
                      ? "นายกเบอร์ " + (+props.number - 12)
                      : "หมายเลข " + props.number
                    : "หมายเลข " + props.number
                }
                bordered={true}
              >
                <div className="">
                  <p>คะแนน :{props.point}</p>
                  <div className="btn-card">
                    <div className="img-main">
                      <img
                        alt="ไม่พบข้อมูล"
                        src={picD3[Math.floor(props.id)]}
                      />
                    </div>
                    <div
                      className="increment"
                      onClick={() => {
                        addPoint();
                      }}
                    >
                      <h1>+</h1>
                    </div>
                    <div
                      className="decrement"
                      onClick={() => {
                        subPoint();
                      }}
                    >
                      <h1>-</h1>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </div>
    </div>
  );
};

export default Cards;
