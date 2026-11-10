# Install the portable work-tracking kit

Run this guide from a chat in the target project. The open workspace is the target. The kit checkout is the folder that contains this file. If you can't tell where that is, ask for it, defaulting to `C:\_DEV\work-tracking-system`.

The kit is copied into a project once. Each installed copy is that project's fork; there is no upgrade path. The one exception: install offers to remove `wt-*` prompt files left by an earlier kit version (see step 3). Install from a clean kit checkout so the handbook stamp identifies the exact source.

## 1. Confirm the kit and target

If the open workspace is the kit checkout itself, or has more than one root folder, stop and ask which project is the target. Read the target project's `AGENTS.md` and relevant instructions before planning changes.

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

1. If the target's `AGENTS.md` does not already set `Project mode:`, which mode should it use: `prototype` or `defined`? Preserve an existing value and do not ask again.
2. Which area names should appear in the target dashboard? Do not infer area names from the code.
3. Should the commit-message hook be installed: yes or no? Explain that it needs Node in the target environment and removes Copilot `Co-authored-by` trailers from commit messages.
4. If the target has a writing-style instruction, does the dev want the installed kit files adapted to it? Recommend no: kit rules govern tracking files. If the dev chooses adaptation, show the proposed edits first and change only installed copies, never the kit source.

The kit's default Collaboration style is `on`. If the target's `AGENTS.md` already sets `Collaboration style:`, preserve its value and do not ask again. Otherwise use `on`.

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

Copy the contents of `template/work-tracking/` into the target's `work-tracking/`, each skill folder in `template/.github/skills/` into `.github/skills/`, and the kit writing-style instructions into `.github/instructions/`. Skills provide the `/wt-*` slash commands in both the Local and Copilot harnesses. Replace the dashboard's area placeholder with the names the dev chose, using one area heading and table per name. Delete the commented example row.

Check whether the target already has a writing-style instruction file. If it does not, install the kit file as `.github/instructions/writing-style.instructions.md` with `applyTo: "**"` so it covers the whole project. If one already exists, keep it unchanged and install the kit file as `.github/instructions/wt-writing-style.instructions.md` with `applyTo: "work-tracking/**"` so it only covers the tracking files.

In the copied dashboard, replace `Updated <YYMMDD>` with the local install date in `YYMMDD` format.

Prepare `AGENTS.md` from `template/AGENTS-block.md`: replace the Project mode placeholder with the chosen mode and remove the opening merge-instruction comment. Apply the matching rule in Target types. Preserve all existing content; do not replace the file.

The installed kit writing-style file follows the rule above. Never change the kit's handbook, icons, or other kit content to match the target style unless the dev chose adaptation in step 2.

The kit does not provide `.github/copilot-instructions.md`. Leave any existing file at that path untouched. If a change there seems necessary, stop and ask before proposing a merge.

Never overwrite an existing destination file. If `work-tracking/` already exists, compare the conflicting files and ask whether to keep the existing file, rename the kit file, or propose a merge. For a writing-style conflict, keep the target file and use the alternate kit filename described above. Do not delete existing content.

Skill name conflicts: a kit skill conflicts when the target already has a skill with the same name. Check `.github/skills/`, `.claude/skills/`, and `.agents/skills/` for a `wt-<name>/` folder or a `SKILL.md` whose `name` is `wt-<name>`. This check is best-effort: VS Code recognizes other skill folders too, and when two folders hold a skill with the same name, both appear with no documented winner. Never overwrite or edit the existing skill. Rename the kit skill to an unused name, such as `wt-tracking-status`, changing the folder name and the `name` field together; if they differ, the skill silently fails to load. Add a one-line mapping to the installed AGENTS block, such as `Skill command: /wt-status is installed as /wt-tracking-status.`, and report each rename in step 5.

Old kit prompts: if the target has `.github/prompts/wt-*.prompt.md` files from an earlier kit version, propose removing them, because they duplicate the skills' slash commands. Report each file as before → after → why, and remove nothing without the dev's approval. This is the only upgrade step the kit supports.

Edits to existing project documents, including `README.md`, old work logs, and notes, are allowed when needed to adapt an existing tracking system. Include proposed edits in the plan. Do not replace whole files; report each changed file as before → after → why.

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

Then check whether the project has TODO/FIXME comments, backlog or task files, a `CHANGELOG` Unreleased section, or open GitHub issues. Report what is present and what could not be checked. If any are present, offer to run `/wt-import` in a fresh chat, which keeps this install's context small. Do not run it without the dev's approval.

When an old tracking system exists, offer the separate migration proposal in the import procedure. Do not freeze old logs or repoint project links without explicit approval.

Do not create a WI row for the installation itself.
