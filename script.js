function updateTime() {
    const now = new Date();

    // Get Lisbon Time
    const lisbonTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Europe/Lisbon' 
    });

    // Get Macau Time
    const macauTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Asia/Macau' 
    });

    // Push to HTML
    document.getElementById('lisbon').innerHTML = lisbonTime;
    document.getElementById('macau').innerHTML = macauTime;
}

// Update every 1 second
setInterval(updateTime, 1000);

// Run immediately so the page isn't blank at the start
updateTime();