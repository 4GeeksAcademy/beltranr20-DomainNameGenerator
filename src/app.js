const generator = () => {
  let pronoun = ["his", "their", "her", "they", "them"];
  let adj = ["awful", "bright", "agreeable", "calm", "faithful"];
  let nouns = ["tower", "beach", "ocean", "resturant", "ice cream"];
  let end = [".com", ".net", ".edu", ".gov"];

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
