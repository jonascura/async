const sentence = "hello there from lighthouse labs";

const type = function(input) {
  let x = 0;
  for (const char of input) {
    setTimeout(() => {
      process.stdout.write(char);
    }, x);
    x += 50;
  }

  //prints space as soon as sentence is done typing
  setTimeout(() => {
    console.log();
  }, (sentence.length * 50));

};

type(sentence);