function EmployeeCard({employee}){
    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            <p>ID: {employee.id}</p>
            <p>Phòng ban: {employee.department}</p>
            <p>Lương: {employee.salary.toLocaleString()} VND</p>
        </div>
    )
}

export default EmployeeCard;