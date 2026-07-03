#!/usr/bin/env node
/* Growth Engine skill installer — no dependencies.
   Usage:
     npx github:Jeff-Kazzee/growth-engine            install all skills to ~/.claude/skills
     ... -- --dest <dir>                             install somewhere else (e.g. your Zo Skills/ folder)
     ... -- --skills growth-review,opportunity-radar install a subset
     ... -- --list                                   show available skills
*/
const fs = require("fs");
const path = require("path");
const os = require("os");

const root = path.join(__dirname, "..");
const skillsSrc = path.join(root, "skills");
const args = process.argv.slice(2);

function flag(name) {
  const i = args.indexOf(name);
  return i === -1 ? null : (args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true);
}

const all = fs.readdirSync(skillsSrc).filter(function (d) {
  return fs.existsSync(path.join(skillsSrc, d, "SKILL.md"));
});

if (args.includes("--list")) {
  console.log("Available skills:");
  all.forEach(function (s) { console.log("  " + s); });
  process.exit(0);
}

const pick = flag("--skills");
const chosen = typeof pick === "string"
  ? pick.split(",").map(function (s) { return s.trim(); }).filter(function (s) { return all.includes(s); })
  : all;

if (chosen.length === 0) {
  console.error("No matching skills. Run with --list to see what is available.");
  process.exit(1);
}

let dest = flag("--dest");
if (!dest || dest === true) dest = path.join(os.homedir(), ".claude", "skills");
dest = path.resolve(String(dest));

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  fs.readdirSync(src, { withFileTypes: true }).forEach(function (e) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  });
}

console.log("Growth Engine installer");
console.log("Target: " + dest);
console.log("");
chosen.forEach(function (s) {
  copyDir(path.join(skillsSrc, s), path.join(dest, s));
  console.log("  installed " + s);
});
console.log("");
console.log("Done — " + chosen.length + " skill(s) installed.");
console.log('Next: tell your assistant "set up my growth engine".');
console.log("Zo Computer: re-run with --dest pointing at your Zo Skills/ folder (or upload the skill folders there).");