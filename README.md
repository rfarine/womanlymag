# Womanly Mag
## Art & Health on the Global Woman and Non-Binary

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

Merging into master automatically deploys. But if you want to manually deploy:

```
yarn deploy
```
