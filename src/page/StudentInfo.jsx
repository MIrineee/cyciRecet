import Stu from "../data/student.json";
function StudentInfo() {
  
  return (
    <>
      <h1>학생 정보 리스트</h1>
      <table>
        <thead>
            <tr>
               <th>번호</th>
                <th>이름</th>
                <th>나이</th>
                <th>이메일</th>
                <th>지역</th>
            </tr>
        </thead>
        <tbody>
            {Stu.student.map((stu , index) => {
                return (
                    <tr key = {index}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td>{stu.age}</td>
                        <td>{stu.email}</td>
                        <td>{stu.region}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </>
  )
}

export default StudentInfo