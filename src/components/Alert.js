import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (

      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      {/* <strong>Holy guacamole!</strong> */}
       {/* You should check in on some of those fields below. */}
      {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
  )
}

export default Alert

// whenever you use props.alert && you use & operator inside the JavaScript then what will happen First of all, what you have with this thing will be the evaluate If this becomes false or becomes null then the next thing will not be evaluate and if it is true then the other will also be evaluate So, when this thing is evaluate then basically what will happen because this thing will be your return
//this happens because all jsx will be converted in JavaScript calls  
