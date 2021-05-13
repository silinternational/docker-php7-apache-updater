# Docker PHP7 Apache Updater

This repo checks whether the
[silintl/php7-apache](https://hub.docker.com/r/silintl/php7-apache) Docker image
is using the most recent PHP 7 release.

When this is run, it will return an exit code of zero (0) if it is using the
most recent PHP 7 release, and an exit code of one (1) if it is not. It also
writes out some basic information to stdout for easier reading by humans.

Ideally, you would run this automatically on some regular schedule (such as
daily), and if it returns a non-zero exit code, you know you need to update the
PHP version specified in the base image's Dockerfile:  
<https://github.com/silinternational/docker-php7-apache/blob/main/Dockerfile>

Once that repo has been updated, it will automatically submit PRs on all GitHub
repos that use it as their base image, including this one. At that point, the
next time this image runs, it should return a zero exit code until a new version
of PHP 7 is released.
