function rockPaperScissors(anInt = 3 ** 3) {
  const rock = 'rock', paper = 'paper', scissors = 'scissors', anArrayClosure = [];
  for (let i = anInt; i > 0; i--) {
    anArrayClosure.push([
      (i > 18 ? rock : (
        i > 9 ? paper : scissors)), // fine
      ((i % 9 === 0) || (i % 9 === 8) || (i % 9 === 7) ? rock : (
        (i % 9 === 6) || (i % 9 === 5) || (i % 9 === 4) ? paper : scissors)),
      ((i % 3 === 0) ? rock : (
        (i % 3 === 2) ? paper : scissors))
      ]);
  }
  return anArrayClosure;
}


console.log(rockPaperScissors(3));
