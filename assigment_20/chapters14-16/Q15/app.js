// Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the dropdown/select menu
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write(`<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`);
}
document.write("</select>");
