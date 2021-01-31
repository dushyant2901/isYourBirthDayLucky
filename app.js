var date= document.querySelector("#date")
var number= document.querySelector("#number")
var check= document.querySelector("#check")
var output= document.querySelector("#output")

/*function check(input){
    if(input%4===0){
        console.log('you')
    }else{
        console.log("iu")
    }
}*/


function clickHandler(){
var year=(date.value)
var year1=(year.split("-"))
var sum=Number(year1[0])+Number(year1[1])
var num=parseInt(number.value)
console.log(year)
//var sum=year+num
console.log(sum)
 
// check(sum) why is it failing to call a function
if(sum%num===0){
    console.log('you')
    output.innerHTML="you"
}else{
    console.log("iu")
    output.innerHTML="y"
}
}



check.addEventListener("click",clickHandler)