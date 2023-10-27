---
title: Check API
description: Documentation around interacting with the No550 check API.
---

The `/check` endpoint allows you to validate emails based on your [configuration](/configuration) settings.

## Check email

You can send a `POST` to `https://api.no550.com/check` in order to validate if an email is valid. We will return if the email is valid or not (along with some other info) in the `data` property.

We require a JSON body with the email you want to check, this can be supplied as `{ "email": "example@example.com" }`.

Example:
```sh
$ curl https://api.no550.com/check -s -H 'Authorization: API_TOKEN' \
	-X POST \
	-H 'Content-Type: application/json' \
	-d '{"email": "example@example.com"}'

{
	"success": true,
	"message": "Success",
	"data": {
		// TODO: What is this
	}
}
```
