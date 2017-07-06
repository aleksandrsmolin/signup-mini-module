const onButtonClick = (state = [], payload) => {
  switch (payload) {
    case 'NEXT_BUTTON_CLICK':
      return [...state, payload.item];
    case 'BACK_BUTTON_CLICK':
      return [...state, payload.item];
    case 'DASHBOURD_BUTTON_CLICK':
      return [...state, payload.item];
    default:
      return state;
  }
};

export default onButtonClick;

