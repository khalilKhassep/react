import React from 'react';


const DateComp = ({ format }) => {

    let _date = new Date()

   //console.log(_date)
   const _check = (format) => {
    switch (format) {
        case "date":
            return (
                <span>{`${_date.getFullYear()} - ${_date.getMonth() + 1} - ${_date.getDay() + 1 }`}</span>
            )
            break;
        case "time":
            return (
                <span>{`${_date.getHours()} - ${_date.getMinutes()}`}</span>
            )
            break;
        default:
            return (
                <span>{`Default ${ _date.toString}`}</span>
            )
            break;

    }
   }
    return( 
        <div>
            {_check(format)}
        </div>
    )

}



export default DateComp;

// Store Task information 
/**
 * taskObj {
 *  id : int,
 *  title : string,
 *  description : string
 *  created_at : date || string
 *  updated_at : date || string
 *   
 * }
 */