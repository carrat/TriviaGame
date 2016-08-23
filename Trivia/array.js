// JavaScript Document
<script>
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
        {name: "Art",
        icon: "art.png",
        active: false,
        badge: false,
        color: "#ce2630",
        questions: [ 

            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: true
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: true
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: true
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
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

            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: true
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: true
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: true
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
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

            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: true
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: true
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: true
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
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

            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: true
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: true
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: false
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            },
            {question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt in magna nec accumsan. Proin in tristique dui, consectetur suscipit erat?',
             answers: [ 
                      {
                        answer: 'Teddy Roosevelt',
                        correct: false
                      },
                      {
                        answer: 'Bob Dole',
                        correct: false
                      },
                      {
                        answer: 'Roger Staubach',
                        correct: true
                      },
                      {
                        answer: 'F. Scott Fitzgerald',
                        correct: false
                      }
                      ]
            }
            ]

        }
    ]
	
	</script>