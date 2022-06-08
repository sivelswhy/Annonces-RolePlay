window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-3S62TTDK8Q');

var mybutton = document.getElementById("myBtn");

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTo = 0;
// }

function copyEvent(id) {
  var str = document.getElementById(id)
  window.getSelection().selectAllChildren(str)
  navigator.clipboard.writeText(str.innerText).then(function() {
    alert(`J'ai bien copié le texte suivant :\n\n${str.innerText}`)
  }, function(err) {
    alert(`Bip Bioup :  Je n'ai pas pu copier le texte et j'ai reçu l'erreur suivante :\n\n${err}`)
  });
}