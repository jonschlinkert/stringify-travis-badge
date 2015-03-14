/*!
 * stringify-travis-badge <https://github.com/jonschlinkert/stringify-travis-badge>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var travis = require('./');

describe('travis', function () {
  it('should generate a travis URL:', function () {
    travis('assemble', 'verb').should.equal('[![Build Status](https://travis-ci.org/assemble/verb.svg?branch=master)](https://travis-ci.org/assemble/verb)');
  });

  it('should support branch:', function () {
    travis('assemble', 'verb', '111').should.equal('[![Build Status](https://travis-ci.org/assemble/verb.svg?branch=111)](https://travis-ci.org/assemble/verb)');
  });
});

describe('errors', function () {
  it('should throw an error when `user` not a string:', function () {
    (function () {
      travis();
    }).should.throw('stringify-travis-badge expects `user` to be a string.');
  });
  it('should throw an error when `repo` not a string:', function () {
    (function () {
      travis('foo');
    }).should.throw('stringify-travis-badge expects `repo` to be a string.');
  });
});
