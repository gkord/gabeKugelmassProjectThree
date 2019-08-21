const wineApp = {};

// wineApp.images = {
//     cabSauv: {
//         img: ''
//     },
//     pinotNoir: {
//         img: ''
//     },
//     sangiovese: {
//         img: ''
//     }
// }

wineApp.choices = {
    happy: {
        wine: [
            'Champagne',
            'Cabernet Sauvignon',
            'Sangiovese'
        ]
    },
    sad: {
        wine: [
            'Pinot Noir',
            'Nebbiolo',
            'Gamay'
        ]
    },
    neutral: {
        wine: [
            'Merlot',
            'Syrah',
            'Valpolicella'
        ]
    }
}

$(function(){

    const getRandomNumberFromArray = function (array) {
        const randomNum = Math.floor(Math.random() * array.length);
        return array[randomNum];
    };
    //listen for submit of user choices
    $('form').on('submit', function(event) {
        event.preventDefault();
    //create variable to store user mood choice
    const userMood = $('input[name=mood]:checked').val()
    console.log(userMood);
    //select appropriate array from wine object based on user input
    const wineArray = (wineApp.choices[userMood]);
    console.log(wineArray);
    //display results on the screen
    $('.result').html(`<h2 class="choice">${wineArray.wine}</h2>`);
    // disable submit button after entering
    $(`input[type=submit]`).attr('disabled', 'disabled');
    });
    //reset the entire page when reset button is clicked
    $('form').on('reset', function() {
        //hard refresh page
        location.reload(true);
    });
});