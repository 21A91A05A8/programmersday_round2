 let userScore = 0;
    let computerScore = 0;

    const choices = ["rock", "paper", "scissors"];

    function computerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

    function play(userChoice) {
      const computer = computerChoice();
      highlightComputerChoice(computer); 
      const result = determineWinner(userChoice, computer);
      updateScore(result);
      displayResult(userChoice, computer, result);
    }

    function highlightComputerChoice(choice) {
      
      const previousComputerChoice = document.querySelector(".computer-choice");
      if (previousComputerChoice) {
        previousComputerChoice.classList.remove("computer-choice");
      }
       const computerChoiceElement = document.getElementById(`${choice}-img`);
      if (computerChoiceElement) {
        computerChoiceElement.classList.add("computer-choice");
      }
    }

    function determineWinner(user, computer) {
      if (user === computer) {
        return "It's a tie!";
      } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
      ) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
    }

    function updateScore(result) {
      const userScoreElement = document.getElementById("user-score");
      const computerScoreElement = document.getElementById("computer-score");

      if (result === "You win!") {
        userScore++;
      } else if (result === "Computer wins!") {
        computerScore++;
      }
      userScoreElement.textContent = `Your Score: ${userScore}`;
      computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    }

    function displayResult(user, computer, result) {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `You chose ${user}, computer chose ${computer}. ${result}`;
    }
