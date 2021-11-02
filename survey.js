const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
  rl.question(`What's an activity you like doing?`, (answer2) => {
    rl.question(`What do you listen to while doing that?`, (answer3) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer4) => {
        rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
          rl.question(`Which sport is your absolute favourite?`, (answer6) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer7) => {
              console.log(`Hello! My name is ${answer1}! I really like ${answer2}. Sometimes I find myself listening to ${answer3} while I do it. My favorite meal of the day is ${answer4}! More so when it is ${answer5}. My absolute favorite sport is ${answer6}. My hidden superpower is ${answer7}, but don't tell anyone ok?`)
              rl.close();
            }) 
          }) 
        }) 
      })      
    })
  })
});
