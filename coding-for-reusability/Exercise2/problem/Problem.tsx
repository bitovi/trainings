/* 
Our frontend application needs to fetch some data from an API. 

The server API format:
In case of success: { status: "success", data: RESPONSE_DATA }
In case of error: { status: "error", error: ERROR_MESSAGE }
The types UsersApiResponse and ProductApiResponse have already
 been created. But it will be extremely tedious to build all of them this way.
Remove the UsersApiResponse and ProductsApiResponse types and 
create a new ApiResponse type that accepts a single parameter, Data, to specify 
each function's generic API response format. The value of Data should only be allowed 
to be something that extends Entity.
(Bonus) Create a generic fetchMock() function to minimize the code of the fetchProducts() 
and fetchUsers() functions.
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

async function fetchProducts(): Promise<ProductsApiResponse> {
  return new Promise((resolve) =>
    resolve({
      status: "success",
      data: mockProducts,
    })
  );
}

async function fetchUsers(): Promise<UsersApiResponse> {
  return new Promise((resolve) =>
    resolve({
      status: "success",
      data: mockUsers,
    })
  );
}
