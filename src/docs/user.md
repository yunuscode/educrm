## User Route Requests

#### 1. User Sign In Post Endpoint

##### Request

`SERVER_URL/users/sign_in`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| username | User's username (5, 32, unique) | String | true |
| password | User's password (5, 128) | String | true |

##### Response status codes

`201 - Token created successfully`
`400 - Username || Password is incorrect`
`500 - Internal Server Error`

#### 2. User Create Post Endpoint

##### Request

`SERVER_URL/users/account`

Headers:
`Content-Type: "application/json"`
`Authorization: "TOKEN"`

Permissions:
`Admin`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| username | User's username (5, 32, unique) | String | true |
| password | User's password (5, 128) | String | true |
| name | User's name (3, 64) | String | true |
| gender | User's gender ("male", "female") | String | true |

##### Response status codes

`201 - Created successfully`
`400 - Username || Password || Gender || Name is incorrect`
`400 - Username already exists`
`500 - Internal Server Error`

#### 3. User Get Endpoint

##### Request

`SERVER_URL/users/`

Headers:
`Content-Type: "application/json"`
`Authorization: "TOKEN"`

Permissions:
`Admin`

Query body:
| Name | Default | Type | Required |
| ----------- | ----------- | ---- | --- |
| limit | 15 | Number | false |
| offset | 0 | Number | false |

##### Response status codes

`200 - OK`
`500 - Internal Server Error`
