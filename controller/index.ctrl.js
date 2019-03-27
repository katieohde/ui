angular.module('app.core').controller('indexController', ['$scope', '$http', function($scope, $http) {
    
    $scope.footerDetails = "SASS, HTML, AngularJS, JQuery, CSS Grid ";
    
    jQuery(document).ready(function($){
        
        $('button.btn.btnResume').on('click', function(){
            var text = $('button.btn.btnResume').text();
            $('div.linked-in').toggleClass('show__info');
            $('button').text(
            text == "More Info" ? "Hide Info" : "More Info");
        });

        $('li.dropper--color.color1').on('click', function(){
            $('body').addClass('color1');
            $('body').removeClass('color2 color3 color4 color5 color6');
        });
        
        $('li.dropper--color.color2').on('click', function(){
            $('body').addClass('color2');
            $('body').removeClass('color1 color3 color4 color5 color6');
        });

        $('li.dropper--color.color3').on('click', function() {
            $('body').addClass('color3');
            $('body').removeClass('color1 color2 color4 color5 color6');
        });

        $('li.dropper--color.color4').on('click', function(){
            $('body').addClass('color4');
            $('body').removeClass('color1 color2 color3 color5 color6');
        });

        $('li.dropper--color.color5').on('click', function(){
            $('body').addClass('color5');
            $('body').removeClass('color1 color2 color3 color4 color6');
        });

        $('li.dropper--color.color6').on('click', function(){
            $('body').addClass('color6');
            $('body').removeClass('color1 color2 color3 color4 color5');
        });

        $('div.hamburger-menu').on('click', function(){
           $('div.hamburger-menu').toggleClass('open__button');
           $('div.menu__big-circle').toggleClass('show__big-circle');
        });

    
      });

      
    //   var btnNews = document.querySelector("button");
      
    //   btnNews.addEventListener('click', function() {
    //       var XHR = new XMLHttpRequest();
          
    //       XHR.onreadystatechange = function() {
    //           if (XHR.readyState == 4  && XHR.status == 200) {
    //             console.log(XHR.responseText);
    //           }
    //       }

    //   var url = "https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty";

    //   XHR.open("GET", url);
    //   XHR.send;


}]);