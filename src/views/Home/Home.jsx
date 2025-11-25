import React, { useState, useEffect } from 'react';
import { Shield, Users, BookOpen, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';   
import './home.css';
import Navbar from '../../components/Navbar';


export default function Home() {
  const navigate = useNavigate();                

  const handleNavigateToLogin = () => {
    navigate('/login');                          
  };

  // Carrusel 
  const slides = [
    {
      id: 1,
      title: 'Reconoce las señales de ciberacoso',
      text: 'Mensajes constantes que te incomodan, comentarios humillantes en publicaciones, difusión de fotos sin tu consentimiento o amenazas veladas son formas de violencia digital. No es exagerado sentirse mal por esto: tu bienestar emocional importa y tienes derecho a entornos digitales seguros.',
      image: '/images/ciber1.jpg', 
    },


    {
    id: 2,
    title: 'El impacto emocional es real y merece atención',
    text: 'El ciberacoso no solo ocurre en la pantalla: afecta el sueño, la concentración, la autoestima y la sensación de seguridad. Muchas mujeres sienten culpa, vergüenza o miedo de contar lo que viven. Es importante recordar que ninguna violencia digital es tu culpa. Hablar, buscar apoyo y conocer tus derechos puede ayudarte a recuperar tu tranquilidad.',
    image: '/images/ciber3.png',
  },    

    {
      id: 3,
      title: 'Guarda evidencias y protege tus espacios',
      text: 'Tomar pantallazos, guardar enlaces y registrar fechas es clave si decides denunciar. Configurar la privacidad de tus cuentas, bloquear perfiles agresores y limitar quién puede interactuar contigo también es una forma de autocuidado digital y de recuperar el control.',
      image: '/images/ciber3.jpg',
    },

    {
      id: 4,
      title: 'No estás sola: crea tu red de apoyo',
      text: 'Hablar con alguien de confianza puede marcar la diferencia: amigas, familia, docentes o profesionales. Compartir lo que estás viviendo te ayuda a validar tus emociones y a trazar un plan de acción. HerGuardianIA está diseñada para ser parte de esa red, acompañándote 24/7.',
      image: '/images/ciber5.png',
    },

    {
  id: 5,
  title: 'Tu voz tiene poder: denuncia, informa y transforma',
  text: 'Denunciar el ciberacoso no es solo un acto de defensa personal: también ayuda a frenar ciclos de violencia y proteger a otras mujeres. Compartir tu experiencia en espacios seguros, informar a tus amigas o crear conversaciones responsables contribuye a construir entornos digitales más empáticos y libres de violencia. Tu historia importa, tiene impacto y es una fuerza para el cambio.',
  image: '/images/ciber4.jpg'
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambio 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToIndex = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container">
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-animations">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-badge">
              <Shield className="badge-icon" />
              <span>Protección Inteligente 24/7</span>
            </div>
            
            <h1 className="hero-title">
              Tu Guardiana Digital<br />
              <span className="hero-highlight">Siempre Contigo</span>
            </h1>
            
            <p className="hero-description">
              HerGuardianIA utiliza inteligencia artificial para protegerte del ciberacoso, 
              conectarte con una comunidad de apoyo y empoderarte con recursos personalizados.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={() => navigate('/dashboard')}
                className="btn btn-primary"
              >
                Comenzar Ahora
              </button>

              <button 
                onClick={handleNavigateToLogin}
                className="btn btn-secondary"
              >
                Iniciar Sesión
              </button>

              <button 
                onClick={() => navigate('/resources')}
                className="btn btn-secondary"
              >
                Ver Recursos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-card stat-rose">
            <div className="stat-value">73%</div>
            <div className="stat-label">Mujeres han sufrido violencia digital</div>
          </div>
          
          <div className="stat-card stat-purple">
            <div className="stat-value">77%</div>
            <div className="stat-label">Víctimas de ciberacoso sufren violencia física</div>
          </div>
          
          <div className="stat-card stat-blue">
            <div className="stat-value">27%</div>
            <div className="stat-label">Mayor riesgo en mujeres de 18-24 años</div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-image-wrapper">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="carousel-image"
            />
          </div>

          <div className="carousel-content">
            <h2 className="carousel-title">{slides[currentSlide].title}</h2>
            <p className="carousel-text">{slides[currentSlide].text}</p>

            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-arrow"
                onClick={goToPrev}
              >
                ◀
              </button>
              <button
                type="button"
                className="carousel-arrow"
                onClick={goToNext}
              >
                ▶
              </button>
            </div>

            <div className="carousel-dots">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`carousel-dot ${
                    index === currentSlide ? 'active' : ''
                  }`}
                  onClick={() => goToIndex(index)}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features*/}
      <div className="features-section">
        <h2 className="features-title">¿Cómo te protegemos?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-purple">
              <Shield className="icon" />
            </div>
            <h3 className="feature-title">Detección en Tiempo Real</h3>
            <p className="feature-description">
              Algoritmos de NLP detectan contenido abusivo al instante
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-pink">
              <TrendingUp className="icon" />
            </div>
            <h3 className="feature-title">Análisis de Patrones</h3>
            <p className="feature-description">
              Identificamos comportamientos de acoso a largo plazo
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-rose">
              <BookOpen className="icon" />
            </div>
            <h3 className="feature-title">Recursos Personalizados</h3>
            <p className="feature-description">
              Apoyo legal y psicológico adaptado a tus necesidades
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-indigo">
              <Users className="icon" />
            </div>
            <h3 className="feature-title">Red de Apoyo</h3>
            <p className="feature-description">
              Comunidad segura para compartir y apoyarse mutuamente
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Tu seguridad es nuestra prioridad</h2>
          <p className="cta-description">
            Únete a miles de mujeres que ya están protegidas por HerGuardianIA
          </p>
          <button 
            onClick={handleNavigateToLogin}
            className="btn btn-cta"
          >
            Protégete Ahora - Es Gratis
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-brand">
                <Shield className="footer-icon" />
                <span className="footer-brand-name">HerGuardianIA</span>
              </div>
              <p className="footer-description">
                Protección digital impulsada por IA para mujeres
              </p>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Producto</h4>
              <ul className="footer-links">
                <li><a href="#">Características</a></li>
                <li><a href="#">Precios</a></li>
                <li><a href="#">Seguridad</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Recursos</h4>
              <ul className="footer-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Guías</a></li>
                <li><a href="#">Ayuda</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#">Privacidad</a></li>
                <li><a href="#">Términos</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            © 2025 HerGuardianIA. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
