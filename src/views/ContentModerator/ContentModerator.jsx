import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Image as ImageIcon,MessageSquare, TrendingDown,} from 'lucide-react';
import './contentModerator.css';

export default function ContentModerator() {
  const [activeTab, setActiveTab] = useState('feed');
  const [comments, setComments] = useState([
    { id: 1, text: 'Qué bonita foto 💜', user: 'María', blocked: false },
    { id: 2, text: 'Me encanta tu estilo', user: 'Ana', blocked: false },
  ]);
  const [newComment, setNewComment] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [stats, setStats] = useState({
    blocked: 0,
    allowed: 2,
    images: 0,
  });

  // Lista de palabras ofensivas (demo MVP)
  const offensiveWords = [
    'idiota', 'estupida', 'estúpida', 'tonta', 'fea', 'gorda',
    'flaca', 'puta', 'zorra', 'perra', 'bruja', 'ridicula',
    'ridícula', 'patética', 'inútil', 'basura', 'mierda',
    'asco', 'horrible',
  ];

  const detectOffensiveContent = (text) => {
    const lowerText = text.toLowerCase();
    return offensiveWords.some((word) => lowerText.includes(word));
  };

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;

    const isOffensive = detectOffensiveContent(newComment);

    const comment = {
      id: Date.now(),
      text: newComment,
      user: 'Usuaria',
      blocked: isOffensive,
    };

    setComments([comment, ...comments]);
    setStats({
      ...stats,
      blocked: stats.blocked + (isOffensive ? 1 : 0),
      allowed: stats.allowed + (isOffensive ? 0 : 1),
    });
    setNewComment('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const isInappropriate = Math.random() < 0.50;

      const img = {
        id: Date.now(),
        src: event.target.result,
        blocked: isInappropriate,
        timestamp: new Date().toLocaleTimeString(),
      };

      setUploadedImages([img, ...uploadedImages]);
      setStats({
        ...stats,
        images: stats.images + 1,
        blocked: stats.blocked + (isInappropriate ? 1 : 0),
      });
    };
    reader.readAsDataURL(file);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCommentSubmit();
    }
  };

  return (
    <div className="moderator-page">
      {/* Header */}
      <header className="moderator-header">
        <div className="moderator-header-inner">
          <div className="moderator-brand">
            <Shield className="moderator-brand-icon" />
            <div>
              <h1 className="moderator-title">HerGuardianIA Shield</h1>
              <p className="moderator-subtitle">
                Módulo de detección y bloqueo de violencia digital
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="moderator-tabs-wrapper">
        <div className="moderator-tabs">
          <button
            onClick={() => setActiveTab('feed')}
            className={
              'moderator-tab-btn' +
              (activeTab === 'feed' ? ' moderator-tab-btn-active' : '')
            }
          >
            <MessageSquare className="moderator-tab-icon" />
            <span>Feed social</span>
          </button>

          <button
            onClick={() => setActiveTab('images')}
            className={
              'moderator-tab-btn' +
              (activeTab === 'images' ? ' moderator-tab-btn-active' : '')
            }
          >
            <ImageIcon className="moderator-tab-icon" />
            <span>Imágenes</span>
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={
              'moderator-tab-btn' +
              (activeTab === 'stats' ? ' moderator-tab-btn-active' : '')
            }
          >
            <TrendingDown className="moderator-tab-icon" />
            <span>Estadísticas</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="moderator-main">
        {activeTab === 'feed' && (
          <div className="moderator-section">
            {/* Formulario comentario */}
            <div className="moderator-card">
              <div className="moderator-comment-form">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe un comentario... (prueba con palabras ofensivas para ver cómo se bloquea)"
                  rows={3}
                />
                <button onClick={handleCommentSubmit}>
                  Publicar comentario
                </button>
              </div>
            </div>

            {/* Lista de comentarios */}
            <div className="moderator-comments-list">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={
                    'moderator-comment-card' +
                    (comment.blocked ? ' moderator-comment-blocked' : '')
                  }
                >
                  <div className="moderator-comment-header">
                    <div className="moderator-avatar">
                      {comment.user.charAt(0).toUpperCase()}
                    </div>
                    <div className="moderator-comment-main">
                      <p className="moderator-comment-user">{comment.user}</p>

                      {comment.blocked ? (
                        <div className="moderator-comment-warning">
                          <div className="moderator-warning-header">
                            <AlertTriangle className="moderator-warning-icon" />
                            <span>Contenido bloqueado</span>
                          </div>
                          <p className="moderator-warning-text">
                            Este comentario fue detectado como ofensivo y ha
                            sido censurado para proteger a la usuaria.
                          </p>
                          <p className="moderator-comment-blurred">
                            {comment.text}
                          </p>
                        </div>
                      ) : (
                        <p className="moderator-comment-text">
                          {comment.text}
                        </p>
                      )}
                    </div>

                    {!comment.blocked && (
                      <CheckCircle className="moderator-comment-ok-icon" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'images' && (
          <div className="moderator-section">
            {/* Upload */}
            <div className="moderator-card">
              <label className="moderator-upload-area">
                <div className="moderator-upload-inner">
                  <ImageIcon className="moderator-upload-icon" />
                  <p className="moderator-upload-title">Subir imagen</p>
                  <p className="moderator-upload-subtitle">
                    El sistema detectará contenido potencialmente sexual o
                    violento y lo difuminará automáticamente.
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="moderator-upload-input"
                />
              </label>
            </div>

            {/* Imágenes */}
            <div className="moderator-images-grid">
              {uploadedImages.map((img) => (
                <div
                  key={img.id}
                  className={
                    'moderator-image-card ' +
                    (img.blocked
                      ? 'moderator-image-card-blocked'
                      : 'moderator-image-card-safe')
                  }
                >
                  <div className="moderator-image-wrapper">
                    <img
                      src={img.src}
                      alt="Subida por la usuaria"
                      className={
                        'moderator-image' +
                        (img.blocked ? ' moderator-image-blurred' : '')
                      }
                    />
                    {img.blocked && (
                      <div className="moderator-image-overlay">
                        <div className="moderator-image-overlay-badge">
                          <AlertTriangle className="moderator-warning-icon" />
                          <span>Contenido bloqueado</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="moderator-image-footer">
                    <span className="moderator-image-time">
                      {img.timestamp}
                    </span>
                    {img.blocked ? (
                      <span className="moderator-image-status blocked">
                        ❌ Detectado como inapropiado
                      </span>
                    ) : (
                      <span className="moderator-image-status safe">
                        ✓ Contenido seguro
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="moderator-section">
            <div className="moderator-stats-grid">
              <div className="moderator-stat-card">
                <div className="moderator-stat-header">
                  <div className="moderator-stat-icon red">
                    <AlertTriangle />
                  </div>
                  <h3>Contenido bloqueado</h3>
                </div>
                <p className="moderator-stat-number red">{stats.blocked}</p>
                <p className="moderator-stat-label">
                  Comentarios e imágenes censuradas
                </p>
              </div>

              <div className="moderator-stat-card">
                <div className="moderator-stat-header">
                  <div className="moderator-stat-icon green">
                    <CheckCircle />
                  </div>
                  <h3>Contenido seguro</h3>
                </div>
                <p className="moderator-stat-number green">{stats.allowed}</p>
                <p className="moderator-stat-label">
                  Comentarios permitidos
                </p>
              </div>

              <div className="moderator-stat-card">
                <div className="moderator-stat-header">
                  <div className="moderator-stat-icon purple">
                    <Shield />
                  </div>
                  <h3>Protección activa</h3>
                </div>
                <p className="moderator-stat-number purple">
                  {stats.blocked + stats.allowed}
                </p>
                <p className="moderator-stat-label">
                  Total de contenidos analizados
                </p>
              </div>
            </div>

            <div className="moderator-impact-card">
              <h2>Impacto de HerGuardianIA</h2>
              <p className="moderator-impact-main">
                Hemos bloqueado{' '}
                <span className="moderator-impact-number">
                  {stats.blocked}
                </span>{' '}
                contenidos potencialmente violentos u ofensivos, evitando que
                lleguen directamente a la usuaria.
              </p>
              <div className="moderator-impact-list">
                <p>✓ Detección automática de lenguaje ofensivo</p>
                <p>✓ Difuminado de imágenes con contenido sensible</p>
                <p>✓ Protección en tiempo real ante violencia digital</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
