# 💻 Portfólio Profissional — Silvio Junior

Bem-vindo ao meu portfólio!  
Este projeto foi desenvolvido com o objetivo de apresentar minhas habilidades técnicas, experiências profissionais e projetos de forma interativa, moderna e responsiva.

---

## 🚀 Tecnologias Utilizadas

O portfólio foi desenvolvido com as principais tecnologias do ecossistema web moderno:

- ⚛️ **React.js** — Estrutura principal do front-end  
- 🧠 **JavaScript (ES6+)** — Lógica e interatividade  
- 🎨 **CSS3 / Flexbox / Grid / Animações** — Design responsivo e estilização dinâmica  
- 🌌 **Fontes e Efeitos Visuais** — Google Fonts (Orbitron), gradientes e animações CSS  
- 🧰 **JSON Dinâmico** — Carregamento de projetos e experiências por arquivo externo  

---

## 🧑‍💼 Experiências Profissionais

As informações são renderizadas dinamicamente em um componente JSX, com dados armazenados em um arquivo de array dentro do projeto.  
Exemplo de estrutura:

```javascript
{
    id: 1,
    role: 'Instrutor de Informática',
    company: 'Programando o Futuro - Recytec',
    period: '2025 - Presente',
    description:
        'A tecnologia transforma o mundo — e ensinar é fazer parte dessa transformação. Como instrutor de informática, tenho o propósito de inspirar pessoas a descobrirem seu potencial no universo digital...'
}
```
As experiências incluem:

🧑‍🏫 Instrutor de Informática — Programando o Futuro - Recytec

🏢 Porteiro — LimpTercerização

💻 Analista de Suporte Técnico Nível 2 — SGVTelecom

🧩 Estagiário de Suporte Técnico — Studio Comércio Atacadista

⚙️ Estagiário Nível 2 — BlueTi

🧩 Skills (Hard & Soft)
A seção Skills contém duas abas interativas:

💡 Hard Skills: Tecnologias e ferramentas técnicas (ex: React, Node.js, MySQL, Git, Linux, etc.)

🤝 Soft Skills: Habilidades interpessoais e profissionais (ex: Comunicação, Liderança, Resolução de Problemas)

Componente principal (Skills.jsx):

jsx
<section className="skills-section">
  <h2>Minhas Skills</h2>
  <div className="tabs">
    <button>Hard Skills</button>
    <button>Soft Skills</button>
  </div>
  <div className="skills-slider">
    {/* Cards dinâmicos */}
  </div>
</section>

💡 Totalmente responsivo — ajusta o layout em telas menores (como celulares)
✨ Inclui fundo animado de estrelas e transições suaves

🗂️ Projetos

Os projetos são carregados dinamicamente a partir do arquivo projects.json.
Cada projeto inclui:

json
{
  "id": 1,
  "title": "Meu Projeto React",
  "description": "Aplicação web moderna com integração de API.",
  "image": "/assets/imgs/projeto1.png",
  "url": "https://meusite.vercel.app"
}

📦 Para adicionar um novo projeto:

Abra o arquivo projects.json

Adicione um novo objeto com id, title, description, image e url

Salve e recarregue a página

⚙️ Instalação e Execução Local

bash
# 1️⃣ Clone este repositório
git clone https://github.com/seuusuario/portfolio-react.git

# 2️⃣ Acesse a pasta
cd portfolio-react

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Inicie o projeto
npm start

🌐 Deploy Online
Você pode hospedar facilmente no Vercel, Netlify ou GitHub Pages:

Vercel:
Basta conectar o repositório e o deploy será automático.

GitHub Pages:

bash
npm run build
npm install -g gh-pages
npm run deploy

🧑‍🚀 Autor
Silvio Junior
📧 [seuemail@exemplo.com]
🌐 https://seuportfólio.vercel.app
💼 LinkedIn | GitHub

“A tecnologia é a ponte entre o sonho e a realização — e cada linha de código é um passo nessa jornada.”
— Silvio Junior
