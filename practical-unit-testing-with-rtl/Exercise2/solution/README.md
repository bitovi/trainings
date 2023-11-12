# TIC TAC TOE REQUIREMENTS

## Gameplay: 
The game starts with X going first. Once X clicks a square, it become O's turn. 

Once a player has won (has three in a row), the game should: 
1. display a congratulations message indicating the winner 
2. update the scoreboard appropriately 
3. disable the game board until it is reset. 

When the "reset game" button is clicked, the scoreboard and player names should be uneffected. The board should be cleared, and it should be X's turn to begin the game. 

## Misc: 
User can input names for each player. Those names will be displayed on each turn.


Acceptance Criteria: 

In `App.test.tsx`, Write a suite of tests using RTL and Jest that will simulate an entire game of tic tac toe being played. 

Bonuses:
Write tests for individual components. 
Write tests for the tic tac toe hook. 

Out of Scope: 
Testing that the game logic (ie: win checking) works correctly. 

You may alter the markup however you see fit for the purposes of improved testing. 