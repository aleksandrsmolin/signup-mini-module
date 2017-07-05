export default(state = [], payload) => {
    switch (payload) {
        case 'TURN':
            return [...state, payload.item];
        default: 
            return state;
    }
};
