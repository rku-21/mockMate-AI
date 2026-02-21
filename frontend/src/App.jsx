import react from "react";
import { Navigate,Route,Routes} from "react-router-dom"  
import Signup from "./routePages/signup.jsx";
import Login from "./routePages/login.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { ThemePicker } from "./components/ThemePicker.jsx";
import { useAuthStore} from "./store/useAuthStore.js";
import Home from "./routePages/home.jsx";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";


const App=()=>{
     const {authUser,checkAuth}=useAuthStore();
    useEffect(()=>{
         checkAuth();
    },[]);
   
    return (
        <ThemeProvider>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--card)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "18px",
          },
          success: {
            iconTheme: {
              primary: "var(--accent)",
              secondary: "var(--btn-text)",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
            <ThemePicker/>
        <Routes>
            <Route path="/login" element={!authUser?<Login/>:<Navigate to="/"/>} ></Route>
             <Route path="/signup" element={!authUser?<Signup/>:<Navigate to="/"/>}></Route>
             <Route path="/" element={<Home/>}></Route>

        </Routes>
        </ThemeProvider>
    )

}
export default App;


