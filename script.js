
const input = document.querySelector("#fileInput");
const container=document.querySelector(".container");
const keys = [];

function fileProcesser(file) {
  const obj = JSON.parse(file);
  keyExtracter(obj);
  const arr=keyFilter(keys);
  console.log(arr);
}


function keyExtracter(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      keys.push(key);
      keyExtracter(obj[key]);
    } else {
      keys.push(key);
    }
  }
}

function handleFileUpload(event) {
  const fileReader = new FileReader();  
  fileReader.onloadend = function() {
    fileProcesser(fileReader.result);
  };
  fileReader.readAsText(event.target.files[0]);
}
// const arr=["react","angular","node","vue","three js","express js"];
// arr.forEach((value,index)=>{
  
  // container.insertAdjacentHTML("beforebegin",`<input type ="checkbox"<li>${index+value}</li>`);
// })
input.addEventListener("change", handleFileUpload);
function keyFilter(arr){
    const filteredArray=arr.filter(function(value,index){
    if((arr.indexOf(value)==index)&&(String(Number(value))==="NaN")){
        return value;
    }
    })
   
    return filteredArray;
}

