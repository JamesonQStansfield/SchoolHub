




//Homepage Date
function getFormattedDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
}
function displayDate() {
    const dateContainer = document.getElementById('date-container');
    dateContainer.textContent = getFormattedDate();
}
document.addEventListener('DOMContentLoaded', displayDate);


//Bookmark animation
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.bookmark');
    gridItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`; // Adjust the delay as needed
    });
});