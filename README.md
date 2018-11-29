# https://github.com/serverless/serverless/issues/5123

```
$ git clone https://github.com/dschep-bug-repos/sls-5123
$ cd sls-5123
$ sls package --email fail@example.com --foobar floobaz
{ emailWithDefault: '${opt:email, "email@example.com"}',
  emailWithoutDefault: 'fail@example.com',
  foobar: 'floobaz' }
Serverless: Packaging service...
```
