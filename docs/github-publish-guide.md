# Publish CAIRNOX with GitHub Pages

The local repository is connected to `https://github.com/marksokolov1/cairnox.git`. The website is deployed by `.github/workflows/deploy-pages.yml` whenever `main` is pushed.

## One-time GitHub Pages setting

1. Open the `marksokolov1/cairnox` repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and select **Deploy CAIRNOX to GitHub Pages**.
5. Run the workflow if it has not already started from the latest push.

The published URL is:

`https://marksokolov1.github.io/cairnox/`

## Publish future changes

From the project directory:

```bash
cd /Users/marksokolov/Desktop/cairnox
git status
git add <changed-files>
git commit -m "Describe the update"
git push origin main
```

Verify the remote and deployment:

```bash
git remote -v
git status
```

Then check the GitHub **Actions** tab. A successful run deploys the generated `out/` artifact; source files and the README are not served as the website.

## Important limitations

- GitHub Pages is static hosting, so the demo forms validate in the browser but do not send or store data.
- Production form delivery still requires an approved external provider and receiving address.
- Update both workflow environment values if the repository name or public URL changes.
- This project does not require Git LFS.
