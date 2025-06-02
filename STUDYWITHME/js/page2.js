const data = [
  {
    modulo: "🧱 Módulo 1: Fundamentos e Ferramentas",
    cursos: [
      {
        nome: "Excel + Power BI",
        link: "https://app.cursa.com.br/home/course/curso-power-bi-completo/314"
      },
      {
        nome: "Lógica de Programação + Git/GitHub",
        link: "https://www.udacity.com/course/version-control-with-git--ud123"
      }
    ]
  },
  {
    modulo: "💻 Módulo 2: Desenvolvimento Web e Mobile",
    cursos: [
      {
        nome: "Front-End (HTML, CSS, JavaScript, React)",
        link: "https://www.origamid.com/curso/html-e-css-para-iniciantes/"
      },
      {
        nome: "React Completo",
        link: "https://www.origamid.com/curso/react-completo/"
      }
    ]
  },
  {
    modulo: "📊 Módulo 3: Bancos de Dados e Dados Educacionais",
    cursos: [
      {
        nome: "SQL (PostgreSQL / MySQL)",
        link: "https://www.udemy.com/course/curso-de-postgresql/"
      },
      {
        nome: "NoSQL (MongoDB)",
        link: "https://www.alura.com.br/curso-online-mongodb-modelagem-de-dados"
      },
      {
        nome: "Data Science para Educação",
        link: "https://www.kaggle.com/learn/data-science"
      }
    ]
  },
  {
    modulo: "🤖 Módulo 4: Inteligência Artificial e Automação Educacional",
    cursos: [
      {
        nome: "IA Aplicada à Educação",
        link: "https://www.edx.org/course/introduction-to-artificial-intelligence-ai"
      }
    ]
  },
  {
    modulo: "📱 Módulo 5: Plataformas e Ferramentas Educacionais",
    cursos: [
      {
        nome: "Plataformas Educacionais e LMS",
        link: "https://moodledev.io/"
      }
    ]
  },
  {
    modulo: "🧠 Módulo 6: Inovação, Gestão e UX Educacional",
    cursos: [
      {
        nome: "Gestão de Projetos e Inovação",
        link: "https://www.coursera.org/learn/design-thinking"
      },
      {
        nome: "UX/UI Focados em Educação",
        link: "https://www.origamid.com/curso/ux-ui-design/"
      }
    ]
  }
];

function salvarEstado(id, valor) {
  localStorage.setItem(id, valor);
}

function carregarEstado(id) {
  return localStorage.getItem(id) === "true";
}

function criarChecklist() {
  const checklist = document.getElementById("checklist");

  data.forEach((modulo, indexModulo) => {
    const divModulo = document.createElement("div");
    divModulo.className = "module";

    const titulo = document.createElement("h2");
    titulo.textContent = modulo.modulo;
    divModulo.appendChild(titulo);

    modulo.cursos.forEach((curso, indexCurso) => {
      const divItem = document.createElement("div");
      divItem.className = "item";

      const id = `mod${indexModulo}-curso${indexCurso}`;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = carregarEstado(id);

      checkbox.addEventListener("change", () => {
        salvarEstado(id, checkbox.checked);
      });

      const label = document.createElement("label");
      label.htmlFor = id;

      const link = document.createElement("a");
      link.href = curso.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = curso.nome;

      label.appendChild(link);

      divItem.appendChild(checkbox);
      divItem.appendChild(label);
      divModulo.appendChild(divItem);
    });

    checklist.appendChild(divModulo);
  });
}

document.addEventListener("DOMContentLoaded", criarChecklist);
