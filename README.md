# ARCHIVED - This repo is no longer maintained #

# Docker PHP7 Apache Updater

This repo checks whether the
[silintl/php7-apache](https://hub.docker.com/r/silintl/php7-apache) Docker image
is using the most recent PHP 7 release.

When this is run, it will return successfully if that image is using the most
recent PHP 7 release, but it will throw an error if that image is not. This also
writes out some basic information to stdout for easier reading by humans.

We recommend running this daily and setting up an AWS CloudWatch Alarm to notify
you if it errors.

If the response is that our php7-apache image is NOT using the latest PHP 7
release, you know you need to update the PHP version specified in the base
image's Dockerfile...  
<https://github.com/silinternational/docker-php7-apache/blob/develop/Dockerfile>  
... and then submit a PR, naming the release after the new PHP version.

Once that repo has been updated, it will automatically submit PRs on all GitHub
repos that use it as their base image, including this one. Once you merge the PR
on this repo, the next time this image runs, it should indicate that our base
image is using the latest PHP 7 release.

## Running / Testing

This Docker image implements the AWS Lambda Runtime API, and is intended to be
run on AWS Lambda.

To test it locally, build it...
```
docker build -t silintl/php7-apache-updater:develop .
```
... then start it up...
```
docker run -p 9000:8080 silintl/php7-apache-updater:develop
```
... then invoke it...
```
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

More details (and the source of that documentation) can be found here:

<https://gallery.ecr.aws/lambda/nodejs>
