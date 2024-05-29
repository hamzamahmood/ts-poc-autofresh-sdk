# User

```ts
const userController = new UserController(client);
```

## Class Name

`UserController`


# Get User

```ts
async getUser(
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`User`](../../doc/models/user.md)

## Example Usage

```ts
async () => {
  try {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result, ...httpResponse } = await userController.getUser();
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
  } catch (error) {
    if (error instanceof ApiError) {
      // @ts-expect-error: unused variables
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};
```

