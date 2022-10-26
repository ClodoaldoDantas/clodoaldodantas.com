import { WorkExperience } from '@/interfaces/experience'

export const workExperiences: WorkExperience[] = [
  {
    title: 'Desenvolvedor Front-end Júnior | TQI',
    period: 'Mar 2022 - O momento',
    content: [
      'Responsável pelo front-end de um sistema web para uma empresa corretora de seguros.',
    ],
    skills: ['AngularJS', 'Angular Material'],
  },
  {
    title: 'Ajax TI',
    period: '2 anos e 1 mês',
    timeline: [
      {
        title: 'Desenvolvedor Front-end Júnior',
        period: 'Jan 2021 - Mar 2022',
        content: [
          'Responsável pelo desenvolvimento de uma aplicativo de controle de estoque para uma empresa multinacional no ramo de produção de calçados. Também participei de algumas integrações junto com a equipe de backend do projeto.',
          'Responsável pelo front-end de uma ferramenta de monitoramento de tarefas.',
        ],
        skills: ['React.js', 'React Native', 'TypeScript'],
      },
      {
        title: 'Desenvolvedor Front-end Trainee',
        period: 'Set 2020 - Jan 2021',
        content: [
          'Responsável pelo front-end de um projeto que consistia no desenvolvimento de uma Intranet.',
        ],
        skills: ['React.js'],
      },
      {
        title: 'Estagiário de desenvolvimento web',
        period: 'Mar 2020 - Set 2020',
        content: [
          'Responsável pelo front-end de um dashboard para uma empresa multinacional no ramo de produção de calçados, que tinha como objetivo exibir e filtrar todos os dados e métricas do cliente em diferentes gráficos e tabelas.',
        ],
        skills: ['Vue.js'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Web | Supermenu',
    period: 'Nov 2017 - Mar 2020',
    content: [
      'Responsável pelo front-end de um dashboard para uma empresa multinacional no ramo de produção de calçados, que tinha como objetivo exibir e filtrar todos os dados e métricas do cliente em diferentes gráficos e tabelas.',
    ],
    skills: ['React.js', 'Vue.js', 'MongoDB', 'Flutter', 'Node.js'],
  },
]
