$(function () {
  $('a[href*="#"], #title').on('click', function (e) {
         var link = $(this).attr('href');
         link.replace(" ","");
         if (link[0] == "/") {
             window.location=link;
         } else {
             e.preventDefault();
             scl(link);
         }
     });

     $("#title").on('click', function () {
         scl("#space");
     });

     function scl (element) {
         $('html, body').animate({
             scrollTop: $(element).offset().top - 100
         }, 300, 'linear');
     };

});
