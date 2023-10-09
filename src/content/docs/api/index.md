---
title: API
description: Documentation around interacting with the No550 API.
---

The API is located at `https://api.no550.com`.

<!-- TODO: Document versioning at some point, we don't use it today but probably will -->

## API format

All API responses will be returned in the format of:
```json
{
	// This indicates if the API request succeeded or not
	"success": boolean,

	// - If success is true:
	// Contains a message
	"message": string?,
	// Contains the data or null if there is no data to be returned
	"data": object | null?,

	// - If success is false:
	// Contains an error message explaining the failure
	// This is not considered stable and should not be used to check for a specific error
	"error": string?,
	// Contains an error code, these can be considered stable
	// If you want to check for specific errors, please use the code and not the message!
	"code": number?
}
```

## Authentication

Authentication to the API is done through API tokens. You can find the API token for your account under the ["Account"](https://dash.no550.com/account) page. If you roll your API token, any applications using the old token will immediately stop working so make sure there's a migration plan in place.

With the API token, you can pass it into the `Authorization` header.
Example:
```sh
curl https://api.no550.com/auth/me \
	-H 'Authorization: rpkBnBrP_XeE_V83NoYFmp9TtQ5pPS'
```

## Rate limiting

We currently enforce a 1 req/s rate limit per account. If you need this lifting please [contact us](https://no550.com/contact)
