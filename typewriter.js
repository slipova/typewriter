const sentence = "hello there from lighthouse labs";

for (const char in (sentence)) {

  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, 50 * char);
};

setTimeout(() => {
  process.stdout.write("\n");
}, 50 * sentence.length);