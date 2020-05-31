import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import logger from './logger';

 /**
  * @description It is used to create a root middleware by combining all other
  * middleware functions using applyMiddleware() function provided by 'redux library.
  * @param {functon} thunk
  * @param {function} logger 
  * @return {function} rootMiddleware 
  */
export default applyMiddleware(
    thunk,
    logger
);