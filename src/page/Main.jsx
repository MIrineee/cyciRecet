import { Link } from "react-router-dom"

function Main() {
  

  return (
    <>
      <h1>Main 페이지 입니다</h1>
      <Link to="/Dark"> 다크모드페이지 이동</Link>

      <Link to="/StudentInfo"> 학생 정보 페이지 이동</Link>
    </>
  )
}

export default Main