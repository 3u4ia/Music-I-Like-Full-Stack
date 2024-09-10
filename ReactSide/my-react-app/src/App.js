import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './CSS Modules/HomePage.css'
import './CSS Modules/AccountFields.css'

import LogoutPage from "./components/LogoutPage";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import RegistrationForm from "./components/Registration";
import AccountForm from "./components/AccountFields";
import LoginForm from "./components/LoginPage";
import HomeForm from "./components/HomePage";

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ userId , setUserId ] = useState(undefined); //then i could pass into account Form liek a prop and have loginForm set it
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} userId={userId}/>}>
              <Route index element={<HomeForm/>}/>
              {/*can use logical and operator to make sites exist and not exist*/}
              {isLoggedIn &&
              <Route  path="accountFields" element={<AccountForm userId={userId}/>} />
              }
              {!isLoggedIn &&
              <Route path="loginPage" element={<LoginForm setIsLoggedIn={setIsLoggedIn} setUserId={setUserId}/>}/>
              }
              {!isLoggedIn &&
              <Route path="registration" element={<RegistrationForm setIsLoggedIn={setIsLoggedIn}/>}/>
              }
              {isLoggedIn &&
              <Route path="logout" element={<LogoutPage setIsLoggedIn={setIsLoggedIn} setUserId={undefined}/>}/>
              }
              <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
