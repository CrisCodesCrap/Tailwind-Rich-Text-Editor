import Header from "./Header";
import Navbar from "./Navbar";
import TextSpace from "./TextSpace";

const Body = () => {
  return (
    <div className={'bg-gradient-to-tr from-blue-900  via-purple-600 to-slate-900 sm:bg-slate-900 flex items-center justify-center h-screen w-screen '}>
      <div className="flex items-center justify-center flex-col w-screen h-screen shadow-lg"> 
        <Header></Header>
        <Navbar></Navbar>
        <TextSpace></TextSpace>
      </div>
    </div>
  )
}


export default Body
