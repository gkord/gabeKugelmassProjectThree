const wineApp = {};

wineApp.wineChoice = {
  red: {
    reflective: [
      {
        varietal: "Bordeaux Blend",
        description:
          "Just like you, there are many layers too unravel in the red wines of Bordeaux. Look for something from the Left Bank and get lost in its complexity.",
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
        img: "./assets/cambriaPinotNoir.png",
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
          "An upbeat wine to match your upbeat mood. Enjoy the fruit froward explosion of flavour that a Zinfandel has to offer when your energy just can't be tamed.",
        img: "./assets/murphyGoodeZinfandel.png",
        alt: "bottle of red wine from California"
      }
    ],
    mellow: [
      {
        varietal: "Merlot",
        description:
          "Merlot is loved for it’s boisterous black cherry flavors, supple tannins, and chocolatey finish. Hits the spot every time.",
        img: "./assets/quailsGateMerlot.png",
        alt: "bottle of red wine from Canada"
      },
      {
        varietal: "Tempranillo",
        description:
          "The most popular grape of Spain for a reason. Drink this one on your own or share a bottle with a small group of friends over a night in.",
        img: "./assets/arinzanoTempranillo.png",
        alt: "bottle of red wine from Spain"
      },
      {
        varietal: "Sangiovese",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/laBracesscaSangiovese.png",
        alt: "bottle of red wine from Italy"
      }
    ],
    adventurous: [
      {
        varietal: "Zinfandel",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/murphyGoodeZinfandel.png",
        alt: "bottle of red wine from California"
      },
      {
        varietal: "Alsacian Pinot Noir",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/hugelAlsacePinotNoir.png",
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
        img: "./assets/langheNebbiolo.png",
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
        img: "./assets/chateauDesJacquesMorgon.png",
        alt: "bottle of red wine from Burgundy"
      }
    ],
    celebratory: [
      {
        varietal: "Cabernet Sauvignon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/silverOakCab.png",
        alt: "bottle of red wine from Califrnia"
      },
      {
        varietal: "Rioja",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/faustinoGranRiserva.png",
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
        img: "./assets/mcmannisMerlot.png.png",
        alt: "bottle of red wine from California"
      },
      {
        varietal: "Sangiovese",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/rossoSangiovese.png",
        alt: "bottle of red wine from Italy"
      },
      {
        varietal: "Cabernet Franc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/fieldingCabFranc.png",
        alt: "bottle of red wine from Canada"
      }
    ],
    angry: [
      {
        varietal: "Shiraz",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/heirloomShiraz.png",
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
        img: "./assets/morganteNero.png",
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
        img: "./assets/girardinPuligny.png",
        alt: "bottle of white wine from Burgundy"
      },
      {
        varietal: "German Riesling",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/egonMullerRiesling.png",
        alt: "bottle of white wine from Germany"
      },
      {
        varietal: "Australian Semillon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/tyrellsSemillon.png",
        alt: "bottle of white wine from Australia"
      }
    ],
    energetic: [
      {
        varietal: "New Zealand Sauvignon Blanc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/nzSauvBlanc.png",
        alt: "bottle of white wine from New Zealand"
      },
      {
        varietal: "Pinot Blanc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/reservePinotBlanc.png",
        alt: "bottle of white wine from Canada"
      },
      {
        varietal: "Southern Rhone Blend",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/chapoutierWhiteRhone.png",
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
        img: "./assets/aloisLagederPinotGrigio.png",
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
        img: "./assets/grecoDiTufo.png",
        alt: "bottle of rwhite wine from Italy"
      },
      {
        varietal: "Assyrtico",
        description:
          "Native to Santorini, Assyrtiko is a rare grape in terms of vineyard area, but is quickly picking up acreage throughout Greece. Noted for its texture, acidity, and minerality.",
        img: "./assets/assyrtiko.png",
        alt: "bottle of white wine from Greece"
      },
      {
        varietal: "Vermentino",
        description:
          "Vermentino is an important white of Sardinia and Tuscany where producers offer both oaked and unoaked styles. With a fuller style and herbaceous flavors, try this when you're up for a departure from the norm.",
        img: "./assets/vermentino.png",
        alt: "bottle of white wine from Italy"
      }
    ],
    gloomy: [
      {
        varietal: "Chardonnay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/bramitoChardonnay.png",
        alt: "bottle of white wine from Italy"
      },
      {
        varietal: "Pinot Gris",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/jPinotGris.png",
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
        img: "./assets/kostaChardonnay.png",
        alt: "bottle of white wine from California"
      },
      {
        varietal: "Viognier",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/cristomViognier.png",
        alt: "bottle of white wine from Oregon"
      },
      {
        varietal: "Moscato",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/cerettoMoscato.png",
        alt: "bottle of white wine from Italy"
      }
    ],
    indifferent: [
      {
        varietal: "Pinot Grigio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/santaMargPinotGrigio.png",
        alt: "bottle of white wine from Italy"
      },
      {
        varietal: "Sauvignon Blanc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/triusSauvBlanc.png",
        alt: "bottle of white wine from Canada"
      },
      {
        varietal: "Dry Riesling",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/vinelandDryRiesling.png",
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
        img: "./assets/cheninBlanc.png",
        alt: "bottle of white wine from South Africa"
      },
      {
        varietal: "Grillo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./assets/grillo.png",
        alt: "bottle of white wine from Italy"
      }
    ]
  },

  other: {
    reflective: [
      {
        varietal: "Franciacorta",
        description:
          "Pop open a bottle of Franciacorta, Italy's version of champagne while you ponder what got you to here.",
        img: "./assets/franciacorta.png",
        alt: "bottle of sparkling wine from Italy"
      }
    ],
    energetic: [
      {
        varietal: "Rosé",
        description: "Self-explanatory. ROSÉ ALL DAY!",
        img: "./assets/whisperingAngel.png",
        alt: "bottle of rosé wine"
      }
    ],
    mellow: [
      {
        varietal: "Port",
        description:
          "Throw on some jazz and chill out with a glass of vintage port to warm your soul.",
        img: "./assets/grahamsPort.png",
        alt: "bottle of wine from Portugal"
      }
    ],
    adventurous: [
      {
        varietal: "New World Sparkling",
        description:
          "Did you know that Canada makes some kickass sparkling wines? If you're looking for an adventure grab a bottle of this lesser known gem from Nova Scotia of all places!",
        img: "./assets/benBridgeSparkling.png",
        alt: "bottle of sparkling wine from Canada"
      }
    ],
    gloomy: [
      {
        varietal: "Champagne",
        description:
          "Who says Champagne is reserved for celebrations? Lift your spirits and treat yourself to something special. You deserve it.",
        img: "./assets/baronChampagne.png",
        alt: "bottle of champagne"
      }
    ],
    celebratory: [
      {
        varietal: "Champagne",
        description:
          "There are other options but lets be honest, there is nothing finer than opening a special bottle of Champagne to celebrate the happy times!",
        img: "./assets/polRogerChampagne.png",
        alt: "bottle of champagne"
      }
    ],
    indifferent: [
      {
        varietal: "Prosecco",
        description:
          "Not sure what to choose? Don't care? Pop open a bottle of Prosecco and leave the decision-making behind. Always a crowd pleaser that hits the spot.",
        img: "./assets/bisolProsecco.png",
        alt: "bottle of prosecco"
      }
    ],
    angry: [
      {
        varietal: "Rosé",
        description:
          "Because only rosé will turn that anger into joy!",
        img: "./assets/whisperingAngel.png",
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