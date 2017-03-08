$( document ).ready(function() {
    var r, g, b;
    var r2, g2, b2;
    var angle;

    $('body').on("mousemove",function(){        //écouteur pour écouter tous les écouteurs à la fois
        r = $('#r1').val();
        g = $('#g1').val();
        b = $('#b1').val();
        r2 = $('#r2').val();
        g2 = $('#g2').val();
        b2 = $('#b2').val();
        angle = $('#deg').val();
        $(this).css('background', "linear-gradient(" + angle+"deg, rgb("+r + "," + g + "," + b + "), rgb("+r2 + "," + g2 + "," + b2 + ")");
    });

});
