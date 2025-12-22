import { BrowserRouter, Routes , Route } from 'react-router-dom';


import Main from "./page/Main";
import Calc from "./page/Calc";
import Dark from "./page/Dark";
import StudentInfo from "./page/StudentInfo";

import Props건네주기 from "./7일차.camp/지식인내주기";
import 게시판 from "./7일차.camp/게시판";
import Axcios from "./page/axcios/Axcios보내기"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path = {"/"} element={<Main />} />
         <Route path = {"/Dark"} element={<Dark />} />
         <Route path = {"/Calc"} element={<Calc />} />
         <Route path = {"/StudentInfo"} element={<StudentInfo />} />
         <Route path={"/comp1"} element={<Props건네주기 />} />
         <Route path = {"/board"} element={<게시판 />} />
          <Route path = {"/axcios"} element={<Axcios />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
