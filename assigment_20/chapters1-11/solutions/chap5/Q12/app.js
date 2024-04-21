    // Store a radius into a variable
    var radius = 5; // Replace 5 with the actual radius

    // Calculate the circumference based on the radius
    var circumference = 2 * Math.PI * radius;

    // Calculate the area based on the radius
    var area = Math.PI * Math.pow(radius, 2);

    // Display the result in the browser
    document.write("<h2>Geometrizer</h2>");
    document.write("<p>Radius: " + radius + "</p>");
    document.write("<hr>");
    document.write("<p>The circumference is " + circumference.toFixed(2) + "</p>");
    document.write("<p>The area is " + area.toFixed(2) + "</p>");