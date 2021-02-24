$(document).ready(function() {
   $('#head').on('mouseenter', function() {
      $(this).animate({
         fontSize: '80px'
      }, 'slow');
   });
   $('#head').on('mouseleave', function() {
      $(this).animate({
         fontSize: '45px'
      }, 'slow');
   });
   $('#tOne').click(function() {
      $('#iOne').slideToggle();
   });
   $('#tTwo').click(function() {
      $('#iTwo').slideToggle();
   });
   $('#tThree').click(function() {
      $('#iThree').slideToggle();
   });
   $('#tFour').click(function() {
      $('#iFour').slideToggle();
   });
   $('#tFive').click(function() {
      $('#iFive').slideToggle();
   });
   $('#tSix').click(function() {
      $('#iSix').slideToggle();
   });
});