/**
* @description Custom middleware called logger used to log the action type, 
* and state of store before and after the action is complete.
* @param {object} store
* @returns {function} 
*/
const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log('State before action', store.getState());
        const result = next(action);
        console.log('State after action', store.getState());
    console.groupEnd();
    return result;
};
export default logger;