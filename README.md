# superagent-response-time

  A plugin for superagent that outputs a requests resposne time.

## Installation

  Install with [npm](http://npmjs.org):

    $ npm i superagent-response-time

## Usage

```js
import request from 'superagent';
import responseTime from 'superagent-response-time';

const callback = (req, time) => {
  console.log(time); //1800216000.000025
}

request
  .get('/some-url')
  .use(responseTime(callback)) //Add the plugin to the request
  .end(function(err, res){
    // Do something
  });
```
