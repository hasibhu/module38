




// export default function Todo({ task, isDone }) {
//     return (
//         <li>Task: {task} </li>
//     )
// }



// option 1 ternary opeator
// export default function Todo({ task, isDone }) {
//     return (
//         <li>Task: {task} {isDone===true? 'Good Job':'not good'}</li>
//     )
// }


// option 2 ternary opeator

// export default function Todo({ task, isDone }) {
//     return (
//         <li> {isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )
// }


// option 3 ternary opeator
//&&
// export default function Todo({ task, isDone }) {
//     return (
//         <li> {task} {isDone && ': Finished'} : </li>
//     )
// }


//  ||

// export default function Todo({ task, isDone }) {
//     return (
//         <li> {task} {isDone || ':  Do It'}  </li>
//     )
// }


// conditional rendering 6

export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li> Finished:  {task} </li> //if isDone is true then this will be returned.
    }
    else {
        listItem = <li> Work on:  {task} </li> //if isDone is NOT true then this will be returned.
    }

    return listItem;
}