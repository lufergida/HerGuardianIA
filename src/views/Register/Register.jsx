import React, { useState } from 'react';
import { Shield, Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import './register.css';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }


    console.log('Registrando usuaria:', form);


    navigate('/login');
  };

  return (
    <div className="register-page">
      <Navbar />

      <div className="register-hero">
        <div className="register-overlay"></div>

        <div className="register-container">
          <div className="register-card">
            <div className="register-header">
              <div className="register-icon-wrapper">
                <Shield className="register-icon" />
              </div>
              <h1 className="register-title">Crea tu cuenta</h1>
              <p className="register-subtitle">
                Únete a HerGuardianIA y empieza a construir espacios digitales más seguros.
              </p>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <div className="input-wrapper">
                  <User className="input-icon" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tucorreo@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Repite tu contraseña"
                    value={form.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {error && <div className="form-error">{error}</div>}

              <button type="submit" className="btn-register">
                Crear cuenta
              </button>

              <p className="register-login-text">
                ¿Ya tienes cuenta?{' '}
                <button
                  type="button"
                  className="register-login-link"
                  onClick={() => navigate('/login')}
                >
                  Inicia sesión aquí
                </button>
              </p>
            </form>
          </div>

          <div className="register-side">
            <h2>Tu espacio seguro empieza aquí</h2>
            <p>
              Al registrarte podrás acceder a herramientas de detección de ciberacoso,
              recursos personalizados y una comunidad que te acompaña. No tienes que
              enfrentar esto sola.
            </p>
            <ul>
              <li>🔒 Protección de tus datos y privacidad</li>
              <li>🤝 Comunidad de apoyo y acompañamiento</li>
              <li>📚 Recursos legales, emocionales y educativos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
