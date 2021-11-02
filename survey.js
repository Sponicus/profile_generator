const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
  console.log(`Thank you! You're name is: ${answer1}`);
  rl.question(`What's an activity you like doing?`, (answer2) => {
    console.log(`Thank you! You like: ${answer2}`);
    rl.question(`What do you listen to while doing that?`, (answer3) => {
      console.log(`Thank you! You listen to: ${answer3}`);
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer4) => {
        console.log(`Thank you! You listen to: ${answer4}`);
        rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
          console.log(`Thank you! You like to eat: ${answer5}`);
        }) 
      })      
    })
  })
});



////////////END WITH //////////////
rl.question(`What's an activity you like doing?`, (answer2) => {
  console.log(`Thank you! You like: ${answer2}`);
  rl.close();
});