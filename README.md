# Step 1: Install brunch & bower & npm

To build/serve our app you need install following packages:

- Brunch
- Bower


### Installing Brunch
`
npm install -g brunch
`
### Installing Bower

`npm install -g bower`

# Step 2: Install project plugins
To install npm & bower plugins you need put in terminal following commands:
```
npm install
bower install
```
# Step 3: Serve/Build app

To serve your app you need go to your project folder and put in terminal following commands like
```
brunch w -s
```

To build your app to static files without `--watch` you need
```
brunch build
```

To build app to production version (minified code and etc) —
```
brunch build -p
```