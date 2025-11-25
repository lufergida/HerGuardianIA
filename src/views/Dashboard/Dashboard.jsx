import React from 'react';
import {
  ShieldAlert,Bell, Activity, Smile, AlertTriangle, MessageCircle,
  BarChart3, Lock, FileText, ArrowRight, Settings,Home,Bot, Shield,} from 'lucide-react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';  


export default function Dashboard() {
const navigate = useNavigate();  
  const userName = 'Lucía';

  const alerts = [
    {
      id: 1,
      level: 'alto',
      title: 'Posible ciberacoso reiterado en Instagram',
      description:
        'Detectamos varios comentarios repetitivos con tono despectivo en tus últimas publicaciones.',
      time: 'Hace 2 horas',
      platform: 'Instagram',
    },
    {
      id: 2,
      level: 'medio',
      title: 'Mensaje potencialmente manipulador en WhatsApp',
      description:
        'Un contacto insiste en que compartas información personal sensible bajo presión emocional.',
      time: 'Hace 5 horas',
      platform: 'WhatsApp',
    },
    {
      id: 3,
      level: 'bajo',
      title: 'Solicitud extraña de seguimiento en nueva cuenta',
      description:
        'Una cuenta nueva sin foto ni información intenta contactarte de forma insistente.',
      time: 'Ayer',
      platform: 'Red social',
    },
  ];

  const tips = [
    'Antes de responder a un mensaje agresivo, toma 3 respiraciones profundas y decide desde la calma, no desde el impulso.',
    'Revisa cada semana la configuración de privacidad de tus redes: quién puede etiquetarte, escribirte o ver tus publicaciones.',
    'Si un mensaje te hace sentir incómoda, haz captura de pantalla antes de borrar o bloquear: puede servir como evidencia.',
  ];

  return (
    <div className="dashboard-page">

      <main className="dashboard-main">
       
        {/* Encabezado */}
        <header className="dashboard-topbar">
        <h2 className="topbar-greeting">Bienvenida, a tu espacio personal</h2>

        <div className="topbar-actions">
            <button className="topbar-btn" onClick={() => navigate('/')}>
            <Home size={20} />
            </button>

            <button className="topbar-btn">
            <Bell size={20} />
            </button>

            <button className="topbar-btn">
            <Settings size={20} />
            </button>

            <div className="topbar-avatar">L</div>
        </div>
        </header>

        <section className="dashboard-header">
          <div>
            <h1 className="dashboard-title">
              Hola, <span className="dashboard-name">{userName}</span> 🌙
            </h1>
            <p className="dashboard-subtitle">
              Este es tu espacio seguro. Aquí puedes revisar alertas, cuidar tu bienestar emocional
              y acceder a herramientas de protección digital.
            </p>
          </div>

          <div className="dashboard-header-pill">
            <ShieldAlert className="header-pill-icon" />
            <span>Protección activa 24/7</span>
          </div>
        </section>

        {/* Tarjetas resumen */}
        <section className="dashboard-stats">
          <div className="dashboard-stat-card stat-alerts">
            <div className="stat-icon-wrapper">
              <Bell className="stat-icon" />
            </div>
            <div className="stat-info">
              <h2>Alertas recientes</h2>
              <p className="stat-number">3</p>
              <p className="stat-desc">Revisa los eventos detectados en tus redes.</p>
            </div>
          </div>

          <div className="dashboard-stat-card stat-emotion">
            <div className="stat-icon-wrapper">
              <Smile className="stat-icon" />
            </div>
            <div className="stat-info">
              <h2>Estado emocional</h2>
              <p className="stat-number stat-number-soft">Necesita cuidado 🫂</p>
              <p className="stat-desc">Te recomendamos un mini chequeo emocional.</p>
            </div>
          </div>

          <div className="dashboard-stat-card stat-activity">
            <div className="stat-icon-wrapper">
              <Activity className="stat-icon" />
            </div>
            <div className="stat-info">
              <h2>Protecciones activas</h2>
              <p className="stat-number">4</p>
              <p className="stat-desc">Filtros de contenido, bloqueo sugerido y monitoreo.</p>
            </div>
          </div>
        </section>

        <div className="moderation-demo-container">
        <button
            className="moderation-demo-btn"
            onClick={() => navigate('/moderation')}
        >
            <Shield className="moderation-demo-icon" />
            <div className="moderation-demo-texts">
            <span className="moderation-demo-title">Demo de moderación</span>
            <span className="moderation-demo-desc">
                Bloqueo de insultos e imágenes sensibles.
            </span>
            </div>
        </button>
</div>

        {/* Herramientas */}
        <section className="dashboard-grid">
          {/* alertas */}
          <div className="dashboard-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <AlertTriangle className="panel-icon" />
                <h2>Alertas de ciberacoso</h2>
              </div>
              <button className="panel-link">
                Ver todas <ArrowRight className="panel-link-icon" />
              </button>
            </div>

            <div className="alerts-list">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`alert-item alert-${alert.level}`}
                >
                  <div className="alert-header">
                    <span className="alert-pill">
                      {alert.level === 'alto'
                        ? 'Riesgo alto'
                        : alert.level === 'medio'
                        ? 'Riesgo medio'
                        : 'Riesgo bajo'}
                    </span>
                    <span className="alert-time">{alert.time}</span>
                  </div>
                  <h3 className="alert-title">{alert.title}</h3>
                  <p className="alert-description">{alert.description}</p>
                  <div className="alert-footer">
                    <span className="alert-platform">{alert.platform}</span>
                    <button className="alert-action">Ver recomendaciones</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IPS*/}
          <div className="dashboard-right-column">
            {/* Tips emocionales */}
            <div className="dashboard-panel">
              <div className="panel-header">
                <div className="panel-title-group">
                  <MessageCircle className="panel-icon" />
                  <h2>Chequeo emocional rápido</h2>
                </div>
              </div>

              <div className="tips-list">
                {tips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <span className="tip-badge">Tip {index + 1}</span>
                    <p className="tip-text">{tip}</p>
                  </div>
                ))}
              </div>

              <button className="btn-emotion">
                Abrir diario emocional
              </button>
            </div>

            {/* Herramientas rápidas */}
            <div className="dashboard-panel quick-tools">
              <div className="panel-header">
                <div className="panel-title-group">
                  <BarChart3 className="panel-icon" />
                  <h2>Herramientas rápidas</h2>
                </div>
              </div>

              <div className="tools-grid">
                <button className="tool-card">
                  <Lock className="tool-icon" />
                  <span className="tool-title">Revisar privacidad</span>
                  <span className="tool-desc">Checklist de seguridad en redes.</span>
                </button>

                <button className="tool-card">
                  <FileText className="tool-icon" />
                  <span className="tool-title">Guía para denunciar</span>
                  <span className="tool-desc">Pasos para reportar violencia digital.</span>
                </button>

                <button className="tool-card">
                  <ShieldAlert className="tool-icon" />
                  <span className="tool-title">Protocolo de emergencia</span>
                  <span className="tool-desc">Qué hacer si te sientes en peligro.</span>
                </button>
              </div>
                
                <button
                className="tool-card tool-card-ia"
                onClick={() => navigate('/assistant')}
                >
                <Bot className="tool-icon" />
                <span className="tool-title">Hablar con la IA</span>
                <span className="tool-desc">Recibe orientación y acompañamiento.</span>
                </button>


            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
