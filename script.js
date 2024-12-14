document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const isClickInside = dropdown.contains(event.target);

    if (!isClickInside) {
        dropdownContent.style.display = 'none'; 
    }
});


document.querySelector('.dropdown-btn').addEventListener('click', function(event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 
        dropdownContent.style.display === 'flex' ? 'none' : 'flex';

    event.stopPropagation(); 
});
