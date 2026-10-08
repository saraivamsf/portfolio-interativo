// Informações do portfólio.
const profile = {
  name: "Miguel Saraiva Ferreira",
  role: "Cientista da computação",
  bio: "Desde novo, sempre tive interesse em tecnologia, programação e desenvolvimento de software. Atualmente, estou focado em aprimorar minhas habilidades em desenvolvimento de software, algoritmos e estruturas de dados, web e explorar novas tecnologias para criar soluções inovadoras. Tenho interesse principalmente em cibersegurança e engenharia de software.",
  bioEn:
    "Since I was young, I have always been interested in technology, programming, and software development. I am currently focused on improving my skills in software development, algorithms and data structures, and web development, while exploring new technologies to create innovative solutions. My main interests are cybersecurity and software engineering.",
  email: "miguelsaraiva2303@gmail.com",
  github: "https://github.com/saraivamsf",
  linkedin: "https://www.linkedin.com/in/miguel-saraiva-ferreira-99137932a/",
  photo: "profile.JPG",
};
const panel = document.querySelector("#panel");
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const tags = (items) =>
  '<div class="tags">' +
  items.map((x) => '<span class="tag">' + escape(x) + "</span>").join("") +
  "</div>";
const safeUrl = (s) => {
  try {
    const u = new URL(s);
    return ["https:", "http:"].includes(u.protocol) ? u.href : "";
  } catch {
    return "";
  }
};
const link = (title, url) =>
  safeUrl(url)
    ? `<a href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${title}<span>↗</span></a>`
    : `<div class="empty-link">${title}<span>Em breve</span></div>`;
