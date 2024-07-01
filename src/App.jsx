

import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singers'

function App() {

  const actors = ['heinz', 'chris', 'carsten', 'jorg'];

  const singers = [
    { id:1, name: 'hello', age: 34 },
    { id: 2, name: 'mike', age: 56 },
    { id: 3, name: 'pop', age: 89 },
    { id: 4, name: 'guitter', age: 99 }]
  
  return (
    <>
      <h1>My First React Experience</h1>
      <p>Lorem ipsum dolor sit amet consecem, ipsum dolor situe natus adipisci! Dolores vero tempore impedit dicta consequatur ipsam nesciunt minima porro exercitationem. Dol</p>


      {
        singers.map(singer =>
          <Singer key={singer.id} objectSinger={singer} ></Singer>)
      }


    

      <Actor name='Hasib'></Actor>
      
      {
        actors.map(actorName => <Actor name={actorName}></Actor>)
      }

      

      <Todo></Todo>
      <Todo task="Learn React" isDone={false}></Todo>
      
      <Todo task="Explore Core Concepts" isDone={true}></Todo>
      
      <Todo task="Practice a lot" isDone={false}></Todo>

      <Device name="Laptop" price="32000"></Device>  {/*//Here name is a property. */}
      <Device name="mobile" price="89000"></Device>
      <Device name="Watch" price="132000"></Device>

      <Person></Person> 
      <Student ></Student>
      <Studentin grade='7' score='99'></Studentin>
      <Studentin></Studentin>
      <Developer></Developer>  
      <Person></Person>
    
    </>
    
  )
}

// ---------------------------------------------------------------------//
// data sending by props
function Device(props) { // ----property come here in props as object. it can be used as dynamic
  // console.log(props);
  return <h2>This device is : {props.name} and the price is {props.price}</h2>
}


// data sending by object
const { grade, score } = { grade: '7', score: '99' } // object is destructured here. 

function Studentin({ grade, score }) { //{ grade, score } is a destructured style
  // console.log(props);
  // console.log(grade, score);
  return (
    <div>
      <h3>This is a student</h3>
      <h4>Class: {grade}</h4>
      <h4>Score: {score}</h4>
    </div>
  )
}

function Person() {
  let age = 34;
  let money = 45;
  const person = {
    name: 'Hasib',
    age: 34

  }
  return <h3>I am {person.name} in React and I am {person.age} years old</h3>

}

function Student() {
  return (
    <div className='student'>
      <h3>This a student</h3>
      <p>Name: </p>
      <p>Age: </p>
    </div>)
}


function Developer() {
  const developer = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '50px'
  }

  return (
    <div style={developer}>
      <h5>Developer Option</h5>
      <p>coding</p>
    </div>
  )

}
// const person = age => <h3>I am new person in React and I am {age} years old</h3>;
// let h = 35;
// person(h);

export default App
