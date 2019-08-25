const wineApp = {};

wineApp.wineChoice = {
    red: {
        reflective: [
            {
                varietal: 'Cabernet Sauvignon',
                description: 'A robust red that is generally full-bodied, dry, and abundant in tannin. This wine pairs well with your reflective mood due to its complexity. There are many layers too unravel. Look for something from the Left Bank of Bordeaux, Napa Valley, California or Tuscany, Italy.',
                img: './assets/bordeaux.png'
            },
            { 
                varietal: 'Burgundy Pinot Noir',
                description: 'The crown jewel of red wines. Burgundy Pinot Noir comes in many styles from light and delicate to full-bodied and rich. Try something from the Cote-de-Nuits appellation and take some time to be present in the moment and savour the  notes of black currant, cherry, fresh red fruits, and earthy mushroom and spice.',
                img: './assets/jadot.png'
            },
            {
                varietal: 'Chateauneuf du Pape',
                description: 'A classic blend comprised of predominantly Grenache, with Syrah and Mourvedre making up the remainder. This wine from France’s Southern Rhone region offers great complexity and a nice departure from the norm. Full bodied and intense, this is a wine pairs perfectly with your contemplative mood and offers generous notes of blackberry, dark cherry, liquorice and spice.',
                img: './assets/pegau.png'
            }  
        ],
        energetic: [
            {
                varietal: 'New World Pinot Noir',
                description: 'Pinot Noir from the New World is often light to medium bodied and chalk full of ripe red fruit and racy acidity. Pair something from lively and vibrant from New Zealand, California or Ontario when you\'re feeling energetic and it will pay off in spades!' 
            },
            {
                varietal: 'Frappato',
                description: 'Often overlooked, this regional grape of Sicily bursts with aromas of sweet red berries and incense spice. Best served slightly chilled and'
            },
            {
                varietal: 'Zinfandel',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ],
        mellow: [
            {
                varietal: 'Merlot',
                description: 'Merlot is loved for it’s boisterous black cherry flavors, supple tannins, and chocolatey finish.'
            },
            {
                varietal: 'Tempranillo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Sangiovese',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ],
        adventurous: [
            {
                varietal: 'Zinfandel',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Alsacian Pinot Noir',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Aglianico',
                description: 'Aglianico is king of the Southern Italian wines. A wine with incredible quality, and a unique savory flavor that’s best enjoyed aged.'
            }  
        ],
        gloomy: [
            {
                varietal: 'Nebbiolo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Valpolicella',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Gamay',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                url: '/assets/chateau-des-jacques-morgon_grande.png'
            }  
        ],
        celebratory: [
            {
                varietal: 'Cabernet Sauvignon',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/silver-oak-cab.png'
            },
            {
                varietal: 'Rioja',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/faustino-gran-riserva.png'
            },
            {
                varietal: 'Super Tuscan',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/solaia.png'
            }  
        ],
        indifferent: [
            {
                varietal: 'Merlot',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Sangiovese',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Cabernet Franc',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ],
        angry: [
            {
                varietal: 'Shiraz',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Meritage',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Nero D\'Avola',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ]
    },

    white: {
        reflective: [
            {
                varietal: 'Burgundy Chardonnay',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img:'./assets/girardin-puligny.png'
            },
            {
                varietal: 'German Riesling',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/egon-muller-riesling.png'
            },
            {
                varietal: 'Australian Semillon',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/tyrells-semillon.png'
            }  
        ],
        energetic: [
            {
                varietal: 'New Zealand Sauvignon Blanc',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/nz-sauv-blanc.png'
            },
            {
                varietal: 'Pinot Blanc',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/Reserve_PinotBlanc.png'
            },
            {
                varietal: 'Southern Rhone Blend',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/chapoutier-white-rhone.png'
            }  
        ],
        mellow: [
            {
                varietal: 'Unoaked Chardonnay',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/chablis.png'
            },
            {
                varietal: 'Pinot Grigio',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/alois-lageder-pinot-grigio.png'
            },
            {
                varietal: 'Arneis',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/arneis.png'
            }  
        ],
        adventurous: [
            {
                varietal: 'Greco di Tufo',
                description: 'Campania wine region in southern Italy. refreshing, crisp white wines are known for their aromatic notes of lemons, pears and toasted almonds and a lingering mineral finish.'
            },
            {
                varietal: 'Assyrtico',
                description: 'Native to Santorini, Assyrtiko is a rare grape in terms of vineyard area, but is quickly picking up acreage throughout Greece. Noted for its texture, acidity, and minerality.'
            },
            {
                varietal: 'Vermentino',
                description: 'Vermentino is an important white of Sardinia and Tuscany where producers offer both oaked and unoaked styles.With a fuller style and herbaceous flavors'
            }  
        ],
        gloomy: [
            {
                varietal: 'Chardonnay',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Pinot Gris',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Chateauneuf du Pape',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ],
        celebratory: [
            {
                varietal: 'Chardonnay',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Viognier',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Moscato',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ],
        indifferent: [
            {
                varietal: 'Pinot Grigio',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Sauvignon Blanc',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: './assets/trius-sauv-blanc.png'
            },
            {
                varietal: 'Dry Riesling',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ],
        angry: [
            {
                varietal: 'Albarinho',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Chenin Blanc',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                varietal: 'Grillo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }  
        ]
    },

    other: {
        reflective: [
            {
                varietal: 'Franciacorta',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        ],
        energetic: [
            {
                varietal: 'Prosecco',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        mellow: [
            {
                varietal: 'Port',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        adventurous: [
            {
                varietal: 'Sparkling',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        gloomy: [
            {
                varietal: 'Champagne',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        celebratory: [
            {
                varietal: 'Champagne',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        indifferent: [
            {
                varietal: 'New World Sparkling',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        angry: [
            {
                varietal: 'Champagne',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    }
}
//SAVE SMOOTHSCROLL PLUGIN AS A FUNCTION
wineApp.smoothScroll= function(){
    $('a').smoothScroll({
        speed: 800
    });
}

//FUNCTION TO GET RANDOM SELECTION FROM ARRAY
    const getRandomNumberFromArray = function (array) {
        const randomNum = Math.floor(Math.random() * array.length);
        return array[randomNum];
    };

//FUNCTION TO PICK WINE BASED ON USER CHOICE
    wineApp.getWine = function(){
    $('.result').hide();
    //listen for submit of user choices
    $('.submitMood').on('click', function(event) {
        event.preventDefault();
    //create variable to store user mood choice
    wineApp.userMood = $('input[name=mood]:checked').val()
        $('.result').show();
    });
    
    //listen for submit of user wine preference
    $('.submitWine').on('click', function(event){
        event.preventDefault();
    //create variable to store user wine choice
        const userWine = $('input[name=drink]:checked').val()
    //select appropriate object from wineChoices object based on user choice
        const wineObject = wineApp.wineChoice[userWine];
        const wineArray = wineObject[wineApp.userMood];
        const wineSelection = getRandomNumberFromArray(wineArray);
        //display results on the screen
        $('.result').html(`<h2 class="choice">${wineSelection.varietal}</h2>`);
        $('.result').append(`<p>${wineSelection.description}</p>`)
        $('.result').append(`<figure><img src="${wineSelection.img}"></figure>`)
        $('.result').append(`<button class="reset">Choose a different mood</button>`);
        $('.result').on('click', '.reset', function () {
            $('form').trigger('reset');
            $("html, body").animate({ scrollTop: $('.questionOneContainer').offset().top }, 1000);
        });
    })
}

//APP INIT FUNCTION
    wineApp.init = function(){
        wineApp.smoothScroll();
        wineApp.getWine();
    }

//DOC READY
    
    $(function () {
        wineApp.init();
    });