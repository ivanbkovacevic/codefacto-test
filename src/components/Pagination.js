import React from 'react';

const Pagination = (props) => {
    
    return (
        <div className="pagination-container">
            <button className="my-btn pgn-btn"
            disabled={props.itemstoshowstart <5 ? true : false}
             onClick={props.handlepagination('previus')}>PREVIUS
             </button>

            <button className="my-btn pgn-btn" 
            disabled={props.itemstoshowstart >props.itemslength-6 ? true : false}
            onClick={props.handlepagination('next')}>NEXT
            </button>
        </div>
    );
};

export default Pagination;