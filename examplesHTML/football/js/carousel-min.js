!function(){var e=3,t=document.getElementById("carousel"),n=t.querySelector(".carousel ul"),r=t.querySelectorAll(".carousel li"),l=0;function o(){var t=window.innerWidth;if(t<800){l=0,e=1;var r=parseInt(getComputedStyle(document.querySelector(".card")).width);n.style.transform="translateX("+(t-r)/2+"px)"}else e=3}t.querySelector(".carousel__btn--left").onclick=function(){l=Math.min(l+34.5*e,0),n.style.marginLeft=l+"rem"},t.querySelector(".carousel__btn--right").onclick=function(){l=Math.max(l-34.5*e,-34.5*(r.length-e)),n.style.marginLeft=l+"rem"},window.addEventListener("resize",o),document.addEventListener("DOMContentLoaded",o)}();