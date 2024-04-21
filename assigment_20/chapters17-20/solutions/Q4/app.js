var tableNumber = +prompt("Enter table number")
var tableLen = +prompt("Enter table number")
console.log(tableNumber, "tableNumber")

for ( var i=1; i <=tableLen; i++) {
    document.write( tableNumber + " x" + i +  "=" + tableNumber * i + "</br>")
}