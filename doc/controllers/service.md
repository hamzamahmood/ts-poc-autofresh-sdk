# Service

```ts
const serviceController = new ServiceController(client);
```

## Class Name

`ServiceController`


# Get Status

```ts
async getStatus(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceStatus`](../../doc/models/service-status.md)

## Example Usage

```ts
async () => {
  try {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result, ...httpResponse } = await serviceController.getStatus();
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

