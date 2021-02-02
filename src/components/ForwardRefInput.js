import React from 'react'

// function ForwardRefInput() {
//     return (
//         <div>
//             <h1> Forawrd Reference Input </h1>
//         </div>
//     )
// }

const ForwardRefInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})
export default ForwardRefInput
