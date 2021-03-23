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

  resetData: () => async (dispatch) => {
    const qqq = [];

    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 13; j++) {
        for (let k = 1; k <= 2; k++) {
          if (k == 1) {
            for (let l = 1; l <= 6; l++) {
              const x = {
                district: i,
                electorate: j,
                team: k,
                number: l,
                point: 0,
              };
              let name = "" + i + "" + j + "" + k + "" + l;
              qqq.push({ name: name, value: x });
              //database.ref("allData/" + name).set(x);
            }
          } else if (k == 2) {
            for (let m = 7; m < 15; m++) {
              let th;
              if (m == 13) {
                const x = {
                  district: i,
                  electorate: j,
                  team: 1,
                  number: m,
                  point: 0,
                };
                let name = "" + i + "" + j + "" + 1 + "" + m;
                qqq.push({ name: name, value: x });
                //database.ref("allData/" + name).set(x);
              } else {
                const x = {
                  district: i,
                  electorate: j,
                  team: k,
                  number: m,
                  point: 0,
                };
                let name = "" + i + "" + j + "" + k + "" + m;
                qqq.push({ name: name, value: x });
                //database.ref("allData/" + name).set(x);
              }
            }
          }
        }
      }
    }

    setTimeout(() => {
      console.log(qqq);
      if (qqq) {
        qqq.map((item, index) => {
          database
            .ref("allData/" + item.name)
            .set(item.value)
            .catch((err) => {
              console.log(err);
            });
        });
      }
    }, 5000);
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
