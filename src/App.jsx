import { BrowserRouter, Routes , Route } from 'react-router-dom';


import Main from "./page/Main";
import Calc from "./page/Calc";
import Dark from "./page/Dark";
import StudentInfo from "./page/StudentInfo";
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path = {"/"} element={<Main />} />
         <Route path = {"/Calc"} element={<Calc />} />
         <Route path = {"/StudentInfo"} element={<StudentInfo />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
