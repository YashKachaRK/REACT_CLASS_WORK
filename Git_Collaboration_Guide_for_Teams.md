# Git Collaboration Guide for Student Teams

## Complete Guide for Working in Groups of Three

This guide covers everything you need to know about using Git and GitHub for collaborative projects in teams of three students.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Setting Up a Central Repository](#setting-up-a-central-repository)
3. [Adding Collaborators](#adding-collaborators)
4. [Cloning the Repository](#cloning-the-repository)
5. [Branching Strategy](#branching-strategy)
6. [Daily Workflow](#daily-workflow)
7. [Stashing Changes](#stashing-changes)
8. [Pull Requests](#pull-requests)
9. [GitHub Issues](#github-issues)
10. [Merging Changes](#merging-changes)
11. [Rebasing](#rebasing)
12. [Resolving Conflicts](#resolving-conflicts)
13. [Rollback and Recovery](#rollback-and-recovery)
14. [Team Update Scenarios](#team-update-scenarios)
15. [Best Practices](#best-practices)
16. [Troubleshooting](#troubleshooting)
17. [Common Scenarios](#common-scenarios)

---

## Getting Started

### Prerequisites

Before starting, ensure all team members have:

- [ ] Git installed on their computer
- [ ] GitHub account created
- [ ] Git configured with name and email

**Configure Git (if not done):**

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Verify Git installation:**

```bash
git --version
```

---

## Setting Up a Central Repository

### Step 1: Create Repository on GitHub

**One team member (Team Lead) should:**

1. Go to https://github.com/
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the repository details:
   - **Repository name:** `team-project-react-app` (or your project name)
   - **Description:** "React Web Development Course Project"
   - **Visibility:** Choose **Private** (recommended for assignments) or **Public**
   - **Initialize repository:**
     - ✅ Check "Add a README file"
     - ✅ Check "Add .gitignore" → Select "Node"
     - ✅ Check "Choose a license" → Select "MIT" (optional)
4. Click **"Create repository"**

**Repository is now created!** 🎉

### Step 2: Initial Setup (Team Lead)

**Clone the repository locally:**

```bash
# Navigate to your desired directory
cd Desktop
# or
cd Documents

# Clone the repository
git clone https://github.com/YOUR_USERNAME/team-project-react-app.git

# Navigate into the project
cd team-project-react-app
```

**Create initial project structure:**

```bash
# Create React app (if needed)
npx create-react-app .
# or if already created
npm install

# Make initial commit
git add .
git commit -m "Initial commit: Project setup"
git push origin main
```

---

## Adding Collaborators

### Method 1: Adding Collaborators via GitHub (Recommended)

**Team Lead should:**

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top menu)
3. Click **"Collaborators"** in the left sidebar
4. Click **"Add people"** button
5. Enter GitHub usernames or email addresses of your teammates
6. Click **"Add [username] to this repository"**
7. Select permission level: **Write** (allows push/pull)
8. Click **"Add [username]"**

**Your teammates will receive an email invitation.**

**Teammates should:**

1. Check email for invitation
2. Click **"Accept invitation"** link
3. Or go to: https://github.com/notifications
4. Accept the collaboration invitation

### Method 2: Using GitHub Organizations (Advanced)

For multiple projects, consider creating a GitHub Organization:

1. Go to https://github.com/organizations/new
2. Create organization (e.g., "Team-React-2024")
3. Add all team members
4. Create repositories under the organization

---

## Cloning the Repository

### For Team Members (After Being Added)

**Each team member should:**

```bash
# Navigate to desired directory
cd Desktop

# Clone the repository
git clone https://github.com/TEAM_LEAD_USERNAME/team-project-react-app.git

# Navigate into project
cd team-project-react-app

# Verify connection
git remote -v
# Should show:
# origin  https://github.com/TEAM_LEAD_USERNAME/team-project-react-app.git (fetch)
# origin  https://github.com/TEAM_LEAD_USERNAME/team-project-react-app.git (push)
```

**Install dependencies:**

```bash
npm install
```

---

## Branching Strategy

### Recommended Branch Structure

For a team of three, use this branching strategy:

```
main (production-ready code)
├── develop (integration branch)
    ├── feature/login-page (Student 1)
    ├── feature/navigation (Student 2)
    └── feature/dashboard (Student 3)
```

### Creating Branches

**Each team member should work on their own feature branch:**

```bash
# Make sure you're on main branch and it's up to date
git checkout main
git pull origin main

# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Example branches:
# Student 1: git checkout -b feature/login-page
# Student 2: git checkout -b feature/navigation
# Student 3: git checkout -b feature/dashboard
```

**Verify you're on the correct branch:**

```bash
git branch
# Current branch will have an asterisk (*)
# * feature/login-page
```

**Push your branch to GitHub:**

```bash
# First time pushing a new branch
git push -u origin feature/your-feature-name

# Subsequent pushes
git push
```

---

## Daily Workflow

### Standard Daily Workflow

**Every day, follow this workflow:**

#### 1. Start of Day - Get Latest Changes

```bash
# Switch to main branch
git checkout main

# Pull latest changes from GitHub
git pull origin main

# Switch back to your feature branch
git checkout feature/your-feature-name

# Merge main into your branch (to get latest updates)
git merge main
```

#### 2. Make Your Changes

```bash
# Work on your code
# Edit files, add features, fix bugs

# Check what files changed
git status

# See what changed in files
git diff
```

#### 3. Commit Your Changes

```bash
# Stage specific files
git add src/components/Login.js
git add src/components/Login.css

# Or stage all changes
git add .

# Commit with descriptive message
git commit -m "Add login form with validation"

# Push to your branch
git push origin feature/your-feature-name
```

#### 4. End of Day - Push Your Work

```bash
# Make sure all changes are committed
git status

# If there are uncommitted changes:
git add .
git commit -m "Complete login page styling"

# Push to GitHub
git push origin feature/your-feature-name
```

---

## Stashing Changes

### What is Stashing?

**Stashing** temporarily saves your uncommitted changes so you can switch branches or pull updates without committing incomplete work.

### When to Use Stash

- ✅ You have uncommitted changes but need to switch branches
- ✅ You need to pull updates but have work in progress
- ✅ You want to test something quickly on another branch
- ✅ You're not ready to commit but need a clean working directory

### Basic Stash Commands

```bash
# Stash current changes
git stash

# Stash with a descriptive message
git stash save "Work in progress on login form"

# View all stashes
git stash list

# Apply the most recent stash (keeps stash)
git stash apply

# Apply and remove the most recent stash
git stash pop

# Apply a specific stash
git stash apply stash@{1}

# Delete a stash
git stash drop stash@{0}

# Delete all stashes
git stash clear
```

### Common Stash Scenarios

#### Scenario 1: Switch Branches with Uncommitted Work

```bash
# You're working on feature/login-page
# But need to quickly check something on main

# Stash your changes
git stash save "Login form validation in progress"

# Switch to main
git checkout main

# Do your work on main
# ... make changes or check code ...

# Switch back to your feature branch
git checkout feature/login-page

# Restore your stashed changes
git stash pop
```

#### Scenario 2: Pull Updates with Uncommitted Changes

```bash
# You have uncommitted changes
# But teammate pushed important updates

# Stash your changes
git stash

# Pull latest updates
git pull origin main

# Restore your changes
git stash pop

# Resolve any conflicts if they occur
```

#### Scenario 3: Stash Specific Files

```bash
# Stash only specific files
git stash push -m "Login component changes" src/components/Login.js

# Stash everything except staged files
git stash --keep-index

# Stash including untracked files
git stash -u
```

### Stash Best Practices

- ✅ Use descriptive messages: `git stash save "descriptive message"`
- ✅ Apply stashes soon (don't let them accumulate)
- ✅ Review stashed changes: `git stash show -p stash@{0}`
- ✅ Clear old stashes regularly

---

## Pull Requests

### Creating a Pull Request

**When your feature is complete:**

1. Go to your repository on GitHub
2. You'll see a banner: **"feature/your-feature-name had recent pushes"**
3. Click **"Compare & pull request"**
4. Fill in the pull request details:

   - **Title:** "Add login page with form validation"
   - **Description:**

     ```
     ## Changes Made
     - Created Login component
     - Added form validation
     - Styled login page

     ## Testing
     - Tested form submission
     - Verified validation works

     ## Screenshots
     [Add screenshots if applicable]
     ```

5. Select **"base: main"** and **"compare: feature/your-feature-name"**
6. Click **"Create pull request"**

### Reviewing Pull Requests

**Team members should:**

1. Go to **"Pull requests"** tab
2. Click on the open pull request
3. Review the changes:
   - Click **"Files changed"** to see code differences
   - Add comments on specific lines if needed
4. Approve or request changes:
   - Click **"Review changes"** → **"Approve"** or **"Request changes"**
   - Add comments explaining your review

### Draft Pull Requests

**Use draft PRs for work in progress:**

1. Create pull request as usual
2. Before clicking "Create pull request", click the dropdown
3. Select **"Create draft pull request"**
4. Draft PRs:
   - ✅ Show work in progress
   - ✅ Allow early feedback
   - ✅ Don't require immediate review
   - ✅ Can be marked "Ready for review" when complete

**Mark draft as ready:**

- Click **"Ready for review"** button on the PR page

### Reviewing Pull Requests Locally

**Test teammate's PR on your computer:**

```bash
# Fetch all branches including PRs
git fetch origin

# Checkout the PR branch
git checkout feature/teammate-feature

# Or use the PR number (GitHub provides this)
git fetch origin pull/PR_NUMBER/head:pr-PR_NUMBER
git checkout pr-PR_NUMBER

# Test the code
npm install
npm start

# Review and test
# ... make notes ...

# Switch back to your branch
git checkout feature/your-feature

# Delete the PR branch if needed
git branch -D pr-PR_NUMBER
```

### Merging Pull Requests

**After approval:**

1. Go to the pull request
2. Click **"Merge pull request"**
3. Choose merge type:
   - **"Create a merge commit"** (recommended for teams)
   - **"Squash and merge"** (combines all commits into one)
   - **"Rebase and merge"** (linear history)
4. Click **"Confirm merge"**
5. Delete the feature branch (optional but recommended)

---

## GitHub Issues

### What are GitHub Issues?

**Issues** are a great way to track tasks, bugs, and feature requests for your project. Perfect for team coordination!

### Creating Issues

**To create an issue:**

1. Go to your repository on GitHub
2. Click **"Issues"** tab
3. Click **"New issue"**
4. Fill in:
   - **Title:** Brief description
   - **Description:** Detailed information
   - **Labels:** bug, enhancement, documentation, etc.
   - **Assignees:** Team member responsible
   - **Projects:** Link to project board (optional)
5. Click **"Submit new issue"**

### Issue Templates

**Create templates for consistency:**

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Report a bug
title: "[BUG] "
labels: bug
assignees: ""
---

## Description

Brief description of the bug

## Steps to Reproduce

1. Step one
2. Step two
3. Step three

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Screenshots

If applicable

## Environment

- Browser: [e.g., Chrome 90]
- OS: [e.g., Windows 10]
```

### Using Issues for Task Management

**Assign tasks to team members:**

```markdown
# Example Issue

Title: Implement Login Page

Description:

- [ ] Create Login component
- [ ] Add form validation
- [ ] Style login page
- [ ] Write tests

Assignees: @student1
Labels: enhancement, frontend
```

### Linking Issues to Commits

**Reference issues in commits:**

```bash
# In commit message
git commit -m "Add login form - fixes #12"

# Or close issue automatically
git commit -m "Complete login page - closes #12"

# Multiple issues
git commit -m "Fix bugs - fixes #10, #11, #12"
```

**GitHub will automatically:**

- Link commit to issue
- Close issue when PR is merged (if using "closes #12")

### Issue Labels

**Common labels for teams:**

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `help wanted` - Extra attention needed
- `good first issue` - Good for newcomers
- `priority: high` - Urgent
- `priority: low` - Not urgent
- `frontend` - Frontend work
- `backend` - Backend work
- `testing` - Testing related

### Project Boards

**Organize issues with project boards:**

1. Go to repository → **"Projects"** tab
2. Click **"New project"**
3. Choose template (Kanban board recommended)
4. Add columns: To Do, In Progress, Review, Done
5. Link issues to cards
6. Move cards as work progresses

### Best Practices for Issues

- ✅ Create issue before starting work
- ✅ Assign issues to team members
- ✅ Use labels for organization
- ✅ Link commits to issues
- ✅ Close issues when work is complete
- ✅ Use milestones for releases

---

## Merging Changes

### Merging via Pull Request (Recommended)

**Best practice:** Always use Pull Requests for merging.

1. Create pull request (see above)
2. Get team approval
3. Merge via GitHub interface

### Merging Locally (Alternative)

**If you need to merge locally:**

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge your feature branch
git merge feature/your-feature-name

# Push to GitHub
git push origin main

# Delete local feature branch (optional)
git branch -d feature/your-feature-name

# Delete remote feature branch (optional)
git push origin --delete feature/your-feature-name
```

---

## Rebasing

### What is Rebasing?

**Rebasing** rewrites commit history by moving your branch to start from the latest commit of another branch, creating a linear history.

### Rebase vs Merge

**Merge:**

- Creates a merge commit
- Preserves all history
- Shows when branches diverged
- Easier to understand

**Rebase:**

- Linear history
- No merge commits
- Cleaner git log
- Rewrites history (can be dangerous)

### When to Use Rebase

**Use rebase when:**

- ✅ You want a clean, linear history
- ✅ Working on feature branches (not shared)
- ✅ Before merging to main
- ✅ Cleaning up commit history

**Don't rebase:**

- ❌ Shared/public branches
- ❌ Already pushed branches (unless team agrees)
- ❌ Main/master branch

### Basic Rebase Commands

```bash
# Rebase your branch onto main
git checkout feature/your-feature
git rebase main

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Rebase onto specific branch
git rebase origin/main

# Continue after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort

# Skip a commit during rebase
git rebase --skip
```

### Interactive Rebase

**Clean up commit history:**

```bash
# Rebase last 3 commits
git rebase -i HEAD~3

# Editor opens with:
pick abc1234 Add login form
pick def5678 Fix validation
pick ghi9012 Style login page

# Change commands:
# pick - use commit as-is
# reword - change commit message
# edit - modify commit
# squash - combine with previous commit
# fixup - like squash but discard message
# drop - remove commit

# Example: Squash commits
pick abc1234 Add login form
squash def5678 Fix validation
squash ghi9012 Style login page

# Save and close editor
# Git will prompt for new commit message
```

### Rebase Workflow

**Before merging your feature:**

```bash
# 1. Update main
git checkout main
git pull origin main

# 2. Switch to feature branch
git checkout feature/your-feature

# 3. Rebase onto main
git rebase main

# 4. Resolve conflicts if any
# ... fix conflicts ...
git add .
git rebase --continue

# 5. Force push (if already pushed)
git push origin feature/your-feature --force-with-lease

# 6. Create pull request
# History will be linear and clean
```

### Rebase Conflicts

**Resolving conflicts during rebase:**

```bash
# Start rebase
git rebase main

# Conflict occurs
# Auto-merging src/App.js
# CONFLICT (content): Merge conflict in src/App.js

# Fix conflicts in files
# ... edit files ...

# Stage resolved files
git add src/App.js

# Continue rebase
git rebase --continue

# Or abort if needed
git rebase --abort
```

### Squashing Commits with Rebase

**Combine multiple commits into one:**

```bash
# Interactive rebase
git rebase -i HEAD~5

# Change all but first to "squash" or "fixup"
pick abc1234 Initial commit
squash def5678 Fix typo
squash ghi9012 Add comment
squash jkl3456 Format code
squash mno7890 Update README

# Save and provide new commit message
# Result: One clean commit
```

### Rebase Best Practices

- ✅ Rebase feature branches before merging
- ✅ Use `--force-with-lease` instead of `--force`
- ✅ Don't rebase shared branches
- ✅ Communicate with team before force pushing
- ✅ Use interactive rebase to clean history
- ✅ Test after rebasing

### Rebase vs Merge: Team Decision

**Discuss with your team:**

- **Merge approach:** Easier, safer, preserves history
- **Rebase approach:** Cleaner history, requires coordination

**For student teams:** Start with merge, try rebase later if comfortable.

---

## Resolving Conflicts

### Understanding Conflicts

**Conflicts occur when:**

- Two people modify the same file
- Same lines are changed differently
- Git can't automatically merge

### Conflict Resolution Process

#### Step 1: Identify the Conflict

```bash
# Try to merge or pull
git merge main
# or
git pull origin main

# You'll see:
# Auto-merging src/App.js
# CONFLICT (content): Merge conflict in src/App.js
```

#### Step 2: View Conflicts

**Open the conflicted file:**

```javascript
// src/App.js
// Your changes
function Login() {
  return <div>Login Form</div>;
}
// Teammate's changes
function Login() {
  return <form>Login Form</form>;
}
```

**Conflict markers:**

- `<<<<<<< HEAD` - Your changes
- `=======` - Separator
- `>>>>>>> main` - Incoming changes

#### Step 3: Resolve the Conflict

**Choose one of these options:**

**Option A: Keep your changes**

```javascript
function Login() {
  return <div>Login Form</div>;
}
```

**Option B: Keep teammate's changes**

```javascript
function Login() {
  return <form>Login Form</form>;
}
```

**Option C: Combine both (best practice)**

```javascript
function Login() {
  return (
    <form>
      <div>Login Form</div>
    </form>
  );
}
```

#### Step 4: Complete the Merge

```bash
# After resolving conflicts in all files:

# Stage the resolved files
git add src/App.js

# Complete the merge
git commit -m "Merge main into feature/login-page and resolve conflicts"

# Push your changes
git push origin feature/your-feature-name
```

### Using VS Code for Conflict Resolution

**VS Code makes conflict resolution easier:**

1. Open conflicted file in VS Code
2. You'll see conflict markers highlighted
3. VS Code shows options:
   - **"Accept Current Change"** (your code)
   - **"Accept Incoming Change"** (teammate's code)
   - **"Accept Both Changes"**
   - **"Compare Changes"**
4. Click your preferred option
5. Save the file
6. Stage and commit

### Resolving Conflicts in Pull Requests

**GitHub allows resolving conflicts in browser:**

1. Go to pull request with conflicts
2. Click **"Resolve conflicts"** button
3. GitHub shows conflicted files
4. Edit files directly in browser:
   - Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Keep desired code
5. Click **"Mark as resolved"** for each file
6. Click **"Commit merge"**
7. Pull request is ready to merge

**Or resolve locally:**

```bash
# Checkout the PR branch
git fetch origin pull/PR_NUMBER/head:pr-PR_NUMBER
git checkout pr-PR_NUMBER

# Merge main into it
git merge main

# Resolve conflicts locally
# ... fix conflicts ...

# Commit and push
git add .
git commit -m "Resolve conflicts with main"
git push origin pr-PR_NUMBER

# PR will update automatically
```

### Conflict Prevention Tips

**Reduce conflicts:**

- ✅ Communicate with team about file changes
- ✅ Pull frequently from main
- ✅ Keep feature branches small
- ✅ Work on different files when possible
- ✅ Use meaningful branch names
- ✅ Merge completed features quickly

---

## Rollback and Recovery

### Viewing Commit History

```bash
# View commit history
git log

# View compact history
git log --oneline

# View history with graph
git log --oneline --graph --all

# View specific file history
git log -- src/App.js
```

### Undoing Changes

#### Scenario 1: Undo Uncommitted Changes

**Discard changes in working directory:**

```bash
# Discard changes in a specific file
git checkout -- src/App.js

# Discard all changes
git checkout -- .

# Or using restore (newer Git versions)
git restore src/App.js
git restore .
```

#### Scenario 2: Undo Last Commit (Keep Changes)

```bash
# Undo last commit but keep changes staged
git reset --soft HEAD~1

# Undo last commit and unstage changes
git reset HEAD~1

# Undo last commit and discard changes (DANGEROUS!)
git reset --hard HEAD~1
```

#### Scenario 3: Rollback to Specific Commit

**Find the commit hash:**

```bash
git log --oneline
# Example output:
# a1b2c3d Add login page
# e4f5g6h Add navigation
# i7j8k9l Initial commit
```

**Rollback to specific commit:**

```bash
# Soft reset (keeps changes)
git reset --soft a1b2c3d

# Mixed reset (unstages changes)
git reset a1b2c3d

# Hard reset (DANGEROUS - loses all changes)
git reset --hard a1b2c3d
```

#### Scenario 4: Revert a Commit (Safe for Shared Branches)

**Revert creates a new commit that undoes changes:**

```bash
# Revert a specific commit
git revert a1b2c3d

# Revert the last commit
git revert HEAD

# Push the revert
git push origin feature/your-feature-name
```

#### Scenario 5: Undo a Merge

**Undo a merge that hasn't been pushed:**

```bash
# Undo last merge (keeps changes)
git reset --soft HEAD~1

# Undo last merge (discards changes)
git reset --hard HEAD~1

# Undo merge that was already pushed (safe)
git revert -m 1 HEAD

# -m 1 specifies which parent to revert to (usually main)
```

**If merge was already pushed:**

```bash
# Revert the merge commit (creates new commit)
git revert -m 1 MERGE_COMMIT_HASH

# Push the revert
git push origin main
```

### Viewing File History

**Track changes to specific files:**

```bash
# View commit history for a file
git log src/App.js

# View detailed changes
git log -p src/App.js

# View who changed what
git blame src/App.js

# View file at specific commit
git show abc1234:src/App.js

# Compare file versions
git diff HEAD~1 HEAD -- src/App.js

# View file changes between commits
git diff abc1234 def5678 -- src/App.js
```

**Using GitHub:**

1. Navigate to file in repository
2. Click **"History"** button (top right)
3. See all commits that changed the file
4. Click commit to see changes

### Recovering Deleted Branches

```bash
# View all branches (including deleted)
git reflog

# Find the commit hash of deleted branch
# Example: abc1234 HEAD@{2}: checkout: moving from main to feature/login

# Recreate the branch
git checkout -b feature/login abc1234
```

### Recovering Lost Commits

```bash
# View reflog to find lost commits
git reflog

# Recover a lost commit
git checkout -b recovered-branch abc1234
```

### Cherry-Picking Commits

**Apply a specific commit from another branch:**

```bash
# View commits on another branch
git log feature/other-feature --oneline

# Cherry-pick a specific commit
git cherry-pick abc1234

# Cherry-pick multiple commits
git cherry-pick abc1234 def5678

# Cherry-pick a range
git cherry-pick abc1234..def5678

# Cherry-pick without committing (stages changes)
git cherry-pick -n abc1234
```

**Use cases:**

- Apply a bug fix to multiple branches
- Copy a feature commit to another branch
- Selectively merge specific changes

**Example scenario:**

```bash
# Bug fix was committed to feature/login
# Need same fix in feature/dashboard

# Switch to dashboard branch
git checkout feature/dashboard

# Cherry-pick the fix commit
git cherry-pick abc1234

# Fix is now in dashboard branch!
```

### Tagging Releases

**Mark important milestones:**

```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Tag specific commit
git tag -a v1.0.0 abc1234 -m "Release version 1.0.0"

# List all tags
git tag

# Push tags to GitHub
git push origin v1.0.0

# Push all tags
git push origin --tags

# Delete tag locally
git tag -d v1.0.0

# Delete tag on GitHub
git push origin --delete v1.0.0
```

**Semantic versioning:**

- `v1.0.0` - Major release
- `v1.1.0` - Minor release (new features)
- `v1.1.1` - Patch release (bug fixes)

**Create release on GitHub:**

1. Go to repository → **"Releases"**
2. Click **"Create a new release"**
3. Choose tag (or create new)
4. Add release title and description
5. Upload files (optional)
6. Click **"Publish release"**

---

## Team Update Scenarios

### Scenario 1: Teammate Pushed Changes - You Need to Update

**Situation:** Teammate pushed changes to main, you need their updates.

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Switch back to your feature branch
git checkout feature/your-feature-name

# Merge main into your branch
git merge main

# Resolve conflicts if any (see Resolving Conflicts section)
# Push your updated branch
git push origin feature/your-feature-name
```

### Scenario 2: You Made Changes, Teammate Also Changed Same File

**Situation:** Both modified the same file, need to sync.

```bash
# Pull latest changes
git pull origin main

# If conflicts occur:
# 1. Open conflicted file
# 2. Resolve conflicts manually
# 3. Stage resolved file
git add src/App.js

# Complete merge
git commit -m "Merge main and resolve conflicts in App.js"

# Push resolved changes
git push origin feature/your-feature-name
```

### Scenario 3: Accidentally Committed to Main Branch

**Situation:** You committed directly to main instead of your feature branch.

```bash
# Create a new branch from current position (saves your work)
git branch feature/your-feature-name

# Reset main to previous commit
git reset --hard origin/main

# Switch to your feature branch
git checkout feature/your-feature-name

# Your changes are safe in the feature branch!
```

### Scenario 4: Need to Update Teammate's Feature Branch

**Situation:** Teammate needs help, you need to push to their branch.

**Option A: Teammate Adds You as Collaborator**

- Teammate adds you as collaborator
- You can push directly to their branch

**Option B: Fork and Pull Request**

- Fork their repository
- Make changes
- Create pull request to their branch

**Option C: Teammate Shares Access**

```bash
# Add teammate's remote
git remote add teammate https://github.com/TEAMMATE_USERNAME/repo.git

# Fetch their branches
git fetch teammate

# Checkout their branch
git checkout teammate/feature/their-feature

# Make changes and push (if you have access)
git push teammate feature/their-feature
```

### Scenario 5: Multiple People Working on Same Feature

**Situation:** Two people need to work on the same feature.

**Solution: Create sub-branches:**

```bash
# Student 1 creates:
git checkout -b feature/login-page
git checkout -b feature/login-page/form

# Student 2 creates:
git checkout -b feature/login-page
git checkout -b feature/login-page/validation

# Both work independently, then merge into feature/login-page
```

### Scenario 6: Emergency Hotfix Needed

**Situation:** Critical bug found in main, need immediate fix.

```bash
# Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# Fix the bug
# ... make changes ...

# Commit and push
git add .
git commit -m "Fix critical bug in authentication"
git push origin hotfix/critical-bug-fix

# Create pull request and merge immediately
# Then merge back to develop branch
```

---

## Best Practices

### Commit Messages

**Write clear, descriptive commit messages:**

```bash
# Good commit messages:
git commit -m "Add user authentication with JWT tokens"
git commit -m "Fix navigation menu responsive design"
git commit -m "Update README with installation instructions"

# Bad commit messages:
git commit -m "fix"
git commit -m "changes"
git commit -m "asdf"
```

**Commit message format:**

```
Short summary (50 chars or less)

More detailed explanation if needed. Wrap at 72 characters.
Explain what and why, not how.

- Bullet points for multiple changes
- Another bullet point
```

### Branch Naming Conventions

**Use consistent naming:**

```bash
# Feature branches
feature/login-page
feature/user-dashboard
feature/navigation-menu

# Bug fixes
bugfix/login-error
bugfix/navigation-bug

# Hotfixes
hotfix/security-patch

# Experimental
experiment/new-design
```

### When to Commit

**Commit frequently:**

- ✅ After completing a small feature
- ✅ After fixing a bug
- ✅ After refactoring code
- ✅ At end of work session

**Don't commit:**

- ❌ Broken code
- ❌ Commented out code
- ❌ Temporary files
- ❌ Sensitive information (passwords, API keys)

### Amending Commits

**Fix the last commit:**

```bash
# Add forgotten files to last commit
git add forgotten-file.js
git commit --amend --no-edit

# Change commit message
git commit --amend -m "New commit message"

# Add files and change message
git add new-file.js
git commit --amend -m "Updated commit message with new file"
```

**⚠️ Warning:** Don't amend commits that are already pushed (unless team agrees)!

### Squashing Commits

**Combine multiple commits before merging:**

**Method 1: Interactive Rebase**

```bash
# Squash last 3 commits
git rebase -i HEAD~3

# Change "pick" to "squash" for commits to combine
# Save and provide new commit message
```

**Method 2: Reset and Recommit**

```bash
# Soft reset to 3 commits ago (keeps changes)
git reset --soft HEAD~3

# All changes are staged, commit once
git commit -m "Complete feature implementation"
```

**Method 3: GitHub Squash Merge**

- When merging PR, choose "Squash and merge"
- All commits combined into one

### .gitignore Best Practices

**Ensure .gitignore includes:**

```gitignore
# Dependencies
node_modules/
package-lock.json

# Build outputs
build/
dist/

# Environment variables
.env
.env.local
.env.development.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/
.nyc_output/
```

---

## Troubleshooting

### Issue 1: "Permission Denied" Error

**Problem:** Can't push to repository.

**Solutions:**

```bash
# Check remote URL
git remote -v

# Update remote URL (if using HTTPS)
git remote set-url origin https://github.com/USERNAME/REPO.git

# Or switch to SSH
git remote set-url origin git@github.com:USERNAME/REPO.git

# Generate SSH key if needed
ssh-keygen -t ed25519 -C "your.email@example.com"
# Add SSH key to GitHub: Settings → SSH and GPG keys
```

### Issue 2: "Branch is Behind" Warning

**Problem:** Your branch is behind main.

**Solution:**

```bash
# Fetch latest changes
git fetch origin

# Merge main into your branch
git merge origin/main

# Or rebase (alternative)
git rebase origin/main
```

### Issue 3: "Merge Conflict" During Pull

**Problem:** Conflicts when pulling.

**Solution:**

```bash
# Abort the merge
git merge --abort

# Or resolve conflicts (see Resolving Conflicts section)
```

### Issue 4: Accidentally Pushed Sensitive Data

**Problem:** Committed passwords or API keys.

**Solution:**

```bash
# Remove file from history (use git-filter-repo or BFG Repo-Cleaner)
# Or change the sensitive data and commit again
# Rotate API keys/passwords immediately
```

### Issue 5: Can't See Teammate's Branch

**Problem:** Teammate's branch not showing.

**Solution:**

```bash
# Fetch all branches
git fetch origin

# View all branches
git branch -a

# Checkout teammate's branch
git checkout feature/teammate-branch
```

### Issue 6: Accidentally Force Pushed

**Problem:** Force pushed and overwrote teammate's work.

**Solution:**

```bash
# View reflog to find lost commits
git reflog

# Find the commit before force push
# Example: abc1234 HEAD@{5}: commit: Good commit

# Recover the branch
git checkout -b recovered-branch abc1234

# Or reset current branch
git reset --hard abc1234

# Communicate with team immediately!
```

### Issue 7: Large File Committed

**Problem:** Committed a large file (image, video, etc.).

**Solution:**

```bash
# Remove file from last commit (keeps file locally)
git rm --cached large-file.mp4
git commit --amend

# Or remove from history (advanced)
# Use git-filter-repo or BFG Repo-Cleaner

# Add to .gitignore
echo "large-file.mp4" >> .gitignore
git add .gitignore
git commit -m "Add large-file.mp4 to .gitignore"
```

### Issue 8: Wrong Branch When Committing

**Problem:** Committed to wrong branch.

**Solution:**

```bash
# If committed to main instead of feature branch:
# 1. Note the commit hash
git log --oneline -1

# 2. Create feature branch from current position
git branch feature/correct-branch

# 3. Reset main to previous commit
git checkout main
git reset --hard HEAD~1

# 4. Switch to feature branch (your commit is there)
git checkout feature/correct-branch
```

---

## Common Scenarios

### Scenario A: Starting a New Feature

**Complete workflow:**

```bash
# 1. Update main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/new-feature

# 3. Make changes
# ... edit files ...

# 4. Commit changes
git add .
git commit -m "Add new feature"

# 5. Push branch
git push -u origin feature/new-feature

# 6. Create pull request on GitHub
# 7. Get team review
# 8. Merge after approval
```

### Scenario B: Daily Sync with Team

**Morning routine:**

```bash
# 1. Check current branch
git branch

# 2. Switch to main
git checkout main

# 3. Pull latest
git pull origin main

# 4. Switch to your branch
git checkout feature/your-feature

# 5. Merge main
git merge main

# 6. Resolve conflicts if any
# 7. Push updates
git push origin feature/your-feature
```

### Scenario C: Emergency Rollback

**Need to undo recent changes:**

```bash
# 1. View history
git log --oneline

# 2. Find commit to rollback to
# Example: abc1234

# 3. Create backup branch
git branch backup-before-rollback

# 4. Rollback
git reset --hard abc1234

# 5. Force push (if already pushed - DANGEROUS!)
git push origin feature/your-feature --force
```

### Scenario D: Splitting Work Among Team

**Team of 3 working on different features:**

```bash
# Student 1: Login feature
git checkout -b feature/login-page
# Work on login component

# Student 2: Navigation feature
git checkout -b feature/navigation
# Work on navigation component

# Student 3: Dashboard feature
git checkout -b feature/dashboard
# Work on dashboard component

# All create pull requests when done
# Merge one at a time to avoid conflicts
```

### Scenario E: Code Review Process

**Reviewing teammate's code:**

1. Go to GitHub → Pull Requests
2. Click on open PR
3. Review "Files changed"
4. Add comments on specific lines:
   - Click line number → Add comment
5. Approve or request changes
6. Teammate addresses comments
7. Approve and merge

---

## Git Aliases (Productivity Tips)

### Creating Aliases

**Set up shortcuts for common commands:**

```bash
# Short status
git config --global alias.st status

# Short log
git config --global alias.lg "log --oneline --graph --all --decorate"

# Last commit
git config --global alias.last "log -1 HEAD"

# Unstage
git config --global alias.unstage "reset HEAD --"

# Quick commit
git config --global alias.ci commit

# Quick checkout
git config --global alias.co checkout

# Quick branch
git config --global alias.br branch

# See what changed
git config --global alias.changes "diff --name-status"

# Pretty log
git config --global alias.plog "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

### Using Aliases

```bash
# Instead of: git status
git st

# Instead of: git log --oneline --graph --all
git lg

# Instead of: git checkout feature/login
git co feature/login
```

### Useful Alias Combinations

```bash
# Quick workflow aliases
git config --global alias.save "!git add -A && git commit -m"
git config --global alias.wip "!git add -A && git commit -m 'WIP'"
git config --global alias.undo "reset HEAD~1"

# Team collaboration aliases
git config --global alias.sync "!git checkout main && git pull && git checkout -"
git config --global alias.update "!git checkout main && git pull origin main && git checkout - && git merge main"
```

### View All Aliases

```bash
# List all aliases
git config --global --get-regexp alias

# Or check .gitconfig file
cat ~/.gitconfig
```

---

## Protecting Main Branch

### Why Protect Main Branch?

**Prevents:**

- Direct pushes to main
- Accidental deletions
- Force pushes
- Broken code in main

### Setting Up Branch Protection

**Team Lead should:**

1. Go to repository → **"Settings"**
2. Click **"Branches"** in left sidebar
3. Click **"Add rule"** or edit existing rule for `main`
4. Configure protection:
   - ✅ **Require pull request reviews before merging**
     - Required number of reviewers: `1`
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require branches to be up to date before merging**
   - ✅ **Include administrators** (optional)
   - ✅ **Restrict who can push to matching branches** (optional)
5. Click **"Create"** or **"Save changes"**

### What This Means

**After protection:**

- ❌ Can't push directly to main
- ✅ Must use pull requests
- ✅ Requires at least 1 reviewer approval
- ✅ Must be up to date with main
- ✅ Prevents force push

**Workflow becomes:**

1. Work on feature branch
2. Create pull request
3. Get team approval
4. Merge via GitHub (only way)

---

## Quick Reference Commands

### Essential Commands

```bash
# Clone repository
git clone https://github.com/USERNAME/REPO.git

# Check status
git status

# View branches
git branch -a

# Create branch
git checkout -b feature/name

# Switch branch
git checkout branch-name

# Stage files
git add filename.js
git add .

# Commit
git commit -m "Message"

# Push
git push origin branch-name

# Pull
git pull origin branch-name

# Merge
git merge branch-name

# View history
git log --oneline --graph --all

# View changes
git diff
```

### Team Collaboration Commands

```bash
# Fetch all branches
git fetch origin

# Update main
git checkout main
git pull origin main

# Merge main into feature
git checkout feature/your-feature
git merge main

# Create pull request (via GitHub)
# Or merge locally and push
```

---

## GitHub Workflow Diagram

```
┌─────────────────────────────────────────┐
│         Central Repository (GitHub)      │
│              main branch                 │
└─────────────────────────────────────────┘
           ▲                    │
           │                    │
    [Pull Request]      [Pull Request]
           │                    │
    ┌──────┴──────┐      ┌──────┴──────┐
    │             │      │             │
┌───┴───┐    ┌───┴───┐ ┌─┴───┐    ┌───┴───┐
│Student│    │Student│ │Student│   │Student│
│   1   │    │   2   │ │   3   │   │   ... │
└───┬───┘    └───┬───┘ └─┬───┘    └───┬───┘
    │            │       │            │
    │            │       │            │
feature/    feature/  feature/    feature/
login      nav      dashboard    profile
```

---

## Checklist for Team Projects

### Initial Setup (Team Lead)

- [ ] Create GitHub repository
- [ ] Add README.md
- [ ] Add .gitignore
- [ ] Initialize project structure
- [ ] Make initial commit
- [ ] Add team members as collaborators
- [ ] Create develop branch (optional)

### Daily Checklist (All Team Members)

- [ ] Pull latest changes from main
- [ ] Work on feature branch (not main)
- [ ] Commit frequently with clear messages
- [ ] Push work to GitHub at end of day
- [ ] Communicate with team about changes

### Before Creating Pull Request

- [ ] Code is complete and tested
- [ ] No console errors
- [ ] Follows project coding standards
- [ ] Updated README if needed
- [ ] All team members notified

### Before Merging

- [ ] Pull request reviewed by at least one teammate
- [ ] All conflicts resolved
- [ ] Code tested and working
- [ ] No breaking changes

---

## Additional Resources

### Documentation

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

### Visual Tools

- [GitHub Desktop](https://desktop.github.com/) - GUI for Git
- [SourceTree](https://www.sourcetreeapp.com/) - Free Git GUI
- [VS Code Git Integration](https://code.visualstudio.com/docs/versioncontrol/overview)

### Learning Resources

- [GitHub Learning Lab](https://lab.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Learn Git Branching](https://learngitbranching.js.org/)

---

## Team Agreement Template

**Create a team agreement document:**

```markdown
# Team Git Workflow Agreement

## Team Members

- Student 1: [Name] - GitHub: [username]
- Student 2: [Name] - GitHub: [username]
- Student 3: [Name] - GitHub: [username]

## Branch Strategy

- Main branch: Production-ready code only
- Feature branches: One per feature
- Naming: feature/feature-name

## Commit Messages

- Format: "Action: Description"
- Examples: "Add: Login form", "Fix: Navigation bug"

## Pull Request Process

- Minimum 1 reviewer required
- All tests must pass
- No merge conflicts

## Communication

- Slack/Discord channel: [link]
- Daily standup: [time]
- Update team before major changes

## Conflict Resolution

- Discuss conflicts in team chat
- Prefer teammate's solution if unclear
- Ask for help if stuck > 30 minutes
```

---

## Summary

**Key Takeaways:**

1. ✅ Always work on feature branches, never directly on main
2. ✅ Pull latest changes before starting work
3. ✅ Commit frequently with clear messages
4. ✅ Use pull requests for code review
5. ✅ Communicate with team about changes
6. ✅ Resolve conflicts promptly
7. ✅ Test before merging
8. ✅ Keep main branch stable
9. ✅ Use stashing for temporary work
10. ✅ Create GitHub issues for task tracking
11. ✅ Protect main branch with branch protection
12. ✅ Use rebase for cleaner history (when appropriate)
13. ✅ Review PRs locally before approving
14. ✅ Use tags for marking releases

**Essential Skills Covered:**

- ✅ Repository setup and collaboration
- ✅ Branching and merging strategies
- ✅ Pull requests and code review
- ✅ Conflict resolution
- ✅ Stashing and rebasing
- ✅ Rollback and recovery
- ✅ GitHub Issues and project management
- ✅ Advanced Git operations

**Remember:** Git is a tool for collaboration. Communication is just as important as the technical skills!

**Pro Tips:**

- Use Git aliases to speed up workflow
- Set up branch protection for main
- Create issue templates for consistency
- Use draft PRs for work in progress
- Review PRs locally before approving
- Tag releases for version tracking
- Use cherry-pick for selective commits

_Happy collaborating! Remember: When in doubt, ask your team!_
