# Import work

Scan approved sources for work that is not already tracked. Keep source files unchanged. Ask which sources to scan at the start of every run.

## Before the scan

1. Read the project's `AGENTS.md`, the tracking handbook, dashboard, and any relevant topic.
2. Ask which of these sources to scan. The dev may choose any subset:
   - Markdown task and backlog files.
   - Work logs.
   - `TODO` and `FIXME` code comments, grouped by source file.
   - TODO/FIXME markers quoted inside Markdown documents as `[research]` candidates.
   - The `Unreleased` section of `CHANGELOG`.
   - GitHub issues and pull requests.
   - Past chat sessions. Search by repository name and remote URL as well as folder path, since a moved or copied repository has a different path.
   - Git history.
3. Confirm access to each selected source. Mark inaccessible sources as unavailable. Don't silently replace them with another source.
4. Ask before accessing private or remote sources when the harness needs extra access.
5. Read previous reports under `work-tracking/notes/*-import/`. Skip candidates already marked `Filed` or `Rejected`; candidates marked `Left for later` may be reconsidered.

## Scan and report

1. Read selected sources without modifying them.
2. Find candidate work. Exclude items already tracked or clearly completed, unless the dev asks otherwise.
3. Create `work-tracking/notes/<YYMMDD-HHmm>-import/` and save `import-report.md` there. Keep the report and candidate history in this folder.
   Do not quote secrets, credentials, or personal data in the report.
4. For each candidate, include:
   - A short title and description.
   - The source and a precise location, such as a path and line, issue URL, chat date, or commit.
   - Evidence label: Documented, Inferred from source, Observed here, From past chat, or Unknown.
   - Proposed tag: `[idea]`, `[research]`, `[build]`, or `[question]`.
   - Possible duplicate, or `None found`.
   - Decision state: `Pending`, `Filed`, `Rejected`, or `Left for later`.
   - Destination for filed items, or a reason for rejected items.
5. List sources that were unavailable or only partly scanned. State any evidence limits.
6. Show the report to the dev before it is first committed. Give the report path and summarize the candidates. Ask the dev to mark each candidate `Keep`, `Drop`, `Left for later`, or `Edit`, and choose `WI row` or `Inbox` for each kept item. Save all candidate states in the report, including filed, rejected, and left-for-later candidates.

Do not add candidates to tracking until the dev returns the marked report or otherwise approves each item and destination.

## File approved items

1. Re-read the marked report and confirm each kept item has a destination. Record every outcome in the report: `Filed`, `Rejected` with reason, or `Left for later`.
2. Re-read the destination dashboard and topic before editing. Keep other edits.
3. Add each approved item to the dev's chosen WI row or Inbox. Use the tracking handbook's rules for IDs, tags, priorities, and links.
4. Leave every source file untouched. Keep the report in `work-tracking/notes/<YYMMDD-HHmm>-import/`.
5. Update the dashboard's Import status block with sources reviewed, filed/rejected/left counts, and a link to the report.
6. Run the handbook's Completion check and report the sources scanned, unavailable sources, approved items filed, and report path.

## Migrate an existing tracking system (proposal)

After an import from an existing tracking system, propose these changes as a separate follow-up. Do not make them without the dev's explicit approval:

1. Add a banner to the top of the old log: `Frozen <YYMMDD>. Tracking moved to work-tracking/dashboard.md. Import status: <link>`.
2. Repoint `AGENTS.md` and `README.md` links from the old tracker to the new dashboard.
3. Keep the old log and its history in place. The kit becomes the sole active tracking system.
4. Show each proposed document edit as before, after, and why. Include every approved changed file in the final report.
