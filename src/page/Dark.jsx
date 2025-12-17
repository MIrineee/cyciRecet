import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Dark() {
  const [다크모드 , set다크모드] = useState(false)

  const 페이지이동 = useNavigate();
  
  

  return (
    
    <>

    <input type = "button" value="다크모드" onClick={e => {
        set다크모드(!다크모드)
      }}/>

      <div style={{
        color: 다크모드 ? "white" : "black",
        backgroundColor: 다크모드 ? "black" : "white",
        border: "1px solid #b41c1cff",
        width: "100vw" ,
        height: "100vh" ,
        
        
      }}>
        hello World
      </div>
      <input type = "button" value="이동" onClick={e => {
        페이지이동("/")
      }}/>
    </>
  )
}

export default Dark