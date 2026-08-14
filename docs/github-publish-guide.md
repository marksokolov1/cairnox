# Publish CAIRNOX to GitHub

The local repository is already initialized on the `main` branch. No GitHub remote is configured.

## Option A — GitHub website and terminal

1. Sign in to GitHub and create a new, empty repository.
2. Do **not** initialize it with another README, `.gitignore` or license.
3. Copy the repository URL shown by GitHub.
4. Open Terminal and run:

```bash
cd /Users/marksokolov/Desktop/cairnox
git remote add origin <repository-url>
git push -u origin main
```

Use an HTTPS URL if you prefer GitHub's browser/credential-manager sign-in. Use an SSH URL only if an SSH key is already configured with GitHub.

Verify the connection and local status:

```bash
git remote -v
git status
```

## Option B — GitHub CLI

If the optional `gh` command is installed and authenticated:

```bash
cd /Users/marksokolov/Desktop/cairnox
gh repo create --source=. --remote=origin --push
```

Follow the prompts to choose the repository owner, name and visibility. This project does not require Git LFS.

## Before publishing

- Confirm the new repository contains no environment files or secrets.
- Keep the repository private until the owner decides otherwise.
- The provisional public URL is `https://marksokolov1.github.io/cairnox/`; update `NEXT_PUBLIC_SITE_URL` if the production URL changes.
- Production form delivery still requires an approved provider and receiving address.
