import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkerPath = path.join(repoRoot, "template", "work-tracking", "check-tracking.mjs");
const fixturePath = path.join(repoRoot, "test", "fixtures", "broken-topic-link", "work-tracking");

test("reports a broken local link from a topic file", () => {
  const result = spawnSync(process.execPath, [checkerPath, fixturePath], { encoding: "utf8" });

  assert.equal(result.status, 1, `${result.stdout}\n${result.stderr}`);
  assert.match(result.stderr, /broken local link "missing\.md"/);
});
