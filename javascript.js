url = "https://randomuser.me/api/";


let myArray = [];
let points = [];
async function getUser() {

    try{
        let res = await axios.get(url);
        addUser(res.data.results[0].name);

    
    }
    catch(error){
        console.log(error);
    }
    
}

async function addUser(name){
    let nameUser = (name.first + " " + name.last);
    console.log(nameUser);
    let infodata = document.getElementsByClassName("infodata");
    let div = document.createElement("div");
    infodata[0].append(div);
    div.setAttribute('id', nameUser);
    let balance = (Math.floor(Math.random() * 1500000))+.01;
    
    let obj = {};

    obj[nameUser] = balance;
    myArray.push(obj);
    points.push(balance);
    
    div.innerHTML = `<div class = "uName"><p>${nameUser}</p></div><div class = "balance"><p>${balance}</p></div>`;
    
}


function doubleMoney(){
    let infodata_1 = document.getElementsByClassName("infodata");
    
    let i_end = infodata_1[0].children.length
    for(let i = i_end-1; i >= 0 ; i--){
        
        delFun(infodata_1[0].children[i].id);
    }
    let infodata = document.getElementsByClassName("infodata");
    for(let j = 0; j < myArray.length; j++){
        let div = document.createElement("div");
        
        infodata[0].append(div);
        div.setAttribute('id', Object.keys(myArray[j]));
        balance = (2*Object.values(myArray[j]));
        div.innerHTML = `<div class = "uName"><p>${Object.keys(myArray[j])}</p></div><div class = "balance"><p>${balance}</p></div>`;
    }

   
}
function delFun(id){
    
     let remLi = document.getElementById(id);
     remLi.remove();
 }
 

function calcWealth(){
    let infobalance = document.getElementsByClassName("infobalance");
    if(infobalance[0].hasChildNodes()){
        delFun("sumTotal");
    }

    let sum = 0;
    for(let j = 0; j < myArray.length; j++){
        sum += Number(Object.values(myArray[j]));
    }
    let div = document.createElement("div");
    infobalance[0].append(div);
    div.setAttribute('id', "sumTotal");
    div.innerHTML = `<div class = "total"><p>Total:</p></div><div class = "sum"><p>${sum}</p></div>`;
}
function million(){
    let infobalance = document.getElementsByClassName("infobalance");
    if(infobalance[0].hasChildNodes()){
        delFun("sumTotal");
    }
    let infodata_1 = document.getElementsByClassName("infodata");
    console.log(infodata_1[0].children.length);
    let i_end = infodata_1[0].children.length
    for(let i = i_end-1; i >= 0 ; i--){
        
        delFun(infodata_1[0].children[i].id);
    }
    let infodata = document.getElementsByClassName("infodata");
    for(let j = 0; j < myArray.length; j++){
            if((Object.values(myArray[j])) >= 1000000){
            let div = document.createElement("div");
        
            infodata[0].append(div);
            div.setAttribute('id', Object.keys(myArray[j]));
            balance = Object.values(myArray[j]);
            div.innerHTML = `<div class = "uName"><p>${Object.keys(myArray[j])}</p></div><div class = "balance"><p>${balance}</p></div>`;
        }
    }
}

function sort(){
    points.sort(function(a, b){return b - a});
    console.log(points);
    let infobalance = document.getElementsByClassName("infobalance");
    if(infobalance[0].hasChildNodes()){
        delFun("sumTotal");
    }
    let infodata_1 = document.getElementsByClassName("infodata");
   
    let i_end = infodata_1[0].children.length
    for(let i = i_end-1; i >= 0 ; i--){

        delFun(infodata_1[0].children[i].id);
    }
    let infodata = document.getElementsByClassName("infodata");
    for(let i = 0; i < points.length; i++){
        
        for(let j = 0; j < myArray.length; j++){
            console.log(points[i], Object.values(myArray[j]));
            if(points[i] == (Object.values(myArray[j]))){
                console.log("match found");
                let div = document.createElement("div");
        
                infodata[0].append(div);
                div.setAttribute('id', Object.keys(myArray[j]));
                balance = Object.values(myArray[j]);
                div.innerHTML = `<div class = "uName"><p>${Object.keys(myArray[j])}</p></div><div class = "balance"><p>${balance}</p></div>`;
            }
        }
    }

        
}
