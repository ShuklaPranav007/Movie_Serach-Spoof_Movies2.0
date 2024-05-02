function searchMovie() {
    var searchQuery = document.getElementById('movieSearch').value.trim();
    if (searchQuery) {
        var searchUrl = 'https://bollyflix.cash/?s=' + encodeURIComponent(searchQuery);
        window.open(searchUrl, '_blank');
    } else {
        alert('Please enter a movie name.');
    }
}