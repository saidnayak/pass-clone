function updateClock() {
    const now = new Date();

    // Format Date: e.g., 06'MAR
    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const dateString = `${day}'${month}`;
    document.getElementById('current-date').textContent = dateString;

    // Format Time: e.g., 17:00:00
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);
