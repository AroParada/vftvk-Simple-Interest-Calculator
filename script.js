function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    // r = 12
    y = document.getElementById("years").value;
 
    var result = parseInt(p)*(parseFloat(r)/100)*parseInt(y);
    alert(result)
}
        