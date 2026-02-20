import react from "react";
import { Navigate,Route,Routes} from "react-router-dom"  
import Signup from "./routePages/signup.jsx";
import Login from "./routePages/login.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { ThemePicker } from "./components/ThemePicker.jsx";

const App=()=>{
    return (
        <ThemeProvider>
            <ThemePicker/>
        <Routes>
            <Route path="/login" element={<Login></Login>} ></Route>
             <Route path="/signup" element={<Signup/>}></Route>

        </Routes>
        </ThemeProvider>
    )

}
export default App;


