import { createStore } from "redux";

const initialState = {
    Fname : '',
    Lname : '',
    email : '',
    joinDate : '',
    jwtAccess : '',
    jwtRefresh : '',
    updateUser : ''
}

function appReducer(prevState = initialState, action){
    switch(action.type) {
        case 'user':
            return{
                ...prevState,
                Fname : action.payload.user.Fname,
                Lname : action.payload.user.Lname,
                email : action.payload.user.email,
                joinDate : action.payload.user.join_date,
                jwtAccess : action.payload.jwt.access,
                jwtRefresh : action.payload.jwt.refresh
            }
            case 'logout':
                return{
                    ...prevState,
                    Fname : action.payload,
                    Lname : action.payload,
                    email : action.payload,
                    joinDate : action.payload,
                    jwtAccess : action.payload,
                    jwtRefresh : action.payload
                }
            case 'updateUser':

                return {
                    ...prevState,
                    updateUser : action.payload
                }
        default:
            return prevState
    }

}

const Store = createStore(appReducer)
export default Store