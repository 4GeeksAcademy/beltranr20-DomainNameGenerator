const generator = () => {
  let pronoun = ["his", "their", "her", "our", "my"];
  let adj = ["inspiring", "dull", "arrogant", "honorable", "imaginative"];
  let nouns = ["ball", "car", "watch", "tea", "pizza"];
  let end = [".com", ".org", ".us", ".gov", ".co"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < nouns.length; c++) {
        for (let d = 0; d < end.length; d++) {
          let domainNames = pronoun[a] + adj[b] + nouns[c] + end[d];
          console.log(domainNames);
        }
      }
    }
  }
};
console.log(generator());
