import React from "react";
import style from './Users.module.css'

import userIcon from '../../assets/images/icon.png'



const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return <div className={style.wrapper}>
                <div className={style.scroll_page}>
                    {slicedPages.map(p => {
                        return <button onClick={ (e) => props.onPageChange(p) } className={props.currentPage === p && style.selected}>{p}</button>
                    })}
                </div>
                {props.users.map(u => 
                <div key={u.id} className={style.info_wrapper}>
                    <span className={style.icon_btn}>
                        <div className={style.icon}><img src={u.photos.small != null ? u.photos.small : u.photos.small = userIcon} alt="icon"/></div>
                        <div className={style.btn}>
                            {u.isFollowed
                            ? <button onClick={ () => {props.unfollow(u.id)} }>Followed</button> 
                            : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                        </div>
                    </span>
                    <span className={style.user_info}>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status != null ? 'Status: ' + u.status : 'Id: ' + u.id}</div>
                        </span>
                        {/* <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span> */}
                    </span>
                </div>)}
            </div>
}

export default Users;