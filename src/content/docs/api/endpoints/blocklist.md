---
title: Blocklist API
description: Documentation around interacting with the No550 blocklist API.
---

The `/config/blocklist` endpoints allow you to get, update or delete from your blocklists.

In all examples, we have 2 domains and 2 emails in our blocklist. We have `example.com` and `example.org` as domains along with `test@example.com` and `test@example.org` as emails.

## Get blocklist

You can send a `GET` to `https://api.no550.com/config/blocklist` in order to get the current blocklist. We will return the following response:
```json
{
	"success": true,
	"message": "Success",
	"data": {
		"domains": string[],
		"emails": string[]
	}
}
```

Example:
```sh
$ curl https://api.no550.com/config/blocklist -s -H 'Authorization: API_TOKEN'
```

```json
{
	"success": true,
	"message": "Success",
	"data": {
		"domains": [
			"example.com",
			"example.org"
		],
		"emails": [
			"test@example.com",
			"test@example.org"
		]
	}
}
```

## Append to blocklist

You can send a `PATCH` to `https://api.no550.com/config/blocklist` in order to append to your blocklist. If you wish to overwrite the entire blocklist then you can use the [`PUT` endpoint](#overwrite-blocklist).

To use the endpoint, you can provide a `domains` and/or `emails` string array in the body. Any non-duplicate values will be appended to the blocklist.

An empty array and omitted values will be ignored. If you want to remove an entry (or entries) you can use the [`DELETE` endpoint](#delete-from-blocklist). If you wish to clear the blocklist then you can use the [`PUT` endpoint](#clear-blocklist).

Example:
```sh
$ curl https://api.no550.com/config/blocklist -s \
	-X PATCH \
	-H 'Authorization: API_TOKEN' \
	-H 'Content-Type: application/json' \
	-d '{"domains": ["example.net"], "emails": ["test@example.net"]}'
```

```json
{
	"success": true,
	"message": "Update successful",
	"data": {
		"domains": [
			"example.com",
			"example.org",
			"example.net"
		],
		"emails": [
			"test@example.com",
			"test@example.org",
			"test@example.net"
		]
	}
}
```

## Overwrite blocklist

You can send a `PUT` to `https://api.no550.com/config/blocklist` in order to overwrite your blocklist. If you wish to append values instead then you can use the [`PATCH` endpoint](#append-to-blocklist).

To use the endpoint, you can provide a `domains` and/or `emails` string array in the body. Any non-duplicate values will be appended to the blocklist.

Omitted values will be ignored. An empty array will [remove all values](#clear-blocklist) from the blocklist.

Example:
```sh
$ curl https://api.no550.com/config/blocklist -s \
	-X PUT \
	-H 'Authorization: API_TOKEN' \
	-H 'Content-Type: application/json' \
	-d '{"domains": ["example.com"], "emails": ["test@example.com"]}'
```

```json
{
	"success": true,
	"message": "Update successful",
	"data": {
		"domains": [
			"example.com"
		],
		"emails": [
			"test@example.com"
		]
	}
}
```

### Clear blocklist

You can use this overwrite endpoint to also clear the blocklist completely. If you provide an empty array then it will remove all values from the blocklist. If you omit an array then it will not be changed, for example, if you provided an empty array for `emails` but not `domains` then we would clear `emails` but leave `domains` untouched.

Example:
```sh
$ curl https://api.no550.com/config/blocklist -s \
	-X PUT \
	-H 'Authorization: API_TOKEN' \
	-H 'Content-Type: application/json' \
	-d '{"emails": []}'
```

```json
{
	"success": true,
	"message": "Update successful",
	"data": {
		"domains": [
			"example.com",
			"example.org"
		],
		"emails": []
	}
}
```

## Delete from blocklist

You can send a `DELETE` to `https://api.no550.com/config/blocklist` in order to delete from your blocklist. With this endpoint, you can delete single or multiple values from your blocklist. To remove all values you will want to use the [`PUT` endpoint](#clear-blocklist).

An empty array and omitted values will be ignored.

Example:
```sh
$ curl https://api.no550.com/config/blocklist -s \
	-X DELETE \
	-H 'Authorization: API_TOKEN' \
	-H 'Content-Type: application/json' \
	-d '{"domains": ["example.com"]}'
```

```json
{
	"success": true,
	"message": "Update successful",
	"data": {
		"domains": [
			"example.org"
		],
		"emails": [
			"test@example.com",
			"test@example.org"
		]
	}
}
```
