const wineApp = {};

wineApp.wineChoice = {
  red: {
    reflective: [
      {
        varietal: "Cabernet Sauvignon",
        description:
          "A robust red that is generally full-bodied, dry, and abundant in tannin. This wine pairs well with your reflective mood due to its complexity. There are many layers too unravel. Look for something from the Left Bank of Bordeaux, Napa Valley, California or Tuscany, Italy.",
        img: "./assets/bordeaux.png",
        alt: "bottle of red wine from Bordeaux"
      },
      {
        varietal: "Burgundy Pinot Noir",
        description:
          "The crown jewel of red wines. Burgundy Pinot Noir comes in many styles from light and delicate to full-bodied and rich. Try something from the Cote-de-Nuits appellation and take some time to be present in the moment and savour the notes of black currant, cherry, fresh red fruits, and earthy mushroom and spice.",
        img: "./assets/jadot.png",
        alt: "bottle of red wine from Burgundy"
      },
      {
        varietal: "Chateauneuf du Pape",
        description:
          "A classic blend comprised of predominantly Grenache, with Syrah and Mourvedre making up the remainder. This wine from France’s Southern Rhone region offers great complexity and a nice departure from the norm. Full bodied and intense, this is a wine pairs perfectly with your contemplative mood and offers generous notes of blackberry, dark cherry, liquorice and spice.",
        img: "./assets/pegau.png",
        alt: "bottle of red wine from France"
      }
    ],
    energetic: [
      {
        varietal: "New World Pinot Noir",
        description:
          "Pinot Noir from the New World is often light to medium bodied and chalk full of ripe red fruit and racy acidity. Try something lively and vibrant from New Zealand, California or Ontario when you're feeling energetic.",
        img: "./assets/cambria-pinot-noir.png",
        alt: "bottle of red wine from California"
      },
      {
        varietal: "Frappato",
        description:
          "Often overlooked, this regional grape of Sicily bursts with aromas of sweet red berries and incense spice. Best served slightly chilled.",
        img: "./assets/frappato.png",
        alt: "bottle of red wine from Italy"
      },
      {
        varietal: "Zinfandel",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/murphy-goode-zinfandel.png",
        alt: "bottle of red wine from California"
      }
    ],
    mellow: [
      {
        varietal: "Merlot",
        description:
          "Merlot is loved for it’s boisterous black cherry flavors, supple tannins, and chocolatey finish.",
        img: "./assets/quails-gate-merlot.png",
        alt: "bottle of red wine from Canada"
      },
      {
        varietal: "Tempranillo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/arinzano-tempranillo.png",
        alt: "bottle of red wine from Spain"
      },
      {
        varietal: "Sangiovese",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/la-bracessca-sangiovese.png",
        alt: "bottle of red wine from Italy"
      }
    ],
    adventurous: [
      {
        varietal: "Zinfandel",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/murphy-goode-zinfandel.png",
        alt: "bottle of red wine from California"
      },
      {
        varietal: "Alsacian Pinot Noir",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/hugel-alsace-pinot-noir.png",
        alt: "bottle of red wine from France"
      },
      {
        varietal: "Aglianico",
        description:
          "Aglianico is king of the Southern Italian wines. A wine with incredible quality, and a unique savory flavor that’s best enjoyed aged.",
        img: "./assets/aglianico.png",
        alt: "bottle of red wine from Italy"
      }
    ],
    gloomy: [
      {
        varietal: "Nebbiolo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/langhe-nebbiolo-montegrilli.png",
        alt: "bottle of red wine from Italy"
      },
      {
        varietal: "Valpolicella",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/valpolicella.png",
        alt: "bottle of red wine from Italy"
      },
      {
        varietal: "Gamay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/chateau-des-jacques-morgon.png",
        alt: "bottle of red wine from Burgundy"
      }
    ],
    celebratory: [
      {
        varietal: "Cabernet Sauvignon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/silver-oak-cab.png",
        alt: "bottle of red wine from Califrnia"
      },
      {
        varietal: "Rioja",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/faustino-gran-riserva.png",
        alt: "bottle of red wine from Spain"
      },
      {
        varietal: "Super Tuscan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/solaia.png",
        alt: "bottle of red wine from Italy"
      }
    ],
    indifferent: [
      {
        varietal: "Merlot",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/McManis_Merlot.png",
        alt: "bottle of red wine from California"
      },
      {
        varietal: "Sangiovese",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/rosso-sangiovese.png",
        alt: "bottle of red wine from Italy"
      },
      {
        varietal: "Cabernet Franc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/fielding-cab-franc.png",
        alt: "bottle of red wine from Canada"
      }
    ],
    angry: [
      {
        varietal: "Shiraz",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/Heirloom-McLaren-Vale-Shiraz.png",
        alt: "bottle of red wine from Australia"
      },
      {
        varietal: "Grenache",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/grenache.png",
        alt: "bottle of red wine from Spain"
      },
      {
        varietal: "Nero D'Avola",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/morgante-nero-d-avola.png",
        alt: "bottle of red wine from Italy"
      }
    ]
  },

  white: {
    reflective: [
      {
        varietal: "Burgundy Chardonnay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/girardin-puligny.png",
        alt: "bottle of white wine from Burgundy"
      },
      {
        varietal: "German Riesling",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/egon-muller-riesling.png",
        alt: "bottle of white wine from Germany"
      },
      {
        varietal: "Australian Semillon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/tyrells-semillon.png",
        alt: "bottle of white wine from Australia"
      }
    ],
    energetic: [
      {
        varietal: "New Zealand Sauvignon Blanc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/nz-sauv-blanc.png",
        alt: "bottle of white wine from New Zealand"
      },
      {
        varietal: "Pinot Blanc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/Reserve_PinotBlanc.png",
        alt: "bottle of white wine from Canada"
      },
      {
        varietal: "Southern Rhone Blend",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/chapoutier-white-rhone.png",
        alt: "bottle of white wine from France"
      }
    ],
    mellow: [
      {
        varietal: "Unoaked Chardonnay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/chablis.png",
        alt: "bottle of white wine from France"
      },
      {
        varietal: "Pinot Grigio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/alois-lageder-pinot-grigio.png",
        alt: "bottle of white wine from Italy"
      },
      {
        varietal: "Arneis",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/arneis.png",
        alt: "bottle of white wine from Italy"
      }
    ],
    adventurous: [
      {
        varietal: "Greco di Tufo",
        description:
          "Campania wine region in southern Italy. refreshing, crisp white wines are known for their aromatic notes of lemons, pears and toasted almonds and a lingering mineral finish.",
        img: "./assets/greco-di-tufo.png",
        alt: "bottle of rwhite wine from Italy"
      },
      {
        varietal: "Assyrtico",
        description:
          "Native to Santorini, Assyrtiko is a rare grape in terms of vineyard area, but is quickly picking up acreage throughout Greece. Noted for its texture, acidity, and minerality.",
        img: "./assets/assyrtiko-santo-wines.png",
        alt: "bottle of white wine from Greece"
      },
      {
        varietal: "Vermentino",
        description:
          "Vermentino is an important white of Sardinia and Tuscany where producers offer both oaked and unoaked styles.With a fuller style and herbaceous flavors",
        img: "./assets/Vermentino-Nuovo.png",
        alt: "bottle of white wine from Italy"
      }
    ],
    gloomy: [
      {
        varietal: "Chardonnay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/bramito-chardonnay.png",
        alt: "bottle of white wine from Italy"
      },
      {
        varietal: "Pinot Gris",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/j-pinot-gris.png",
        alt: "bottle of white wine from California"
      },
      {
        varietal: "Gewurtztraminer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/gewurtz.png",
        alt: "bottle of white wine from France"
      }
    ],
    celebratory: [
      {
        varietal: "Chardonnay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/kosta-chardonnay.png",
        alt: "bottle of white wine from California"
      },
      {
        varietal: "Viognier",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/cristom-viognier.png",
        alt: "bottle of white wine from Oregon"
      },
      {
        varietal: "Moscato",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/ceretto_moscato.png",
        alt: "bottle of white wine from Italy"
      }
    ],
    indifferent: [
      {
        varietal: "Pinot Grigio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/santa-marg-pinot-grigio.png",
        alt: "bottle of white wine from Italy"
      },
      {
        varietal: "Sauvignon Blanc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/trius-sauv-blanc.png",
        alt: "bottle of white wine from Canada"
      },
      {
        varietal: "Dry Riesling",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/vineland-dry-riesling.png",
        alt: "bottle of white wine from Canada"
      }
    ],
    angry: [
      {
        varietal: "Albaririño",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/albariño.png",
        alt: "bottle of white wine from Spain"
      },
      {
        varietal: "Chenin Blanc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/Simonsig-Chenin-Blanc-2.png",
        alt: "bottle of white wine from South Africa"
      },
      {
        varietal: "Grillo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/zagra-grillo.png",
        alt: "bottle of white wine from Italy"
      }
    ]
  },

  other: {
    reflective: [
      {
        varietal: "Franciacorta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/franciacorta.png",
        alt: "bottle of sparkling wine from Italy"
      }
    ],
    energetic: [
      {
        varietal: "Rosé",
        description: "Self-explanatory. ROSÉ ALL DAY!",
        img: "./assets/Whispering-Angel.png",
        alt: "bottle of rosé wine"
      }
    ],
    mellow: [
      {
        varietal: "Port",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/graham-s-2016-vintage-port.png",
        alt: "bottle of wine from Portugal"
      }
    ],
    adventurous: [
      {
        varietal: "New World Sparkling",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/ben-bridge-sparkling.png",
        alt: "bottle of sparkling wine from Canada"
      }
    ],
    gloomy: [
      {
        varietal: "Champagne",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/baron-de-rothschild-brut.png",
        alt: "bottle of champagne"
      }
    ],
    celebratory: [
      {
        varietal: "Champagne",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/pol-roger-champagne.png",
        alt: "bottle of champagne"
      }
    ],
    indifferent: [
      {
        varietal: "Prosecco",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/bisol-prosecco.png",
        alt: "bottle of prosecco"
      }
    ],
    angry: [
      {
        varietal: "Rosé",
        description:
          "Because rosé will turn that anger into joy!",
        img: "./assets/Whispering-Angel.png",
        alt: "bottle of rosé wine"
      }
    ]
  }
};
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
        $('.result').append(`<p>${wineSelection.description}</p>`);
        $('.result').append(`<figure><img src="${wineSelection.img}" alt="${wineSelection.alt}"></figure>`);
        $('.result').append(`<div class="buttonContainer"><button class="newMood"><h3>Choose a different mood</h3></button></div>`);
        $('.buttonContainer').append(`<button class="reset"><h3>Reset</h3></button>`);
        $('.result').on('click', '.newMood', function () {
            $('form').trigger('reset');
            $("html, body").animate({ scrollTop: $('.questionOneContainer').offset().top }, 1000);
        });
        $('.reset').on('click', function() {
            location.reload(true);
        });
    });
};

//APP INIT FUNCTION
    wineApp.init = function(){
        wineApp.smoothScroll();
        wineApp.getWine();
    };

//DOC READY
    
    $(function () {
        wineApp.init();
    });