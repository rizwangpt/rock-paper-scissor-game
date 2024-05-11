var player1 = "Rock";
var player2 = "Scissor";
if (player1 === player2) {
    console.log("It's a Tie !");
}
else if ((player1 === "Rock" && player2 === "Scissor") || (player1 === "Scissor" && player2 === "Paper") || (player1 === "Rock" && player2 === "Paper")) {
    console.log("Player 1 wins !");
}
else {
    console.log("Player 2 Wins !");
}
// let player1: string = "Rock";
// let player2: string= "Rock";
// if (player1===player2){
//     console.log("It's a Tie !");
// } else if((player1 === "Rock" && player2 === "Scissor") || (player1 === "Scissor" && player2 === "Paper") || (player1 === "Rock" && player2 === "Paper")) {
//     console.log("Player 1 wins !");
// } else{
//     console.log("Player 2 Wins !");
// }
