const input=document.querySelector("#fileInput");
const keys=[]
// let a=0;
function fileProcesser(file){
  const obj=JSON.parse(file);
 keyExtracter(obj);
 console.log(keys);
  
}
function keyExtracter(obj){

  for(let key in obj){
    // a++;
    if(typeof obj[key]==="object"&&obj[key]!==null){
    
      keys.push(key);
     keyExtracter(obj[key]);
    }else{
      keys.push(key);
    }
   }

}
function handleFileUplod(event){
  const fileReader=new FileReader();
  fileReader.onloadend=function(){
    fileProcesser(fileReader.result);
  }
  fileReader.readAsText(event.target.files[0])
}

input.addEventListener("change",handleFileUplod);
// fnName({event details}) -- 










