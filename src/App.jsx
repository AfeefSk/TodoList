
import Header from "./components/TODOheader";
import TODOui from "./components/TODOui";
import TODOform from "./components/TODOform";


function App() {
  
  return (
    <>
    <div className="w-full h-screen bg-fuchsia-500 flex flex-wrap justify-center border-none py-80 ">
    <div className="w-max h-max py-28 px-28 bg-fuchsia-600 shadow-2xl shadow-slate-900 ">
    <Header />
    <br/><br/><br/>
    <TODOui todos_completed={0} total_todos={0}/>
    <TODOform/>
    </div>
    </div>
    </>
  );
}

export default App;
