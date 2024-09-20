
import Header from "./components/TODOheader";
import TODOform from "./components/TODOform";


function App() {
  
  return (
    <>
    <div className="w-full h-full bg-fuchsia-500 flex flex-wrap justify-center border-none py-80 ">
    <div className="w-max h-max py-28 px-28 bg-fuchsia-600 shadow-2xl shadow-slate-900 ">
    <Header/>
    <br/><br/><br/>
    <TODOform/>
    </div>
    </div>
    </>
  );
}

export default App;
