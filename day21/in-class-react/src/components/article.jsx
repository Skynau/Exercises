// function Article (props) {
//     console.log(props);
//     return (
//         <div>
//             <h4>{props.title}</h4>
//             <p>{props.text}</p>
//         </div>
//     )
// }

// //can also do with props:
// function Article (props) {
//     const title = props.title;
//     const text = props.text
//     console.log(props);
//     return (
//         <div>
//             <h4>{props.title}</h4>
//             <p>{props.text}</p>
//         </div>
//     )
// }

// or even I deconstruct the props:

// function Article (props) {
//     // const title = props.title;
//     // const text = props.text
//     const {title, text} = props;
//     console.log(props);
//     return (
//         <div>
//             <h4>{props.title}</h4>
//             <p>{props.text}</p>
//         </div>
//     )
// }

//or even further and how mainly used:
function Article ({title, text}) {
    // const title = props.title;
    // const text = props.text
    // const {title, text} = props;
    // console.log(title);
    console.log(title);
    const handleClick =() => {

        console.log(`you liked ${title}`);
    }

    const handleClickWithPrevent = (e) => {
        e.preventDefault()
        console.log(`you liked ${title}`);
    }
    const handleCHange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <h4>{title}</h4>
            <p>{text}</p>
            <br />
            <button onClick={handleClick}>Like</button>
            {/* can do with prevent default: */}
            <input type="submit" onClick={handleClickWithPrevent}/>
            <input onChange={handleCHange} />
        </div>
    )
}

//equivalent:
// const Article = () => {
//     return (
//         <div>
//             <h4></h4>
//         </div>
//     )
// }

export default Article