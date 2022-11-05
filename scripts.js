// {
//     "data": {
//         "_id": "5e966a166a66e65486e244b3",
//         "content": "Chad Flenderman. Just an easy-going black guy who knows the streets--yet he also went to Oxford. So. Just as comfortable on a motorcycle as he is on Air Force One. Oh and he's also the world's leading Egyptologist.",
//         "character": {
//             "_id": "5e93b55f3af44260882e33bc",
//             "firstname": "Toby",
//             "lastname": "Flenderson",
//             "__v": 0
//         },
//         "__v": 0
//     }
// }

fetch('https://www.officeapi.dev/api/quotes/random')
    .then(response => response.json())
    .then(quoteData => {
        const quote = quoteData.data.content;
        const author = quoteData.data.character.firstname + ' ' + quoteData.data.character.lastname;
        
        document.getElementById('quote').innerHTML = quote;
        document.getElementById('author').innerHTML = author;
    }
    );

    