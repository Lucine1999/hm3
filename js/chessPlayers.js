// 0 1, 0 2, 0 3, 0 4
// 1 2, 1 3, 1 4
// 2 3, 2 4
// 3 4

let chessPlayers = 4;
let finishedMatches = [
    [0, 1],
    [1, 2],
    [2, 0],
];




const solution = (playersCount, matches) => {
    let restMatches = [];

    for (let i = 0; i < playersCount; i++) {
        for (let j = i + 1; j < playersCount; j++) {
            if (
                !(
                    JSON.stringify(matches).includes(JSON.stringify([i, j])) ||
                    JSON.stringify(matches).includes(JSON.stringify([j, i]))
                )
            ) {
                restMatches.push([i, j]);
            }
        }
    }
    return restMatches;
};

console.log(solution(chessPlayers, finishedMatches));
