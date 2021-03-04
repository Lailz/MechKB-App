const initialState = {
  items: [
    {
      productId: 2,
      quantity: 3,
    },
    {
      productId: 5,
      quantity: 3,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
