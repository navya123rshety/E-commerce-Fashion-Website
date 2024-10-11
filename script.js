const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

// Make sure the bar exists before adding the event listener
if (bar) {
    bar.addEventListener('click', () => {
        // Toggle the 'active' class on the navbar when clicked
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        // Toggle the 'active' class on the navbar when clicked
        nav.classList.remove('active');
    })
}

