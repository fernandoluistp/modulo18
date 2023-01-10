// instancia jquery e evita conflitos
// jQuery( function($){

   $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
         loop:true,
         margin:10,
         responsiveClass:true,
         responsive:{
             0:{
                 items:1,
                 nav:true
             },
             600:{
                items:2,
                nav:true
            },
             992:{
                 items:3,
                 nav:true,
                 loop:false
             }
         }
     })

     $(".owl-prev,.owl-next").css({
        "color" : "white",
    
        "font-size" : "4rem",
 
    
    })

    $(".owl-nav").css({
        "display" : "flex",
        "justify-content" : "space-between",
        "margin-left" : "-5%",
        "position" : "absolute",
        "top" : "0",
        "width" : "106%",
        "align-items" : "stretch",
        "height" : "100%"
    })
     
    $(".owl-stage-outer").css({
        "z-index" : "2"
    })
   })

/*   $(document).mouseleave(function(){
    console.log('saiu');
    $('#ModalCliente1').modal('show');
});*/

$(document).one("mouseleave", function(){
    console.log('saiu');
    $('#naosair').modal('show');
    $(".oferta").delay(800).animate({
        left: '250px',
        width: '350px',
        fontSize: '50px',
        fontWeight: 'bold'
            }, "slow");
});

$(document).ready(function(){

    $(".botao-descricao").click(function(event){
        event.preventDefault();
        $(this).next().slideToggle();
        console.log("clicou");
      });

      


    });