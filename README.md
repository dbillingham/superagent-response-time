# superagent-response-time

  A plugin for superagent that outputs a requests response time in milliseconds.

## Installation

  Install with [npm](http://npmjs.org):

    $ npm i superagent-response-time

## Usage

```js
import request from 'superagent';
import responseTime from 'superagent-response-time';

const callback = (req, time) => {
  console.log(time); //180.25
}

request
  .get('/some-url')
  .use(responseTime(callback)) //Add the plugin to the request
  .end(function(err, res){
    // Do something
  });
```
