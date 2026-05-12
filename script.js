function startClock() {
    // 1. Get the current date/time from the computer
    const now = new Date();

    // 2. Format the time for Lisbon
    const lisbonTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Europe/Lisbon' 
    });

    // 3. Format the time for Macau
    const macauTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Asia/Macau' 
    });

    // 4. Send those times to your HTML spans using their IDs
    document.getElementById('lisbon').innerHTML = lisbonTime;
    document.getElementById('macau').innerHTML = macauTime;
}

// 5. Run the function every 1000 milliseconds (1 second)
setInterval(startClock, 1000);

// 6. Run it once immediately so it doesn't start at 00:00:00
startClock();