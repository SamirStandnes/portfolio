let data = {
  education: {
    heading: 'education',
    data: [
      {
        graduation_year: 2009,
        degree: "Bachelor",
        program: "International Marketing",
        university: "Norwegian Business School BI",
        country: "Norway",
        grade_average: "B"
      },
      {
        graduation_year: 2011,
        degree: "B.A",
        program: "International Business",
        university: "Leeds Beckett University",
        country: "UK",
        grade_average: "B+"
      },
      {
        graduation_year: 2013,
        degree: "M.Sc",
        program: "International Financial Managment",
        university: "Queen Mary University",
        country: "UK",
        grade_average: "A"
      }
    ]
  },
  employment: {
    heading: "employment",
    data: [
      {
        year: '2014',
        company: "VidFlow",
        country: "UK/Norway",
        role: "Finance Team",
        company_sector: "Media"
      },
      {
        year: '04-2015',
        company: "Kiva",
        country: "US",
        role: "Potfolio Analysis Intern",
        company_sector: "Non-profit"
      },
      {
        year: '11-2015',
        company: "Western Union",
        role: "Digital Marketing Intern",
        country: "UK",
        company_sector: "Finance"
      },

      {
        year: '2016',
        company: "Norwegian State Educational Loan Fund",
        country: "Norway",
        role: "Financial Management & Governance Advisor",
        company_sector: "Government"
      }
    ]
  },
  portfolio: {
    heading: "portfolio",
    data: [
      {
        project_name: "Url shorterner microservice",
        project_url: "https://codepen.io/SamTheJam/pen/RyBaxJ/",
        project_data: {
          production_date: "01-2019",
          technology: "Express.js",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "You can POST a URL to and you will receive a shortened URL in the JSON response."
        }
      },

      {
        project_name: "Markov guessing game",
        project_url: "https://codepen.io/SamTheJam/pen/RyBaxJ/",
        project_data: {
          production_date: "11-2018",
          technology: "Python",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description:
            "This is a book quiz. The game is an implementation of markov chain text generator. "
        }
      },
      {
        project_name: "Drum machine",
        project_url: "https://codepen.io/SamTheJam/pen/ZjYBMQ",
        project_data: {
          production_date: "10-2018",
          technology: "React.js",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description:
            "This is a electronic drum machine. Press the keys or use the mouse, or both. "
        }
      },
      {
        project_name: "Markdown previewer",
        project_url: "https://codepen.io/SamTheJam/pen/djyRva",
        project_data: {
          production_date: "07-2018",
          technology: "React.js",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "This is a fully functional markdown previewer, with and editor and preview window. "
        }
      },

      {
        project_name: "Tic Tac Toe game",
        project_url: "https://codepen.io/SamTheJam/pen/RyBaxJ/",
        project_data: {
          production_date: "06-2018",
          technology: "Javascript",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "This is an implementation of a classic Tic Tac Toe game. You can play 1v1 og 1vMachine."
        }
      },

      {
        project_name: "Calculator",
        project_url: "https://codepen.io/SamTheJam/pen/vRGgMJ",
        project_data: {
          production_date: "03-2018",
          technology: "Javascript",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "Fully functional calculator"
        }
      }
    ]
  }
};

module.exports = data;
