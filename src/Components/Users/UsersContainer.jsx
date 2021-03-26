import React from 'react'
import Users from "./Users";
import {connect} from 'react-redux'
import {setUsersAC} from "../../redux/users-reduser";

let MapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}
 let MapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }

 }

 const UserContainer = connect(MapStateToProps, MapDispatchToProps)(Users)

export default UserContainer