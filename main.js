$(document).ready(function() {
  $('#fullpage').fullpage({
      sectionsColors: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
      navigation: true,
      verticalCentered: false
      /*afterRender: function() {
          setInterval(function() {
              $.fn.fullpage.moveSectionDown();
          }, 1500);
      }*/
  });    
});
