
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import "bootstrap-icons/font/bootstrap-icons.css"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
if (typeof window === 'object'){
  var f = document.getElementById('flay');
  document.addEventListener('click', function(ev){
              f.style.transform = 'translateY('+(ev.clientY+5)+'px)';
              f.style.transform += 'translateX('+(ev.clientX-255)+'px)';
        
  },false);
}

