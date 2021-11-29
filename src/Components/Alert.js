import React from 'react'

export default function Alert(props) {
    const capitalized = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        //using 'props.alert &&' syntax to avoid the null value of alert.we can even use if condition here.

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)} : </strong>{props.alert.msg}    
        </div>
    )
    
}
