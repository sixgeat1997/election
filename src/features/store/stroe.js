import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
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
          data: Object.values(data).sort((a, b) => a.number - b.number),
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
  resetData2: (value) => async (dispatch) => {
    for (let i = 1; i <= +value.elel; i++) {
      for (let k = 1; k <= 14; k++) {
        if (k < 7) {
          const name = "d" + value.dist + "s" + i + "t" + 1 + "n" + k;
          const x = {
            id: name,
            district: value.dist,
            electorate: i,
            team: 1,
            number: k,
            point: 0,
          };
          database.ref("allData/" + name).set(x);
        } else {
          if (k == 13) {
            const name = "d" + value.dist + "s" + i + "t" + 1 + "n" + k;
            const x = {
              id: name,
              district: value.dist,
              electorate: i,
              team: 1,
              number: k,
              point: 0,
            };
            database.ref("allData/" + name).set(x);
          } else {
            const name = "d" + value.dist + "s" + i + "t" + 2 + "n" + k;
            const x = {
              id: name,
              district: value.dist,
              electorate: i,
              team: 2,
              number: k,
              point: 0,
            };
            database.ref("allData/" + name).set(x);
          }
        }
      }
    }
  },

  resetData: () => async (dispatch) => {
    const qqq = [];

    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 13; j++) {
        for (let k = 1; k <= 2; k++) {
          if (k == 1) {
            for (let l = 1; l <= 6; l++) {
              let name = "" + i + "" + j + "" + k + "" + l;

              const x = {
                id: name,
                district: i,
                electorate: j,
                team: k,
                number: l,
                point: 0,
              };
              qqq.push({ name: name, value: x });
              database.ref("allData/" + name).set(x);
            }
          } else if (k == 2) {
            for (let m = 7; m < 15; m++) {
              let th;
              if (m == 13) {
                let name = "" + i + "" + j + "" + 1 + "" + m;

                const x = {
                  id: name,
                  district: i,
                  electorate: j,
                  team: 1,
                  number: m,
                  point: 0,
                };
                qqq.push({ name: name, value: x });
                database.ref("allData/" + name).set(x);
              } else {
                let name = "" + i + "" + j + "" + k + "" + m;

                const x = {
                  id: name,
                  district: i,
                  electorate: j,
                  team: k,
                  number: m,
                  point: 0,
                };
                qqq.push({ name: name, value: x });
                database.ref("allData/" + name).set(x);
              }
            }
          }
        }
      }
    }
  },

  addData: (value) => async (dispatch) => {
    // const valueDistrict = db.collection("newElec");
    const name =
      "d" +
      value.district +
      "s" +
      value.electorate +
      "t" +
      value.team +
      "n" +
      value.number;
    database.ref("allData/" + name).set({
      district: value.district,
      electorate: value.electorate,
      team: value.team,
      number: value.number,
      point: 0,
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
      "d" +
      value.district +
      "s" +
      value.electorate +
      "t" +
      value.team +
      "n" +
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
