// ========== Handling Esc events ==========

// 1. Add an event listener to the document
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        console.log('Escape was pressed');
    }
});