# Install the portable work-tracking kit

The kit is copied into a project once. Each installed copy is that project's fork; there is no upgrade path. Install from a clean kit checkout so the handbook stamp identifies the exact source.

## 1. Confirm the kit and target

Ask for the kit checkout path and target project root if either is unclear. Read the target project's `AGENTS.md` and relevant instructions before planning changes. The current workspace is the target when the guide was started through `/wt-install`.

From the target root, run:

```text
git status --short --branch
git status --porcelain
```

If the target is not a Git repository, follow the **No Git** flow in Target types before continuing. If `git status --porcelain` is not empty, show the status and ask whether to stop or continue with the install files kept separate for their own commit. If continuing, preserve all existing changes and staged entries; do not stage or commit anything. Resolve path conflicts under Target types before proceeding.

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

## Target types

- **New or empty project:** If the dev has no dashboard area names, offer one area named `General`.
- **Existing project without `AGENTS.md`:** Create it from the prepared kit block.
- **Existing project with `AGENTS.md`:** Append the prepared block as its own section at the end. Keep any existing `Project mode:` or `Collaboration style:` value and omit that line from the appended block so no duplicate is added. Show the complete merged file and wait for approval before writing it.
- **No Git:** Follow these steps in order, getting the dev's approval for each step before doing it:
  1. Run a secrets check for `.env` files, keys, tokens, and credentials files. Report matching paths without printing secret contents. Ask how to handle any matches before proceeding.
  2. Propose a `.gitignore` based on the project contents. If one already exists, show a proposed merge; never overwrite it.
  3. After approval, run `git init`.
  4. Show the files proposed for the initial commit and wait for approval before staging or creating it. Commit the existing project before installing the kit. Do not include kit files in this first commit.
- **Uncommitted changes:** Show the status, including staged changes. Ask whether to stop or continue. If continuing, preserve existing changes and keep installation changes unstaged and separate so they can be committed on their own. Never stage or commit without separate approval.

## 3. Plan the changes and resolve conflicts

Show the dev the complete proposed file list and any existing paths that would be affected. Wait for approval before writing files.

Copy the contents of `template/work-tracking/` into the target's `work-tracking/`, the five remaining files in `template/.github/prompts/` into `.github/prompts/`, and `template/.github/instructions/writing-style.instructions.md` into the same path under the target. Do not copy `prompts/wt-install.prompt.md`; it is a user prompt for the kit developer. Replace the dashboard's area placeholder with the names the dev chose, using one area heading and table per name.

In the copied dashboard, replace `Updated <YYMMDD>` with the local install date in `YYMMDD` format.

Prepare `AGENTS.md` from `template/AGENTS-block.md`: replace the Project mode placeholder with the chosen mode and remove the opening merge-instruction comment. Apply the matching rule in Target types. Preserve all existing content; do not replace the file.

The kit does not provide `.github/copilot-instructions.md`. Leave any existing file at that path untouched. If a change there seems necessary, stop and ask before proposing a merge.

Never overwrite an existing destination file. If `work-tracking/`, a prompt, or the writing-style file already exists, compare the conflicting files and ask whether to keep the existing file or propose a merge. Do not delete existing content.

If the dev chose the hook, check that Node is available and inspect the target's `.githooks/commit-msg` and local `core.hooksPath` setting. Copy `template/.githooks/commit-msg` to `.githooks/commit-msg` only if the destination does not exist. Enable it with the target repository's local `core.hooksPath=.githooks` setting only if no conflicting hook path is configured. If a file or setting conflicts, show it and ask; do not overwrite it. Never change global Git configuration. On Unix-like systems, ensure the installed hook is executable.

Do not copy the kit repository's `.gitattributes`, `.gitignore`, root `AGENTS.md`, or `work-tracking/` dogfooding data into the target.

## 4. Fill the handbook stamp and preserve target policy

In the target copy of `work-tracking/handbook.md`, replace the version stamp placeholders with the short 7-character commit hash from the clean kit checkout and the local date in `YYMMDD` format:

```text
Copied from work-tracking-system at <7-character commit> on <YYMMDD>
```

The template's placeholders stay unchanged. Installed files take the target project's own line-ending policy. Follow the target's `.gitattributes` when present. Without a `.gitattributes`, follow the target's existing files and `core.autocrlf` setting. Do not copy the kit's line-ending rules or change global Git configuration.

## 5. Finish

Show the files created or merged, the Project mode and dashboard areas selected, whether the hook was installed, the handbook stamp, and the final target `git status`. Report any conflicts or skipped steps. Do not stage or commit the installation unless the dev separately asks.

Then check whether the project has TODO/FIXME comments, backlog or task files, a `CHANGELOG` Unreleased section, or open GitHub issues. Report what is present and what could not be checked. If any are present, offer to run the import procedure. Do not run it without the dev's approval.

Do not create a WI row for the installation itself.
