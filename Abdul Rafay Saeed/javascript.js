
var english = +prompt('Enter English Number')
var urdu = +prompt('Enter Urdu Number') 
var math = +prompt('Enter Math Number')
var totalNumber = (english + urdu + math)
var percentage = ((totalNumber /300) *100)
document.getElementById('eng').innerHTML = english
document.getElementById('urdu').innerHTML = urdu
document.getElementById('math').innerHTML = math 
document.getElementById('total').innerHTML = totalNumber 
document.getElementById('percentage').innerHTML = percentage + '%' 

if (  percentage >=90){
document.getElementById('grade').innerHTML = 'A+'
} 
else if ( percentage >=80){
document.getElementById('grade').innerHTML = 'A1'    
}
else if ( percentage >=70){
document.getElementById('grade').innerHTML = 'A'    
}
else if ( percentage >=60){
document.getElementById('grade').innerHTML = 'B'    
}
else if ( percentage >=50){
document.getElementById('grade').innerHTML = 'C'    
}
else if (percentage >=40){
document.getElementById('grade').innerHTML = 'D'    
}
else if ( percentage >=30){
document.getElementById('grade').innerHTML = 'E'    
}
else{
document.getElementById('grade').innerHTML = 'Fail'    
}
    

