import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import db from "../../_helpers/Firebase";
import { database } from "../../_helpers/Firebase";

const initData = {
  district: "",
  electorate: "",
  team: "",
  number: "",
  point: "",
};

export const bearActions = {
  getData: () => async (dispatch) => {
    const alldata = database.ref("allData/");
    alldata.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(Object.values(data));
      if (data) {
        dispatch({
          type: "GET_DATA",
          data: Object.values(data).sort((a, b) => b.number - a.number),
        });
      }
    });
    // let allData = [];
    // const allDistrict = db
    //   .collection("newElec")
    //   .get()
    //   .then(async (querySnapshot) => {
    //     await querySnapshot.docs.map((doc) => {
    //       if (doc.data()) {
    //         allData.push(doc.data());
    //       }
    //     });
    //     console.log(allData);

    //      dispatch({ type: "GET_DATA", data: allData });
    //   });
  },

  addData: (value) => async (dispatch) => {
    // const valueDistrict = db.collection("newElec");
    const name =
      "" +
      value.district +
      "" +
      value.electorate +
      "" +
      value.team +
      "" +
      value.number;
    database.ref("allData/" + name).set({
      district: value.district,
      electorate: value.electorate,
      team: value.team,
      number: value.number,
      point: "0",
    });
    // valueDistrict.doc(name).set({
    //   district: value.district,
    //   electorate: value.electorate,
    //   team: value.team,
    //   number: value.number,
    //   point: "0",
    // });
    // console.log(value);
    // dispatch({ type: "ADD_DATA", data: value });
  },
  updatePoint: (value) => async (dispatch) => {
    const name =
      "" +
      value.district +
      "" +
      value.electorate +
      "" +
      value.team +
      "" +
      value.number;
    database.ref("allData/" + name).set({ ...value, point: value.point });

    // let allData = [];
    // const valueDistrict = db.collection("newElec");
    // const name =
    //   "" +
    //   value.district +
    //   "" +
    //   value.electorate +
    //   "" +
    //   value.team +
    //   "" +
    //   value.number;
    // valueDistrict.doc(name).set({ ...value, point: value.point });
    // db.collection("newElec")
    //   .get()
    //   .then(async (querySnapshot) => {
    //     await querySnapshot.docs.map((doc) => {
    //       if (doc.data()) {
    //         allData.push(doc.data());
    //       }
    //     });
    //     dispatch({ type: "GET_DATA", data: allData });
    //   });
  },

  changeDistricr: (value) => ({ type: "CHANGE_DISTRICT", district: value }),
  changeElec: (value) => ({ type: "CHANGE_ELECT", electorate: value }),
  changeTeam: (value) => ({ type: "CHANGE_TEAM", team: value }),
  changeNumber: (value) => ({ type: "CHANGE_NUMBER", number: value }),
};

const formReducer = (data = initData, action) => {
  switch (action.type) {
    case "CHANGE_DISTRICT":
      return {
        ...data,
        district: action.district,
      };
    case "CHANGE_ELECT":
      return {
        ...data,
        electorate: action.electorate,
      };
    case "CHANGE_TEAM":
      return {
        ...data,
        team: action.team,
      };
    case "CHANGE_NUMBER":
      return {
        ...data,
        number: action.number,
      };
    case "CHANGE_POINT":
      return {
        ...data,
        point: action.point,
      };
  }
  return data;
};

const allUserNumberReducer = (data = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.data;
    case "ADD_DATA":
      return [...data, action.data];
  }
  return data;
};

const rootReducer = combineReducers({
  form: formReducer,
  allDistrict: allUserNumberReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
