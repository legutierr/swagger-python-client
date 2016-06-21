# SwaggerBlendedHubApiExplorer.UsersApi

All URIs are relative to *http://52.20.52.101:8000/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersPkGet**](UsersApi.md#usersPkGet) | **GET** /users/{pk}/ | get data for the User account with value pk.
[**usersPkPut**](UsersApi.md#usersPkPut) | **PUT** /users/{pk}/ | Update User data.
[**usersPost**](UsersApi.md#usersPost) | **POST** /users/ | Create an User.


<a name="usersPkGet"></a>
# **usersPkGet**
> User usersPkGet(pk, sessionkey)

get data for the User account with value pk.

### Example
```javascript
var SwaggerBlendedHubApiExplorer = require('swagger-blended-hub-api-explorer/');

var apiInstance = new SwaggerBlendedHubApiExplorer.UsersApi()

var pk = 789; // {Integer} package pk.

var sessionkey = "sessionkey_example"; // {String} user session.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersPkGet(pk, sessionkey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **Integer**| package pk. | 
 **sessionkey** | **String**| user session. | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPkPut"></a>
# **usersPkPut**
> usersPkPut(pk, sessionkey, user)

Update User data.

### Example
```javascript
var SwaggerBlendedHubApiExplorer = require('swagger-blended-hub-api-explorer/');

var apiInstance = new SwaggerBlendedHubApiExplorer.UsersApi()

var pk = 789; // {Integer} package pk.

var sessionkey = "sessionkey_example"; // {String} user session.

var user = new SwaggerBlendedHubApiExplorer.EditUser(); // {EditUser} the content of the request used to update user data.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.usersPkPut(pk, sessionkey, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **Integer**| package pk. | 
 **sessionkey** | **String**| user session. | 
 **user** | [**EditUser**](EditUser.md)| the content of the request used to update user data. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> User usersPost(user)

Create an User.

### Example
```javascript
var SwaggerBlendedHubApiExplorer = require('swagger-blended-hub-api-explorer/');

var apiInstance = new SwaggerBlendedHubApiExplorer.UsersApi()

var user = new SwaggerBlendedHubApiExplorer.NewUser(); // {NewUser} the content of the request used to create user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersPost(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**NewUser**](NewUser.md)| the content of the request used to create user. | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

