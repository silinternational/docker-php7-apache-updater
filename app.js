console.log('Loading function');

const assert = require('assert')
const fetch = require('node-fetch')
const fs = require('fs')

const getPhpVersionInUse = () => {
  return fs.readFileSync('phpversion.txt').toString()
}

const getLatestPhp7Release = async () => {
  // TEMP
  const releaseJson = fs.readFileSync('temp.json').toString()
  const releaseData = JSON.parse(releaseJson)
  // const response = await fetch(`https://www.php.net/releases/?json&version=7`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'User-Agent': 'silintl/php7-apache-updater 0.1.0'
  //   },
  // })
  // console.log('Response data', response.data)
  // assert(
  //   response.ok,
  //   `Failed to retrieve latest PHP 7 release: \n${response.status} ${response.statusText}`
  // )
  // const releaseData = response.json()
  return releaseData.version
}

exports.handler = async () => {
  const phpVersionInUse = getPhpVersionInUse()
  console.log(`Using PHP ${phpVersionInUse}`)
  
  const latestPhp7Release = await getLatestPhp7Release()
  console.log(`Latest PHP 7 release: ${latestPhp7Release}`)
  
  const isUsingLatestRelease = (phpVersionInUse === latestPhp7Release);
  if (isUsingLatestRelease) {
    return `This IS using the latest PHP 7 release (${latestPhp7Release})`
  }
  throw new Error(
    `This is NOT using the latest PHP 7 release: ${phpVersionInUse} vs ${latestPhp7Release}`
  )
}
