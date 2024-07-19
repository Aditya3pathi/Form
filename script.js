document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        if (checkbox.classList.contains('checked-blue')) {
            checkbox.classList.remove('checked-blue');
            checkbox.checked = false;
        } else {
            checkbox.classList.add('checked-blue');
            checkbox.checked = true;
        }
    });
});
