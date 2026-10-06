let Yamada  = {
    name: "Yamada Tarou",
    age: 50,
    role: "business",
    experience: 20,
    salary: 400000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${experienceBonus(this).toLocaleString("ja-JP")}円` );
    }
};

let Tanaka  = {
    name: "Tanaka Tarou",
    age: 25,
    role: "development",
    experience: 1,
    salary: 300000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${experienceBonus(this).toLocaleString("ja-JP")}円` );
    }
};

let Oda  = {
    name: "Oda Tarou",
    age: 60,
    role: "ProjectManager",
    experience: 40,    
    salary: 800000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${experienceBonus(this).toLocaleString("ja-JP")}円` );
    }
};

function experienceBonus(person){
 if (person.experience>=1 && person.experience<5) {
    return person.salary * 1.01;
 } else if (person.experience>=5 && person.experience<10){
    return person.salary * 1.05;
 } else if(person.experience>=10 && person.experience <20){
    return person.salary * 1.1;
 } else if(person.experience>=20 && person.experience <40){
    return person.salary * 1.2;
 }  else if(person.experience>=40){
    return person.salary * 1.4;
 }else {
    return person.salary;
 }
}

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

console.log("Bonus cua", Yamada.name, ":", calculateBonus(Yamada) );
console.log("Bonus cua", Tanaka.name, ":", calculateBonus(Tanaka));
console.log("Bonus cua", Oda.name, ":", calculateBonus(Oda));

let calculateTotalSalary = function (employee) { 
    return employee.salary + calculateBonus(employee);
}
console.log("----");
console.log("Tong luong cua", Yamada.name, ":", calculateTotalSalary(Yamada));
console.log("Tong luong cua", Tanaka.name, ":",calculateTotalSalary(Tanaka));
console.log("Tong luong cua", Oda.name, ":",calculateTotalSalary(Oda));

console.log("----");
Yamada.info();
Tanaka.info();
Oda.info();