# Portable Work-Tracking Kit

A copy-in set of Markdown files and agent instructions for tracking project work with an AI coding assistant. The kit keeps decisions, evidence, current status, and next steps in the project instead of relying on chat history alone.

It's built for one developer working part time, with long breaks between sessions. Any new chat can pick up where the last one stopped. It's deliberately small: plain Markdown in your repo, no service, no board.

## The 60-second tour

| Part | File | What it's for |
| --- | --- | --- |
| 📋 Dashboard | `work-tracking/dashboard.md` | One page: **Do now**, every work item (WI) with status and priority, and the Inbox |
| 📥 Inbox | Bottom of the dashboard | One line per new idea, bug or question. Sorted later with `/wt-triage` |
| 📄 Topic | `work-tracking/items/WI-NNN-*.md` | The *why* for a bigger item: goal, findings, decisions, evidence |
| ▶️ Resume point | Section in a topic | Where the last chat stopped and what the next one does first |
| 📘 Handbook | `work-tracking/handbook.md` | The rules agents follow. You don't need to read it to use the kit |
| 🏷️ Tracking line | Last line of each agent reply | Says what tracking the agent changed, for example `Tracking: no change` |

The agent keeps these files up to date as it works. You read the dashboard, answer questions and approve changes.

## Who it is for

The kit is for individual developers using an AI coding assistant in a Git-based project. It works with any harness that reads `AGENTS.md`. Its project skills provide `/wt-*` slash commands in both the VS Code Local and Copilot harnesses.

It is best suited to solo projects or projects where the tracking files can be committed with the code. Private tracking inside a shared repository is not designed yet.

## What is included

- A handbook, dashboard, and topic template under `work-tracking/`.
- Optional collaboration guidance and project writing-style instructions.
- Plain Markdown procedures for importing work, status, Inbox triage, and draft critique.
- Five project skills under `.github/skills/` for import, status, triage, critique, and pausing. Each one points to its procedure.
- A zero-dependency check script at `work-tracking/check-tracking.mjs`.
- An optional commit-message hook. It requires Node and removes Copilot `Co-authored-by` trailers.

The import procedure scans only sources selected for that run, leaves source files unchanged, and waits for approval before adding items to tracking. It asks which folders to exclude. For each open-work list it finds, it asks whether to retire that section after filing or keep it as reference.

## Quick start

1. Open your project in VS Code. Start a **new chat** and type:

   ```text
   Follow C:\_DEV\work-tracking-system\INSTALL.md for this workspace.
   ```

   Use your own kit path if it differs. Install from a clean kit checkout. The guide checks your Git status, asks a few setup questions, and shows the planned changes before writing anything. Nothing is installed in your user profile, and nothing is staged or committed.
2. Review and commit the installed files yourself.
3. **Fully quit VS Code** (all windows) and reopen the project. New chats may not see the new instructions and skills until you do.
4. Optional: if the project already has TODOs, a backlog or an old work log, start **another new chat** and run `/wt-import`. A new chat keeps the install conversation out of the import's context, which costs less. See [Which model should I use?](#which-model-should-i-use-and-what-does-it-cost)
5. From then on, start each session with `/wt-status`.

## Commands

| Command | When to use it | Changes files? |
| --- | --- | --- |
| `/wt-status` | Start of a session: where things stand and what to do next | No |
| `/wt-triage` | The Inbox has piled up. Shows one table of recommendations, then asks once | After you approve |
| `/wt-import` | Once per project, or again later for new sources: pulls TODOs, backlogs, issues or old logs into tracking | After you approve, item by item |
| `/wt-pause` | You're stopping mid-task. Writes a Resume point for the next chat | Yes, tracking only |
| `/wt-critique` | Get a devil's-advocate review of a draft prompt, plan or proposal | No |

You start `/wt-import`, `/wt-triage` and `/wt-pause` yourself. The agent won't run them on its own.

## Check tracking

