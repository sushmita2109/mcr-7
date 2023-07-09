export const intialStates = {
  continents: [],
};
export const countryReducer = (state, action) => {
  console.log(
    "🚀 ~ file: countryReducer.jsx:5 ~ countryReducer ~ action:",
    action
  );
  switch (state.action) {
    case "GET_DATA": {
      return {
        ...state,
        continents: action.payload.continents,
      };
    }
    default: {
      return state;
    }
  }
};
