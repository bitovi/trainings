/* 
Our frontend application needs to fetch some data from an API. 

The server API format:
In case of success: { status: "success", data: RESPONSE_DATA }
In case of error: { status: "error", error: ERROR_MESSAGE }

The types UsersApiResponse and ProductsApiResponse have already
been created, but it will be extremely tedious to build all of them this way.

1) Replace the UsersApiResponse and ProductsApiResponse types with a new generic ApiResponse type that accepts a single parameter, Data, to specify 
each function's generic API response format. The type of Data should be any Entity.

2) mockResponse() parameter and return type is typed as `unknown`. Fix the typing to make it a generic function.
  mockResponse() should have one type parameter and the return type of the function should use the ApiResponse type.
*/

interface Entity {
  id: string;
}

interface User extends Entity {
  name: string;
}

interface Product extends Entity {
  description: string;
}

const mockUsers: User[] = [
  { id: "1", name: "Santa Claus" },
  { id: "2", name: "Jon Doe" },
];
const mockProducts: Product[] = [
  { id: "1", description: "Product 1" },
  { id: "2", description: "Product 2" },
];

/* 1) Replace the UsersApiResponse and ProductsApiResponse types with a new generic ApiResponse type that accepts a single parameter, Data, to specify 
each function's generic API response format. The type of Data should be any Entity.
*/
type UsersApiResponse =
  | {
      status: "success";
      data: User[];
    }
  | {
      status: "error";
      error: string;
    };

type ProductsApiResponse =
  | {
      status: "success";
      data: Product[];
    }
  | {
      status: "error";
      error: string;
    };

type ApiResponse = never; //TODO: remove `never` and add types

/*
2) mockResponse() parameter and return type is typed as `unknown`. Fix the typing to make it a generic function.
  mockResponse() should have one type parameter and the return type of the function should use the ApiResponse type.
*/
function mockResponse(mockData: unknown[]): Promise<unknown> {
  return new Promise((resolve) => {
    resolve({
      status: "success",
      data: mockData,
    });
  });
}

/* 1a) Use the new generic ApiResponse here
 */
async function fetchProducts(): Promise<ProductsApiResponse> {
  return mockResponse(mockProducts);
}

async function fetchUsers(): Promise<UsersApiResponse> {
  return mockResponse(mockUsers);
}

fetchProducts();
fetchUsers();

export {};
