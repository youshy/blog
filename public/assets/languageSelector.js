!function(){function t(){return window.matchMedia(e).matches}var e=getComputedStyle(document.body).getPropertyValue("--phoneWidth"),n=document.querySelector(".language-selector-current"),o=document.querySelector(".language-selector__more");document.body.addEventListener("click",function(){t()||!o||o.classList.contains("hidden")||o.classList.add("hidden")}),n&&n.addEventListener("click",function(e){t()||(e.stopPropagation(),o.classList.toggle("hidden"))})}();