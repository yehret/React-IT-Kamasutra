import React from "react";
import style from './Users.module.css'

import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalItemsCount, pageSize, onPageChange, ...props}) => {
    // debugger

    return (
        <div className={style.wrapper}>
            <Paginator currentPage={currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize} onPageChange={onPageChange} />
            
            {props.users.map(u => 
                <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollowUser={props.unfollowUser} followUser={props.followUser}/>
            )}
        </div>
    )
}

export default Users;