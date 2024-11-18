// Function to toggle the background color of the body between black and white
function changeBodyColor() {
    const body = document.getElementById('main-body');
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'white';
    }
}



// Function to update time and date dynamically
function updateDateTime() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString();

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Update the time and date every second
setInterval(updateDateTime, 1000);

// Call once to immediately show the time
updateDateTime();

// Function to change the background color of the body to white
