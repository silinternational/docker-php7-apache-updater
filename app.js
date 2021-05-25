console.log('Loading function');

const { execSync } = require('child_process')
const fs = require('fs')

const getPhpVersionInUse = () => {
  return fs.readFileSync('phpversion.txt').toString()
}

const getLatestPhp7Release = async () => {
  const json = execSync('curl https://www.php.net/releases/?json\\&version=7').toString()
  const releaseData = JSON.parse(json)
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
