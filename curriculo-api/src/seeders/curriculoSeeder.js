
import "dotenv/config";
import sequelize from "../config/database.js";

import {
  Pessoa,
  FormacaoAcademica,
  ExperienciaProfissional,
  Projeto,
  Habilidade,
  Contato,
} from "../models/index.js";

const curriculos = [
  {
    pessoa: {
      nome: "Lucas Gabriel Maciel de Barros",
      email: "lucas.macielbarros01@gmail.com",
      titulo: "Desenvolvedor Back-end | Full Stack",
      bio: "Estudante de Sistemas para Internet na UNICAP, com experiência em desenvolvimento de APIs REST, aplicações web e soluções utilizando Java, JavaScript, Node.js, Spring Boot e Salesforce.",
      localizacao: "Recife, Pernambuco",
      foto_url: null,
    },

    formacoes: [
      {
        instituicao: "Universidade Católica de Pernambuco",
        curso: "Sistemas para Internet",
        tipo: "Graduação",
        descricao: "Formação em desenvolvimento de software, aplicações web, bancos de dados e engenharia de software.",
      },
      {
        instituicao: "Porto Digital",
        curso: "Residência Tecnológica",
        tipo: "Formação complementar",
        descricao: "Participação nos programas Rise Up e Grow Up, com desenvolvimento de projetos práticos e utilização de tecnologias como Salesforce, Apex e LWC.",
      },
    ],

    experiencias: [
      {
        empresa: "Prefeitura do Recife",
        cargo: "Estagiário de Tecnologia",
        data_inicio: "2026-09",
        descricao: "Desenvolvimento e manutenção de soluções utilizando Google Sheets, Google Apps Script e tecnologias web para automação de processos.",
      },
    ],

    projetos: [
      {
        nome: "Voltix",
        descricao: "Plataforma de e-commerce com front-end em Next.js, API REST em Spring Boot, autenticação JWT e banco de dados PostgreSQL.",
        tecnologias: [
          "Next.js",
          "TypeScript",
          "Java",
          "Spring Boot",
          "PostgreSQL",
        ],
      },
      {
        nome: "MedConnect",
        descricao: "Sistema de gerenciamento de eventos médicos desenvolvido na plataforma Salesforce, utilizando Apex, LWC, triggers, Batch Apex e APIs REST.",
        tecnologias: [
          "Salesforce",
          "Apex",
          "LWC",
          "REST API",
        ],
      },
      {
        nome: "MoneyControl",
        descricao: "Aplicativo Android para controle financeiro, permitindo registrar receitas, despesas e acompanhar o saldo.",
        tecnologias: [
          "Java",
          "Android",
          "Room",
          "SQLite",
        ],
      },
      {
        nome: "Estacionamento Automatizado",
        descricao: "Protótipo de estacionamento inteligente com Arduino, sensor ultrassônico e reconhecimento de placas utilizando Python e OpenCV.",
        tecnologias: [
          "Arduino",
          "Python",
          "OpenCV",
          "C++",
        ],
      },
    ],

    habilidades: [
      { nome: "Java", categoria: "Back-end" },
      { nome: "Spring Boot", categoria: "Back-end" },
      { nome: "Node.js", categoria: "Back-end" },
      { nome: "Express", categoria: "Back-end" },
      { nome: "JavaScript", categoria: "Linguagem" },
      { nome: "TypeScript", categoria: "Linguagem" },
      { nome: "React", categoria: "Front-end" },
      { nome: "Next.js", categoria: "Front-end" },
      { nome: "PostgreSQL", categoria: "Banco de dados" },
      { nome: "MySQL", categoria: "Banco de dados" },
      { nome: "Git", categoria: "Ferramentas" },
      { nome: "Salesforce", categoria: "Plataformas" },
    ],

    contatos: [
      {
        tipo: "GitHub",
        valor: "https://github.com/LucasGmacielB",
      },
    ],
  },

  {
    pessoa: {
      nome: "Mariana Oliveira",
      email: "mariana@example.com",
      titulo: "Desenvolvedora Front-end",
      bio: "Estudante de tecnologia com interesse em desenvolvimento de interfaces, experiência do usuário e aplicações mobile.",
      localizacao: "Recife, Pernambuco",
      foto_url: null,
    },

    formacoes: [
      {
        instituicao: "Universidade Exemplo",
        curso: "Análise e Desenvolvimento de Sistemas",
        tipo: "Graduação",
        descricao: "Formação voltada ao desenvolvimento de sistemas e aplicações web.",
      },
    ],

    experiencias: [
      {
        empresa: "Tech Solutions",
        cargo: "Estagiária de Desenvolvimento",
        descricao: "Desenvolvimento de interfaces web e manutenção de componentes React.",
      },
    ],

    projetos: [
      {
        nome: "TaskFlow",
        descricao: "Aplicação de gerenciamento de tarefas com interface responsiva.",
        tecnologias: ["React", "TypeScript", "CSS"],
      },
      {
        nome: "WeatherApp",
        descricao: "Aplicativo mobile para consulta de informações meteorológicas.",
        tecnologias: ["React Native", "Expo"],
      },
    ],

    habilidades: [
      { nome: "HTML", categoria: "Front-end" },
      { nome: "CSS", categoria: "Front-end" },
      { nome: "JavaScript", categoria: "Linguagem" },
      { nome: "React", categoria: "Front-end" },
      { nome: "React Native", categoria: "Mobile" },
      { nome: "Figma", categoria: "Design" },
    ],

    contatos: [
      {
        tipo: "GitHub",
        valor: "https://github.com/",
      },
    ],
  },
];

async function cadastrarCurriculo(dados, transaction) {
  const [pessoa, criada] = await Pessoa.findOrCreate({
    where: { email: dados.pessoa.email },
    defaults: dados.pessoa,
    transaction,
  });

  if (!criada) {
    console.log(`Currículo já cadastrado: ${pessoa.nome}`);
    return;
  }

  const entidades = [
    { model: FormacaoAcademica, dados: dados.formacoes },
    { model: ExperienciaProfissional, dados: dados.experiencias },
    { model: Projeto, dados: dados.projetos },
    { model: Habilidade, dados: dados.habilidades },
    { model: Contato, dados: dados.contatos },
  ];

  for (const entidade of entidades) {
    if (entidade.dados.length > 0) {
      await entidade.model.bulkCreate(
        entidade.dados.map((item) => ({
          ...item,
          pessoa_id: pessoa.id,
        })),
        { transaction }
      );
    }
  }

  console.log(`Currículo cadastrado: ${pessoa.nome}`);
}

async function executarSeeder() {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao NeonDB.");

    // Garante que os modelos estejam sincronizados.
    await sequelize.sync();

    for (const curriculo of curriculos) {
      await sequelize.transaction(async (transaction) => {
        await cadastrarCurriculo(curriculo, transaction);
      });
    }

    console.log("Seeder finalizado com sucesso!");
  } catch (error) {
    console.error("Erro ao executar seeder:", error);
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
}

executarSeeder();
