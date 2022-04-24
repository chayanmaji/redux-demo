const logger = param => store => next => action => {
    console.log("param", param);
    // console.log("next", next);
    // console.log("action", action);
    next(action);
}

export default logger;