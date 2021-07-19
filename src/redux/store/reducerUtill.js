function convertActionToLowerCase(actionName) {

    return actionName.toLowerCase().replace(/_(\w)/g, x => x[1].toUpperCase())
}


export default function createReducer(state, action, handlers) {
    let key = convertActionToLowerCase(action.type);
    const handler = handlers[key]
    if (handler) {
        handler(state, action)
    }
}