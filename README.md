# Buster spec bug

This repository contains an isolated test case to show that "expect" is broken.

## Tested versions

* 0.6.12 — OK
* 0.6.13 — OK
* 0.7.3 — Broken
* 0.7.6 — Broken

```
$ node node_modules/buster/bin/buster-test
Error: Chrome 30.0.1599.69, Mac OS X 10.8.5 hello is a function
  ReferenceError: expect is not defined
    at Object.<anonymous> (./hello.tests.js:5:9)


1 test, 0 assertions, 1 runtime ... 1 error
```

I suspect that a [recent update to referee](https://github.com/busterjs/referee/commit/e1b64d8f1c3846c97ced2a90dedf3e913966f13b) might be the cause of this.