$(window).on('load', function() {
     // Проверяем ширину окна
     if ($(window).width() > 767) { // Если ширина больше 768px (например, планшеты и десктопы)
         $('#header').vide('./video/cover.mp4', {
             bgcolor: '#8235b6'
         });
     } else { // На телефонах
         $('#header').css({
             'background-image': 'url(./video/cover.jpg)',
             'background-size': 'cover',
             'background-position': 'center'
         });
     }
 });
