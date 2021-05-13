<?php

$majorVersionInUse = PHP_MAJOR_VERSION;
$fullVersionInUse = phpversion();
echo sprintf(
    "Using PHP %s\n",
    $fullVersionInUse
);

$url = 'https://www.php.net/releases/?json&version=' . $majorVersionInUse;
$releaseJson = file_get_contents($url);
$releaseData = json_decode($releaseJson, true);
$latestRelease = $releaseData['version'];
echo sprintf(
    "Latest PHP %s release: %s\n",
    $majorVersionInUse,
    $latestRelease
);

$isUsingLatestRelease = ($fullVersionInUse === $latestRelease);
echo sprintf(
    "This %s using the latest PHP %s release\n",
    $isUsingLatestRelease ? 'IS' : 'is NOT',
    $majorVersionInUse
);

exit($isUsingLatestRelease ? 0 : 1);
