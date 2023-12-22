var a = prompt("Enter UserName");
var b = prompt("Enter password");
if (a == "pichidhi" && b == "22-12-2001") {
    window.location.href = "start.html";
} else {
    alert("invalid details");
    window.location.href = "index.html";
}