var phn1="1234567890";
var phn2="123456789";
var phn3="12345678";

function isvalid(phone)
{
    return phone.toString().length===9;
}
document.getElementById("result1").innerText = "Phone1 is valid: " + isvalid(phn1); 
document.getElementById("result2").innerText = "Phone2 is valid: " + isvalid(phn2); 
document.getElementById("result3").innerText = "Phone3 is valid: " + isvalid(phn3);