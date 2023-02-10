#!/usr/bin/env node

const updateDotenv = require('update-dotenv')

var args = process.argv.slice(2)

if (!process.stdin.isTTY) {
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function (data) {
    args = [...args, ...data.split(/\s+/)]
    updateDotenv({
      [args[0]]: args[1],
    }).then((newEnv) => console.log('1 line added/modified: ', newEnv))
  })
} else {
  updateDotenv({
    [args[0]]: args[1],
  }).then((newEnv) => console.log('1 line added/modified: ', newEnv))
}
