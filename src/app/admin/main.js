$(document).ready( function()
{
    var panel= $('.panel').css('width');
    var width= panel.replace('px','');
    var i=0;

    $('ul li').each(function (){
        i++;
    });

    var val1= width/i;

    $('.panel').css('width',val1+ 'px')
});
