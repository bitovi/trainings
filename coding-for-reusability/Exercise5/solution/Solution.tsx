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

type ApiResponse<Data extends Entity> =
  | {
      status: "success";
      data: Data[];
    }
  | {
      status: "error";
      error: string;
    };

function mockResponse<Data extends Entity>(
  mockData: Data[]
): Promise<ApiResponse<Data>> {
  return new Promise((resolve) => {
    resolve({
      status: "success",
      data: mockData,
    });
  });
}

async function fetchProducts(): Promise<ApiResponse<Product>> {
  return mockResponse(mockProducts);
}

async function fetchUsers(): Promise<ApiResponse<User>> {
  return mockResponse(mockUsers);
}

fetchProducts();
fetchUsers();
