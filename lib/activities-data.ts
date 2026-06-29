export type ActivityCategory = 'defesas' | 'eventos' | 'festivais' | 'visitas' | 'formaturas'

export interface ActivityMedia {
  id: string
  type: 'image' | 'video'
  src: string
  title: string
  description?: string
  date: string
  category: ActivityCategory
  alt: string
  thumbnail?: string
}

export interface ActivitySection {
  id: string
  category: ActivityCategory
  title: string
  description: string
  media: ActivityMedia[]
}

export const activitiesData: ActivitySection[] = [
  {
    id: 'defesas',
    category: 'defesas',
    title: 'Defesas de Cursos',
    description: 'Apresentações e defesas de projetos finais dos alunos dos cursos técnicos.',
    media: [
      {
        id: 'd1',
        type: 'image',
        src: '/activities/defesas/defesa-1.png',
        title: 'Defesa de Projeto - Radiologia',
        description: 'Apresentação final do curso de Radiologia com discussão de casos clínicos.',
        date: '2024-11-15',
        category: 'defesas',
        alt: 'Estudantes apresentando projeto de radiologia'
      },
      {
        id: 'd2',
        type: 'image',
        src: '/activities/defesas/defesa-2.png',
        title: 'Painel de Avaliadores',
        description: 'Membros do painel avaliando as apresentações dos estudantes.',
        date: '2024-11-15',
        category: 'defesas',
        alt: 'Painel de avaliadores assistindo apresentação'
      },
      {
        id: 'd3',
        type: 'image',
        src: '/activities/defesas/defesa-3.png',
        title: 'Defesa de Enfermagem',
        description: 'Estudantes da enfermagem apresentando trabalho de pesquisa.',
        date: '2024-10-20',
        category: 'defesas',
        alt: 'Defesa do curso de enfermagem'
      },
      {
        id: 'd4',
        type: 'image',
        src: '/activities/defesas/defesa-4.png',
        title: 'Apresentação de Técnicas',
        description: 'Demonstração prática de técnicas aprendidas durante o curso.',
        date: '2024-10-20',
        category: 'defesas',
        alt: 'Apresentação de técnicas práticas'
      },
      {
        id: 'd5',
        type: 'image',
        src: '/activities/defesas/defesa-5.png',
        title: 'Discussão com Professores',
        description: 'Interação entre alunos e professores durante sessão de defesa.',
        date: '2024-10-10',
        category: 'defesas',
        alt: 'Discussão durante defesa'
      },
      {
        id: 'd6',
        type: 'image',
        src: '/activities/defesas/defesa-6.png',
        title: 'Apresentação em Auditório',
        description: 'Grande sala com público assistindo as apresentações.',
        date: '2024-10-10',
        category: 'defesas',
        alt: 'Auditório com público'
      },
      {
        id: 'd7',
        type: 'image',
        src: '/activities/defesas/defesa-7.png',
        title: 'Defesa de Informática',
        description: 'Apresentação de projeto de desenvolvimento de software.',
        date: '2024-09-25',
        category: 'defesas',
        alt: 'Defesa de projeto de informática'
      },
      {
        id: 'd8',
        type: 'image',
        src: '/activities/defesas/defesa-8.png',
        title: 'Diploma de Excelência',
        description: 'Entrega de prémios aos melhores projetos apresentados.',
        date: '2024-09-25',
        category: 'defesas',
        alt: 'Entrega de prémios'
      },
      {
        id: 'd9',
        type: 'image',
        src: '/activities/defesas/defesa-9.png',
        title: 'Certificação de Conclusão',
        description: 'Alunos recebem certificados após conclusão e defesa do curso.',
        date: '2024-09-15',
        category: 'defesas',
        alt: 'Certificação de conclusão'
      },
      {
        id: 'd10',
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Highlights das Defesas 2024',
        description: 'Compilado dos melhores momentos das defesas de 2024.',
        date: '2024-11-20',
        category: 'defesas',
        alt: 'Vídeo com highlights das defesas'
      },
      {
        id: 'd11',
        type: 'image',
        src: '/activities/defesas/defesa-11.png',
        title: 'Sala de Apresentação',
        description: 'Ambiente preparado para as defesas dos alunos.',
        date: '2024-11-15',
        category: 'defesas',
        alt: 'Sala de apresentação equipada'
      },
      {
        id: 'd12',
        type: 'image',
        src: '/activities/defesas/defesa-12.png',
        title: 'Sessão de Perguntas',
        description: 'Sessão de perguntas e respostas com o painel.',
        date: '2024-11-15',
        category: 'defesas',
        alt: 'Sessão de perguntas'
      },
      {
        id: 'd13',
        type: 'image',
        src: '/activities/defesas/defesa-13.png',
        title: 'Apresentação Formal',
        description: 'Aluno em apresentação formal do trabalho final.',
        date: '2024-10-20',
        category: 'defesas',
        alt: 'Apresentação formal do trabalho'
      },
      {
        id: 'd14',
        type: 'image',
        src: '/activities/defesas/defesa-14.png',
        title: 'Discussão Intensiva',
        description: 'Debate aprofundado sobre os resultados do projeto.',
        date: '2024-10-10',
        category: 'defesas',
        alt: 'Discussão intensiva'
      },
      {
        id: 'd15',
        type: 'image',
        src: '/activities/defesas/defesa-15.png',
        title: 'Feedback do Painel',
        description: 'Membros do painel fornecendo feedback aos alunos.',
        date: '2024-09-25',
        category: 'defesas',
        alt: 'Feedback do painel'
      },
      {
        id: 'd16',
        type: 'image',
        src: '/activities/defesas/defesa-16.png',
        title: 'Apoio da Instituição',
        description: 'Direção e professores no apoio às defesas.',
        date: '2024-09-15',
        category: 'defesas',
        alt: 'Apoio institucional'
      },
      {
        id: 'd17',
        type: 'image',
        src: '/activities/defesas/defesa-17.png',
        title: 'Aplausos de Sucesso',
        description: 'Momento de celebração após defesa bem sucedida.',
        date: '2024-09-10',
        category: 'defesas',
        alt: 'Celebração de sucesso'
      },
      {
        id: 'd18',
        type: 'image',
        src: '/activities/defesas/defesa-18.png',
        title: 'Fotografia de Grupo',
        description: 'Alunos e professores após conclusão das defesas.',
        date: '2024-09-10',
        category: 'defesas',
        alt: 'Fotografia de grupo'
      },
      {
        id: 'd19',
        type: 'image',
        src: '/activities/defesas/defesa-19.png',
        title: 'Apresentação com Slides',
        description: 'Aluno apresentando com projeção de slides profissional.',
        date: '2024-08-30',
        category: 'defesas',
        alt: 'Apresentação com slides'
      },
      {
        id: 'd20',
        type: 'image',
        src: '/activities/defesas/defesa-20.png',
        title: 'Conclusão Vitoriosa',
        description: 'Momento final e celebração de conclusão bem sucedida.',
        date: '2024-08-30',
        category: 'defesas',
        alt: 'Conclusão vitoriosa'
      }
    ]
  },
  {
    id: 'eventos',
    category: 'eventos',
    title: 'Eventos Escolares',
    description: 'Atividades, workshops e seminários realizados na instituição.',
    media: [
      {
        id: 'e1',
        type: 'image',
        src: '/activities/eventos/evento-1.png',
        title: 'Seminário de Saúde',
        description: 'Especialista falando sobre prevenção e promoção de saúde.',
        date: '2024-11-12',
        category: 'eventos',
        alt: 'Seminário de saúde'
      },
      {
        id: 'e2',
        type: 'image',
        src: '/activities/eventos/evento-2.png',
        title: 'Workshop de Informática',
        description: 'Treinamento prático em novas tecnologias de software.',
        date: '2024-11-05',
        category: 'eventos',
        alt: 'Workshop de informática'
      },
      {
        id: 'e3',
        type: 'image',
        src: '/activities/eventos/evento-3.png',
        title: 'Palestra de Empreendedorismo',
        description: 'Profissional da área compartilhando experiência em negócios.',
        date: '2024-10-28',
        category: 'eventos',
        alt: 'Palestra sobre empreendedorismo'
      },
      {
        id: 'e4',
        type: 'image',
        src: '/activities/eventos/evento-4.png',
        title: 'Conferência de Ciências',
        description: 'Apresentações de pesquisas científicas pelos alunos.',
        date: '2024-10-15',
        category: 'eventos',
        alt: 'Conferência de ciências'
      },
      {
        id: 'e5',
        type: 'image',
        src: '/activities/eventos/evento-5.png',
        title: 'Fórum de Debates',
        description: 'Discussão aberta sobre temas de interesse geral.',
        date: '2024-10-08',
        category: 'eventos',
        alt: 'Fórum de debates'
      },
      {
        id: 'e6',
        type: 'image',
        src: '/activities/eventos/evento-6.png',
        title: 'Sessão de Networking',
        description: 'Alunos e profissionais da área conectando-se.',
        date: '2024-09-30',
        category: 'eventos',
        alt: 'Sessão de networking'
      },
      {
        id: 'e7',
        type: 'image',
        src: '/activities/eventos/evento-7.png',
        title: 'Inauguração de Laboratório',
        description: 'Inauguração do novo laboratório de práticas.',
        date: '2024-09-22',
        category: 'eventos',
        alt: 'Inauguração de laboratório'
      },
      {
        id: 'e8',
        type: 'image',
        src: '/activities/eventos/evento-8.png',
        title: 'Dia da Inovação',
        description: 'Apresentação de projetos inovadores dos alunos.',
        date: '2024-09-15',
        category: 'eventos',
        alt: 'Dia da inovação'
      },
      {
        id: 'e9',
        type: 'image',
        src: '/activities/eventos/evento-9.png',
        title: 'Certificação Profissional',
        description: 'Alunos recebendo certificações de cursos complementares.',
        date: '2024-09-10',
        category: 'eventos',
        alt: 'Certificação profissional'
      },
      {
        id: 'e10',
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Resumo dos Eventos 2024',
        description: 'Vídeo compilado com os principais eventos do ano.',
        date: '2024-11-20',
        category: 'eventos',
        alt: 'Resumo dos eventos 2024'
      },
      {
        id: 'e11',
        type: 'image',
        src: '/activities/eventos/evento-11.png',
        title: 'Mesa Redonda',
        description: 'Discussão com especialistas convidados.',
        date: '2024-11-12',
        category: 'eventos',
        alt: 'Mesa redonda de especialistas'
      },
      {
        id: 'e12',
        type: 'image',
        src: '/activities/eventos/evento-12.png',
        title: 'Apresentação de Startup',
        description: 'Empreendedor apresentando nova startup.',
        date: '2024-11-05',
        category: 'eventos',
        alt: 'Apresentação de startup'
      },
      {
        id: 'e13',
        type: 'image',
        src: '/activities/eventos/evento-13.png',
        title: 'Demonstração Prática',
        description: 'Demonstração prática de técnicas e equipamentos.',
        date: '2024-10-28',
        category: 'eventos',
        alt: 'Demonstração prática'
      },
      {
        id: 'e14',
        type: 'image',
        src: '/activities/eventos/evento-14.png',
        title: 'Auditório Cheio',
        description: 'Grande público assistindo o evento.',
        date: '2024-10-15',
        category: 'eventos',
        alt: 'Auditório cheio de público'
      },
      {
        id: 'e15',
        type: 'image',
        src: '/activities/eventos/evento-15.png',
        title: 'Interação com Público',
        description: 'Palestrante interagindo com a audiência.',
        date: '2024-10-08',
        category: 'eventos',
        alt: 'Interação com público'
      },
      {
        id: 'e16',
        type: 'image',
        src: '/activities/eventos/evento-16.png',
        title: 'Networking Informal',
        description: 'Momento informal de networking entre participantes.',
        date: '2024-09-30',
        category: 'eventos',
        alt: 'Networking informal'
      },
      {
        id: 'e17',
        type: 'image',
        src: '/activities/eventos/evento-17.png',
        title: 'Encerramento do Evento',
        description: 'Fotos finais e despedida do evento.',
        date: '2024-09-22',
        category: 'eventos',
        alt: 'Encerramento do evento'
      },
      {
        id: 'e18',
        type: 'image',
        src: '/activities/eventos/evento-18.png',
        title: 'Agradecimentos',
        description: 'Momento de agradecimentos aos organizadores e participantes.',
        date: '2024-09-15',
        category: 'eventos',
        alt: 'Agradecimentos finais'
      },
      {
        id: 'e19',
        type: 'image',
        src: '/activities/eventos/evento-19.png',
        title: 'Cobertura Imprensa',
        description: 'Cobertura de imprensa do evento.',
        date: '2024-09-10',
        category: 'eventos',
        alt: 'Cobertura de imprensa'
      },
      {
        id: 'e20',
        type: 'image',
        src: '/activities/eventos/evento-20.png',
        title: 'Evento Bem Sucedido',
        description: 'Foto final e celebração do evento bem sucedido.',
        date: '2024-08-25',
        category: 'eventos',
        alt: 'Evento bem sucedido'
      }
    ]
  },
  {
    id: 'festivais',
    category: 'festivais',
    title: 'Festivais',
    description: 'Celebrações culturais, artísticas e festivas da instituição.',
    media: [
      {
        id: 'f1',
        type: 'image',
        src: '/activities/festivais/festival-1.png',
        title: 'Festival de Música',
        description: 'Apresentações musicais dos alunos e convidados.',
        date: '2024-11-10',
        category: 'festivais',
        alt: 'Festival de música'
      },
      {
        id: 'f2',
        type: 'image',
        src: '/activities/festivais/festival-2.png',
        title: 'Apresentação de Dança',
        description: 'Grupos de dança apresentando performances coreografadas.',
        date: '2024-11-10',
        category: 'festivais',
        alt: 'Apresentação de dança'
      },
      {
        id: 'f3',
        type: 'image',
        src: '/activities/festivais/festival-3.png',
        title: 'Palco Decorado',
        description: 'Palco especialmente decorado para o festival.',
        date: '2024-11-10',
        category: 'festivais',
        alt: 'Palco decorado para festival'
      },
      {
        id: 'f4',
        type: 'image',
        src: '/activities/festivais/festival-4.png',
        title: 'Público Entusiasmado',
        description: 'Público aplaudindo e apreciando as apresentações.',
        date: '2024-11-10',
        category: 'festivais',
        alt: 'Público entusiasmado'
      },
      {
        id: 'f5',
        type: 'image',
        src: '/activities/festivais/festival-5.png',
        title: 'Festival de Arte',
        description: 'Exposição de obras de arte dos alunos.',
        date: '2024-10-20',
        category: 'festivais',
        alt: 'Festival de arte'
      },
      {
        id: 'f6',
        type: 'image',
        src: '/activities/festivais/festival-6.png',
        title: 'Mostra de Talentos',
        description: 'Diversos talentos sendo apresentados no palco.',
        date: '2024-10-05',
        category: 'festivais',
        alt: 'Mostra de talentos'
      },
      {
        id: 'f7',
        type: 'image',
        src: '/activities/festivais/festival-7.png',
        title: 'Apresentação Teatral',
        description: 'Alunos em apresentação de peça teatral.',
        date: '2024-09-28',
        category: 'festivais',
        alt: 'Apresentação teatral'
      },
      {
        id: 'f8',
        type: 'image',
        src: '/activities/festivais/festival-8.png',
        title: 'Iluminação e Efeitos',
        description: 'Efeitos de iluminação profissional no palco.',
        date: '2024-09-28',
        category: 'festivais',
        alt: 'Iluminação profissional'
      },
      {
        id: 'f9',
        type: 'image',
        src: '/activities/festivais/festival-9.png',
        title: 'Coral da Escola',
        description: 'Coral em apresentação durante festival.',
        date: '2024-09-15',
        category: 'festivais',
        alt: 'Coral da escola'
      },
      {
        id: 'f10',
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Festival Completo 2024',
        description: 'Vídeo completo do festival de 2024.',
        date: '2024-11-20',
        category: 'festivais',
        alt: 'Vídeo do festival 2024'
      },
      {
        id: 'f11',
        type: 'image',
        src: '/activities/festivais/festival-11.png',
        title: 'Banda da Escola',
        description: 'Banda musical apresentando durante festival.',
        date: '2024-11-10',
        category: 'festivais',
        alt: 'Banda da escola'
      },
      {
        id: 'f12',
        type: 'image',
        src: '/activities/festivais/festival-12.png',
        title: 'Solo de Violão',
        description: 'Aluno em apresentação solo de violão.',
        date: '2024-11-10',
        category: 'festivais',
        alt: 'Solo de violão'
      },
      {
        id: 'f13',
        type: 'image',
        src: '/activities/festivais/festival-13.png',
        title: 'Dança Tradicional',
        description: 'Apresentação de dança tradicional angolana.',
        date: '2024-10-20',
        category: 'festivais',
        alt: 'Dança tradicional'
      },
      {
        id: 'f14',
        type: 'image',
        src: '/activities/festivais/festival-14.png',
        title: 'Apresentação de Drama',
        description: 'Cena emocionante de apresentação dramática.',
        date: '2024-10-05',
        category: 'festivais',
        alt: 'Apresentação dramática'
      },
      {
        id: 'f15',
        type: 'image',
        src: '/activities/festivais/festival-15.png',
        title: 'Público em Pé',
        description: 'Público aplaudindo de pé a apresentação.',
        date: '2024-09-28',
        category: 'festivais',
        alt: 'Público aplaudindo de pé'
      },
      {
        id: 'f16',
        type: 'image',
        src: '/activities/festivais/festival-16.png',
        title: 'Bastidores',
        description: 'Momentos nos bastidores do festival.',
        date: '2024-09-28',
        category: 'festivais',
        alt: 'Bastidores do festival'
      },
      {
        id: 'f17',
        type: 'image',
        src: '/activities/festivais/festival-17.png',
        title: 'Encerramento Festivo',
        description: 'Todos no palco para encerramento festivo.',
        date: '2024-09-15',
        category: 'festivais',
        alt: 'Encerramento festivo'
      },
      {
        id: 'f18',
        type: 'image',
        src: '/activities/festivais/festival-18.png',
        title: 'Confetes e Celebração',
        description: 'Momento de celebração com efeitos especiais.',
        date: '2024-09-15',
        category: 'festivais',
        alt: 'Celebração com efeitos'
      },
      {
        id: 'f19',
        type: 'image',
        src: '/activities/festivais/festival-19.png',
        title: 'Fotos de Grupo',
        description: 'Fotos de grupo com os artistas apresentadores.',
        date: '2024-08-30',
        category: 'festivais',
        alt: 'Fotos de grupo'
      },
      {
        id: 'f20',
        type: 'image',
        src: '/activities/festivais/festival-20.png',
        title: 'Festival Memorável',
        description: 'Momento final de um festival memorável.',
        date: '2024-08-30',
        category: 'festivais',
        alt: 'Festival memorável'
      }
    ]
  },
  {
    id: 'visitas',
    category: 'visitas',
    title: 'Visitas de Estudo',
    description: 'Excursões educacionais e visitas técnicas realizadas pelos alunos.',
    media: [
      {
        id: 'v1',
        type: 'image',
        src: '/activities/visitas/visita-1.png',
        title: 'Visita ao Hospital',
        description: 'Alunos visitando e conhecendo as dependências do hospital.',
        date: '2024-11-08',
        category: 'visitas',
        alt: 'Visita ao hospital'
      },
      {
        id: 'v2',
        type: 'image',
        src: '/activities/visitas/visita-2.png',
        title: 'Laboratório Clínico',
        description: 'Conhecendo os processos no laboratório clínico.',
        date: '2024-11-08',
        category: 'visitas',
        alt: 'Laboratório clínico'
      },
      {
        id: 'v3',
        type: 'image',
        src: '/activities/visitas/visita-3.png',
        title: 'Sala de Radiologia',
        description: 'Alunos aprendendo sobre equipamentos de radiologia.',
        date: '2024-11-08',
        category: 'visitas',
        alt: 'Sala de radiologia'
      },
      {
        id: 'v4',
        type: 'image',
        src: '/activities/visitas/visita-4.png',
        title: 'Ala de Enfermagem',
        description: 'Visita à ala de enfermagem hospitalar.',
        date: '2024-10-25',
        category: 'visitas',
        alt: 'Ala de enfermagem'
      },
      {
        id: 'v5',
        type: 'image',
        src: '/activities/visitas/visita-5.png',
        title: 'Farmácia Hospitalar',
        description: 'Conhecendo o funcionamento da farmácia do hospital.',
        date: '2024-10-25',
        category: 'visitas',
        alt: 'Farmácia hospitalar'
      },
      {
        id: 'v6',
        type: 'image',
        src: '/activities/visitas/visita-6.png',
        title: 'Visita a Empresa de TI',
        description: 'Alunos conhecendo ambiente corporativo de tecnologia.',
        date: '2024-10-12',
        category: 'visitas',
        alt: 'Visita a empresa de TI'
      },
      {
        id: 'v7',
        type: 'image',
        src: '/activities/visitas/visita-7.png',
        title: 'Ambiente de Desenvolvimento',
        description: 'Conhecendo o espaço de desenvolvimento de software.',
        date: '2024-10-12',
        category: 'visitas',
        alt: 'Ambiente de desenvolvimento'
      },
      {
        id: 'v8',
        type: 'image',
        src: '/activities/visitas/visita-8.png',
        title: 'Apresentação Técnica',
        description: 'Profissional apresentando suas atividades.',
        date: '2024-10-12',
        category: 'visitas',
        alt: 'Apresentação técnica'
      },
      {
        id: 'v9',
        type: 'image',
        src: '/activities/visitas/visita-9.png',
        title: 'Pátio da Empresa',
        description: 'Alunos no pátio da empresa visitada.',
        date: '2024-09-30',
        category: 'visitas',
        alt: 'Pátio da empresa'
      },
      {
        id: 'v10',
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Compilado de Visitas 2024',
        description: 'Vídeo com as principais visitas de estudo de 2024.',
        date: '2024-11-20',
        category: 'visitas',
        alt: 'Compilado de visitas 2024'
      },
      {
        id: 'v11',
        type: 'image',
        src: '/activities/visitas/visita-11.png',
        title: 'Museu de Anatomia',
        description: 'Visita ao museu de anatomia da universidade.',
        date: '2024-11-08',
        category: 'visitas',
        alt: 'Museu de anatomia'
      },
      {
        id: 'v12',
        type: 'image',
        src: '/activities/visitas/visita-12.png',
        title: 'Explicação de Especialista',
        description: 'Especialista explicando aos alunos.',
        date: '2024-11-08',
        category: 'visitas',
        alt: 'Explicação de especialista'
      },
      {
        id: 'v13',
        type: 'image',
        src: '/activities/visitas/visita-13.png',
        title: 'Centro Financeiro',
        description: 'Visita a instituição financeira para alunos de contabilidade.',
        date: '2024-10-25',
        category: 'visitas',
        alt: 'Centro financeiro'
      },
      {
        id: 'v14',
        type: 'image',
        src: '/activities/visitas/visita-14.png',
        title: 'Sala de Traders',
        description: 'Observando atividades na sala de operações financeiras.',
        date: '2024-10-25',
        category: 'visitas',
        alt: 'Sala de traders'
      },
      {
        id: 'v15',
        type: 'image',
        src: '/activities/visitas/visita-15.png',
        title: 'Auditório da Empresa',
        description: 'Alunos no auditório durante apresentação.',
        date: '2024-10-12',
        category: 'visitas',
        alt: 'Auditório da empresa'
      },
      {
        id: 'v16',
        type: 'image',
        src: '/activities/visitas/visita-16.png',
        title: 'Cafetaria da Empresa',
        description: 'Pausa para café durante a visita.',
        date: '2024-10-12',
        category: 'visitas',
        alt: 'Cafetaria da empresa'
      },
      {
        id: 'v17',
        type: 'image',
        src: '/activities/visitas/visita-17.png',
        title: 'Fotos Memoráveis',
        description: 'Fotos de grupo dos alunos durante visita.',
        date: '2024-09-30',
        category: 'visitas',
        alt: 'Fotos memoráveis'
      },
      {
        id: 'v18',
        type: 'image',
        src: '/activities/visitas/visita-18.png',
        title: 'Retorno Feliz',
        description: 'Alunos retornando da visita de estudo.',
        date: '2024-09-30',
        category: 'visitas',
        alt: 'Retorno feliz'
      },
      {
        id: 'v19',
        type: 'image',
        src: '/activities/visitas/visita-19.png',
        title: 'Aprendizado Prático',
        description: 'Momento de aprendizado prático durante a visita.',
        date: '2024-09-15',
        category: 'visitas',
        alt: 'Aprendizado prático'
      },
      {
        id: 'v20',
        type: 'image',
        src: '/activities/visitas/visita-20.png',
        title: 'Experiência Enriquecedora',
        description: 'Conclusão de uma experiência enriquecedora de estudo.',
        date: '2024-09-15',
        category: 'visitas',
        alt: 'Experiência enriquecedora'
      }
    ]
  },
  {
    id: 'formaturas',
    category: 'formaturas',
    title: 'Formaturas',
    description: 'Cerimônias de formatura e celebração de conclusão dos alunos.',
    media: [
      {
        id: 'g1',
        type: 'image',
        src: '/activities/formaturas/formatura-1.png',
        title: 'Entrada Solene',
        description: 'Alunos em entrada solene para cerimônia de formatura.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Entrada solene de alunos'
      },
      {
        id: 'g2',
        type: 'image',
        src: '/activities/formaturas/formatura-2.png',
        title: 'Procissão de Formandos',
        description: 'Procissão dos formandos no auditório.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Procissão de formandos'
      },
      {
        id: 'g3',
        type: 'image',
        src: '/activities/formaturas/formatura-3.png',
        title: 'Honras à Bandeira',
        description: 'Momento de honras à bandeira durante cerimônia.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Honras à bandeira'
      },
      {
        id: 'g4',
        type: 'image',
        src: '/activities/formaturas/formatura-4.png',
        title: 'Discurso do Diretor',
        description: 'Diretor proferindo discurso de abertura.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Discurso do diretor'
      },
      {
        id: 'g5',
        type: 'image',
        src: '/activities/formaturas/formatura-5.png',
        title: 'Colação de Grau',
        description: 'Momento de colação de grau dos formandos.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Colação de grau'
      },
      {
        id: 'g6',
        type: 'image',
        src: '/activities/formaturas/formatura-6.png',
        title: 'Entrega de Diplomas',
        description: 'Alunos recebendo seus diplomas de conclusão.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Entrega de diplomas'
      },
      {
        id: 'g7',
        type: 'image',
        src: '/activities/formaturas/formatura-7.png',
        title: 'Momento de Emoção',
        description: 'Alunos emocionados ao receber diploma.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Momento emocional'
      },
      {
        id: 'g8',
        type: 'image',
        src: '/activities/formaturas/formatura-8.png',
        title: 'Abraços e Celebração',
        description: 'Abraços e celebração dos formandos.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Abraços e celebração'
      },
      {
        id: 'g9',
        type: 'image',
        src: '/activities/formaturas/formatura-9.png',
        title: 'Foto Oficial de Turma',
        description: 'Foto oficial dos formandos de 2024.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Foto oficial de turma'
      },
      {
        id: 'g10',
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Formatura 2024 Completa',
        description: 'Vídeo completo da cerimônia de formatura 2024.',
        date: '2024-11-20',
        category: 'formaturas',
        alt: 'Vídeo completo de formatura'
      },
      {
        id: 'g11',
        type: 'image',
        src: '/activities/formaturas/formatura-11.png',
        title: 'Com a Família',
        description: 'Formandos com suas famílias no auditório.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Formandos com família'
      },
      {
        id: 'g12',
        type: 'image',
        src: '/activities/formaturas/formatura-12.png',
        title: 'Momentos Especiais',
        description: 'Momentos especiais durante a cerimônia.',
        date: '2024-11-01',
        category: 'formaturas',
        alt: 'Momentos especiais'
      },
      {
        id: 'g13',
        type: 'image',
        src: '/activities/formaturas/formatura-13.png',
        title: 'Bênção Final',
        description: 'Bênção final da cerimônia de formatura.',
        date: '2024-10-28',
        category: 'formaturas',
        alt: 'Bênção final'
      },
      {
        id: 'g14',
        type: 'image',
        src: '/activities/formaturas/formatura-14.png',
        title: 'Jogada de Bonés',
        description: 'Tradicional jogada de bonés ao final da cerimônia.',
        date: '2024-10-28',
        category: 'formaturas',
        alt: 'Jogada de bonés'
      },
      {
        id: 'g15',
        type: 'image',
        src: '/activities/formaturas/formatura-15.png',
        title: 'Júbilo e Alegria',
        description: 'Formandos em clima de júbilo e alegria.',
        date: '2024-10-28',
        category: 'formaturas',
        alt: 'Júbilo e alegria'
      },
      {
        id: 'g16',
        type: 'image',
        src: '/activities/formaturas/formatura-16.png',
        title: 'Fotos no Palco',
        description: 'Fotos oficiais dos formandos no palco.',
        date: '2024-10-28',
        category: 'formaturas',
        alt: 'Fotos no palco'
      },
      {
        id: 'g17',
        type: 'image',
        src: '/activities/formaturas/formatura-17.png',
        title: 'Recepção Pós-Cerimônia',
        description: 'Recepção após encerramento da cerimônia.',
        date: '2024-10-20',
        category: 'formaturas',
        alt: 'Recepção pós-cerimônia'
      },
      {
        id: 'g18',
        type: 'image',
        src: '/activities/formaturas/formatura-18.png',
        title: 'Almoço de Confraternização',
        description: 'Almoço de confraternização dos formandos.',
        date: '2024-10-20',
        category: 'formaturas',
        alt: 'Almoço de confraternização'
      },
      {
        id: 'g19',
        type: 'image',
        src: '/activities/formaturas/formatura-19.png',
        title: 'Despedidas',
        description: 'Momentos de despedidas entre formandos.',
        date: '2024-10-20',
        category: 'formaturas',
        alt: 'Momentos de despedidas'
      },
      {
        id: 'g20',
        type: 'image',
        src: '/activities/formaturas/formatura-20.png',
        title: 'Novo Começo',
        description: 'Formandos iniciando uma nova jornada na vida.',
        date: '2024-10-20',
        category: 'formaturas',
        alt: 'Novo começo'
      }
    ]
  }
]

export function getAllActivities() {
  return activitiesData.flatMap(section => section.media)
}

export function getActivitiesByCategory(category: ActivityCategory) {
  const section = activitiesData.find(s => s.category === category)
  return section?.media || []
}

export function searchActivities(query: string) {
  const lowerQuery = query.toLowerCase()
  return getAllActivities().filter(
    activity =>
      activity.title.toLowerCase().includes(lowerQuery) ||
      activity.description?.toLowerCase().includes(lowerQuery) ||
      activity.category.toLowerCase().includes(lowerQuery)
  )
}
