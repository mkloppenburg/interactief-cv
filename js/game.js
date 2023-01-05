const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 70) {
  charactersMap.push(charactersMapData.slice(i, 70 + i))
}
console.log(charactersMap)

const boundaries = []
const offset = {
  x: -100,
  y: -720
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const character1Img = new Image()
character1Img.src = 'img/character1.png'

const character2Img = new Image()
character2Img.src = 'img/character2.png'

const character3Img = new Image()
character3Img.src = 'img/character3.png'

const character4Img = new Image()
character4Img.src = 'img/character4.png'

const character5Img = new Image()
character5Img.src = 'img/character5.png'

const characterKoeImg = new Image()
characterKoeImg.src = 'img/characterkoe.png'

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026: 1e encounter bij huis1: werk
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: character1Img,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['Maarten?... ja daar heb ik wel over gehoord!', 
          'Nauwkeurig, analytisch, leergierig, betrokken, dat zijn vier woorden die hem goed omschrijven.',
        'Hij staat altijd klaar om even te helpen. Als ik een probleem heb, dan weet hij er wel raad mee.']
        })
      )
    }
    // 1027: 2e encounter bos: persoonlijk
    else if (symbol === 1027) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: character2Img,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['Maarten zeg je? Die ken ik al van jongs af aan. Ik heb hem zien groeien van een 8-bit kindje, tot de grote man die hij nu is! ...', 
          'Hij fiets hierboven regelmatig door het bos. Of hij loopt er met zijn kinderen. ...',
        'Of hij zit een dorpje verderop op het terras of in de bioscoop. Gek op filmpjes kijken die man. Ook sleutelt hij graag met computers en gamen is hij altijd wel voor in! ...',
      'Een echte levensgenieter en familieman!']
        })
      )
    }
    // 1028: 3e encounter plateau: diplomas en certs
    else if (symbol === 1028) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: character3Img,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['Best warm zo\'n winterjas, ik krijg \'m maar niet uit! Hoe dan ook... Maarten? Ja, die heeft al best wat diplomas en certificaten. ...', 
          'MBO ICT... HBO Theologie... Heel wat cursussen richting IT gedaan... En pas nog, bij een bootcamp van Young Capital certificaten voor EXIN Agile Scrum, ISTQB Foundation en Microsoft Azure Fundamentals behaald!',
          'Misschien een keer zijn CV bekijken? Die staat volgens mij hiernaast...'
        ]
        })
      )
    }
    // 1029: 4e encounter huis2: werkervaring
    else if (symbol === 1029) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: character4Img,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['Of hij werkervaring heeft? Jazeker wel. ...', 
          'Op dit moment werkt hij voor Young Capital. Daar doet hij een IT Traineeship richting DevOps. Na zijn MBO-ICT had hij een HBO Theologie opleiding gevolgd, maar hij kwam er na die opleiding toch achter dat de IT echt zijn passie heeft. ...',
          'Daarvoor is hij een tijdje full-time ouder geweest. Vonden ze daar belangrijk, dat er iemand thuis was voor hun kinderen en het gaf ruimte om te kijken wat hij nou écht wil. Ook heeft hij allerlei cursussen gevolgd in die tijd, daardoor weet hij ook zeker dat hij verder wil in de IT!',
          'Daarvoor deed hij o.a. support voor zo\'n bedrijf dat van die computerdingen maakt, van die routers, switches en dat soort dingen. Die waren altijd erg blij met hem weet ik, hij was er zelfs nog een keer werknemer van het jaar.',
          'Daarvoor heeft hij ook nog wel wat andere baantjes gehad, maar mijn geheugen begint mij nu wat in de steek te laten... Het is ook alweer even geleden he? ...',
          'Misschien een keer zijn CV bekijken? Die staat volgens mij hiernaast...'
        ]
        })
      )
    }
    // 1030: 5e encounter dok: contact
    else if (symbol === 1030) {
        characters.push(
        new Character({
            position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
            },
            image: character5Img,
            frames: {
            max: 4,
            hold: 60
            },
            scale: 3,
            animate: true,
            dialogue: ['Of ik weet waar je Maarten kan bereiken? Oef... ik heb zo zijn nummer niet, maar. ... ', 'Als je hier een berichtje achterlaat, zal ik zijn accountmanager even vragen!']
        })
        )
    }
    // 1031: 6e encounter koe: die zegt moooo?
    else if (symbol === 1031) {
        characters.push(
          new Character({
            position: {
              x: j * Boundary.width + offset.x,
              y: i * Boundary.height + offset.y
            },
            image: characterKoeImg,
            frames: {
              max: 2,
              hold: 60
            },
            scale: 3,
            dialogue: ['Moooooo..... waarom praat je met een koe? ...', 'Beetje gek, vind je zelf ook niet?']
          })
        )
      }

    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = 'img/game-map.png'

const playerDownImage = new Image()
playerDownImage.src = 'img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = 'img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = 'img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = 'img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

const movables = [
  background,
  ...boundaries,
  ...characters
]
const renderables = [
  background,
  ...boundaries,
  ...characters,
  player,
]

function animate() {
  const animationId = window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })

  let moving = true
  player.animate = false

  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})