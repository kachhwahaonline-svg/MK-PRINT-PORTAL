function openService(service)
{
localStorage.setItem("service",service);
window.location="service.html";
}

if(document.getElementById("serviceName"))
{
document.getElementById("serviceName").innerText=
localStorage.getItem("service");
}

function submitApplication()
{

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;

let service=localStorage.getItem("service");

let data=JSON.parse(localStorage.getItem("applications")||"[]");

let id="APP"+Math.floor(Math.random()*10000);

data.push({

id:id,
service:service,
name:name,
mobile:mobile,
status:"Pending"

});

localStorage.setItem("applications",JSON.stringify(data));

alert("Application Submitted");

}

if(document.getElementById("data"))
{

let data=JSON.parse(localStorage.getItem("applications")||"[]");

let html="";

data.forEach(app=>{

html+=`
<tr>
<td>${app.id}</td>
<td>${app.service}</td>
<td>${app.name}</td>
<td>${app.status}</td>
</tr>
`;

});

document.getElementById("data").innerHTML=html;

}