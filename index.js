// code your solution here
function saturdayFun (fisrtPar = "roller-skate") {
    return `This Saturday, I want to ${fisrtPar}!`
}

saturdayFun("go for swimming.");
console.log(saturdayFun("bathe my dog"));

const mondayWork = function (parDefault = "go to the office") {
    return `This Monday, I will ${parDefault}.`
}

mondayWork()
console.log(mondayWork("work from home"));

// const wrapAdjective = function (visualFlair = "*") {
//     (function (defpar = "special") {
//         return 'You are ${visualFlair}';
//     })
// }

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}