Documented API Functions:
======

The api endpoint is at `/api/v1`. All resources are below it.

# User Api Functions:

## /user/create
Creates a user. Returns the corresponding user object.

### in:

#### Method: `POST`

#### Body
```json
{
	"username": "<yourusername>",
	"email": "<your email>",
	"password": "Th1$1$N074G00dP4$$w0rd",
}
```

### out:
200: Everything went ok.
```json
{
	"msg": "User created"
}
```
400: The Username/email is already taken.
```json
{
	"msg": "details about what was wrong"
}
```

## /user/delete/\<username\>/
Deletes a user. Normal users can only delete their own account.

#### in: No body necessary. Client must be authenticated.

## /user/