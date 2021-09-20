
let friends = ["Sarah", "Alyx", "Dustin", "Kim", "Sophie"];


function sing () {
  for (let i of friends) {
    let friendRound = document.createElement("div");
    friendRound.className = "friend";
    //let text = friends[i];
    let header = document.createElement("h3");
    let headerText = document.createTextNode(i);
    header.appendChild(headerText);
    friendRound.appendChild(header);
    for (j = 99; j >= 1; --j) {
      let p = document.createElement("p");
      if (j > 2) {
        let verse = `${j} lines of code in the file, ${j} lines of code; ${i} strikes ones out, clears it all out, ${
          j - 1
        } lines of code in the file.`;
        let verseText = document.createTextNode(verse);
        p.appendChild(verseText);
        friendRound.appendChild(p);
      } else if (j === 2) {
        let verse = `${j} lines of code in the file, ${j} lines of code; ${i} strikes ones out, clears it all out, ${
          j - 1
        } line of code in the file.`;
        let verseText = document.createTextNode(verse);
        p.appendChild(verseText);
        friendRound.appendChild(p);
      } else {
        let verse = `${j} line of code in the file, ${j} line of code; ${i} strikes it out, clears it all out, no more lines of code in the file.`;
        let verseText = document.createTextNode(verse);
        p.appendChild(verseText);
        friendRound.appendChild(p);
      }
    }
    document.body.appendChild(friendRound);
}
};
