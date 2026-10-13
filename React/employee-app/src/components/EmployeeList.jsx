const employees = [
    {
        id: 1,
        name: "Yamada",
        department: "IT",
        salary: 400000
    },
    {
        id: 2,
        name: "Tanaka",
        department: "HR",
        salary: 300000
    },
    {
        id: 3,
        name: "Oda",
        department: "IT",
        salary: 500000
    }
];

function EmployeeList(){
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
}

export default EmployeeList;
