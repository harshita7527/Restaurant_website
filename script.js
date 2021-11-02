document.addEventListener("DOMContentLoaded",
   function(event) {
       document.querySelector("button.navbar-toggler")
         .addEventListener("blur", function() {
            var screenWidth = window.innerWidth;
            if (screenWidth < 768) {
            document.querySelector("#collapsable-nav").classList.remove("show");  
         }
        });
   }   
);
