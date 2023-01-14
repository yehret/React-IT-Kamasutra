import React from "react";
import style from './Users.module.css'

import userIcon from '../../assets/images/icon.png'
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgress, unfollowUser, followUser, ...props}) => {
    // debugger
    let u = user
    return (                
        <div key={user.id} className={style.info_wrapper}>
            <span className={style.icon_btn}>
                <div className={style.icon}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={u.photos.small != null ? user.photos.small : user.photos.small = userIcon} alt="icon"/>
                    </NavLink>
                </div>
                <div className={style.btn}>
                    {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={ () => { unfollowUser(user.id) } }>Followed</button> 

                    : <button disabled={followingInProgress.some(id => id === user.id)} 
                    onClick={ () => { followUser(user.id) } }>Follow</button>}
                </div>
            </span>
            <span className={style.user_info}>
                <span>
                    <div>{u.name}</div>
                    <div>{user.status != null ? 'Status: ' + user.status : 'Id: ' + user.id}</div>
                </span>
            </span>
        </div>
    )
}

export default User;