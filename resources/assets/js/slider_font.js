import "owl.carousel";
export default function SliderFont() {
    // for bottom slider
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
    });
    $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");
    });
}
