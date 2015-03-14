/*!
 * stringify-travis-badge <https://github.com/jonschlinkert/stringify-travis-badge>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var travis = require('stringify-travis-url');

module.exports = function travisBadge(user, repo, branch) {
  if (typeof user !== 'string') {
    throw new TypeError('stringify-travis-badge expects `user` to be a string.');
  }

  if (typeof repo !== 'string') {
    throw new TypeError('stringify-travis-badge expects `repo` to be a string.');
  }

  branch = branch || 'master';
  return format(travis(user, repo), branch);
}

function format (url, branch) {
  return '[![Build Status](' + url + '.svg?branch=' + branch + ')](' + url + ')';
}
