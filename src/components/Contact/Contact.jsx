import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.error('Erro ao enviar e-mail:', error);
          setIsError(true);
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="contact">
      <h2>📡 Contato Galáctico</h2>
      <p>Envie sua mensagem e junte-se à Aliança do Código! 🚀</p>

      <form ref={form} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="user_name" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" id="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea name="message" id="message" rows="4" required />

        <button type="submit" disabled={isLoading}>
          {isLoading ? '📡 Transmitindo...' : '✨ Enviar Transmissão'}
        </button>

        {isSent && <p className="success">✅ Transmissão enviada com sucesso!</p>}
        {isError && <p className="error">⚠️ Falha na transmissão. Tente novamente.</p>}
      </form>
    </section>
  );
};

export default Contact;
