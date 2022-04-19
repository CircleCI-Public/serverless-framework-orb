#!/bin/bash
curl -o- -L https://slss.io/install | bash
echo "export PATH=$HOME/.serverless/bin:$PATH" >> "$BASH_ENV"
# shellcheck disable=SC1090
source "$BASH_ENV"
# Check for Serverless key
if [ -z "$SERVERLESS_ACCESS_KEY" ]; then
  echo "Error: The environment variable SERVERLESS_ACCESS_KEY is empty.
    Please create your serverless dashboard access key and add it to this project as a project environment vairable
    or via contexts.
    https://serverless.com/framework/docs/dashboard/cicd/running-in-your-own-cicd#configure-environment-variables"
else
  if [[ -n "$SERVERLESS_ORB_ORG_NAME" && -n "$SERVERLESS_ORB_APP_NAME" ]]; then
    # Autoamtically connect to service (or create one) if org name and app name are present.
    echo y | serverless --org "$SERVERLESS_ORB_ORG_NAME" --app "$SERVERLESS_ORB_APP_NAME"
  else
    echo "WARNING: No Org name or App name detected. NOT connected to a service."
  fi
fi
