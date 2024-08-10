import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import FetchItems from "../components/Fetchitems.jsx";
import { useSelector } from "react-redux";
import Loadingspinner from "../components/LoadingSpinner.jsx";

function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);
  
  return (
    <>
    <Header/>
    
    <FetchItems/> 
    { fetchStatus.currentlyFetching ? <Loadingspinner/> : <Outlet/>}
    {/* <Outlet/> */}
    <Footer/>
    </>
  );
}

export default App;
