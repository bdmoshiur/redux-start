// const defining

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADDUSER = "ADDUSER";
//state

const initialCounterState = {
    counter: 0
};

const initialUserState = {
    users: [{name:"moshiur"}],
};



// action - Object = type, payload

const incrementCounterAction = () => {
    return  {
        type: INCREMENT,
    }
}

const decrementCounterAction = () => {
    return  {
        type: DECREMENT,
    }
}

const addUser = () => {
    return  {
        type: ADDUSER,
        payload: {
            name:"Jakir"
        }
    }
}
