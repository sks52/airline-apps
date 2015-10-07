# airline-apps
An NPM module containing airline apps for iOS and Android along with logos and other information

## Install

```
npm install airline-apps
```

## Usage

The list of airline apps is wrapped with Fuse.js to be able to do a fuzzyword search.

```javascript
var airlines = require('airline-apps');

console.log(airlines.search('Delta'));
```

If you'd like only the JSON list of airlines, you can import the json list directly:

```javascript
require('airline-apps/airlines.json');
```

### Generate the list

Convert the list of airlines codes from csv format to JSON.

```
node convert.js
```
