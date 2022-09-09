import Header1 from "./components/header/Header1";
import "../src/style.css";
import { Route, Routes} from "react-router-dom";
import AddForm from "./pages/AddForm";
import DetailPage from "./pages/DetailPage";


function App() {
  
  return (

      <>
        <Header1/>
        <Routes>
            <Route path="/products/new" element={<AddForm />} />
            <Route path="/products/:id" element={<DetailPage/>}/>
        </Routes>
     </>

  );
}
export default App;