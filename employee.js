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
    salary: 750000,
    info: function(){
        console.log( `${this.name} Info: Age:${this.age}, Role:${this.role}, Salary:${experienceBonus(this).toLocaleString("ja-JP")}円` );
    }
};




Yamada.info();

Tanaka.info();

Oda.info();