const redux = require('redux')

const counterReducer = (state = { counter: 0}, action)  => {

    return {
        counter: state.counter + 1
    }

}
const store = redux.legacy_createStore(counterReducer)


const counterSubscriber = () => {
    console.log(store.getState());
}

store.subscribe(counterSubscriber)

store.dispatch({type: 'increment'});