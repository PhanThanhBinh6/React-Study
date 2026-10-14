import EmployeeCard from "./EmployeeCard";


function EmployeeList({employees}){
    return(
        <section className="employee-list">
            <h2>Danh Sách Nhân Viên</h2>
            <div className="employee-list-grid">
                {employees.map((employee) => (
                <EmployeeCard
                key={employee.id}
                employee={employee} />
                ))}
            </div>            
        </section>
    )
}


/*function EmployeeList(){
    return(
        <section>
            <h2>Danh sách nhân viên</h2>
            <ul>
                {employees.map(employee =>(
                    <li key={employee.id} >
                        Name:{employee.name} - Department:{employee.department}
                        <div>
                            ID:{employee.id} ・ Salary:{employee.salary}
                        </div>
                    </li>
                ))

                }
            </ul>
        </section>
    );
}*/

export default EmployeeList;
