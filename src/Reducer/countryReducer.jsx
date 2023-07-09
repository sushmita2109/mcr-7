export const intialStates = {
  continents: [],
  allcountries: [],
};
export const countryReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        continents: action.payload.continents,
      };
    }
    case "GET_COUNTRY": {
      return {
        ...state,
        allcountries: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
