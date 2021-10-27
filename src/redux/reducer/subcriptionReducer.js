const {GET_SUBCRIPTION, SUBCRIPTION_SUCCESS, SUBCRIPTION_TOGGLE} = require("../actionTypes")
const initialState = {
    getSubcription:null,
    paymentSuccess:null,
    toggleSubcription:false
}


const subcriptionReducer = (state = initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case GET_SUBCRIPTION:
            return {...state,getSubcription:payload}
            case SUBCRIPTION_SUCCESS:
                return {...state,paymentSuccess:payload}
                case SUBCRIPTION_TOGGLE:
                    return {...state,toggleSubcription:!state.toggleSubcription}
        default:
            return {...state}
    }

}

module.exports = subcriptionReducer