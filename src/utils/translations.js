const translations = {
  links: [
    { eng: 'About', rus: 'Обо мне', url: 'About', active: true },
    { eng: 'Skills', rus: 'Навыки', url: 'Skills', active: false },
    {
      eng: 'Certificates & Employment',
      rus: 'Сертификаты и опыт работы',
      url: 'CertsEmployment',
      active: false
    },
    { eng: 'Portfolio', rus: 'Портфолио', url: 'Portfolio', active: false },
    { eng: 'Resume', rus: 'Резюме', url: 'Resume', active: false }
  ],
  eng: {
    name: 'Nikolai Tkachev',
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    skills: 'Skills',
    blog: 'Blog',
    section_about: {
      description:
        'Hi! I\'m a web developer from Moscow. Currently I work at the logistics company "917 Smith Inc", located in Chicago, USA on a remote basis - I am engaged in the support of the application I created. Programming for me is the art of doing complex things simply, looking at a task from different angles. Each project is like a new interesting quest, carrying a unique experience, a puzzle that can be assembled in various ways. I am constantly developing my skills and am ready for new experiences and projects.'
    },
    section_skills: {
      hardskills: {
        title: 'Hard Skills'
      },
      softskills: {
        title: 'Soft Skills',
        skills: [
          'Critical thinking',
          'Creativeness',
          'Attentiveness',
          'Responsibility',
          'Perseverance',
          'Easy learning',
          'Sense of beauty',
          'Friendly temper',
          'I know how to google :)',
          'Communication and team spirit'
        ]
      }
    },
    section_certs_employment: {
      title: 'Certificates & Employment',
      certificates: {
        title: 'Certificates',
        certs: [
          {
            title: 'Git. Easy Start',
            url: 'https://geekbrains.ru/certificates/593653.en'
          },
          {
            title: 'HTML & CSS',
            url: 'https://geekbrains.ru/certificates/581770.en'
          },
          {
            title: 'HTML5 and CSS3',
            url: 'https://geekbrains.ru/certificates/595547.en'
          },
          {
            title: 'JavaScript. Level 1',
            url: 'https://geekbrains.ru/certificates/609760.en'
          },
          {
            title: 'JavaScript. Level 2',
            url: 'https://geekbrains.ru/certificates/811935.en'
          },
          {
            title: 'PHP. Level 1',
            url: 'https://geekbrains.ru/certificates/811943.en'
          }
        ]
      },
      employment: {
        title: 'Employment'
      }
    },
  },
  rus: {
    name: 'Николай Ткачёв',
    about: 'Обо мне',
    portfolio: 'Портфолио',
    skills: 'Навыки',
    blog: 'Блог',
    section_about: {
      description:
        'Привет, я веб-разбаротчик из Москвы. На данный момент работаю в логистической компании "917 Smith Inc", находящейся в Чикаго, США на удаленной основе - занимаюсь поддержанием созданного мной приложения. Программирование для меня - это искусство делать сложные вещи просто, смотреть на задачу с разных углов. Каждый проект - как новый интересный квест, несущий в себе уникальный опыт, головоломка, которую можно собрать разными способами. Я постоянно развиваю свои навыки и готов к новому опыту и проектам.'
    },
    section_skills: {
      hardskills: {
        title: 'Навыки'
      },
      softskills: {
        title: 'Качества',
        skills: [
          'Критическое мышление',
          'Креативность',
          'Внимательность',
          'Ответственность',
          'Упорство',
          'Быстрая обучаемость',
          'Чувство прекрасного',
          'Дружелюбный характер',
          'Я умею гуглить :)',
          'Коммуникативность и командный дух'
        ]
      }
    },
    section_certs_employment: {
      title: 'Сертификаты и опыт работы',
      certificates: {
        title: 'Сертификаты',
        certs: [
          {
            title: 'Git. Быстрый старт',
            url: 'https://geekbrains.ru/certificates/593653.ru'
          },
          {
            title: 'HTML/CSS. Интерактивный курс',
            url: 'https://geekbrains.ru/certificates/581770.ru'
          },
          {
            title: 'HTML5 и CSS3',
            url: 'https://geekbrains.ru/certificates/595547.ru'
          },
          {
            title: 'JavaScript. Уровень 1',
            url: 'https://geekbrains.ru/certificates/609760.ru'
          },
          {
            title: 'JavaScript. Уровень 2',
            url: 'https://geekbrains.ru/certificates/811935.ru'
          },
          {
            title: 'PHP. Уровень 1',
            url: 'https://geekbrains.ru/certificates/811943.ru'
          }
        ]
      },
      employment: {
        title: 'Опыт работы'
      }
    }
  }
}

export default translations
