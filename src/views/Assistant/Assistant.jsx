import React, { useState } from 'react';
import {Bot,Send, User,ArrowLeft,ShieldAlert, Heart,BookOpen, AlertCircle,} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './assistant.css';

export default function Assistant() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text:
        'Hola, soy HerGuardianIA 💜. Puedes contarme qué pasó, cómo te sientes o pedirme pasos concretos. Ejemplos:\n\n- "¿Qué hago si me acosan por Instagram?"\n- "Tengo miedo por mensajes en WhatsApp"\n- "¿Cómo puedo denunciar?"',
      time: 'Ahora',
    },
  ]);
  const [input, setInput] = useState('');

  // Mini "IA"
  const generateBotReply = (text) => {
    const t = text.toLowerCase();

    // Palabras clave
    const mentionsInstagram = t.includes('instagram');
    const mentionsWhatsapp = t.includes('whatsapp') || t.includes('wasap') || t.includes('whats');
    const mentionsDenuncia =
      t.includes('denuncia') || t.includes('denunciar') || t.includes('policía') || t.includes('policia');
    const mentionsMiedoAnsiedad =
      t.includes('miedo') ||
      t.includes('ansiedad') ||
      t.includes('ansiosa') ||
      t.includes('triste') ||
      t.includes('mal');
    const mentionsFotos =
      t.includes('foto') ||
      t.includes('fotos') ||
      t.includes('imagenes') ||
      t.includes('imágenes') ||
      t.includes('nudes') ||
      t.includes('íntima') ||
      t.includes('intima');

    if (mentionsInstagram) {
      return (
        'Por lo que cuentas, parece que la situación está ocurriendo en Instagram 📸.\n\n' +
        'Algunas acciones que puedes tomar:\n' +
        '1️⃣ Bloquear o restringir a la persona desde su perfil (no estás exagerando: es protegerte).\n' +
        '2️⃣ Usa la opción de “Reportar” en el mensaje o comentario que te esté dañando.\n' +
        '3️⃣ Haz capturas de pantalla de los mensajes, fecha y usuario por si luego quieres denunciar.\n' +
        '4️⃣ Revisa en Configuración → Privacidad quién puede escribirte, etiquetarte o ver tus historias.\n\n' +
        'Si quieres, puedes contarme qué tipo de mensajes recibes y vemos juntas si encaja en ciberacoso.'
      );
    }

    if (mentionsWhatsapp) {
      return (
        'Entiendo, lo que comentas tiene que ver con WhatsApp 💬.\n\n' +
        'Pasos que pueden ayudarte:\n' +
        '1️⃣ Silencia o bloquea a la persona si sientes que cruzó un límite (cuidarte no es ser grosera).\n' +
        '2️⃣ Haz capturas de pantalla de mensajes clave (fechas, números de teléfono, amenazas, presión).\n' +
        '3️⃣ Evita responder impulsivamente. A veces no responder también es una forma de poner un límite.\n' +
        '4️⃣ Si hay amenazas graves, es importante hablar con alguien de confianza y considerar apoyo legal.\n\n' +
        'Si me cuentas qué tipo de mensajes te manda, puedo orientarte mejor sobre cómo responder o no responder.'
      );
    }

    if (mentionsFotos) {
      return (
        'Hablar de fotos íntimas o contenido privado es muy delicado y valiente de tu parte 💜.\n\n' +
        'Algunos puntos clave:\n' +
        '1️⃣ Si alguien amenaza con publicar tus fotos, eso es violencia digital y nunca es tu culpa.\n' +
        '2️⃣ Evita ceder a chantajes (“si no haces X, publico Y”), porque suele aumentar el control de la otra persona.\n' +
        '3️⃣ Guarda evidencias del chantaje: capturas de pantalla, usuario, fecha y plataforma.\n' +
        '4️⃣ En muchos países, compartir contenido íntimo sin consentimiento es delito. Puede valer la pena consultar ayuda legal o líneas de apoyo locales.\n\n' +
        'Si quieres, puedo ayudarte a pensar qué mensaje podrías enviar (o no enviar) en esta situación.'
      );
    }

    if (mentionsDenuncia) {
      return (
        'Estás pensando en denunciar, y eso es un paso muy importante y valiente ⚖️.\n\n' +
        'Te puede ayudar a prepararte así:\n' +
        '1️⃣ Reúne evidencias: capturas, enlaces, usuario, fechas aproximadas y plataforma donde ocurre.\n' +
        '2️⃣ Haz una pequeña cronología de lo que ha pasado: cuándo empezó, qué te dijeron o hicieron.\n' +
        '3️⃣ Busca si en tu país hay líneas de ayuda para violencia digital o género (suelen orientarte gratis).\n' +
        '4️⃣ Si sientes miedo de ir sola a denunciar, considera ir con alguien de confianza.\n\n' +
        'Puedo ayudarte a ordenar la información que ya tienes para que te sientas más preparada para dar ese paso.'
      );
    }

    if (mentionsMiedoAnsiedad) {
      return (
        'Siento mucho que te estés sintiendo así 💜. Lo que cuentas suena muy pesado de llevar sola.\n\n' +
        'Algunas cosas que pueden ayudarte a nivel emocional:\n' +
        '• Tómate unos minutos para respirar profundo: 4 segundos inhalar, 4 sostener, 6 exhalar, varias veces.\n' +
        '• Escríbeme qué es lo que más te preocupa ahora mismo en una sola frase. A veces ponerlo en palabras ya alivia un poco.\n' +
        '• Si tienes a alguien de confianza, considera compartirle esto. No eres una carga por necesitar apoyo.\n\n' +
        'Recuerda: lo que te están haciendo (o hicieron) no define tu valor. Aquí podemos ir paso a paso, sin prisa.'
      );
    }

    // Respuesta genérica
    return (
      'Gracias por confiar en mí y compartir esto 💜.\n\n' +
      'A partir de lo que me dices, podemos hacer dos cosas:\n' +
      '1️⃣ Ver si lo que estás viviendo encaja con ciberacoso (repetición, humillación, amenazas, control, chantaje, etc.).\n' +
      '2️⃣ Pensar juntas próximos pasos: guardar evidencias, poner límites, bloquear, denunciar o buscar apoyo emocional.\n\n' +
      'Si quieres, cuéntame:\n' +
      '• ¿En qué plataforma está pasando (Instagram, WhatsApp, otra)?\n' +
      '• ¿Qué es lo que más te preocupa o te duele de esta situación ahora mismo?'
    );
  };

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newUserMessage = {
      id: Date.now(),
      from: 'user',
      text: trimmed,
      time: 'Ahora',
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');

    const botText = generateBotReply(trimmed);

    const botMessage = {
      id: Date.now() + 1,
      from: 'bot',
      text: botText,
      time: 'Hace un momento',
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 700);
  };

  return (

        <div className="assistant-page">
        <header className="assistant-header-horizontal">

        <div className="assistant-left">
            <button
            className="assistant-back-btn"
            onClick={() => navigate('/dashboard')}
            >
            <ArrowLeft size={18} />
            <span>Volver</span>
            </button>

            <div className="assistant-title-block">
            <h1>Asistente HerGuardianIA</h1>
            <p>
                Este es tu espacio seguro para conversar sobre lo que está pasando en tus redes y cómo te sientes.
            </p>
            </div>
        </div>

        <span className="assistant-header-chip">
            Espacio confidencial 💜
        </span>

        </header>

      <main className="assistant-main">
        {/* Panel principal*/}
        <section className="assistant-chat-card">
          <div className="assistant-chat-header">
            <div className="assistant-chat-title">
              <Bot className="assistant-bot-icon" />
              <div>
                <h2>Chat seguro</h2>
                <span>Conversación privada entre tú y la IA.</span>
              </div>
            </div>
          </div>

          <div className="assistant-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`assistant-message assistant-message-${msg.from}`}
              >
                <div className="assistant-message-avatar">
                  {msg.from === 'bot' ? (
                    <Bot size={18} />
                  ) : (
                    <User size={18} />
                  )}
                </div>
                <div className="assistant-message-bubble">
                  <p>{msg.text}</p>
                  <span className="assistant-message-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <form className="assistant-input-bar" onSubmit={handleSend}>
            <textarea
              rows={2}
              placeholder="Escribe aquí lo que pasó o cómo te sientes..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="assistant-send-btn">
              <Send size={18} />
              <span>Enviar</span>
            </button>
          </form>
        </section>

        {/* Panel lateral */}
        <section className="assistant-side-panel">
          <div className="assistant-side-card">
            <div className="assistant-side-title">
              <ShieldAlert className="assistant-side-icon" />
              <h2>¿Cuándo es ciberacoso?</h2>
            </div>
            <p>
              Puede incluir mensajes repetitivos que te hieren, amenazas,
              difusión de contenido íntimo sin permiso, humillaciones públicas,
              chantajes emocionales o presión para que compartas información
              personal.
            </p>
          </div>

          <div className="assistant-side-card">
            <div className="assistant-side-title">
              <AlertCircle className="assistant-side-icon" />
              <h2>Cosas importantes a recordar</h2>
            </div>
            <ul className="assistant-list">
              <li>Ninguna forma de violencia digital es tu culpa.</li>
              <li>
                Guardar evidencias (capturas, enlaces, fechas) puede ayudarte
                si decides denunciar.
              </li>
              <li>
                Bloquear, silenciar o limitar no es exagerado: es una forma de
                autocuidado.
              </li>
            </ul>
          </div>

          <div className="assistant-side-card">
            <div className="assistant-side-title">
              <Heart className="assistant-side-icon" />
              <h2>Cuidado emocional</h2>
            </div>
            <p>
              Es normal sentir miedo, rabia o vergüenza. Hablar de lo que te
              pasa (aquí, con alguien de confianza o con una profesional) es un
              paso grande hacia protegerte también por dentro.
            </p>
          </div>

          <div className="assistant-side-card">
            <div className="assistant-side-title">
              <BookOpen className="assistant-side-icon" />
              <h2>Ideas para empezar a escribir</h2>
            </div>
            <ul className="assistant-list">
              <li>“Lo que más me preocupa ahora es...”</li>
              <li>“Lo que me hicieron / dijeron fue...”</li>
              <li>“Lo que necesito o me gustaría es...”</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
