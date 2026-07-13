function convertTemp(){

let temp=document.getElementById("temp").value;
let unit=document.getElementById("unit").value;
let result=document.getElementById("result");

if(temp===""){
result.innerHTML="Please enter a temperature.";
return;
}

temp=parseFloat(temp);

let c,f,k;

if(unit==="C"){

if(temp<-273.15){
result.innerHTML="Temperature below absolute zero!";
return;
}

c=temp;
f=(c*9/5)+32;
k=c+273.15;

}

else if(unit==="F"){

if(temp<-459.67){
result.innerHTML="Temperature below absolute zero!";
return;
}

f=temp;
c=(f-32)*5/9;
k=c+273.15;

}

else{

if(temp<0){
result.innerHTML="Temperature below absolute zero!";
return;
}

k=temp;
c=k-273.15;
f=(c*9/5)+32;

}

result.innerHTML=
"Celsius : "+c.toFixed(2)+" °C<br>"+
"Fahrenheit : "+f.toFixed(2)+" °F<br>"+
"Kelvin : "+k.toFixed(2)+" K";

}