const pages = {
  sobre: () =>
    `<div class="about-grid"><div><div class="section-label">OLÁ, MUNDO.</div><h2>Eu sou ${escape(profile.name)}<span>.</span></h2><div class="about-language" lang="pt-BR"><span class="section-label">PORTUGUÊS</span><p>${escape(profile.bio)}</p></div><div class="about-language about-language-en" lang="en"><span class="section-label">ENGLISH</span><p>${escape(profile.bioEn)}</p></div>${tags(["JAVA", "C", "C++", "HTML", "CSS", "JavaScript"])}</div><div class="about-sidebar"><img class="profile-photo" src="${escape(profile.photo)}" alt="Foto de ${escape(profile.name)}" /><div class="details"><div><span>perfil</span><b>${escape(profile.role)}</b></div><div><span>foco</span><b>criar · aprender · evoluir</b></div><div><span>status</span><b style="color:var(--green)">em formação</b></div></div></div></div>`,
  projetos: () =>
    `<div class="section-label">IDEIAS QUE GANHAM FORMA</div><h2>Projetos selecionados<span>.</span></h2><p class="section-note">Conheça algumas das soluções que desenvolvi.</p><div class="cards project-cards">${[
      [
        "01",
        "UrMind",
        "Site para agendar consultas a distância com psicólogos, facilitando o acesso ao atendimento psicológico online.",
        ["HTML", "CSS", "JavaScript"],
        "urmind.png",
        null,
        "Em desenvolvimento",
        "https://github.com/ICEI-PUC-Minas-CC-TI/pmg-cc-2026-2-ti2-6168100-pmg-cc-2026-2-ti2-6168100-group-1",
      ],
      [
        "02",
        "Floodwatch",
        "Projeto com Arduino para medir a elevação do nível da água e acompanhar o crescimento de enchentes.",
        ["Arduino", "C++"],
        "flood.png",
        "https://www.youtube.com/watch?v=lzx1_zlPERs&t=3s",
        null,
        "https://github.com/Matheus-Romling/FloodWatch-Codigo",
      ],
    ]
      .map(
        ([n, t, d, a, image, video, status, repository]) =>
          `<article class="card"><span class="number">/${n}</span><h3>${t}</h3>${status ? `<span class="project-status">${escape(status)}</span>` : ""}${image ? `<a class="project-image-link" href="${escape(image)}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar imagem do ${escape(t)}"><img class="project-image" src="${escape(image)}" alt="${t === "UrMind" ? "Tela de login do UrMind" : "Imagem do projeto Floodwatch"}" loading="lazy" /></a>` : ""}<p>${d}</p>${tags(a)}${video ? `<a class="project-video" href="${escape(video)}" target="_blank" rel="noopener noreferrer">▶ Assistir demonstração <span aria-hidden="true">↗</span></a>` : ""}${repository ? `<a class="project-video" href="${escape(repository)}" target="_blank" rel="noopener noreferrer">Ver projeto no GitHub <span aria-hidden="true">↗</span></a>` : ""}</article>`,
      )
      .join("")}</div>`,
  formacao: () =>
    `<div class="section-label">APRENDIZADO EM PROGRESSO</div><h2>Formação & trajetória<span>.</span></h2><div class="timeline"><article><span class="section-label">GRADUAÇÃO EM ANDAMENTO</span><h3>Ciência da Computação</h3><p>Cursando Ciência da Computação pela PUC Minas.</p></article><article><span class="section-label">IDIOMAS</span><h3>Aprendizado complementar</h3><p>Fluência em inglês.</p></article></div>`,
  experiencia: () =>
    `<div class="section-label">CONSTRUINDO MINHA TRAJETÓRIA</div><h2>Experiência<span>.</span></h2><p>Ainda não tive experiência profissional. Atualmente, estou focado em cursos para aprofundar meus conhecimentos e em projetos pessoais para colocar em prática o que aprendo e desenvolver minhas habilidades.</p>`,
  interesses: () =>
    `<div class="section-label">ALÉM DAS LINHAS DE CÓDIGO</div><h2>O que desperta curiosidade<span>.</span></h2><div class="cards">${[
      [
        "⌘",
        "Segurança da Informação",
        "Explorar a proteção de dados e sistemas, a identificação de vulnerabilidades e a prevenção de ameaças digitais.",
      ],
      [
        "↗",
        "Engenharia de Software",
        "Estudar arquitetura, boas práticas e processos para desenvolver software confiável e de fácil manutenção.",
      ],
      [
        "✳",
        "Inteligência Artificial",
        "Entender como modelos aprendem com dados e explorar aplicações para resolver problemas e automatizar tarefas.",
      ],
    ]
      .map(
        ([n, t, d]) =>
          `<article class="card"><span class="number">${n}</span><h3>${t}</h3><p>${d}</p></article>`,
      )
      .join("")}</div>`,
  contato: () =>
    `<div class="contact"><div><div class="section-label">VAMOS CONVERSAR</div><h2>Uma conexão,<br>novas possibilidades<span>.</span></h2><p>Tem uma ideia, um projeto ou quer trocar experiências? Encontre meus canais ao lado.</p></div><div class="contact-links">${link("GitHub", profile.github)}${link("LinkedIn", profile.linkedin)}${profile.email ? `<a href="mailto:${encodeURIComponent(profile.email)}">${escape(profile.email)}<span>↗</span></a>` : '<div class="empty-link">E-mail<span>Em breve</span></div>'}</div></div>`,
};
function show(tab) {
  if (!pages[tab]) tab = "sobre";
  panel.innerHTML =
    `<div class="cmdline"><span>miguelsf@portfolio</span>:~$ cat ${tab === "sobre" ? "sobre.md" : tab + "/"}</div>` +
    pages[tab]();
  document.querySelectorAll("[data-tab]").forEach((b) => {
    const active = b.dataset.tab === tab;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", active);
    b.tabIndex = active ? 0 : -1;
    b.id = "tab-" + b.dataset.tab;
    b.setAttribute("aria-controls", "panel");
  });
  panel.setAttribute("aria-labelledby", "tab-" + tab);
  document.querySelector("#footerName").textContent = profile.name;
}
document.querySelectorAll("[data-tab]").forEach((b) => {
  b.onclick = () => {
    location.hash = b.dataset.tab;
  };
  b.onkeydown = (e) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const list = [...document.querySelectorAll("[data-tab]")];
      let i = list.indexOf(b);
      i =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? list.length - 1
            : (i + (e.key === "ArrowRight" ? 1 : -1) + list.length) %
              list.length;
      location.hash = list[i].dataset.tab;
      list[i].focus();
    }
  };
});
window.onhashchange = () => show(location.hash.slice(1));
show(location.hash.slice(1));
document.querySelector("#year").textContent = new Date().getFullYear();
