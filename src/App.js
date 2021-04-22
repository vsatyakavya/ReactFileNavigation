

//react component is a javascript function, that returns something to be rendered
//we can also render html tags
//we are injecting this code into div id="root" in HTML file
//we can inspect in browser as 
//<div id="root">
// <div>
//  <h3>hello world!!</h3>
//  <h6>How are you doing</h6>
// </div>
//</div>

// function App() {
//   return <div>
//   <h3>hell o world!!!!</h3>
//   <h6>How are you doing</h6>
//   <Folder />  //Advantage of components is, we can render any number of times
//   <Folder />
//   <Folder />
// </div>
// }



function App() {
  return <div>
  
    <Folder name="Desktop">
   <h3>some stuff</h3>
   <h4>Other Thing</h4>

    </Folder>
  
    <Folder name="Applications"/>
    <File name="dogs.jpeg" />
    <File name ="cats.png" />
    
  </div>
}

//created a component (Folder) and rendered by (App) component
//javascript arrow function, which is also a React component


//to evaluate the variable (name) as javascript, we have to add {} to name as {name} 
// const Folder = () => {
//   const name = "my_deskop";
//   return <h4>{name}</h4>
// }

//props is a regular function argument, default word in React
//default props value is an empty object ,console.log(props) returns an {} empty object by default
//To pass the values to the props , give it to the component(Folder) when calling a function (Folder)
const Folder = (props) => {
  console.log(props);
  const borderStyle = {border :'2px solid blue'}
  return <div style = {borderStyle}>{props.name}
  {props.children}

  </div>
}


//created an another File Component
const File = (props)=>{
  return <div>{props.name}</div>

};



export default App;
