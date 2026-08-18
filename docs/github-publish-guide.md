# Publish CAIRNOX with GitHub Pages

The local repository is connected to `https://github.com/marksokolov1/cairnox.git`. The website is deployed by `.github/workflows/deploy-pages.yml` whenever `main` is pushed.

## One-time GitHub Pages settings

1. Open the `marksokolov1/cairnox` repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Under **Custom domain**, enter `cairnox.com` and save it.
5. At the domain's DNS provider, add these four `A` records for the apex (`@`):

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

6. Add a `CNAME` record for `www` pointing to `marksokolov1.github.io`.
7. Open the **Actions** tab and select **Deploy CAIRNOX to GitHub Pages**.
8. Run the workflow if it has not already started from the latest push.
9. Enable **Enforce HTTPS** in **Settings → Pages** once GitHub makes the option available.

The published URL is:

`https://cairnox.com/`

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
- The production build is rooted at `/`; no repository base path is used with the custom domain.
- DNS changes may take up to 24 hours to propagate.
- This project does not require Git LFS.
