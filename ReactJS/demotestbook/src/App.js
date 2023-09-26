import './App.css';
// import Header from './components/Header';
// import MainBar from './components/MainBar';
//import lifecycleDemo from './components/lifecycleDemo';
//import { HelloWorld } from './HelloWorld';
import StateDemo from './StateDemo';




function App() {
  // const welcomemessage1 = "Hello Students";
  //passing object
  // const user = {
  //   id:11,
  //   text:"object data"
  // };
  return (
    <>
      {/* <HelloWorld welcomemessage= "Welcome in React js Tutorial"/> */}
      {/* <HelloWorld welcomemessage={welcomemessage1}/> */}
      {/* <HelloWorld welcomemessage={"Welcome Recat js Tutorial"}/> */}
      {/* <HelloWorld user={user} welcomemessage={"Welcome Recat js Tutorial"} name="Shubham" age={23}/> */}
      {/* <lifecycleDemo/> */}
      {/* 
      <lifecycleDemo/>
      <Header/>
      <h1>hello Shubham</h1>
      <p className='appP'>This is an extenal css</p>
      <p classNameNameName="demo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloremque itaque sed et! Provident necessitatibus debitis nam maiores autem harum eius quisquam modi culpa architecto recusandae exercitationem perspiciatis, enim amet ratione pariatur cumque voluptates? Dolore tenetur et suscipit laboriosam, similique, repellendus dolores deserunt commodi eveniet est quis. Asperiores, vero officiis!</p>
      <br />
      <MainBar/> */}
      <StateDemo/>
    </>
    
    // *********************************************
    // <div classNameNameNameNameName="App">
    //   Hello students
    //   <p>This is paragraph</p>
    //   <h1>This is heading</h1>
    // </div>
    // **********************************************
  );
}

export default App;
