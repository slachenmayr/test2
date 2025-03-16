document.addEventListener("DOMContentLoaded", function () {
    let gallery = document.querySelector(".gallery");
    
    function autoScroll() {
        gallery.scrollBy({ left: 2, behavior: "smooth" });

        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
            gallery.scrollTo({ left: 0, behavior: "smooth" });
        }
    }

    setInterval(autoScroll, 50);
});
