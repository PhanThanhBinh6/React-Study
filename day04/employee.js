await fetch("https://jsonplaceholder.typicode.com/user")
.then((response) => {
    if(!response.ok){
        throw new Error(`HTTP ERROR: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


async function getListUser(url){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const result = await response.json();
        return result;

    }catch(error){
        console.log("Phat sinh loi:", error);
    }
};

console.log("Thong tin tat ca nhan vien");
console.log(await getListUser('https://jsonplaceholder.typicode.com/Todos/1'));
console.log(await getListUser('https://jsonplaceholder.typicode.com/users'));

const listUser = await getListUser('https://jsonplaceholder.typicode.com/users');
function allName(employee){
    const allName = employee.map(index => index.name);
    return allName;
}
console.log("------------");
console.log("Ten tat ca nhan vien");
console.log(await allName(await getListUser('https://jsonplaceholder.typicode.com/users'))); 
console.log(allName(listUser));

function findUser5(employee){
    const findUser = employee.find(index => index.id === 5);
    return findUser;
}
console.log("------------");
console.log("Thong tin user id: 5");
console.log(findUser5(listUser)); 


function searchEmployee(employee,id){
    return employee.find(employee => employee.id === id);
}
console.log("------------");
console.log("Tim thong tin user id: 2");
console.log(searchEmployee(listUser, 2));