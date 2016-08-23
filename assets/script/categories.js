// JavaScript Document
var categories = [
        {name: "Movies", // Name of category
        icon: "movies.png", // name of icon file
        active: false, // has the user chosen this category for gameplay?
        badge: false, // has the user won the badge in this category?
        color: "#98288b",
        questions: [ 
			//1 
           {question: 'what movie had the tagline "At the end of the universe lies the beginning of vengeance."?',
             answers: [ 
                      {
                        answer: 'Aliens',
                        correct: false
                      },
                      {
                        answer: 'The Empire Strikes Back',
                        correct: false
                      },
                      {
                        answer: 'Star Trek II - The Wrath of Khan',
                        correct: true
                      },
                      {
                        answer: 'Galaxy Quest',
                        correct: false
                      }
                      ]
            },
			//2 
            {question: 'which of the following films from 1950 was nominated for 14 Academy Awards and won six, including Best Picture?',
             answers: [ 
                      {
                        answer: 'Father of the Bride',
                        correct: false
                      },
                      {
                        answer: 'All About Eve',
                        correct: true
                      },
                      {
                        answer: 'Sunset Boulevard',
                        correct: false
                      },
                      {
                        answer: 'King Solomons Mines',
                        correct: false
                      }
                      ]
            },
			//3
            {question: 'which of the following movies was NOT directed by Alfred Hitchcock?',
             answers: [ 
                      {
                        answer: 'Rear Window',
                        correct: false
                      },
                      {
                        answer: 'Vertigo',
                        correct: false
                      },
                      {
                        answer: 'The Maltese Falcon',
                        correct: true
                      },
                      {
                        answer: 'The 39 Steps',
                        correct: false
                      }
                      ]
            },
			//4
			{question: 'what movie tells the story of a professional assassin who rescues a young girl after her family is murdered?',
             answers: [ 
                      {
                        answer: 'La Femme Nikita',
                        correct: false
                      },
                      {
                        answer: 'Leon - The Professional',
                        correct: true
                      },
                      {
                        answer: 'V for Vendetta',
                        correct: false
                      },
                      {
                        answer: 'The Killer',
                        correct: false
                      }
                      ]
            },
			//5
			{question: 'which character Dolly Parton played in the movie "Steel Magnolias"?',
             answers: [ 
                      {
                        answer: 'Mlynn Eatenton',
                        correct: false
                      },
                      {
                        answer: 'Annelle Desato',
                        correct: false
                      },
                      {
                        answer: 'Truvy Jones',
                        correct: true
                      },
                      {
                        answer: 'Ouiser Boudreaux',
                        correct: false
                      }
                      ]
            },
			//6
			{question: 'the name of the horse featured in the 1999 Pixar film "Toy Story 2"?',
             answers: [ 
                      {
                        answer: 'Bullseye',
                        correct: true
                      },
                      {
                        answer: 'Pokey',
                        correct: false
                      },
                      {
                        answer: 'Butch',
                        correct: false
                      },
                      {
                        answer: 'Roscoe',
                        correct: false
                      }
                      ]
            },
			//7
			{question: 'the first name of Dr.No in the 1962 film of the same name?',
             answers: [ 
                      {
                        answer: 'Francis',
                        correct: false
                      },
                      {
                        answer: 'Julius',
                        correct: true
                      },
                      {
                        answer: 'Alan',
                        correct: false
                      },
                      {
                        answer: 'Martin',
                        correct: false
                      }
                      ]
            },
			//8
			{question: 'in what ocean the aircraft carrier USS Enterprise is located in the 1986 film "Top Gun"?',
             answers: [ 
                      {
                        answer: 'Indian',
                        correct: true
                      },
                      {
                        answer: 'Atlantic',
                        correct: false
                      },
                      {
                        answer: 'Arctic',
                        correct: false
                      },
                      {
                        answer: 'Pacific',
                        correct: false
                      }
                      ]
            },
			//9
			{question: 'which film tells the story of Jerry Lundegaard, a car salesman who hires two thugs to kidnap his wife?',
             answers: [ 
                      {
                        answer: 'God Bless America',
                        correct: false
                      },
                      {
                        answer: 'To Die For',
                        correct: false
                      },
                      {
                        answer: 'Reservoir Dogs',
                        correct: false
                      },
                      {
                        answer: 'Fargo',
                        correct: true
                      }
                      ]
            },
			//10
			{question: 'which film had the tagline "In Space No One Can Hear You Screm"?',
             answers: [ 
                      {
                        answer: 'Blade Runner',
                        correct: false
                      },
                      {
                        answer: '2001 - A Space Odyssey',
                        correct: false
                      },
                      {
                        answer: 'Predator',
                        correct: false
                      },
                      {
                        answer: 'Alien',
                        correct: true
                      }
                      ]
            },
			//11
			{question: 'what film was the second top-grossing movie of the eighties, after "E.T"?',
             answers: [ 
                      {
                        answer: 'Return of the Jedi',
                        correct: true
                      },
                      {
                        answer: 'Ghostbusters',
                        correct: false
                      },
                      {
                        answer: 'Batman',
                        correct: false
                      },
                      {
                        answer: 'Raiders of the Lost Ark',
                        correct: false
                      }
                      ]
            },
			//12
			{question: 'who played Inga, the lab assistant, in "Young Frankenstein"?',
             answers: [ 
                      {
                        answer: 'Gilda Radner',
                        correct: false
                      },
                      {
                        answer: 'Teri Garr',
                        correct: true
                      },
                      {
                        answer: 'Cloris Leachman',
                        correct: false
                      },
                      {
                        answer: 'Madeline Kahn',
                        correct: false
                      }
                      ]
            },
			//13
			{question: 'in which of these movies Steve Buscemi did not appear?',
             answers: [ 
                      {
                        answer: 'Fargo',
                        correct: false
                      },
                      {
                        answer: 'Mall Rats',
                        correct: true
                      },
                      {
                        answer: 'ConAir',
                        correct: false
                      },
                      {
                        answer: 'Vibes',
                        correct: false
                      }
                      ]
            },
			//14
			{question: 'which was the first film to gross at least 100 million dollars?',
             answers: [ 
                      {
                        answer: 'Star Wars',
                        correct: false
                      },
                      {
                        answer: 'Rocky I',
                        correct: false
                      },
                      {
                        answer: 'The Godfather I',
                        correct: false
                      },
                      {
                        answer: 'Jaws',
                        correct: true
                      }
                      ]
            },
			//15
			{question: 'which 1994 movie was the first to have an associated site on the Web?',
             answers: [ 
                      {
                        answer: 'Jurassic Park',
                        correct: false
                      },
                      {
                        answer: 'Stargate',
                        correct: true
                      },
                      {
                        answer: 'Hackers',
                        correct: false
                      },
                      {
                        answer: 'Forrest Gump',
                        correct: false
                      }
                      ]
            },
			//16
			{question: 'the name of John Connors dog in the film "Terminator II"?',
             answers: [ 
                      {
                        answer: 'Arnold',
                        correct: false
                      },
                      {
                        answer: 'Wolfie',
                        correct: false
                      },
                      {
                        answer: 'Jimbo',
                        correct: false
                      },
                      {
                        answer: 'Max',
                        correct: true
                      }
                      ]
            },
			//17
			{question: 'who is cast in the role of Santa Claus in the hit movie "Elf"?',
             answers: [ 
                      {
                        answer: 'Michael Caine',
                        correct: false
                      },
                      {
                        answer: 'Walter Matthau',
                        correct: false
                      },
                      {
                        answer: 'Sean Connery',
                        correct: false
                      },
                      {
                        answer: 'Ed Asner',
                        correct: true
                      }
                      ]
            },
			//18
			{question: 'what 1978 movie told the story of student Bill Hayes, who got stuck in a Turkish prison?',
             answers: [ 
                      {
                        answer: 'Caged Heat',
                        correct: false
                      },
                      {
                        answer: 'Midnight Express',
                        correct: true
                      },
                      {
                        answer: 'The Big Bird Cage',
                        correct: false
                      },
                      {
                        answer: 'The Longest Yard',
                        correct: false
                      }
                      ]
            },
			//19
			{question: 'which of these films is NOT about autism?',
             answers: [ 
                      {
                        answer: 'The Boy Who Could Fly',
                        correct: false
                      },
                      {
                        answer: 'Rain Man',
                        correct: false
                      },
                      {
                        answer: 'Terms of Endearment',
                        correct: true
                      },
                      {
                        answer: 'Snow Cake',
                        correct: false
                      }
                      ]
            },
			//20
			{question: 'besides Walter Matthau, who plays one of the grumpy old men in the movie "Grumpy Old Men"?',
             answers: [ 
                      {
                        answer: 'Tony Randall',
                        correct: false
                      },
                      {
                        answer: 'Jack Klugman',
                        correct: false
                      },
                      {
                        answer: 'Jack Lemmon',
                        correct: true
                      },
                      {
                        answer: 'Robert De Niro',
                        correct: false
                      }
                      ]
            }
            ]

        },
        {name: "Sports",
        icon: "sports.png",
        active: false,
        badge: false,
        color: "#c8431e",
        questions: [ 
			//1
            {question: 'what kind of surface is used at the tennis Wimbledon Championships?',
             answers: [ 
                      {
                        answer: 'Clay',
                        correct: false
                      },
                      {
                        answer: 'Concrete',
                        correct: false
                      },
                      {
                        answer: 'Carpet',
                        correct: false
                      },
                      {
                        answer: 'Grass',
                        correct: true
                      }
                      ]
            },
			//2 
            {question: 'what sports superstar lit the flame at the 1996 Atlantic Summer Olympics?',
             answers: [ 
                      {
                        answer: 'Muhammad Ali',
                        correct: true
                      },
                      {
                        answer: 'Joe Montana',
                        correct: false
                      },
                      {
                        answer: 'Wayne Gretzky',
                        correct: false
                      },
                      {
                        answer: 'Michael Jordan',
                        correct: false
                      }
                      ]
            },
			//3
            {question: 'the only pitcher in the history of the MLB to have thrown back-to-back no-hitters?',
             answers: [ 
                      {
                        answer: 'Freddie Fitzsimmons',
                        correct: false
                      },
                      {
                        answer: 'Lefty Gomez',
                        correct: false
                      },
                      {
                        answer: 'Dizzy Dean',
                        correct: false
                      },
                      {
                        answer: 'Johnny Vander Meer',
                        correct: true
                      }
                      ]
            },
			//4
			{question: 'which country holds the FIFA World Cup record for most finishes in the top two without ever being champion?',
             answers: [ 
                      {
                        answer: 'Mexico',
                        correct: false
                      },
                      {
                        answer: 'Netherlands',
                        correct: true
                      },
                      {
                        answer: 'Italy',
                        correct: false
                      },
                      {
                        answer: 'Sweden',
                        correct: false
                      }
                      ]
            },
			//5
			{question: 'which famous athlete was born Ferdinand Lewis Alcindor Jr.',
             answers: [ 
                      {
                        answer: 'Leon Spinks',
                        correct: false
                      },
                      {
                        answer: 'Tiger Woods',
                        correct: false
                      },
                      {
                        answer: 'Muhammad Ali',
                        correct: false
                      },
                      {
                        answer: 'Kareen Abdul-Jabbar',
                        correct: true
                      }
                      ]
            },
			//6
			{question: 'what Louis Meyer guzzled in Victory Lane after winning the 1936 Indianapolis 500?',
             answers: [ 
                      {
                        answer: 'Buttermilk',
                        correct: true
                      },
                      {
                        answer: 'Orange Juice',
                        correct: false
                      },
                      {
                        answer: 'Gatorade',
                        correct: false
                      },
                      {
                        answer: 'Ginger Beer',
                        correct: false
                      }
                      ]
            },
			//7
			{question: 'who became the first person to pitch a perfect game during the World Series, doing so on the very day his wife filed for divorce?',
             answers: [ 
                      {
                        answer: 'Don Larsen',
                        correct: true
                      },
                      {
                        answer: 'David Cone',
                        correct: false
                      },
                      {
                        answer: 'Sandy Koufax',
                        correct: false
                      },
                      {
                        answer: 'Roger Clemens',
                        correct: false
                      }
                      ]
            },
			//8
			{question: 'who used a Spalding 6-iron to hit a golf ball an estimated half mile in 1971?',
             answers: [ 
                      {
                        answer: 'Alan Shepard',
                        correct: true
                      },
                      {
                        answer: 'Jack Nicklaus',
                        correct: false
                      },
                      {
                        answer: 'Gary Player',
                        correct: false
                      },
                      {
                        answer: 'Arnold Palmer',
                        correct: false
                      }
                      ]
            },
			//9
			{question: 'why the Cincinnati Reds become the Redlegs from 1953 to 1959?',
             answers: [ 
                      {
                        answer: 'Because of a trademark dispute',
                        correct: false
                      },
                      {
                        answer: 'Because they were owned by Redleg Airlines',
                        correct: false
                      },
                      {
                        answer: 'So nobody would think they were Commies',
                        correct: true
                      },
                      {
                        answer: 'To attract more female fans',
                        correct: false
                      }
                      ]
            },
			//10
			{question: 'which of these events is one where men and women compete against each other at the Olympics?',
             answers: [ 
                      {
                        answer: 'Archery',
                        correct: false
                      },
                      {
                        answer: 'Sailing',
                        correct: true
                      },
                      {
                        answer: 'Rowing',
                        correct: false
                      },
                      {
                        answer: 'Tennis',
                        correct: false
                      }
                      ]
            },
			//11
			{question: 'who reportedly replied, "Thanks, king," when Sweden King Gustav V told him that he was "the greatest athlete in the world"?',
             answers: [ 
                      {
                        answer: 'Babe Ruth',
                        correct: false
                      },
                      {
                        answer: 'Jim Thorpe',
                        correct: true
                      },
                      {
                        answer: 'Muhammad Ali',
                        correct: false
                      },
                      {
                        answer: 'Red Grange',
                        correct: false
                      }
                      ]
            },
			//12
			{question: "what city's Olympics included 'Anthropology Days', in which 'costumed members of the uncivilized tribes' competed in such demeaning events as mud throwing?",
             answers: [ 
                      {
                        answer: 'London',
                        correct: false
                      },
                      {
                        answer: 'St. Louis',
                        correct: true
                      },
                      {
                        answer: 'Paris',
                        correct: false
                      },
                      {
                        answer: 'Athens',
                        correct: false
                      }
                      ]
            },
			//13
			{question: 'what pitcher was inducted into the Baseball Hall of Fame in 1971, despite a losing record in Major League Baseball?',
             answers: [ 
                      {
                        answer: 'Satchel Paige',
                        correct: true
                      },
                      {
                        answer: 'Rollie Fingers',
                        correct: false
                      },
                      {
                        answer: 'Cy Young',
                        correct: false
                      },
                      {
                        answer: 'Mark Fidrych',
                        correct: false
                      }
                      ]
            },
			//14
			{question: 'what sport became popular in the US in the 1930s, in part because of a new piece of equipment invented by Seattle retailer Eddie Bauer',
             answers: [ 
                      {
                        answer: 'Badminton',
                        correct: true
                      },
                      {
                        answer: 'Trap Shooting',
                        correct: false
                      },
                      {
                        answer: 'Angling',
                        correct: false
                      },
                      {
                        answer: 'Running',
                        correct: false
                      }
                      ]
            },
			//15
			{question: 'in what sport would you use a sloop or a cutter?',
             answers: [ 
                      {
                        answer: 'Snooker',
                        correct: false
                      },
                      {
                        answer: 'Skiing',
                        correct: false
                      },
                      {
                        answer: 'Bobsledding',
                        correct: false
                      },
                      {
                        answer: 'Sailing',
                        correct: true
                      }
                      ]
            },
			//16
			{question: 'which person is credited with the golf term "Caddie"?',
             answers: [ 
                      {
                        answer: 'Mary Queen of Scots',
                        correct: true
                      },
                      {
                        answer: 'Ben Hogan',
                        correct: false
                      },
                      {
                        answer: 'Benjamin Franklin',
                        correct: false
                      },
                      {
                        answer: 'Napolean Bonaparte',
                        correct: false
                      }
                      ]
            },
			//17
			{question: 'which sport would you be watching if you were watching Nadia Comaneci?',
             answers: [ 
                      {
                        answer: 'Gymnastics',
                        correct: true
                      },
                      {
                        answer: 'Tennis',
                        correct: false
                      },
                      {
                        answer: 'Skiing',
                        correct: false
                      },
                      {
                        answer: 'Ice Skating',
                        correct: false
                      }
                      ]
            },
			//18
			{question: 'what Edson Arantes do Nascimento is better known as?',
             answers: [ 
                      {
                        answer: 'Steve Nash',
                        correct: false
                      },
                      {
                        answer: 'Babe Ruth',
                        correct: false
                      },
                      {
                        answer: 'Satchel Paige',
                        correct: false
                      },
                      {
                        answer: 'Pele',
                        correct: true
                      }
                      ]
            },
			//19
			{question: 'in which sport the Grand Champion is known as a "Yokozuna"?',
             answers: [ 
                      {
                        answer: 'Judo',
                        correct: false
                      },
                      {
                        answer: 'Wrestling',
                        correct: false
                      },
                      {
                        answer: 'Sumo Wrestling',
                        correct: true
                      },
                      {
                        answer: 'Karate',
                        correct: false
                      }
                      ]
            },
			//20
			{question: 'which International Rugby Union team are nicknamed the "Springboks"?',
             answers: [ 
                      {
                        answer: 'England',
                        correct: false
                      },
                      {
                        answer: 'New Zealand',
                        correct: false
                      },
                      {
                        answer: 'South Africa',
                        correct: true
                      },
                      {
                        answer: 'Australia',
                        correct: false
                      }
                      ]
            }
            ]

        },
        {name: "The Arts",
        icon: "art.png",
        active: false,
        badge: false,
        color: "#ce2630",
        questions: [ 
      //1
            {question: 'Agatha Christie also wrote six romance novels. What was the pen name she used for the romance novels?',
             answers: [ 
                      {
                        answer: 'Jean Plaidy',
                        correct: false
                      },
                      {
                        answer: 'Amanda Cross',
                        correct: false
                      },
                      {
                        answer: 'Mary Westmacott',
                        correct: true
                      },
                      {
                        answer: 'Acton Bell',
                        correct: false
                      }
                      ]
            },
      //2 
            {question: 'what kind of art the Italian sculptor, painter and poet Michelangelo was known for?',
             answers: [ 
                      {
                        answer: 'Romanticism',
                        correct: false
                      },
                      {
                        answer: 'Renaissance',
                        correct: true
                      },
                      {
                        answer: 'Purism',
                        correct: false
                      },
                      {
                        answer: 'Realism',
                        correct: false
                      }
                      ]
            },
      //3
            {question: 'where "Beowulf", the oldest surviving epic poem of Old English, is set?',
             answers: [ 
                      {
                        answer: 'Wales',
                        correct: false
                      },
                      {
                        answer: 'Ireland',
                        correct: false
                      },
                      {
                        answer: 'Scandinavia',
                        correct: true
                      },
                      {
                        answer: 'Scotland',
                        correct: false
                      }
                      ]
            },
      //4
      {question: 'this chief figure in the abstract expressionist movement was nicknamed "Jack the Dripper"?',
             answers: [ 
                      {
                        answer: 'Jasper Johns',
                        correct: false
                      },
                      {
                        answer: 'Paul Cezanne',
                        correct: false
                      },
                      {
                        answer: 'Rembrandt van Rijn',
                        correct: false
                      },
                      {
                        answer: 'Jackson Pollock',
                        correct: true
                      }
                      ]
            },
      //5
      {question: 'this person is assassinated in the play "Murder in the Cathedral',
             answers: [ 
                      {
                        answer: 'Arch Bishop John Potter',
                        correct: false
                      },
                      {
                        answer: 'Arch Bishop John de Grey',
                        correct: false
                      },
                      {
                        answer: 'Arch Bishop Richard le Grant',
                        correct: false
                      },
                      {
                        answer: 'Arch Bishop Thomas Becket',
                        correct: true
                      }
                      ]
            },
      //6
      {question: 'this artist sculpted the famous sculpture, "Hermes and the Infant Dionysus"?',
             answers: [ 
                      {
                        answer: 'Michelangelo',
                        correct: false
                      },
                      {
                        answer: 'Praxiteles',
                        correct: true
                      },
                      {
                        answer: 'Auguste Rodin',
                        correct: false
                      },
                      {
                        answer: 'Bernini',
                        correct: false
                      }
                      ]
            },
      //7
      {question: 'the "Venus de Milo", one of the best-known works of ancient Greek sculpture, can be found here?',
             answers: [ 
                      {
                        answer: 'The Guggenheim',
                        correct: false
                      },
                      {
                        answer: 'La Spezia',
                        correct: false
                      },
                      {
                        answer: 'Louvre Museum',
                        correct: true
                      },
                      {
                        answer: 'The British Museum',
                        correct: false
                      }
                      ]
            },
      //8
      {question: 'the phrase "Hail to thee blithe spirit" refers to this kind of bird?',
             answers: [ 
                      {
                        answer: 'Nightingale',
                        correct: false
                      },
                      {
                        answer: 'Mockingbird',
                        correct: false
                      },
                      {
                        answer: 'Skylark',
                        correct: true
                      },
                      {
                        answer: 'Dove',
                        correct: false
                      }
                      ]
            },
      //9
      {question: 'which person travelled with Phileas Fogg?',
             answers: [ 
                      {
                        answer: 'Rochinante',
                        correct: false
                      },
                      {
                        answer: 'Kato',
                        correct: false
                      },
                      {
                        answer: 'Jean Passepartout',
                        correct: true
                      },
                      {
                        answer: 'Friday',
                        correct: false
                      }
                      ]
            },
      //10
      {question: "the pilgrims in Geoffrey Chaucer's 'The Canterbury Tales' start their journey here?",
             answers: [ 
                      {
                        answer: 'The Lion and the Crow',
                        correct: false
                      },
                      {
                        answer: 'The Leaky Cauldron',
                        correct: false
                      },
                      {
                        answer: 'The Tabard Inn',
                        correct: true
                      },
                      {
                        answer: 'The Dog and Duck',
                        correct: false
                      }
                      ]
            },
      //11
      {question: 'which artist painted "Rain, Steam and Speed - The Great Western Railway"?',
             answers: [ 
                      {
                        answer: 'J. M. W. Turner',
                        correct: true
                      },
                      {
                        answer: 'William Franklin',
                        correct: false
                      },
                      {
                        answer: 'John Singer Sargent',
                        correct: false
                      },
                      {
                        answer: 'James Whistler',
                        correct: false
                      }
                      ]
            },
      //12
      {question: "what country Johannes Vermeer, a painter during the 15th century, was born in?",
             answers: [ 
                      {
                        answer: 'England',
                        correct: false
                      },
                      {
                        answer: 'Italy',
                        correct: false
                      },
                      {
                        answer: 'Austria',
                        correct: false
                      },
                      {
                        answer: 'The Netherlands',
                        correct: true
                      }
                      ]
            },
      //13
      {question: 'the classic novel that opens with the line "It was 348 years ago…"?',
             answers: [ 
                      {
                        answer: 'The Hunchback of Notre Dame',
                        correct: true
                      },
                      {
                        answer: 'Frankenstein',
                        correct: false
                      },
                      {
                        answer: 'Roots',
                        correct: false
                      },
                      {
                        answer: "A Connecticut Yankee in King Arthur's Court",
                        correct: false
                      }
                      ]
            },
      //14
      {question: "the author who, although he had assistants do the pecking, submitted the first novel to a publisher in typed form?",
             answers: [ 
                      {
                        answer: 'Mark Twain',
                        correct: true
                      },
                      {
                        answer: 'Washington Irving',
                        correct: false
                      },
                      {
                        answer: 'James Fenimore Cooper',
                        correct: false
                      },
                      {
                        answer: 'Charles Dickens',
                        correct: false
                      }
                      ]
            },
      //15
      {question: "the fruit in Magritte's 'The Son of Man' that obscures the face of the man wearing the derby?",
             answers: [ 
                      {
                        answer: 'Banana',
                        correct: false
                      },
                      {
                        answer: 'Apple',
                        correct: true
                      },
                      {
                        answer: 'Orange',
                        correct: false
                      },
                      {
                        answer: 'Pumpkin',
                        correct: false
                      }
                      ]
            },
      //16
      {question: 'the Roman vase, shattered accidentally by a drunk in 1845, that inspired Josiah Wedgewood and Benjamin Richardson?',
             answers: [ 
                      {
                        answer: 'Sussex vase',
                        correct: false
                      },
                      {
                        answer: 'Cardiff vase',
                        correct: false
                      },
                      {
                        answer: 'Portland vase',
                        correct: true
                      },
                      {
                        answer: 'Sheffield vase',
                        correct: false
                      }
                      ]
            },
      //17
      {question: 'the person who designed the geodesic dome that housed the US pavilion at Expo 67 in Moscow?',
             answers: [ 
                      {
                        answer: 'R Buckminster Fuller',
                        correct: true
                      },
                      {
                        answer: 'IM Pei',
                        correct: false
                      },
                      {
                        answer: 'Mies Van Der Rohe',
                        correct: false
                      },
                      {
                        answer: 'Philip Johnson',
                        correct: false
                      }
                      ]
            },
      //18
      {question: 'the playwright, who penned the play "The Plough and the Stars" set during the 1916 Easter Rebellion, that provoked so much anarchy in 1926 that he fled the country?',
             answers: [ 
                      {
                        answer: "Sean O'Casey",
                        correct: false
                      },
                      {
                        answer: 'Federico Garcia Lorca',
                        correct: false
                      },
                      {
                        answer: 'Henrik Ibsen',
                        correct: false
                      },
                      {
                        answer: 'Jean-Paul Sartre',
                        correct: true
                      }
                      ]
            },
      //19
      {question: "the architect who worked on two of Europe's most exciting new buildings, the Georges Pompidou Centre in Paris and Potsdamer Platz in Berlin?",
             answers: [ 
                      {
                        answer: 'Renzo Ygritte',
                        correct: false
                      },
                      {
                        answer: 'Renzo Piccolo',
                        correct: false
                      },
                      {
                        answer: 'Renzo Piano',
                        correct: true
                      },
                      {
                        answer: 'Renzo Estee',
                        correct: false
                      }
                      ]
            },
      //20
      {question: 'the hot-tempered Italian painter, known for his gritty realism, who killed Ranuccio Tomassoni after a tennis game and fled to Naples?',
             answers: [ 
                      {
                        answer: 'Raphael',
                        correct: false
                      },
                      {
                        answer: 'Donatello',
                        correct: false
                      },
                      {
                        answer: 'Caravaggio',
                        correct: true
                      },
                      {
                        answer: 'Masaccio',
                        correct: false
                      }
                      ]
            }
            ]

        },
        {name: "Television",
        icon: "tv.png",
        active: false,
        badge: false,
        color: "#4862d6",
        questions: [ 
      //1 
           {question: 'who killed Laura Palmer on the popular 1990s TV show Twin Peaks?',
             answers: [ 
                      {
                        answer: 'Bobby Briggs',
                        correct: false
                      },
                      {
                        answer: 'Leland Palmer',
                        correct: true
                      },
                      {
                        answer: 'Ben Horne',
                        correct: false
                      },
                      {
                        answer: 'Donna Hayward',
                        correct: false
                      }
                      ]
            },
      //2 
            {question: 'how long the sentence that is handed out for Jerry Seinfeld and his friends is in the final episode of Seinfeld, after being found guilty of criminal indifference?',
             answers: [ 
                      {
                        answer: 'Two years less a day',
                        correct: false
                      },
                      {
                        answer: 'Sixty days',
                        correct: false
                      },
                      {
                        answer: 'Five years',
                        correct: false
                      },
                      {
                        answer: 'One Year',
                        correct: true
                      }
                      ]
            },
      //3
            {question: "who Roseanne's husband is on the sitcom 'Roseanne'?",
             answers: [ 
                      {
                        answer: 'Paul',
                        correct: false
                      },
                      {
                        answer: 'David',
                        correct: false
                      },
                      {
                        answer: 'Dan',
                        correct: true
                      },
                      {
                        answer: 'Arnie',
                        correct: false
                      }
                      ]
            },
      //4
      {question: "what Uncle Fester's full name is on 'The Addams Family'?",
             answers: [ 
                      {
                        answer: 'Fester York',
                        correct: false
                      },
                      {
                        answer: 'Fester Ground',
                        correct: false
                      },
                      {
                        answer: 'Fester Rumple',
                        correct: false
                      },
                      {
                        answer: 'Fester Frump',
                        correct: true
                      }
                      ]
            },
      //5
      {question: 'what the number of the surgical hospital was on "M.A.S.H"?',
             answers: [ 
                      {
                        answer: '5508',
                        correct: false
                      },
                      {
                        answer: '4007',
                        correct: false
                      },
                      {
                        answer: '4077',
                        correct: true
                      },
                      {
                        answer: '7714',
                        correct: false
                      }
                      ]
            },
      //6
      {question: "what TV show's segment in 1972 inspired American Graffiti,from which the TV show Happy Days was also spun off?",
             answers: [ 
                      {
                        answer: 'Laugh-In',
                        correct: false
                      },
                      {
                        answer: 'Saturday Night Live',
                        correct: false
                      },
                      {
                        answer: 'Love, American Style',
                        correct: true
                      },
                      {
                        answer: 'Carol Burnett Show',
                        correct: false
                      }
                      ]
            },
      //7
      {question: "what the Prisoner's number was on the UK cult classic 'The Prisoner'?",
             answers: [ 
                      {
                        answer: '13225',
                        correct: false
                      },
                      {
                        answer: '13',
                        correct: false
                      },
                      {
                        answer: 'Number Six',
                        correct: true
                      },
                      {
                        answer: 'Zero',
                        correct: false
                      }
                      ]
            },
      //8
      {question: 'which cast member of the TV sitcom "Friends" is the oldest in real life?',
             answers: [ 
                      {
                        answer: 'Matt Le Blanc',
                        correct: false
                      },
                      {
                        answer: 'Lisa Kudrow',
                        correct: true
                      },
                      {
                        answer: 'Courteney Cox',
                        correct: false
                      },
                      {
                        answer: 'David Schwimmer',
                        correct: false
                      }
                      ]
            },
      //9
      {question: 'what Kramer decides to call his new Eau de Cologne on "Seinfeld"?',
             answers: [ 
                      {
                        answer: 'Kramer by Kramer',
                        correct: false
                      },
                      {
                        answer: 'Smelly but Pleasant',
                        correct: false
                      },
                      {
                        answer: 'Cosmo',
                        correct: false
                      },
                      {
                        answer: 'The Beach',
                        correct: true
                      }
                      ]
            },
      //10
      {question: 'in what year did the first episode of "The Simpsons" aired?',
             answers: [ 
                      {
                        answer: '1983',
                        correct: false
                      },
                      {
                        answer: '1987',
                        correct: false
                      },
                      {
                        answer: '1992',
                        correct: false
                      },
                      {
                        answer: '1989',
                        correct: true
                      }
                      ]
            },
      //11
      {question: 'the last line of the last show of the popular TV sitcom "Cheers"?',
             answers: [ 
                      {
                        answer: 'We shall open again soon',
                        correct: false
                      },
                      {
                        answer: "Sorry, we're closed",
                        correct: true
                      },
                      {
                        answer: 'Norm!',
                        correct: false
                      },
                      {
                        answer: 'Diane, turn out the lights',
                        correct: false
                      }
                      ]
            },
      //12
      {question: 'what make of car Tom Selleck drove in the TV series "Magnum P.I."?',
             answers: [ 
                      {
                        answer: 'Porsche 356 Speedster',
                        correct: false
                      },
                      {
                        answer: 'Ferrari Daytona',
                        correct: false
                      },
                      {
                        answer: 'Porsche 911 Carrera',
                        correct: false
                      },
                      {
                        answer: 'Ferrari 308 GTS',
                        correct: true
                      }
                      ]
            },
      //13
      {question: 'in which of these movies Steve Buscemi did not appear?',
             answers: [ 
                      {
                        answer: 'Fargo',
                        correct: false
                      },
                      {
                        answer: 'Mall Rats',
                        correct: true
                      },
                      {
                        answer: 'ConAir',
                        correct: false
                      },
                      {
                        answer: 'Vibes',
                        correct: false
                      }
                      ]
            },
      //14
      {question: 'who Freeway was on the TV show "Hart To Hart"?',
             answers: [ 
                      {
                        answer: 'Their butler',
                        correct: false
                      },
                      {
                        answer: 'Their mechanic',
                        correct: false
                      },
                      {
                        answer: 'Their gardener',
                        correct: false
                      },
                      {
                        answer: 'Their dog',
                        correct: true
                      }
                      ]
            },
      //15
      {question: 'the title of the last episode of "The Dukes of Hazzard", aired on February 8 of 1985?',
             answers: [ 
                      {
                        answer: "Enos and Daisy's Wedding",
                        correct: false
                      },
                      {
                        answer: 'Good Ole Boys',
                        correct: false
                      },
                      {
                        answer: "Opening Night at the Boar's Nest",
                        correct: true
                      },
                      {
                        answer: 'Farewell Hazzard',
                        correct: false
                      }
                      ]
            },
      //16
      {question: 'what TV sitcom from the seventies featured a widowed mother and her five children who embark on a music career?',
             answers: [ 
                      {
                        answer: 'The Wannabes',
                        correct: false
                      },
                      {
                        answer: 'California Dreams',
                        correct: false
                      },
                      {
                        answer: 'The Archie Show',
                        correct: false
                      },
                      {
                        answer: 'The Partridge Family',
                        correct: true
                      }
                      ]
            },
      //17
      {question: 'what American sitcom, that made its appearance in 1977, was based on the British sitcom, "Man About the House"?',
             answers: [ 
                      {
                        answer: 'Rhoda',
                        correct: false
                      },
                      {
                        answer: "Three's Company",
                        correct: true
                      },
                      {
                        answer: 'Good Times',
                        correct: false
                      },
                      {
                        answer: 'All in the Family',
                        correct: false
                      }
                      ]
            },
      //18
      {question: 'what the name of the family dog was in the 70s sitcom, "The Brady Bunch"?',
             answers: [ 
                      {
                        answer: 'Fluffy',
                        correct: false
                      },
                      {
                        answer: 'Spot',
                        correct: false
                      },
                      {
                        answer: 'Bear',
                        correct: false
                      },
                      {
                        answer: 'Tiger',
                        correct: true
                      }
                      ]
            },
      //19
      {question: 'who played the role of Skipper on the TV sitcom "Gilligans Island"?',
             answers: [ 
                      {
                        answer: 'Roy Hinkley',
                        correct: false
                      },
                      {
                        answer: 'Alan Hale, Jr.',
                        correct: true
                      },
                      {
                        answer: 'Jonas Grumby',
                        correct: false
                      },
                      {
                        answer: 'Jonah Ahab',
                        correct: false
                      }
                      ]
            },
      //20
      {question: 'what 1960s TV series Bruce Lee co-starred in?',
             answers: [ 
                      {
                        answer: 'Bonanza',
                        correct: false
                      },
                      {
                        answer: 'Kung Fu',
                        correct: false
                      },
                      {
                        answer: 'Batman',
                        correct: false
                      },
                      {
                        answer: 'The Green Hornet',
                        correct: true
                      }
                      ]
            }
            ]

        },
        {name: "Geography",
        icon: "geography.png",
        active: false,
        badge: false,
        color: "#f58b25",
        questions: [ 
      //1 
           {question: 'which country the province of Hainan is part of?',
             answers: [ 
                      {
                        answer: 'Mexico',
                        correct: false
                      },
                      {
                        answer: 'Spain',
                        correct: false
                      },
                      {
                        answer: 'Portugal',
                        correct: false
                      },
                      {
                        answer: 'China',
                        correct: true
                      }
                      ]
            },
      //2 
            {question: 'which country contains seven of the ten biggest ports in the world by cargo volume as of 2015?',
             answers: [ 
                      {
                        answer: 'South Korea',
                        correct: false
                      },
                      {
                        answer: 'China',
                        correct: true
                      },
                      {
                        answer: 'Russia',
                        correct: false
                      },
                      {
                        answer: 'United States',
                        correct: false
                      }
                      ]
            },
      //3
            {question: "which river Khartoum is located on?",
             answers: [ 
                      {
                        answer: 'Nile',
                        correct: true
                      },
                      {
                        answer: 'Yellow',
                        correct: false
                      },
                      {
                        answer: 'Ganges',
                        correct: false
                      },
                      {
                        answer: 'Mississippi',
                        correct: false
                      }
                      ]
            },
      //4
      {question: "the capital city of Ghana?",
             answers: [ 
                      {
                        answer: 'Lima',
                        correct: false
                      },
                      {
                        answer: 'Accra',
                        correct: true
                      },
                      {
                        answer: 'Kingston',
                        correct: false
                      },
                      {
                        answer: 'Amman',
                        correct: false
                      }
                      ]
            },
      //5
      {question: 'which of the following islands is the largest by area?',
             answers: [ 
                      {
                        answer: 'Cuba',
                        correct: false
                      },
                      {
                        answer: 'Baffin',
                        correct: false
                      },
                      {
                        answer: 'Tasmania',
                        correct: false
                      },
                      {
                        answer: 'Madagascar',
                        correct: true
                      }
                      ]
            },
      //6
      {question: "which of the following European countries is the largest by area?",
             answers: [ 
                      {
                        answer: 'France',
                        correct: true
                      },
                      {
                        answer: 'Spain',
                        correct: false
                      },
                      {
                        answer: 'Norway',
                        correct: false
                      },
                      {
                        answer: 'Germany',
                        correct: false
                      }
                      ]
            },
      //7
      {question: "in which city would you be able to visit the Hagia Sophia?",
             answers: [ 
                      {
                        answer: 'Moscow',
                        correct: false
                      },
                      {
                        answer: 'Istanbul',
                        correct: true
                      },
                      {
                        answer: 'Lisbon',
                        correct: false
                      },
                      {
                        answer: 'Sydney',
                        correct: false
                      }
                      ]
            },
      //8
      {question: 'which of these lakes is the largest?',
             answers: [ 
                      {
                        answer: 'Lake Victoria',
                        correct: true
                      },
                      {
                        answer: 'Malawi',
                        correct: false
                      },
                      {
                        answer: 'Erie',
                        correct: false
                      },
                      {
                        answer: 'Winnipeg',
                        correct: false
                      }
                      ]
            },
      //9
      {question: 'in which state would you find Mammoth Cave?',
             answers: [ 
                      {
                        answer: 'Alaska',
                        correct: false
                      },
                      {
                        answer: 'Colorado',
                        correct: false
                      },
                      {
                        answer: 'Nevada',
                        correct: false
                      },
                      {
                        answer: 'Kentucky',
                        correct: true
                      }
                      ]
            },
      //10
      {question: 'how long the Panama Canal is?',
             answers: [ 
                      {
                        answer: '131 miles',
                        correct: false
                      },
                      {
                        answer: '207 miles',
                        correct: false
                      },
                      {
                        answer: '48 miles',
                        correct: true
                      },
                      {
                        answer: '26 miles',
                        correct: false
                      }
                      ]
            },
      //11
      {question: 'approximately what percentage of the Earth is land area?',
             answers: [ 
                      {
                        answer: '49 Percent',
                        correct: false
                      },
                      {
                        answer: "19 Percent",
                        correct: false
                      },
                      {
                        answer: '29 Percent',
                        correct: true
                      },
                      {
                        answer: '39 Percent',
                        correct: false
                      }
                      ]
            },
      //12
      {question: 'which of these countries is the largest in area?',
             answers: [ 
                      {
                        answer: 'Sudan',
                        correct: false
                      },
                      {
                        answer: 'India',
                        correct: false
                      },
                      {
                        answer: 'Argentina',
                        correct: false
                      },
                      {
                        answer: 'Australia',
                        correct: true
                      }
                      ]
            },
      //13
      {question: 'which of the following countries uses the "Lev" as its currency?',
             answers: [ 
                      {
                        answer: 'Austria',
                        correct: false
                      },
                      {
                        answer: 'Brazil',
                        correct: false
                      },
                      {
                        answer: 'Bulgaria',
                        correct: true
                      },
                      {
                        answer: 'Belize',
                        correct: false
                      }
                      ]
            },
      //14
      {question: 'in which country would you find the Banaue Rice Terraces?',
             answers: [ 
                      {
                        answer: 'Iran',
                        correct: false
                      },
                      {
                        answer: 'China',
                        correct: false
                      },
                      {
                        answer: 'Chile',
                        correct: false
                      },
                      {
                        answer: 'Philippines',
                        correct: true
                      }
                      ]
            },
      //15
      {question: 'in which US state would you find Central Valley?',
             answers: [ 
                      {
                        answer: "California",
                        correct: true
                      },
                      {
                        answer: 'New Hampshire',
                        correct: false
                      },
                      {
                        answer: "Alaska",
                        correct: false
                      },
                      {
                        answer: 'South Dakota',
                        correct: false
                      }
                      ]
            },
      //16
      {question: 'approximately how many islands make up the Philippines?',
             answers: [ 
                      {
                        answer: '10,000',
                        correct: false
                      },
                      {
                        answer: '7,100',
                        correct: true
                      },
                      {
                        answer: '5,050',
                        correct: false
                      },
                      {
                        answer: '3,000',
                        correct: false
                      }
                      ]
            },
      //17
      {question: 'which nation used to be called Ceylon from 1948 to 1972?',
             answers: [ 
                      {
                        answer: 'Iraq',
                        correct: false
                      },
                      {
                        answer: "Bahrain",
                        correct: false
                      },
                      {
                        answer: 'Sri Lanka',
                        correct: true
                      },
                      {
                        answer: 'South Africa',
                        correct: false
                      }
                      ]
            },
      //18
      {question: 'what is the highest point in Mexico and the third highest in North America?',
             answers: [ 
                      {
                        answer: 'Nevado de Colima',
                        correct: false
                      },
                      {
                        answer: 'Pico de Orizaba',
                        correct: true
                      },
                      {
                        answer: 'Volcan Matlalcueyetl',
                        correct: false
                      },
                      {
                        answer: 'Cerro Ajusco',
                        correct: false
                      }
                      ]
            },
      //19
      {question: 'which of these people would be the heir apparent of the Dutch throne?',
             answers: [ 
                      {
                        answer: 'Prince of Yellow',
                        correct: false
                      },
                      {
                        answer: 'Prince of Orange',
                        correct: true
                      },
                      {
                        answer: 'Prince of Green',
                        correct: false
                      },
                      {
                        answer: 'Prince of Blue',
                        correct: false
                      }
                      ]
            },
      //20
      {question: 'only two state capitals are found on the Mississippi. One is Baton Rouge. What is the other?',
             answers: [ 
                      {
                        answer: 'Memphis',
                        correct: false
                      },
                      {
                        answer: 'Saint Paul',
                        correct: true
                      },
                      {
                        answer: 'Jackson',
                        correct: false
                      },
                      {
                        answer: 'St. Louis',
                        correct: false
                      }
                      ]
            }
            ]

        },
        {name: "Science",
        icon: "science.png",
        active: false,
        badge: false,
        color: "#428546",
        questions: [ 
      //1
            {question: "that the moon's distance from the Earth varies by about 30,500 miles. What is the average distance?",
             answers: [ 
                      {
                        answer: 'About 238,857 miles',
                        correct: true
                      },
                      {
                        answer: 'About 124,240 miles',
                        correct: false
                      },
                      {
                        answer: 'About 502,280 miles',
                        correct: false
                      },
                      {
                        answer: 'About 1 million miles',
                        correct: false
                      }
                      ]
            },
      //2 
            {question: 'when most heart attacks tend to occur, according to studies and statistics gathered?',
             answers: [ 
                      {
                        answer: '1 to 5 a.m.',
                        correct: false
                      },
                      {
                        answer: '5 to 8 p.m.',
                        correct: false
                      },
                      {
                        answer: '6 to 9 a.m.',
                        correct: true
                      },
                      {
                        answer: '12 to 5 p.m.',
                        correct: false
                      }
                      ]
            },
      //3
            {question: 'what "Petrology" is the study of?',
             answers: [ 
                      {
                        answer: 'Rocks',
                        correct: true
                      },
                      {
                        answer: 'Vegetation',
                        correct: false
                      },
                      {
                        answer: 'Petroleum',
                        correct: false
                      },
                      {
                        answer: 'Pets',
                        correct: false
                      }
                      ]
            },
      //4
      {question: 'which astronomer and mathematician initally developed the idea of "Retrograde Motion"?',
             answers: [ 
                      {
                        answer: 'Carl Sagan',
                        correct: false
                      },
                      {
                        answer: 'Gallileo',
                        correct: false
                      },
                      {
                        answer: 'Copernicus',
                        correct: false
                      },
                      {
                        answer: 'Ptolemy',
                        correct: true
                      }
                      ]
            },
      //5
      {question: 'how the median length of a trapezoid is calculated?',
             answers: [ 
                      {
                        answer: 'It is the average of the two bases',
                        correct: true
                      },
                      {
                        answer: 'It is the difference of the bases',
                        correct: false
                      },
                      {
                        answer: 'It is the difference of the bases squared',
                        correct: false
                      },
                      {
                        answer: 'It is the product of the bases',
                        correct: false
                      }
                      ]
            },
      //6
      {question: 'which computer scientist is best known as the inventor of the World Wide Web?',
             answers: [ 
                      {
                        answer: 'Steve Jobs',
                        correct: false
                      },
                      {
                        answer: 'Grace Hopper',
                        correct: false
                      },
                      {
                        answer: 'William Netscape',
                        correct: false
                      },
                      {
                        answer: 'Tim Berners-Lee',
                        correct: true
                      }
                      ]
            },
      //7
      {question: 'the name of the first aniline dye, discovered by accident in 1856 by a British chemistry student named William Perkin?',
             answers: [ 
                      {
                        answer: 'Orangine',
                        correct: false
                      },
                      {
                        answer: 'Mauveine',
                        correct: true
                      },
                      {
                        answer: 'Magentine',
                        correct: false
                      },
                      {
                        answer: 'Lavenine',
                        correct: false
                      }
                      ]
            },
      //8
      {question: 'the name given to plants whose seeds are enclosed inside the fruit they produce?',
             answers: [ 
                      {
                        answer: 'Deciduous',
                        correct: false
                      },
                      {
                        answer: 'Coniferophyta',
                        correct: false
                      },
                      {
                        answer: 'Gymnosperms',
                        correct: false
                      },
                      {
                        answer: 'Angiosperms',
                        correct: true
                      }
                      ]
            },
      //9
      {question: 'the eyes of this animal, roughly the size of a soccer ball, are the largest on the planet?',
             answers: [ 
                      {
                        answer: 'Large Swordfish',
                        correct: false
                      },
                      {
                        answer: 'Colossal Squid',
                        correct: true
                      },
                      {
                        answer: 'Blue Whale',
                        correct: false
                      },
                      {
                        answer: 'Afircan Elephant',
                        correct: false
                      }
                      ]
            },
      //10
      {question: "what bird has varieties which include the grashopper, reed and marsh? ",
             answers: [ 
                      {
                        answer: 'Warbler',
                        correct: true
                      },
                      {
                        answer: 'Wren',
                        correct: false
                      },
                      {
                        answer: 'Flamingo',
                        correct: false
                      },
                      {
                        answer: 'Duck',
                        correct: false
                      }
                      ]
            },
      //11
      {question: 'this man, considered the Father of Nuclear Physics, is credited with splitting the atom?',
             answers: [ 
                      {
                        answer: 'Sir John Percy',
                        correct: false
                      },
                      {
                        answer: 'Sir Henry Adams',
                        correct: false
                      },
                      {
                        answer: 'Sir Ernest Rutherford',
                        correct: true
                      },
                      {
                        answer: 'Sir William King',
                        correct: false
                      }
                      ]
            },
      //12
      {question: "what the acronym FM on your radio stands for?",
             answers: [ 
                      {
                        answer: 'Fifteenth Modulation',
                        correct: false
                      },
                      {
                        answer: 'Frequency Meter',
                        correct: false
                      },
                      {
                        answer: 'Frequency Modulation',
                        correct: true
                      },
                      {
                        answer: 'Fast Meter',
                        correct: false
                      }
                      ]
            },
      //13
      {question: 'which of these organs filters foreign substances out of the blood?',
             answers: [ 
                      {
                        answer: 'Spleen',
                        correct: true
                      },
                      {
                        answer: 'Pancreas',
                        correct: false
                      },
                      {
                        answer: 'Gall Bladder',
                        correct: false
                      },
                      {
                        answer: "Appendix",
                        correct: false
                      }
                      ]
            },
      //14
      {question: "which planet in our solar system has the shortest day?",
             answers: [ 
                      {
                        answer: 'Jupiter',
                        correct: true
                      },
                      {
                        answer: 'Mars',
                        correct: false
                      },
                      {
                        answer: 'Mercury',
                        correct: false
                      },
                      {
                        answer: 'Neptune',
                        correct: false
                      }
                      ]
            },
      //15
      {question: "oxygen's atomic number?",
             answers: [ 
                      {
                        answer: '8',
                        correct: true
                      },
                      {
                        answer: '2',
                        correct: false
                      },
                      {
                        answer: '11',
                        correct: false
                      },
                      {
                        answer: '40',
                        correct: false
                      }
                      ]
            },
      //16
      {question: 'which of these units of distance is longest?',
             answers: [ 
                      {
                        answer: 'Astronomical unit',
                        correct: false
                      },
                      {
                        answer: 'Light-year',
                        correct: false
                      },
                      {
                        answer: 'Parsec',
                        correct: true
                      },
                      {
                        answer: 'Cubit',
                        correct: false
                      }
                      ]
            },
      //17
      {question: 'which of these is not one of the three periods in the Mesozoic Era?',
             answers: [ 
                      {
                        answer: 'Triassic',
                        correct: false
                      },
                      {
                        answer: 'Jurassic',
                        correct: false
                      },
                      {
                        answer: 'Precambrian',
                        correct: true
                      },
                      {
                        answer: 'Cretaceous',
                        correct: false
                      }
                      ]
            },
      //18
      {question: 'who is credited for coming up with the idea for a working atomic bomb on September 12, 1933, while he was waiting for a red light on Southampton Row in Bloomsbury?',
             answers: [ 
                      {
                        answer: "Enrico Fermi",
                        correct: false
                      },
                      {
                        answer: 'Ernest Rutherford',
                        correct: false
                      },
                      {
                        answer: 'Leo Szilard',
                        correct: true
                      },
                      {
                        answer: 'Neils Bohr',
                        correct: false
                      }
                      ]
            },
      //19
      {question: 'what part of the brain is sometimes referred to as the "Fear Center"?',
             answers: [ 
                      {
                        answer: 'Solitary nucleus',
                        correct: false
                      },
                      {
                        answer: 'Tectum',
                        correct: false
                      },
                      {
                        answer: 'Medullary pyramids',
                        correct: false
                      },
                      {
                        answer: 'Amygdala',
                        correct: true
                      }
                      ]
            },
      //20
      {question: 'which of these vegetables is a perennial?',
             answers: [ 
                      {
                        answer: 'Corn',
                        correct: false
                      },
                      {
                        answer: 'Potato',
                        correct: false
                      },
                      {
                        answer: 'Squash',
                        correct: false
                      },
                      {
                        answer: 'Rhubarb',
                        correct: true
                      }
                      ]
            }
            ]

        }
        
    ]
	
