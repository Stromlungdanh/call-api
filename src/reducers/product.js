var initialState = [
  {
    id: 1,
    name: "Iphone 8 Plus",
    price: 5000,
    status: true,
  },
  {
    id: 2,
    name: "Iphone 11 Pro Max",
    price: 6000,
    status: false,
  },
  {
    id: 3,
    name: "Iphone XS Max",
    price: 7000,
    status: true,
  },
];

const FETCH_DATA = "@product/fetchData";
const ADD_PRODUCT = "@product/addProduct";
const EDIT_PRODUCT = "@product/editProduct";
const REMOVE_PRODUCT = "@product/removeProduct";

const products = (state = initialState, action) => {
  let temp = null;

  switch (action.type) {
    case FETCH_DATA:
      return [...action.data];

    case ADD_PRODUCT:
      return [action.data, ...state];

    case REMOVE_PRODUCT:
      temp = state.filter((item) => item.id !== action.data.id);

      return [...temp];

    case EDIT_PRODUCT:
      temp = state.map((item) => {
        if (item.id === action.data.id) {
          return action.data;
        }

        return item;
      });

      return [...temp];

    default:
      return [...state];
  }
};

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data: data,
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    data: data,
  };
};

export const editProduct = (data) => {
  return {
    type: EDIT_PRODUCT,
    data: data,
  };
};

export const removeProduct = (data) => {
  return {
    type: REMOVE_PRODUCT,
    data: data,
  };
};

export default products;
