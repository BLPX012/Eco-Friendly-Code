import React, { useEffect, useRef } from 'react';
import './Styles/HeroSection.css'

function NavBar(){
    const navbarRef = useRef(null);
    const spacerRef = useRef(null);

    useEffect(() => {
        const navbar = navbarRef.current;
        const spacer = spacerRef.current;
        if (!navbar || !spacer) return;

        let lastY = window.scrollY || 0;
        let hideTimer = null;

        function ensureStyle() {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.left = '0';
            navbar.style.right = '0';
            navbar.style.zIndex = '1000';
            navbar.style.transition = 'transform 250ms ease, opacity 250ms ease';
            navbar.style.willChange = 'transform, opacity';
            // mantener espacio reservado para que el contenido no suba debajo del navbar
            spacer.style.height = `${navbar.offsetHeight}px`;
        }

        function onScroll() {
            ensureStyle();

            const currentY = window.scrollY || 0;

            // Mostrar mientras se desplaza
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
            clearTimeout(hideTimer);

            if (currentY > lastY) {
                // Scrolling down: ocultar después de un pequeño retraso si se detiene
                hideTimer = setTimeout(() => {
                    navbar.style.transform = 'translateY(-100%)';
                    navbar.style.opacity = '0';
                }, 450);
            } else {
                // Scrolling up: mostrar inmediatamente
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';
            }

            lastY = currentY;
        }

        function onResize() {
            // Recalcular altura del spacer si cambia el tamaño
            ensureStyle();
        }

        // Inicializar estilos y espacio
        ensureStyle();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            clearTimeout(hideTimer);
        };
    }, []);

    return(
        <>
        <nav ref={navbarRef} className="navbar" role="navigation">
        <div className="navbar-logo">
          <span className="logo-text">
            Eco Friendly<span className="highlight"> Code</span>
          </span>
        </div>

        <ul className="navbar-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="#">Cómo funciona</a></li>
          <li><a href="/rewards">Recompensas</a></li>
          <li><a href="/log-in">Iniciar Sesión</a></li>
          <li>
            <a href="/register" className="btn-register">Regístrate Gratis</a>
          </li>
        </ul>
      </nav>

      {/* Espaciador para preservar el flujo del documento y evitar que el HeroSection sea cortado */}
      <div ref={spacerRef} className="navbar-spacer" aria-hidden="true" />
      </>
    )
}
export default NavBar;