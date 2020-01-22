"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var connected_react_router_1 = require("connected-react-router");
var rootReducer = function (history) {
    return redux_1.combineReducers({
        router: connected_react_router_1.connectRouter(history)
    });
};
exports["default"] = rootReducer;
