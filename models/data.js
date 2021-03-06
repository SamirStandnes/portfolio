let data = {
  education: {
    heading: "education",
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
        year: "2014",
        company: "VidFlow",
        country: "UK/Norway",
        role: "Finance Team",
        company_sector: "Media"
      },
      {
        year: "04-2015",
        company: "Kiva",
        country: "US",
        role: "Potfolio Analysis Intern",
        company_sector: "Non-profit"
      },
      {
        year: "11-2015",
        company: "Western Union",
        role: "Digital Marketing Intern",
        country: "UK",
        company_sector: "Finance"
      },

      {
        year: "2016",
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
        project_name: "Fictitious consultancy concept",
        project_url: "https://rent-a-brain.community",
        project_data: {
          production_date: "03-2020",
          technology: "React and Firbase",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "This is a landing page (https) for a fictitious consultancy service."
        }
      },
      {
        project_name: "Google Drive API Sync w/Python",
        project_url: "https://github.com/SamirStandnes/gdrive_sync_folder_script",
        project_data: {
          production_date: "11-2019",
          technology: "Python and Google Drive API",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "This is a program that syncs local folder(s) with a Google Drive, using the Google Drive API"
        }
      },
    {
        project_name: "Exercise tracker app",
        project_url: "https://mysterious-mountain-90693.herokuapp.com/",
        project_data: {
          production_date: "05-2019",
          technology: "Express.js and MongoDB",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "This is an exercise tracker. You can create a user and log you exerercises."
        }
      },
      {
        project_name: "Personal portfolio page",
        project_url: "http://www.samirstandnes.com",
        project_data: {
          production_date: "03-2019",
          technology: "JavaScript and Express.js",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "Personal portfolio. Hosted on Heroku with one (free) Dyno, with DNS from Amazon Route 53"
        }
      },
      {
        project_name: "Url shorterner microservice",
        project_url: "https://url-shortener-microservice24-7.herokuapp.com/",
        project_data: {
          production_date: "01-2019",
          technology: "Express.js and MongoDB",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description:
            "You can POST a URL and you will receive a shortened URL in the JSON response."
        }
      },

      {
        project_name: "Markov guessing game",
        project_url: "https://github.com/SamirStandnes/guess_the_book_markov",
        project_data: {
          production_date: "11-2018",
          technology: "Python",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description:
            "This is a book quiz where data is pulled out of HTML and XML files, from the web, in real-time. "
        }
      },
      {
        project_name: "Scatter Plot",
        project_url: "https://codepen.io/SamTheJam/pen/dgOZMe",
        project_data: {
          production_date: "10-2018",
          technology: "D3.js",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description:
            "This is a scatterplot of '35 Fastest times up Alpe d'Huez' and allegations of doping."
        }
      },
      {
        project_name: "Drum machine",
        project_url: "https://codepen.io/SamTheJam/pen/ZjYBMQ",
        project_data: {
          production_date: "10-2018",
          technology: "React.js",
          development_time_days: "n/a",
          development_time_hours: "n/a",
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
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description:
            "This is a fully functional markdown previewer, with an editor and a preview window. "
        }
      },

      {
        project_name: "Tic Tac Toe game",
        project_url: "https://codepen.io/SamTheJam/pen/RyBaxJ/",
        project_data: {
          production_date: "06-2018",
          technology: "JavaScript",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description:
            "This is an implementation of a classic Tic Tac Toe game. You can play 1v1 og 1vMachine."
        }
      },

      {
        project_name: "Calculator",
        project_url: "https://codepen.io/SamTheJam/pen/vRGgMJ",
        project_data: {
          production_date: "03-2018",
          technology: "JavaScript",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description: "This is a fully functional calculator. Subtract, add, multiply or divide."
        }
      },
      {
        project_name: "Weather app",
        project_url: "https://codepen.io/SamTheJam/pen/yXxBag",
        project_data: {
          production_date: "08-2017",
          technology: "JQuery",
          project_size: "small",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description: "This is an weather app. It displays the current weather as well as 'whats up next'. "
        }
      },

      {
        project_name: "Wikipedia search",
        project_url: "https://codepen.io/SamTheJam/pen/jwjaxQ",
        project_data: {
          production_date: "2017",
          technology: "JavaScript",
          project_size: "small",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description: "Search for articles on Wikipedia or 'spin the wheel' and get redirected to a random one."
        }
      },

      {
        project_name: "Twitch Streams",
        project_url: "https://codepen.io/SamTheJam/pen/YxgGME",
        project_data: {
          production_date: "2017",
          technology: "JavaScript",
          project_size: "small",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description: "An example of a list of 'streamers' and login status. The user data is hardcoded. "
        }
      },

      {
        project_name: "Random Quote Machine",
        project_url: "https://codepen.io/SamTheJam/pen/MoEjvM",
        project_data: {
          production_date: "2017",
          technology: "JavaScript",
          project_size: "small",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description: "Generate new quotes and colors, and tweet a quote you like."
        }
      },
      {
        project_name: "Survey From",
        project_url: "https://codepen.io/SamTheJam/pen/RJKRqe",
        project_data: {
          production_date: "2017",
          technology: "HTML",
          project_size: "small",
          development_time_days: "n/a",
          development_time_hours: "n/a",
          description: "This is an example of a responsive survey form.  "
        }
      }
    ]
  }
};

module.exports = data;

/*

  {
        project_name: "Survey From",
        project_url: "https://codepen.io/SamTheJam/pen/RJKRqe",
        project_data: {
          production_date: "??-2017",
          technology: "HTML",
          project_size: "small",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "This is an example of a responsive survey form."
        }
  },

    {
        project_name: "Weather app",
        project_url: "https://codepen.io/SamTheJam/pen/yXxBag",
        project_data: {
          production_date: "08-2017",
          technology: "JQuery",
          project_size: "small",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "This is an example of a responsive survey form."
        }
  },
  
  {
        project_name: "Wikipedia search",
        project_url: "https://codepen.io/SamTheJam/pen/jwjaxQ",
        project_data: {
          production_date: "??-2017",
          technology: "Javascript",
          project_size: "small",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "Search for articles on Wikipedia or spin the wheel."
        }
  },

  {
        project_name: "Twitch Streams",
        project_url: "https://codepen.io/SamTheJam/pen/YxgGME",
        project_data: {
          production_date: "??-2017",
          technology: "Javascript",
          project_size: "small",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "Overview og 'streamers' and login status"
        }
  },

{
        project_name: "Random Quote Machine",
        project_url: "https://codepen.io/SamTheJam/pen/MoEjvM",
        project_data: {
          production_date: "??-2017",
          technology: "Javascript",
          project_size: "small",
          development_time_days: 'n/a',
          development_time_hours: 'n/a',
          description: "Generate new quotes and tweet the one you like."
        }
  },





*/
