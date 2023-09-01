/* 
Our frontend application needs to fetch some data from an API. 

The server API format:
In case of success: { status: "success", data: RESPONSE_DATA }
In case of error: { status: "error", error: ERROR_MESSAGE }

The types UsersApiResponse and ProductsApiResponse have already
been created, but it will be extremely tedious to build all of them this way.

1) Replace the UsersApiResponse and ProductsApiResponse types with a new generic ApiResponse type that accepts a single parameter, Data, to specify 
each function's generic API response format. The value of Data should be constrained
to be something that extends Entity.

2) mockResponse() parameter and return type is typed as `any`. Fix the typing to make it a generic function
  mockResponse() should have one type parameter and the return type of the function should use the ApiResponse type
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

//These two types are very similar, and would be a good case for turning into a generic
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

type ApiResponse<> = {}; //TODO: Implementation details

async function mockResponse(mockData: any[]): Promise<any> {
  return new Promise((resolve) => {
    resolve({
      status: "success",
      data: mockData,
    });
  });
}

async function fetchProducts(): Promise<ProductsApiResponse> {
  return mockResponse(mockProducts);
}

async function fetchUsers(): Promise<UsersApiResponse> {
  return mockResponse(mockUsers);
}

fetchProducts();
fetchUsers();

export {};
