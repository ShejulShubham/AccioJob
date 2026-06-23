// ============================================
// MATRIX PRACTICE - Run with: node matrix_practice.js
// ============================================

const assert = require("assert");

// ─────────────────────────────────────────────
// Q1: Rotate Matrix 90° Clockwise
// Input:  [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// ─────────────────────────────────────────────
function rotateMatrix(matrix) {
  // YOUR CODE HERE
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  for (let i = 0; i < columns; i++) {
    result[i] = [];
    for (let j = 0; j < rows; j++) {
      result[i][j] = matrix[rows - 1 - j][i];
    }
  }

  return result;
}

// ─────────────────────────────────────────────
// Q2: Spiral Boundary Traversal (no center)
// Input:  [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4]
// ─────────────────────────────────────────────
function spiralBoundary(matrix) {
  // YOUR CODE HERE
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  for (let i = 0; i < columns; i++) {
    result.push(matrix[0][i]);
  }

  if (rows > 2) {
    for (let k = 1; k < rows - 1; k++) {
      result.push(matrix[k][columns - 1]);
    }
  }

  if (rows > 1) {
    for (let j = columns - 1; j >= 0; j--) {
      result.push(matrix[rows - 1][j]);
    }
  }

  if (rows > 2) {
    for (let k = rows - 2; k > 0; k--) {
      result.push(matrix[k][0]);
    }
  }

  return result;
}

// ─────────────────────────────────────────────
// Q3: Full Spiral Traversal (with center)
// Input:  [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// ─────────────────────────────────────────────
function spiralFull(matrix) {
  // YOUR CODE HERE
}

// ============================================
// TEST RUNNER — do not modify below this line
// ============================================

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const CYAN = "\x1b[36m";
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runTest(label, fn, input, expected) {
  try {
    const result = fn(JSON.parse(JSON.stringify(input))); // deep clone input
    if (deepEqual(result, expected)) {
      console.log(`${GREEN}✓ PASS${RESET} ${label}`);
      console.log(`       Output: ${JSON.stringify(result)}`);
    } else {
      console.log(`${RED}✗ FAIL${RESET} ${label}`);
      console.log(`       Got:      ${JSON.stringify(result)}`);
      console.log(`       Expected: ${JSON.stringify(expected)}`);
    }
  } catch (e) {
    console.log(`${RED}✗ ERROR${RESET} ${label}: ${e.message}`);
  }
}

const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`\n${BOLD}${CYAN}══════════════════════════════${RESET}`);
console.log(`${BOLD}${CYAN}   Matrix Practice Problems   ${RESET}`);
console.log(`${BOLD}${CYAN}══════════════════════════════${RESET}\n`);

// console.log(`${BOLD}Q1 — Rotate 90° Clockwise${RESET}`);
// runTest("3×3 matrix", rotateMatrix, matrix3x3, [[7,4,1],[8,5,2],[9,6,3]]);
// runTest("2×2 matrix", rotateMatrix, [[1,2],[3,4]], [[3,1],[4,2]]);
// runTest("1×1 matrix", rotateMatrix, [[5]], [[5]]);

console.log(`\n${BOLD}Q2 — Spiral Boundary (no center)${RESET}`);
runTest("3×3 matrix", spiralBoundary, matrix3x3, [1, 2, 3, 6, 9, 8, 7, 4]);
runTest("1×4 matrix", spiralBoundary, [[1, 2, 3, 4]], [1, 2, 3, 4]);

// console.log(`\n${BOLD}Q3 — Full Spiral Traversal${RESET}`);
// runTest("3×3 matrix", spiralFull, matrix3x3, [1,2,3,6,9,8,7,4,5]);
// runTest("4×4 matrix", spiralFull, [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]);
// runTest("1×1 matrix", spiralFull, [[42]], [42]);

console.log("");
