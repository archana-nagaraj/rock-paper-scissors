
      // Create an array of the three game choices (Rock, Paper, or Scissors)
      var gameChoices = ['r', 'p', 's'];

      // Create variables to hold the number of wins, losses, and ties. They start at 0.
      var wins = 0;
      var losses = 0;
      var ties = 0;

      for (var i = 0; i < 3; i++) {
        // Randomly choose a choice from the gameChoices array. This is the computer's turn.
        var computerTurn =
          gameChoices[Math.floor(Math.random() * gameChoices.length)];

        // Collect the user's response and convert to lower case. This is the user's turn.
        var userTurn = prompt('Enter r, p, or s to play!');
        userTurn = userTurn.toLowerCase();

        // Create the game logic to run if the user chooses a valid game choice
        if (userTurn === 'r' || userTurn === 'p' || userTurn === 's') {
          alert('The computer chose ' + computerTurn);

          // Win/lose conditions:
          if (
            (userTurn === 'r' && computerTurn === 's') ||
            (userTurn === 's' && computerTurn === 'p') ||
            (userTurn === 'p' && computerTurn === 'r')
          ) {
            wins++;
            alert("You've won " + wins + ' time(s)!');
          } else if (userTurn === computerTurn) {
            ties++;
            alert("You've tied " + ties + ' time(s).');
          } else {
            losses++;
            alert("You've lost " + losses + ' time(s).');
          }
        } else {
          alert("Please choose 'r', 'p' or 's'!");
        }
      }

      // When the game is over, alert the final total to the user. We can use the \n character to make a line break.
      alert(
        'Total wins: ' +
          wins +
          '\nTotal ties: ' +
          ties +
          '\nTotal losses: ' +
          losses
      );
   