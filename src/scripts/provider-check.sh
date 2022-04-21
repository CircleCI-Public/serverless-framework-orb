#!/bin/bash
echo "export SLS_ORB_PROVIDER_PARAM=$SLS_ORB_PROVIDER_PARAM" >> "$BASH_ENV"
###
# Helper functions
###
output_Provider_Selected () {
  echo "................................."
  echo " $1 Selected."
  echo "................................."
  echo
}

###
# Provider check functions
###
AWS_Check () {
  output_Provider_Selected "AWS"
  if ! command -v aws &> /dev/null; then
    echo "ERROR: AWS CLI NOT INSTALLED"
    TipMsg_Install_AWS
    exit 1
  fi
  if [[ -z "$AWS_ACCESS_KEY_ID" || -z "$AWS_SECRET_ACCESS_KEY" ]]; then
    if [[ ! -f ~/.aws/credentials ]]; then
      echo "ERROR: CREDENTIALS NOT FOUND"
      TipMsg_Install_AWS
      exit 1
    fi
  fi
  TipMsg_Install_AWS () {
    echo "
    ---
    Tip: Install the AWS CLI and authenticate prior to running the Serverless setup command.
    Consider using the AWS CLI orb: https://circleci.com/orbs/registry/orb/circleci/aws-cli#usage-install_aws_cli

    Import the AWS CLI Orb To Your Config:
    ---
      orbs:
        aws-cli: circleci/aws-cli@x.y
    ---

    Run The AWS Setup Command Prior To The Serverless Command:
    ---
      steps:
        - aws-cli/setup
        - serverless/setup
    ---
    "
  }
}
azure_Check () {
  output_Provider_Selected "Azure"
  if [[ -z "$AZURE_SUBSCRIPTION_ID" || -z "$AZURE_TENANT_ID" || -z "$AZURE_CLIENT_ID" || -z "$AZURE_CLIENT_SECRET" ]]; then
    echo "
    ---
    ERROR: No Azure credentials provided!

    We were unable to find a value for one or more of the following required environment variables:
    ---
      AZURE_SUBSCRIPTION_ID
      AZURE_TENANT_ID
      AZURE_CLIENT_ID
      AZURE_CLIENT_SECRET
    ---

    The Serverless Framework needs access to Azure account credentials so that it can create and manage resources on your behalf.

    Docs: https://serverless.com/framework/docs/providers/azure/guide/credentials/
    "
    exit 1
  fi
}
tencent_Check () {
  output_Provider_Selected "Tencent"
}
knative_Check () {
  output_Provider_Selected "Knative"
}
alibaba_Check () {
  output_Provider_Selected "Alibaba"
}
cloudflare_Check () {
  output_Provider_Selected "Cloudflare"
}
fn_Check () {
  output_Provider_Selected "fn"
}
kubeless_Check () {
  output_Provider_Selected "Kubeless"
}
openwhisk_Check () {
  output_Provider_Selected "OpenWhisk"
}
spotinist_Check () {
  output_Provider_Selected "Spotinist"
}
###
# Call provider based on parameter
###
case "$SLS_ORB_PROVIDER_PARAM" in
  "AWS")
    AWS_Check
    ;;
  "azure")
    azure_Check
    ;;
  "tencent")
    tencent_Check
    ;;
  "knative")
    knative_Check
    ;;
  "alibaba")
    alibaba_Check
    ;;
  "cloudflare")
    cloudflare_Check
    ;;
  "fn")
    fn_Check
    ;;
  "kubeless")
    kubeless_Check
    ;;
  "openwhisk")
    openwhisk_Check
    ;;
  "spotinist")
    spotinist_Check
    ;;
  *)
    other_Check
esac
