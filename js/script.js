$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: false
            },
            600:{
                items:1,
                nav:false,
                dots: false
            },
            1000:{
                items:1,
                nav:false,
                loop:false,
                dots: false
            }
        }
    });
    $(".nav-tabs a").click(function(){
        $(this).tab('show');

    });
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active-acc");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});



