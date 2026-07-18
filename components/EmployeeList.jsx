import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ employees }) {
  return (
    <div>
      {employees.map((emp) => (
        <EmployeeListItem key={emp.id} name={emp.name} title={emp.title}/> 
      ))}
    </div>
  );
}

export default EmployeeList;