import React from 'react';
import { AlertTriangle, PhoneCall, MessageCircle, Shield, ArrowLeft, ExternalLink, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './help.css';

export default function Help() {
  const navigate = useNavigate();

  return (
    <div className="help-page">
      <main className="help-main">

        <header className="help-topbar">
          <button
            className="help-back-btn"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft size={18} />
            <span>Volver al panel</span>
          </button>

          <div className="help-topbar-pill">
            <Shield className="help-topbar-icon" />
            <span>Prioridad: tu seguridad ahora mismo</span>
          </div>
        </header>

        <section className="help-hero-card">
          <div className="help-hero-left">
            <h1 className="help-title">¿Necesitas ayuda ahora mismo?</h1>
            <p className="help-subtitle">
              Si estás viviendo una situación de violencia digital o te sientes
              en riesgo, aquí tienes pasos rápidos y claros. Esta página no
              reemplaza a los servicios de emergencia ni a atención profesional,
              pero puede ayudarte a organizar qué hacer.
            </p>

            <div className="help-actions-row">
              <button
                className="help-btn help-btn-danger"
                onClick={() => (window.location.href = 'tel:123')}
              >
                <AlertTriangle size={18} />
                <span>Estoy en peligro físico</span>
              </button>

              <button
                className="help-btn help-btn-secondary"
                onClick={() => navigate('/assistant')}
              >
                <MessageCircle size={18} />
                <span>Hablar con la IA</span>
              </button>
            </div>

            <p className="help-note">
              Si hay amenazas, agresiones, alguien te está siguiendo o
              te sientes en riesgo inmediato, intenta buscar un lugar seguro y
              contactar a los servicios de emergencia o a una persona de
              confianza.
            </p>
          </div>

          <div className="help-hero-right">
            <div className="help-quick-steps-card">
              <h2>Pasos rápidos para protegerte</h2>
              <ul>
                <li>Haz capturas de pantalla de mensajes, perfiles y fechas.</li>
                <li>No borres evidencias importantes sin guardarlas antes.</li>
                <li>Bloquea o silencia a quien te está agrediendo.</li>
                <li>
                  Evita discutir por chat si la otra persona es agresiva o
                  manipuladora.
                </li>
                <li>
                  Cuenta lo que pasa a alguien de confianza (amistad, familia,
                  docente, acompañante).
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="help-grid">
          {/* Líneas de ayuda */}
          <div className="help-card">
            <div className="help-card-header">
              <PhoneCall className="help-card-icon" />
              <h2>Líneas de ayuda y emergencia</h2>
            </div>
            <p>
              Estas líneas están pensadas para situaciones de violencia,
              riesgo, crisis emocional o necesidad de orientación. Puedes
              adaptar esta sección según el país o región donde se implemente
              la plataforma.
            </p>

            <h3 className="help-subheading">Colombia</h3>
            <ul className="help-list">
              <li>
                <strong>123 – Emergencias generales</strong>: para riesgo
                inmediato o peligro físico.
              </li>
              <li>
                <strong>155 – Línea para mujeres</strong>: orientación en
                casos de violencia contra la mujer.
              </li>
              <li>
                <strong>122 – Fiscalía General de la Nación</strong>: para
                denunciar delitos, incluidas amenazas, extorsión, acoso y
                violencia digital.
              </li>
              <li>
                <strong>141 – ICBF</strong>: protección de niñas, niños y
                adolescentes.
              </li>
              <li>
                <strong>106 – Línea de apoyo emocional</strong>: escucha y
                apoyo en crisis emocionales.
              </li>
            </ul>

            <h3 className="help-subheading">Medellín</h3>
            <ul className="help-list">
              <li>
                <strong>123 Mujer</strong>: atención a mujeres víctimas de
                violencia, disponible las 24 horas.
              </li>
              <li>
                <strong>123 Social</strong>: apoyo en crisis emocionales,
                violencia intrafamiliar y salud mental.
              </li>
              <li>
                <strong>Comisarías de Familia</strong>: orientación y medidas
                de protección en casos de violencia al interior del hogar.
              </li>
              <li>
                <strong>Centros de atención a víctimas</strong>: espacios
                presenciales para apoyo jurídico y psicológico.
              </li>
            </ul>

          </div>

          {/* Protección digital inmediata */}
          <div className="help-card">
            <div className="help-card-header">
              <Shield className="help-card-icon" />
              <h2>Protección digital inmediata</h2>
            </div>
            <p>
              Acciones que puedes tomar en redes sociales y aplicaciones de
              mensajería para reducir el daño mientras decides qué hacer.
            </p>
            <ul className="help-list">
              <li>Bloquear o restringir cuentas agresoras.</li>
              <li>
                Revisar quién puede escribirte, etiquetarte o ver tus
                publicaciones.
              </li>
              <li>
                Activar verificación en dos pasos y cambiar contraseñas si
                sospechas que alguien accedió a tus cuentas.
              </li>
              <li>
                Evitar abrir enlaces, archivos o formularios que parezcan
                sospechosos.
              </li>
            </ul>
          </div>

          {/* Cuidado emocional */}
          <div className="help-card">
            <div className="help-card-header">
              <MessageCircle className="help-card-icon" />
              <h2>Cuidado emocional</h2>
            </div>
            <p>
              La violencia digital también afecta cómo te sientes. No estás
              exagerando si te duele, te asusta o te cansa. Cuidar lo que
              sientes también es una forma de protegerte.
            </p>
            <ul className="help-list">
              <li>Hablar con alguien de confianza sobre lo que está pasando.</li>
              <li>
                Escribir en un diario o notas lo que sientes, lo que pasó y lo
                que necesitas.
              </li>
              <li>
                Tomar descansos de redes cuando sea posible y seguro para ti.
              </li>
              <li>
                Considerar apoyo profesional cuando esté disponible en tu
                contexto (psicología, trabajo social, acompañantes).
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
