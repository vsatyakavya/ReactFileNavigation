

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
    <h3>hell o world!!!!</h3>
    <h6>How are you doing</h6>
    <Folder />
    <Folder />
    <Folder />
  </div>
}

//created a component (Folder) and rendered by (App) component
//javascript arrow function, which is also a React component
const Folder = () => {
  return <h4>Folder</h4>
}


export default App;
