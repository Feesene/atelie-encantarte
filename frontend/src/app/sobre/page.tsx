import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from '../../components/ContactForm';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sobre | Ateliê Encantarte',
  description:
    'Conheça a história do Ateliê Encantarte, como trabalhamos e os valores que guiam cada bordado artesanal feito à mão.',
};

// ────────────────────────────────────────────────────────
//  Dados estáticos de cada bloco
// ────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    icon: '✉️',
    title: '1. Fale com a gente',
    description:
      'Envie uma mensagem pelo formulário ou WhatsApp contando sua ideia — o tema, as cores, o tamanho e a ocasião especial.',
  },
  {
    icon: '🎨',
    title: '2. Aprovação do design',
    description:
      'Criamos um esboço personalizado e enviamos para sua aprovação antes de começar. Ajustes são bem-vindos nessa etapa.',
  },
  {
    icon: '🧵',
    title: '3. Produção artesanal',
    description:
      'Cada ponto é bordado à mão com cuidado e atenção. Após o controle de qualidade, seu pedido segue para entrega.',
  },
];

const VALUES = [
  {
    emoji: '🤝',
    title: 'Artesanal',
    description:
      'Nenhuma máquina substitui o toque humano. Cada peça é feita ponto a ponto, com paciência e destreza.',
  },
  {
    emoji: '✨',
    title: 'Personalizado',
    description:
      'Seu pedido começa do zero. Nome, data, paleta, motivo — tudo pensado para representar você ou quem você ama.',
  },
  {
    emoji: '💎',
    title: 'Exclusivo',
    description:
      'Não existem duas peças iguais. O que você recebe é único no mundo, feito só para você.',
  },
  {
    emoji: '❤️',
    title: 'Com carinho',
    description:
      'Bordado com sentimento. Cada encomenda é tratada como se fosse um presente para alguém da nossa família.',
  },
];

// ────────────────────────────────────────────────────────
//  Página — Server Component (estático / SSG)
// ────────────────────────────────────────────────────────

export default function SobrePage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroPretitle}>Ateliê Encantarte</span>
            <h1 className={styles.heroTitle}>
              Bordado com alma,<br />feito com carinho
            </h1>
            <p className={styles.heroLead}>
              Cada linha conta uma história. Cada ponto guarda um sentimento.
              Conheça quem está por trás de cada peça especial.
            </p>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/portifolio/bordado-A.jpeg"
              alt="Artesã do Ateliê Encantarte bordando à mão"
              width={560}
              height={640}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── História ────────────────────────────────────── */}
      <section className={styles.sectionAlt} id="historia">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <h2>Nossa história</h2>
          </div>
          <div className={styles.historyGrid}>
            <div className={styles.historyText}>
              <p>
                O Ateliê Encantarte nasceu de um amor antigo pelo bordado — aquela arte lenta,
                silenciosa e cheia de intenção. O que começou como um hobby nas tardes de domingo
                virou vocação quando as primeiras encomendas chegaram por indicação de amigas.
              </p>
              <p>
                Cada peça criada aqui tem uma origem: uma história contada no WhatsApp, um pedido
                especial para um aniversário, um nome que precisava virar presente. É a partir desse
                diálogo que o bordado toma forma — nas cores certas, no tecido escolhido, nos pontos
                que constroem algo único.
              </p>
              <p>
                Acreditamos que o artesanal tem um valor que vai além do visual. Quando você recebe
                um bordado feito à mão, recebe também o tempo, a atenção e o cuidado de quem passou
                horas debruçada sobre aquela tela. É isso que diferencia uma peça comprada de uma
                peça criada.
              </p>
              <p>
                Nosso atelier atende sob encomenda — roupas personalizadas, quadros decorativos,
                presentes únicos e peças exclusivas que contam histórias. Se você chegou até aqui,
                já faz parte desta história também.
              </p>
            </div>
            <div className={styles.historyImage}>
              dsds
              <Image
                src="/quadro-tomas.jpeg"
                alt="Detalhe de bordado artesanal do Ateliê Encantarte"
                width={480}
                height={560}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Como funciona ───────────────────────────────── */}
      <section className={styles.section} id="processo">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <h2>Como funciona</h2>
            <p>Do primeiro contato à entrega da peça — simples e transparente.</p>
          </div>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.title} className={styles.processCard}>
                <span className={styles.processIcon} aria-hidden="true">
                  {step.icon}
                </span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores ─────────────────────────────────────── */}
      <section className={styles.sectionAlt} id="valores">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <h2>O que nos guia</h2>
            <p>Quatro pilares que estão presentes em cada peça que sai daqui.</p>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <span className={styles.valueEmoji} aria-hidden="true">
                  {value.emoji}
                </span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contato ─────────────────────────────────────── */}
      <section className={styles.section} id="contato">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <h2>Fale com a gente</h2>
            <p>
              Tem uma ideia? Quer encomendar? Preencha o formulário ou fale pelo WhatsApp —
              respondemos com carinho.
            </p>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactFormWrapper}>
              <ContactForm />
            </div>
            <div className={styles.contactSide}>
              <div className={styles.contactSideCard}>
                <h3>Prefere o WhatsApp?</h3>
                <p>
                  Fica à vontade para chamar direto no WhatsApp. Costumamos responder em até 24
                  horas nos dias úteis.
                </p>
                <WhatsAppButton
                  variant="inline"
                  label="Iniciar conversa"
                  message="Olá! Vim pelo site e gostaria de encomendar um bordado personalizado."
                />
              </div>
              <div className={styles.contactSideCard}>
                <h3>Tempo de produção</h3>
                <p>
                  O prazo varia conforme a complexidade da peça. Compartilhamos a previsão no
                  momento do orçamento — sem surpresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
