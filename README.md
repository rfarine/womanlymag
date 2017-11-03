# Womanly Mag
## Art & Health on the Global Woman and Non-Binary

## Contributing
1) Open all new branches against the `staging` branch. (Naming convention like so: `feature/name-of-feature`, `bugfix/name-of-bug`)
2) When code is ready for review, open a PR that compares your feature branch to `staging`.
3) When code has been approved, merge into staging and check (http://netlify.com)[Netlify] for a successful deploy.
4) Test in staging.
5) Open a PR with the title `staging --> master`. Get approval.
6) Merge merge merge! Check for that sweet, sweet, successful deploy.

---

## Running the App

### Development

You'll spend most of your time doing this shit:

```
yarn develop
```

### Build

Want to see what the public directory looks like? Build it.


```
yarn build
```

This runs `yarn dato:dump` to dump all content from Dato into src/pages and then runs `gatsby build` to generate pages for production.


### Deploy

Merging into master **automatically deploys**. But if you want to manually deploy:

```
yarn deploy
```
