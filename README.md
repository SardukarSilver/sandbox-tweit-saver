## Folder structure

`frontend` folder - created with CRA. Contains react, mobX.

`backend` folder - simple boilerplate with Node.js, twitter(package for API)

### How to lunch

I've used concurrency to run a project.

1. unzip it
2. run `npm i` in the root of the `twit-saver`
3. run `npm run presetup` in the root of the `twit-saver`. It will install all dependencies.
4. run `npm run dev` in the root of the `twit-saver`

Backend works on `port:4000`, frontend on `port:3000`.

To change the amount of twits in search response you need to change `TWITS_AMOUNT` variable in the backend `.env` file.

`Clear store` button clear `mobx` store and `localStore`.

## I've left my dev keys for the twitter, so you could check everything. But I will revoke them next week.
