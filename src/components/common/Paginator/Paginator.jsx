import React, { useState, useEffect } from "react";
import style from './Paginator.module.css'


let Paginator = ({currentPage, totalItemsCount, pageSize, onPageChange, portionSize = 10, ...props}) => {
    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage, portionSize]);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for ( let i = 1; i <= pagesCount; i++ ) pages.push(i);

    // let slicedPages;
    // let curPage = currentPage;
    // if (curPage - 3 < 0) {
    //     slicedPages = pages.slice(0, 5);
    // } else {
    //     slicedPages = pages.slice(curPage - 3, curPage + 2);
    // }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (        
        <div className={style.scroll_page}>
            { portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> 
            }

            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span key={p} onClick={ (e) => onPageChange(p) } className={currentPage === p ? style.selected : ''}>{p}</span>
            })}

            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> 
            }
        </div>
        
    )
}

export default Paginator;