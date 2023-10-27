---
title: Getting started
description: Getting started with No550.
---

Welcome to No550, your trusted email validation service! In this guide, we'll walk you through the steps to get started with No550 and begin validating email addresses to improve your email marketing campaigns, reduce bounce rates, and enhance your sender reputation.

## Register for No550

Visit the No550 dashboard at https://dash.no550.com/register. Pick a provider to register with and go through the registration flow. Once you've registered, you'll be able to log in to your No550 account and start validating email addresses.

## Obtain your API token

To use No550's email validation service programmatically, you'll need an API token. Follow these steps to obtain your API token:
* Login to your No550 account.
* Select **Account** from the left-hand menu.
* Copy the API token from the "API" panel.

## Integrate No550 into your application

Now that you have your No550 API token, you can start integrating No550 into your application or email validation workflow. No550 offers APIs that allow you to validate single email addresses or verify email lists in bulk.

Here's a basic example using cURL to validate a single email address:

```bash
curl -X POST 'https://api.no550.com/check' \
	-H 'Content-Type: application/json' \
	-H 'Authorization: API_TOKEN' \
	-d '{"email": "example@example.com"}'
```

Replace "API_TOKEN" with your actual No550 API token.

## Interpret validation results

After sending an email address for validation to No550, you will receive a response indicating the status of the email address. A typical response might look like this:

```json
{
	"success": true,
	"data": {
		"email": "example@example.com",
		"valid": false,
		"status": "invalid"
	}
}
```

* `email`: The email address you submitted for validation.
* `valid`: If the email address is valid, this field will be "true." If the email address is invalid, this field will be "false."
* `status`: The validation status, which can be "valid", "invalid" or "suspicious". In the "supicious" status, if you have [Block suspicious domains](/configuration/basic/#block-suspicious-domains) enabled, this will make "valid" false.
