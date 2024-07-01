

export default function Singer({ objectSinger }) {
    // console.log(singer);
    const { name, age } = objectSinger ;
    return (
        <div>
            <h3>Singer: {name} </h3>
            <p>Age: {age}</p>
        </div>
    )
}