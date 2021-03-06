function rockPaperScissors(anInt = 27, cut = 0) {
  const rock = 'rock', paper = 'paper', scissors = 'scissors', anArrayClosure = [];
  for (let i = 27; i > 0; i--) {
    anArrayClosure.push([ // try and keep up, array of three nested ternary assignments
      (i > 18 ? rock : ( // first check => second check making three to six evals before return not including loop
        i > 9 ? paper : scissors)), // fine
      ((i % 9 === 0) || (i % 9 === 8) || (i % 9 === 7) ? rock : ( // mod 9 || ... upto two less. can refactor to var - 1 and - 2
        (i % 9 === 6) || (i % 9 === 5) || (i % 9 === 4) ? paper : scissors)), // is mod === 0 for upto two less leaving only the falsy case
      ((i % 3 === 0) ? rock : (
        (i % 3 === 2) ? paper : scissors)) // is it mod two or one?
      ]);
  }if (anInt !== 27) return anArrayClosure.slice(cut, anInt);
  return anArrayClosure; // I'm decending to push in the right final order if all are displayed if else output needs further
}

function time(){return Date.now()}

const logIt = console.log(
  time() + '\n',
  rockPaperScissors(26), '\n',
  time() + '\n Seem to be getting 1 millisecond results.'
  );
  
logIt;
