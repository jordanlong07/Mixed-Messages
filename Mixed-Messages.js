//Fortune Teller Creator
const firstWords = ['Past', 'present', 'future']
const secondWords = ['Good', 'Bad', 'Bleak', 'Rich', 'Lonley', 'Fufilling', 'Sad', 'Happy']
const main = () =>{
    const choice1 = firstWords[Math.floor(Math.random()*firstWords.length)]
    const choice2 = secondWords[Math.floor(Math.random()*secondWords.length)]
    return console.log(`Your ${choice1} is looking ${choice2}`)
}

main()