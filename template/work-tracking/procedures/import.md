# Import work

Scan approved sources for work that is not already tracked. Keep source files unchanged. Ask which sources to scan at the start of every run.

## Before the scan

1. Read the project's `AGENTS.md`, the tracking handbook, dashboard, and any relevant topic.
2. Ask which of these sources to scan. The dev may choose any subset:
   - Markdown task and backlog files.
   - Work logs.
   - `TODO` and `FIXME` code comments, grouped by source file.
   - The `Unreleased` section of `CHANGELOG`.
   - GitHub issues and pull requests.
   - Past chat sessions.
   - Git history.
3. Confirm access to each selected source. Mark inaccessible sources as unavailable. Don't silently replace them with another source.
4. Ask before accessing private or remote sources when the harness needs extra access.

## Scan and report

1. Read selected sources without modifying them.
2. Find candidate work. Exclude items already tracked or clearly completed, unless the dev asks otherwise.
3. Create `temp-tool-output/<YYMMDD-HHmm>-import/` and save `import-report.md` there.
4. For each candidate, include:
   - A short title and description.
   - The source and a precise location, such as a path and line, issue URL, chat date, or commit.
   - Evidence label: Documented, Inferred from source, Observed here, From past chat, or Unknown.
   - Proposed tag: `[idea]`, `[research]`, `[build]`, or `[question]`.
   - Possible duplicate, or `None found`.
   - Blank dev fields for decision and destination.
5. List sources that were unavailable or only partly scanned. State any evidence limits.
6. Show the report path and summarize the candidates. Ask the dev to mark each candidate `Keep`, `Drop`, or `Edit`, and choose `WI row` or `Inbox` for each kept item.

Do not add candidates to tracking until the dev returns the marked report or otherwise approves each item and destination.

## File approved items

1. Re-read the marked report and confirm each kept item has a destination.
2. Re-read the destination dashboard and topic before editing. Keep other edits.
3. Add each approved item to the dev's chosen WI row or Inbox. Use the tracking handbook's rules for IDs, tags, priorities, and links.
4. Leave every source file untouched. The report in `temp-tool-output/` is the working copy; do not copy it into tracking.
5. Run the handbook's Completion check and report the sources scanned, unavailable sources, approved items filed, and report path.
