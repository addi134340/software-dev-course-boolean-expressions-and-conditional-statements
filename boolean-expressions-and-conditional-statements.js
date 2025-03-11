/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasMagicAmulet = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village") {
  if (hasMap) {
    console.log("You find your way to the village.");
  } else {
    const choiceTwo = readline.question("On your way to the village, you find a cave, do you enter?");
  
    if (choiceTwo === "yes" && hasSword && hasTorch) {
      console.log("You pull out your sword and torch and proceed with caution."); 

    if (hasMagicAmulet) {
      const choiceThree = readline.question("The Magic Amulet around your neck begins to glow. Do you touch it or ignore it?"); 

      if (choiceThree === "touch it") {
        console.log("Infront of you a rock disappears, revealing a room full of treasures. After a bit more exploring you decide to leave the cave. You turn around and continue down the path. After a few days, you reach the village.");
      } else {
        console.log("You decide not to pay any attention to it. After a bit more exploring you decide to leave the cave. You turn around and continue down the path. After a few days, you reach the village.");
      }
    }
  } else if (choiceTwo === "yes" && (!hasSword || !hasTorch)) {
    console.log("You don't have the right equipment. You turn around and continue down the path. After a few days, you reach the village.");
  } else {
      console.log("You decided to skip the cave and continue down the path. You turn around and continue down the path. After a few days, you reach the village.")
    }
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/