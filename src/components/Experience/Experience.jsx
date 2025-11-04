import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    id: 1,
    role: "Instrutor de Informática",
    company: "Programando o Futuro - Recytec",
    period: "2025 - Presente",
    description:
      "A tecnologia transforma o mundo — e ensinar é fazer parte dessa transformação. Como instrutor de informática, tenho o propósito de inspirar pessoas a descobrirem seu potencial no universo digital. Acredito que aprender vai muito além de dominar ferramentas: é abrir portas para novas oportunidades, ampliar horizontes e construir o futuro com as próprias mãos. Cada aula é uma chance de despertar curiosidade, confiança e autonomia em quem busca evoluir com a tecnologia.",
  },
  {
    id: 2,
    role: "Porteiro",
    company: "LimpTercerização",
    period: "2024 - 2025",
    description:
      "Atuei como porteiro, desempenhando um papel crucial na segurança e organização do ambiente. Minhas responsabilidades incluíam o controle de acesso, monitoramento das instalações e atendimento aos visitantes, garantindo um ambiente seguro e acolhedor para todos.",
  },
  {
    id: 3,
    role: "Analista de Suporte Técnico Nível 2",
    company: "SGVTelecom",
    period: "2023 - 2024",
    description:
      "Como Analista de Suporte Técnico Nível 2, fui responsável por oferecer suporte avançado a clientes, solucionando incidentes complexos e assegurando a continuidade e qualidade dos serviços prestados. Atuei em parceria com equipes internas para identificar e resolver falhas técnicas, além de auxiliar técnicos em campo com orientações especializadas e suporte remoto. Também ministrei treinamentos e ofereci direcionamento aos usuários finais, contribuindo para o aprimoramento das operações e a satisfação dos clientes.",
  },
  {
    id: 4,
    role: "Estagiário de Suporte Técnico",
    company:
      "Studio Comércio Atacadista de Produtos de Informática Eireli",
    period: "2022 - 2023",
    description:
      "Durante meu estágio em suporte técnico, adquiri experiência prática na resolução de problemas técnicos, manutenção de sistemas e atendimento ao cliente. Trabalhei em equipe para garantir a eficiência operacional e a satisfação dos usuários, aprimorando minhas habilidades técnicas e de comunicação.",
  },
  {
    id: 5,
    role: "Estagiário de Suporte Técnico Nível 2",
    company: "BlueTi",
    period: "2021 - 2021",
    description:
      "Atuei com atendimento ao público e suporte técnico de primeiro nível, realizando controle de acesso, registro e gerenciamento de informações, manutenção preventiva e corretiva de computadores e impressoras, além de configuração e instalação de softwares. Ofereci suporte remoto via chat e telefone, garantindo agilidade e eficiência na resolução de problemas. Também possuo experiência em atualização e otimização de sistemas, sempre priorizando a qualidade no atendimento e a satisfação do usuário.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.stars}></div>
      <h2 className={styles.title}>🚀 Experiência Profissional</h2>
      <p className={styles.subtitle}>
        Uma trajetória construída com dedicação, aprendizado e paixão pela
        tecnologia 💡
      </p>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.card}>
            <div className={styles.cardGlow}></div>
            <h3 className={styles.role}>{exp.role}</h3>
            <h4 className={styles.company}>
              {exp.company} <span>• {exp.period}</span>
            </h4>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
