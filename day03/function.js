function calculateBonus(employee){
    let employeeBonus;
    if(employee.experience>=5){
        employeeBonus = employee.salary * 0.2;
    }else if(employee.experience>=3){
        employeeBonus = employee.salary * 0.1;
    }else if(employee.experience >=0){
        employeeBonus = employee.salary  * 0.05;
    }else{
        throw new Error("Số năm kinh nghiệm không hợp lệ!");
    }
    return employeeBonus;
}

const calculateTotalSalary = function (employee) { 
    return employee.salary + calculateBonus(employee);
}

const Yamada  = {
    id: 1,
    name: "Yamada Tarou",
    age: 50,
    role: "BS",
    experience: 20,
    salary: 400000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${calculateTotalSalary(this).toLocaleString("ja-JP")}円` );
    }
};



const Tanaka  = {
    id: 2,
    name: "Tanaka Tarou",
    age: 25,
    role: "Dev",
    experience: 1,
    salary: 300000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${calculateTotalSalary(this).toLocaleString("ja-JP")}円` );
    }
};

const Oda  = {
    id: 3,
    name: "Oda Tarou",
    age: 60,
    role: "PM",
    experience: 40,    
    salary: 800000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${calculateTotalSalary(this).toLocaleString("ja-JP")}円` );
    }
};

const Uta  = {
    id: 4,
    name: "Uta Tarou",
    age: 30,
    role: "DM",
    experience: 3,    
    salary: 700000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${calculateTotalSalary(this).toLocaleString("ja-JP")}円` );
    }
};

const Saka  = {
    id: 5,
    name: "Saka Tarou",
    age: 28,
    role: "Dev",
    experience: 4,    
    salary: 250000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${calculateTotalSalary(this).toLocaleString("ja-JP")}円` );
    }
};

const Oka  = {
    id: 6,
    name: "Oka Tarou",
    age: 50,
    role: "Dev",
    experience: 25,    
    salary: 700000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${calculateTotalSalary(this).toLocaleString("ja-JP")}円` );
    }
};

const {name, age, role, experience, salary} = Yamada;
console.log(name, age, role, experience, salary);
console.log("------------");


const person = [Yamada, Tanaka, Oda, Uta, Saka, Oka];

function personInfo (per){
per.forEach((per) =>{
    console.log(`ID: ${per.id}, Name: ${per.name}, Age: ${per.age}, Role: ${per.role}, Total Salary: ${calculateTotalSalary(per)} `)})
};
console.log("Thong tin nhan vien");
personInfo(person);

function allName(per){
    const allNames = per.map(index => index.name);
    return allNames;
}
console.log("------------");
console.log("Ten tat ca nhan vien");
console.log(allName(person));  


function devEmployee(per){
    const devEmp = per.filter(index => index.role === "Dev");
    return devEmp;
}
console.log("------------");
console.log("Thông tin dev");
console.log(devEmployee(person));

function findEmployee(per){
    const findEmployee = per.find(index => index.id === 4);
    return findEmployee;
}
console.log("------------");
console.log("Thông tin tim kiem id: 4");
console.log(findEmployee(person));

function totalSalary(per){
    const totalSalary = per.reduce(
    (total,index) => total + index.salary, 0);
    return totalSalary;
}
console.log("------------");
console.log("Tong tien luong cua nhan vien: ");
console.log(totalSalary(person));

function averageSalary(per){
    const averageSalary = totalSalary(per) / per.length;
    return averageSalary;
}
console.log("------------");
console.log("Tien luong trung binh cua nhan vien: ");
console.log(averageSalary(person));


export {};