From an installed project root, run `node work-tracking/check-tracking.mjs`. To check this kit's own tracking from the repository root, run `node template/work-tracking/check-tracking.mjs work-tracking`. The optional path names the tracking directory; without it, the script checks the folder containing itself. The checker validates WI anchors and topic links from the dashboard, flags WI rows split from their table by a blank line, and checks inline local Markdown file links in WI topic files. It does not scan `notes/`, resolve heading fragments or reference-style links, or check statuses and pinned-commit line links.

Run the checker regression tests with `node --test test/check-tracking.test.mjs`.

## FAQ

### Why does every reply end with a `Tracking:` line?

It tells you what tracking the agent changed, such as `Tracking: updated WI-003 (next action)` or `Tracking: no change`. It also shows that the project's `AGENTS.md` loaded. If the line is missing, the agent probably isn't reading the kit rules. See [The agent ignores the rules](#the-agent-ignores-the-rules-or-a-slash-command-isnt-found).

### Which model should I use, and what does it cost?

- **For `/wt-import`, pick one named strong model in the model picker.** Don't use Auto or Fusion.
- In testing, Auto twice picked a weaker model.
- In the first real pilot (261112), Fusion Max ran several expensive models. Install plus import cost about **1,356 AI credits**. Cheaper subagents did the scanning, but they cost about 0.2% of that. Most of the cost came from the main model rereading a long conversation over about 120 calls.
- To keep costs down, run import in a new chat, and answer its questions in one sitting when you can.
- Day-to-day commands like `/wt-status` are much lighter. Your plan's model prices decide the actual cost.

### Will it change my files or commit for me?

It changes only tracking files, and only after you approve. It never stages, commits, pushes or deletes without asking. Import leaves your source files untouched. It retires an old to-do list only after a second, separate approval.

### I've been away for weeks. How do I pick up?

Start a new chat and run `/wt-status`. It reads **Do now** on the dashboard and the Resume point of the active item, then says what to do next. You don't need the old chat.

### The agent ignores the rules, or a slash command isn't found

1. Fully quit VS Code (all windows) and reopen the project. Instruction changes often don't reach new chats until you do.
2. Check that `AGENTS.md` contains the kit block and that `.github/skills/wt-*/SKILL.md` exists.
3. As a fallback, ask: "read `.github/skills/wt-status/SKILL.md` and follow it."

### Can I stop a triage or import halfway?

Yes. During one-at-a-time triage, say `pause`. Unanswered lines stay in the Inbox. For any other task, run `/wt-pause` to leave a Resume point. Pausing hasn't been tested end to end yet.

### Does import read my private notes or chat history?

Only the sources you pick at the start. The import report and filed items go in tracked files. **Read the proposed text before you commit**, especially text from ignored notes or past chats. The procedure tells the agent not to quote secrets, credentials or personal data. That isn't a full privacy review.

### What if two chats run at the same time?

It mostly works. Agents reread the dashboard before editing, and the Inbox is append-only. Nothing locks the files, so check `git diff` if two chats both changed tracking.

### How do I upgrade or remove the kit?

- **Upgrade:** There's no upgrade path. Each installed copy is a fork. The line `Copied from work-tracking-system at <commit>` in the installed handbook tells you which kit version you have. Copy improvements by hand.
- **Remove:** Delete the files the install added:
  - `work-tracking/`
  - `.github/skills/wt-*/`
  - The kit's writing-style instruction file
  - The kit block in `AGENTS.md`
  - If you chose the hook: `.githooks/commit-msg`, then unset it with `git config --unset core.hooksPath`
  - Optionally, the `temp-tool-output/` line in `.gitignore`

## Out of scope

- There is no upgrade path. An installed copy is a fork; improvements must be hand-copied when wanted. The one exception: install offers to remove `wt-*` prompt files left by an earlier kit version.
- Private tracking within a shared repository is deferred until that mode is designed.
- The kit is not a hosted service, shared task database, or visual board.
- The full consistency checker, including Closed lookup rows, statuses, and pinned-commit line links, is not included yet.
