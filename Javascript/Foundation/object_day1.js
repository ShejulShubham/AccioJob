let string = "find out number of alphabets";

function Alphabets(str) {
  const freq = new Array(26).fill(0);

  for (let ch of str.toLowerCase()) {
    if (ch >= "a" && ch <= "z") {
      freq[ch.charCodeAt(0) - 97]++;
    }
  }

  return freq.join(" ");
}

//----------------------------------------
function findString(A, B, C) {
  let a = A.split("");

  let b = B.split("");

  let c = C.split("");

  let current = "a";

  while (true) {
    if (current === "a") {
      if (a.length === 0) return "A";

      current = a.shift();
    } else if (current === "b") {
      if (b.length === 0) return "B";

      current = b.shift();
    } else if (current === "c") {
      if (c.length === 0) return "C";

      current = c.shift();
    }
  }
}
