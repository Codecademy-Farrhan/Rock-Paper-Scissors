const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "Please input a valid choice.";
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You won with the secret cheat code!";
  }

  if (userChoice === computerChoice) {
    return "Draw. 🤷";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won. 🥺";
    } else {
      return "You won! 🥳";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won. 🥺";
    } else {
      return "You won! 🥳";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won. 🥺";
    } else {
      return "You won! 🥳";
    }
  }
};

console.log(determineWinner("bomb", getComputerChoice()));