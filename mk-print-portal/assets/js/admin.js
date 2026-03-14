let data=JSON.parse(localStorage.getItem("applications")||"[]");

let html="";

data.forEach((app,index)=>{

html+=`
<tr>
<td>${app.id}</td>
<td>${app.service}</td>
<td>${app.name}</td>
<td>${app.status}</td>
<td>
<button onclick="complete(${index})">Complete</button>
</td>
</tr>
`;

});

document.getElementById("apps").innerHTML=html;

function complete(i)
{

data[i].status="Completed";

localStorage.setItem("applications",JSON.stringify(data));

location.reload();

}