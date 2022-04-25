#!/bin/bash
export export SLS_SCRIPT_URL="https://sls-standalone-sv-1300963013.cos.na-siliconvalley.myqcloud.com/install.sh"
SLS_GEO_LOCATION=us
if [ "$ORB_PARAM_MIRROR" = "cn"]; then
  export SLS_SCRIPT_URL="https://sls-standalone-1300963013.cos.ap-shanghai.myqcloud.com/install.sh"
  export SLS_GEO_LOCATION=cn
fi
curl -o- -L "$SLS_SCRIPT_URL" | VERSION=$ORB_PARAM_SERVERLESS_VERSION bash
# shellcheck disable=SC2016
echo 'export PATH=$HOME/.serverless/bin:$PATH' >> "$BASH_ENV"
# shellcheck disable=SC1090
source "$BASH_ENV"
# Check for Serverless key
if [ -z "$SERVERLESS_ACCESS_KEY" ]; then
  echo "Error: The environment variable SERVERLESS_ACCESS_KEY is empty.
    Please create your serverless dashboard access key and add it to this project as a project environment vairable
    or via contexts.
    https://serverless.com/framework/docs/dashboard/cicd/running-in-your-own-cicd#configure-environment-variables"
fi
