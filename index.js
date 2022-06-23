
const {createStore} = require('redux')

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
    };
};


// Reducer
// create reducer for counter

const counterReducer = ( state = initialCounterState, action) => {

    switch(action.type) {
        case INCREMENT:
        return {
            ...state,
            counter: state.counter + 1,
        }
        case DECREMENT:
        return{
            ...state,
            counter: state.counter - 1,
        }

        default:
            state;

    }
}

// Store = getState(), dispatch(), subscribe()

// create store
const store= createStore(counterReducer);

//subscribe
store.subscribe(()=>{
    console.log(store.getState());
});

// dispatch
store.dispatch(incrementCounterAction);


