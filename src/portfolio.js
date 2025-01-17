const header = {
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Portfólio.',
}

const about = {
  name: 'Lucas Faustini',
  role: 'Desenvolvedor back-end',
  description:
    'Sou formado em Análise e Desenvolvimento de Sistemas e tenho me dedicado continuamente a aprimorar minhas habilidades através de cursos online, tanto gratuitos quanto pagos. Possuo conhecimentos intermediários em diversas linguagens e frameworks, incluindo .NET/C#, Dapper ORM, Python (com Flask e Django), Java, PHP, C++, C, e JavaScript. Tenho também domínio avançado em SQL e experiência com bancos de dados como MySQL, PostgreSQL, SQL Server e Oracle.',
  resume: `${process.env.PUBLIC_URL}/Currículo - Lucas Faustini de Melo.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/lucas-faustini-melo/',
    github: 'https://github.com/DevLucasMelo',
  },
}

const projects = [
  {
    name: 'Projeto e-commerce de calçados',
    description:
      'O objetivo deste projeto foi desenvolver um e-commerce para uma loja de calçados, capaz de gerenciar calçados em estoque, gerenciar pedidos na visão do cliente e administrador, gerenciar clientes, realizar devoluções com geração de cupons de troca e cupons promocionais.',
    stack: ['C#/DotNet', 'Dapper ORM', 'PostgreSQL', 'HTML/CSS', 'Sellenium', 'Bootstrap'],
    sourceCode: 'https://github.com/DevLucasMelo/ecommerce-de-calcados',
    livePreview: 'https://github.com/DevLucasMelo/ecommerce-de-calcados',
  },
  {
    name: 'Projeto gerenciamento financeiro',
    description:
      'O objetivo deste projeto foi desenvolver um sistema para o gerencimaneto financeiros de uma loja de manutenção de eletrônicos, capaz de gerar ordens de serviço, consultar transações da loja, gerenciar contas e usuários, gerar relatórios financeiros enviados por email e um dashboard financeiro.',
    stack: ['Python', 'Django', 'PostgresSQL', 'Metabase', 'Render', 'HTML/CSS', 'Bootstrap'],
    sourceCode: 'https://github.com/DevLucasMelo/sistema-gerenciamento-financeiro',
    livePreview: 'https://github.com/DevLucasMelo/sistema-gerenciamento-financeiro',
  },
  {
    name: 'Projeto sistema biblioteca',
    description:
      'O objetivo deste projeto foi desenvolver um sistema para o gerencimaneto de uma biblioteca.',
    stack: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    sourceCode: 'https://github.com/DevLucasMelo/SistemaBiblioteca',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'Python',
  'JavaScript',
  'C#/Dotnet',
  'Java',
  'Django',
  'Flask',
  'Pandas',
  'Pytest',
  'HTML/CSS',
  'BootStrap',
  'MySQL',
  'React.js',
  'PostgreSQL',
  'Sellenium',
  'Git',
  'Node.js',
  'Dapper ORM',
  'Docker',
  'Metabase',
  'Trello',
  'Scrum',
  'Arquitetura MVC/MSVC',
  'Render',
  'Soft Skills'

]

const contact = {
  email: 'faustinilucas8@gmail.com',
}


const projectImagesEcommerce = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/ecommerce-gerencia-cliente.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/ecommerce-pagina-inicial-2.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/ecommerce-produto-1.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/ecommerce-produto-2.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/ecommerce-pagina-inicial.png` }
];

const projectImagesFinanceiro = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/gerar_relatorio_financeiro.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/login.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/ordem_servico.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/listagem_transacoes.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/pagina_inicial.png` }

];

const projectImagesBiblioteca= [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/sistema_biblioteca_usuario.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/sistema_biblioteca_editora.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/sistema_biblioteca_livro.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/sistema_biblioteca_inicio.png` }
];


export { header, about, projects, skills, contact, projectImagesEcommerce, projectImagesFinanceiro, projectImagesBiblioteca }
