function login()
{

let role=document.getElementById("role").value;

if(role=="operator")
{
window.location="operator/dashboard.html";
}

if(role=="admin")
{
window.location="admin/dashboard.html";
}

}