---
title: Configuration API
description: Documentation around interacting with the No550 configuration API.
---

The `/config` endpoint allows you to interact with the configuration settings in your account.

## Get configuration

You can send a `GET` to `https://api.no550.com/config` in order to get the current configuration. We will return the following in `data`:
```json
{
	"success": true,
	"message": "Success",
	"data": {
		"mode": 'basic',
		"basic": {
			"blockThrowaway": boolean,
			"blockFake": boolean,
			"blockInvalid": boolean,
			"blockSupiciousDomains": boolean
		},
		"features": {
			"typoFixer": boolean
		}
	}
}
```

Example:
```sh
$ curl https://api.no550.com/config -s -H 'Authorization: API_TOKEN' | jq .

{
	"success": true,
	"message": "Success",
	"data": {
		"mode": "basic",
		"basic": {
			"blockThrowaway": true,
			"blockFake": true,
			"blockInvalid": true,
			"blockSupiciousDomains": true
		},
		"features": {
			"typoFixer": true
		}
	}
}
```

## Update configuration

You can send a `PATCH` to `https://api.no550.com/config` in order to update the current configuration. We will return the updated configuration back in `data`.

Example:
```sh
$ curl https://api.no550.com/config -s -H 'Authorization: API_TOKEN' \
	-X PATCH \
	-d '{"basic": {"blockThrowaway": false }}'

{
	"success": true,
	"message": "Success",
	"data": {
		"mode": "basic",
		"basic": {
			"blockThrowaway": false,
			"blockFake": true,
			"blockInvalid": true,
			"blockSupiciousDomains": true
		},
		"features": {
			"typoFixer": true
		}
	}
}
```
