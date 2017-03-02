$( document ).ready(function() {
    var r = 125;
    var g = 125;
    var b = 125;

    $('#r1').on("change mousemouve",function(){
        r = $(this).val();
        $('#body').css({'background-color': 'rgb('+ r + ', ' +  g + ', ' + b +')'});
        console.log($('#r1').val(), $('#g1').val(), $('#b1').val());
    });

    $('#g1').on("change mousemouve",function(){
        g = $(this).val();
        $('#body').css({'background-color' : 'rgb('+ r + ', ' +  g + ', ' + b +')'});
        console.log($('#r1').val(), $('#g1').val(), $('#b1').val());
    });

    $('#b1').on("change mousemouve",function(){
        b = $(this).val();
        $('#body').css({'background-color' : 'rgb('+ r + ', ' +  g + ', ' + b +')'});
        console.log($('#r1').val(), $('#g1').val(), $('#b1').val());
    });
});
