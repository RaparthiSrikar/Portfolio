$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[data-src]');
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 50px 0px' // Adjust the rootMargin as needed
    });

    images.forEach(function(img) {
        observer.observe(img);
    });
});

function text(element) {
    var url = element.getAttribute('href');
    
    // Set iframe src attribute to the provided URL
    $('#webpageFrame').attr('src', url);
    
    // Open the modal
    $('#webpageModal').modal('show');
}
