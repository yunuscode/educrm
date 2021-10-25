## User Route Requests

#### 1. User Sign In Post Endpoint

##### Request

`SERVER_URL/users/sign_in`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| user_username | User's username (5, 32, unique) | String | true |
| user_password | User's password (5, 128) | String | true |

##### Response status codes

`201 - Token created successfully`
`400 - Username || Password is incorrect`
`500 - Internal Server Error`
