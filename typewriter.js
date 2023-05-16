const sentence = "hello there from lighthouse labs";

const type = function(input) {
  let delay = 0;
  const interval = 50;
  for (const char of input) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += interval;
  }

  //prints space as soon as sentence is done typing
  setTimeout(() => {
    console.log();
  }, (sentence.length * interval));

};

type(sentence);