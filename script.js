// Basic JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (could be added if needed)
    
    // Download button functionality
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.closest('.app-card, .game-card, .download-item').querySelector('h3').textContent;
            alert(`Download started: ${itemName}\n\nNote: This is a demo website. No actual files will be downloaded.`);
        });
    });
    
    // Search functionality
    const searchBars = document.querySelectorAll('.search-bar');
    
    searchBars.forEach(searchBar => {
        const input = searchBar.querySelector('input');
        const button = searchBar.querySelector('button');
        
        button.addEventListener('click', function() {
            if (input.value.trim() !== '') {
                alert(`Searching for: ${input.value}\n\nNote: This is a demo website. Search functionality is not implemented.`);
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                alert(`Searching for: ${input.value}\n\nNote: This is a demo website. Search functionality is not implemented.`);
            }
        });
    });
    
    // Filter functionality
    const filterSelects = document.querySelectorAll('.filter-options select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            alert(`Filter applied: ${this.value}\n\nNote: This is a demo website. Filter functionality is not implemented.`);
        });
    });
});
