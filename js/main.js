/* Load navigation bar */
let navigation=`
  <img src="img/msv_logo.png" alt="msv logo" class="nav-logo">  
  <ul class="wrapper nav-bar">
  <li><a class="nav-bar__btn" href="index.html">Home</a></li>
  <li><a class="nav-bar__btn" href="quienessomos.html">Quienes somos</a></li>
  <li><a class="nav-bar__btn" href="actividades.html">Actividades</a></li>
  <li><a class="nav-bar__btn" href="faq.html">Faq</a></li>
  </ul>
`
document.getElementById("navigationbar").innerHTML = navigation;

/* Add active class to active senction. */
var btns = document.getElementsByClassName("nav-bar__btn");
for (var i = 0; i < btns.length; i++) {
  if( window.location.pathname.split("/").pop() == btns[i].href.split("/").pop() ) {
    btns[i].classList.add("nav-bar__btn--active");
  }
}

/* Load footer */
let footer=`
  <section class="footer-section">
  <div class="footer-wrapper wrapper">
      <div>
          <p class="footer__legend">Hay demasiadas aventuras ahí afuera esperando ser vividas!</p>
          <div>
              <span class="footer__legend">Seguinos en nuestras redes</span>
              <a href="" class="footer__social-network-btn"><i class="fa-brands fa-facebook fa-xl"></i></a>
              <a href="" class="footer__social-network-btn"><i class="fa-brands fa-square-twitter fa-xl"></i></a>
              <a href="" class="footer__social-network-btn"><i class="fa-brands fa-instagram fa-xl"></i></a>
          </div>
      </div>
      <p class="footer_address">
          123 Anywhere St.,<br>
          Any City, ST 12345<br>
          123-456-7890</p>
      <p>info@tpocac.com</p>
  </div>
  </section>
`
document.getElementById("footer").innerHTML=footer;
