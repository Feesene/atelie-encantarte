'use client';

import { useState } from 'react';
import { buildWhatsappUrl } from '../lib/whatsapp';
import styles from './ContactForm.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormFields {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const WHATSAPP_FALLBACK_MESSAGE =
  'Olá! Tentei enviar uma mensagem pelo formulário do site e tive um problema. Poderia me ajudar?';

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (fields.name.trim().length < 2) {
    errors.name = 'O nome deve ter pelo menos 2 caracteres.';
  }

  if (!fields.email.includes('@')) {
    errors.email = 'Informe um e-mail válido.';
  }

  if (fields.message.trim().length < 10) {
    errors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
  }

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Limpa o erro do campo ao digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: JSON.stringify(fields),
        },
      );
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.banner} data-variant="success" role="alert">
        <span className={styles.bannerIcon}>✓</span>
        <div>
          <strong>Mensagem enviada com sucesso!</strong>
          <p>Em breve retornaremos seu contato. Obrigada pelo carinho! 🌸</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <div className={styles.banner} data-variant="error" role="alert">
          <span className={styles.bannerIcon}>!</span>
          <div>
            <strong>Ocorreu um erro ao enviar a mensagem.</strong>
            <p>
              Tente novamente ou{' '}
              <a
                href={buildWhatsappUrl(WHATSAPP_FALLBACK_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fallbackLink}
              >
                fale diretamente pelo WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.label}>
            Nome <span className={styles.required}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Seu nome completo"
            autoComplete="name"
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && (
            <span id="error-name" className={styles.error} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>
            E-mail <span className={styles.required}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="seu@email.com"
            autoComplete="email"
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && (
            <span id="error-email" className={styles.error} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-phone" className={styles.label}>
          Telefone / WhatsApp
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={fields.phone}
          onChange={handleChange}
          className={styles.input}
          placeholder="(11) 9 9999-9999"
          autoComplete="tel"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Mensagem <span className={styles.required}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Conte o que você gostaria de encomendar…"
          rows={5}
          aria-describedby={errors.message ? 'error-message' : undefined}
        />
        {errors.message && (
          <span id="error-message" className={styles.error} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className={styles.button} disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Enviando…
          </>
        ) : (
          'Enviar mensagem'
        )}
      </button>
    </form>
  );
}
