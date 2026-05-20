function updateTime() {
    const now = new Date();

   
    const lisbonTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Europe/Lisbon' 
    });

    
    const macauTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Asia/Macau' 
    });

    
    document.getElementById('lisbon').innerHTML = lisbonTime;
    document.getElementById('macau').innerHTML = macauTime;
}


setInterval(updateTime, 1000);


updateTime();







// JavaScript (Put this inside your script tag or linked JS file)
function checkPassword() {
    let password = document.getElementById("boxInput").value;
    
    if (password === "1974") {
        alert("Success!");
        // This command target the CSS display rule and changes it to show the box!
        document.getElementById("secretBoxContent").style.display = "block";
    } else {
        alert("Wrong password. Access denied!");
    }
}