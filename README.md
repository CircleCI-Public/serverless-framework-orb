# serverless-framework Orb
[![CircleCI Build Status](https://circleci.com/gh/CircleCI-Public/serverless-framework-orb.svg?style=shield "CircleCI Build Status")](https://circleci.com/gh/CircleCI-Public/serverless-framework-orb) [![CircleCI Orb Version](https://img.shields.io/badge/endpoint.svg?url=https://badges.circleci.io/orb/circleci/serverless-framework)](https://circleci.com/orbs/registry/orb/circleci/serverless-framework) [![GitHub License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/CircleCI-Public/serverless-framework-orb/master/LICENSE) [![CircleCI Community](https://img.shields.io/badge/community-CircleCI%20Discuss-343434.svg)](https://discuss.circleci.com/c/ecosystem/orbs)

Use the Serverless Framework orb for CircleCI to easily deploy to your favorite cloud platform.


## Usage

Example use-cases are provided on the orb [registry page](https://circleci.com/orbs/registry/orb/circleci/serverless-framework#usage-examples). Source for these examples can be found within the `src/examples` directory.

## Resources

[CircleCI Orb Registry Page](https://circleci.com/orbs/registry/orb/circleci/serverless-framework) - The official registry page of this orb for all versions, executors, commands, and jobs described.
[CircleCI Orb Docs](https://circleci.com/docs/2.0/orb-intro/#section=configuration) - Docs for using and creating CircleCI Orbs.

### How To Contribute

We welcome [issues](https://github.com/CircleCI-Public/serverless-framework-orb/issues) to and [pull requests](https://github.com/CircleCI-Public/serverless-framework-orb/pulls) against this repository!

### How to Publish An Update
1. Merge pull requests with desired changes to the main branch.
    - For the best experience, squash-and-merge and use [Conventional Commit Messages](https://conventionalcommits.org/).
2. Find the current version of the orb.
    - You can run `circleci orb info circleci/serverless-framework | grep "Latest"` to see the current version.
3. Create a [new Release](https://github.com/CircleCI-Public/serverless-framework-orb/releases/new) on GitHub.
    - Click "Choose a tag" and _create_ a new [semantically versioned](http://semver.org/) tag. (ex: v1.0.0)
      - We will have an opportunity to change this before we publish if needed after the next step.
4.  Click _"+ Auto-generate release notes"_.
    - This will create a summary of all of the merged pull requests since the previous release.
    - If you have used _[Conventional Commit Messages](https://conventionalcommits.org/)_ it will be easy to determine what types of changes were made, allowing you to ensure the correct version tag is being published.
5. Now ensure the version tag selected is semantically accurate based on the changes included.
6. Click _"Publish Release"_.
    - This will push a new tag and trigger your publishing pipeline on CircleCI.