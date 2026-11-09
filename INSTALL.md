# Install the portable work-tracking kit

The kit is copied into a project once. Each installed copy is that project's fork; there is no upgrade path. Install from a clean kit checkout so the handbook stamp identifies the exact source.

## 1. Confirm the kit and target

Ask for the kit checkout path and target project root if either is unclear. Read the target project's `AGENTS.md` and relevant instructions before planning changes.

From the target root, run:

```text
git status --short --branch
git status --porcelain
```

If Git is unavailable or the target is not a Git repository, stop and ask. If `git status --porcelain` is not empty, show the status and ask the dev what to do. Do not copy files or change the target.

From the kit checkout, check that the source is clean and get its commit:

```text
git status --short --branch
git status --porcelain
git rev-parse HEAD
```

If `git status --porcelain` is not empty, stop and ask. Do not stamp a modified copy with a commit that does not contain those changes.

## 2. Ask for project choices

Before copying anything, ask:

1. Which Project mode should the target use: `prototype` or `defined`?
2. Which area names should appear in the target dashboard? Do not infer area names from the code.
3. Should the commit-message hook be installed: yes or no? Explain that it needs Node in the target environment and removes Copilot `Co-authored-by` trailers from commit messages.

The kit's default Collaboration style is `on`. Preserve an existing target setting; if one does not exist, use `on`.

## 3. Plan the changes and resolve conflicts

Show the dev the complete proposed file list and any existing paths that would be affected. Wait for approval before writing files.

Copy the contents of `template/work-tracking/` into the target's `work-tracking/`, `template/.github/prompts/` into `.github/prompts/`, and `template/.github/instructions/writing-style.instructions.md` into the same path under the target. Replace the dashboard's area placeholder with the names the dev chose, using one area heading and table per name.

Prepare `AGENTS.md` from `template/AGENTS-block.md`: replace the Project mode placeholder with the chosen mode and remove the opening merge-instruction comment. If the target has no `AGENTS.md`, create it from the prepared block. If it already exists, preserve its content and propose a merge; do not replace the file.

The kit does not provide `.github/copilot-instructions.md`. Leave any existing file at that path untouched. If a change there seems necessary, stop and ask before proposing a merge.

Never overwrite an existing destination file. If `work-tracking/`, a prompt, or the writing-style file already exists, compare the conflicting files and ask whether to keep the existing file or propose a merge. Do not delete existing content.

If the dev chose the hook, check that Node is available and inspect the target's `.githooks/commit-msg` and local `core.hooksPath` setting. Copy `template/.githooks/commit-msg` to `.githooks/commit-msg` only if the destination does not exist. Enable it with the target repository's local `core.hooksPath=.githooks` setting only if no conflicting hook path is configured. If a file or setting conflicts, show it and ask; do not overwrite it. Never change global Git configuration. On Unix-like systems, ensure the installed hook is executable.

Do not copy the kit repository's `.gitattributes`, `.gitignore`, root `AGENTS.md`, or `work-tracking/` dogfooding data into the target.

## 4. Fill the handbook stamp and preserve target policy

In the target copy of `work-tracking/handbook.md`, replace the version stamp placeholders with the short 7-character commit hash from the clean kit checkout and the local date in `YYMMDD` format:

```text
Copied from work-tracking-system at <7-character commit> on <YYMMDD>
```

The template's placeholders stay unchanged. Installed files take the target project's own line-ending policy. Follow the target's `.gitattributes` and other repository settings; do not copy the kit's line-ending rules or change global Git configuration.

## 5. Finish

Show the files created or merged, the Project mode and dashboard areas selected, whether the hook was installed, the handbook stamp, and the final target `git status`. Report any conflicts or skipped steps. Do not stage or commit the installation unless the dev separately asks.
