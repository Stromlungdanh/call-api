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
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
