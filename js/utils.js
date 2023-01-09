function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
      rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
      rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
      rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
  }
  
function checkForCharacterCollision({
  characters,
  player,
  characterOffset = { x: 0, y: 0 }
}) {
  player.interactionAsset = null
  // monitor for character collision
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i]

    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {
          ...character,
          position: {
            x: character.position.x + characterOffset.x,
            y: character.position.y + characterOffset.y
          }
        }
      })
    ) {
      player.interactionAsset = character
      break
    }
  }
}

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

function stuurMail(){
  let emailBericht = {
      naam: document.getElementById('naam').value,
      email: document.getElementById('email').value,
      bericht: document.getElementById('bericht').value
  }

  fetch("/flask", {
      method: 'POST',
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(emailBericht)
  })
  .then(handleErrors)
  .then(response => {
    document.querySelector('#contactFormBox').style.display = 'none';
    document.querySelector('#contactSuccesBox').style.display = 'block';
    })
  .catch(error => {
      console.log(error);
  });
}