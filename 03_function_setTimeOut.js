// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("click on container")
// })//We have clicked

// arrow function
// function sum(a,b){
//     return a+b;
// }
summ=(a,b)=>{
    return a+b;
}
logKaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>set Intrval fired</b>"
    console.log("I am your log")
}

//setTimeOut && setInterval function
// setTimeout(logKaro,2000);// after set time out function will run... 

// setInterval(logKaro,2000);// setInterval is very usefull function to set an interval to ony function ... or set time gap between to function

// clr= setTimeout(logKaro,2000);
// Use clearInterval(clr)|| clearTimeout(clr) to cancel setInterval or setTimeout ....

// localStorage

// localStorage
// Storage {length: 0}
// localStorage.getItem('name')
// null
// localStorage.setItem('name' , 'harry');
// undefined
// localStorage
// Storage {name: 'harry', length: 1}
// localStorage.removeItem(name)// this function use remove selected item;

// localStorage.clear()

// JSON
obj={ name: "harry", length:1}
jso=JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
// typeof jso
// 'string'
// json stander require double quote single quote not allow

// ECMAR script ;;; its is stander that maitain javascript to work properly and updat
let o= 35;
console.log('this is my $(o)')