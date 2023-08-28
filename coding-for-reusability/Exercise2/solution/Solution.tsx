// interface Entity {
//     id: string;
//   }

//   interface User extends Entity {
//     name: string;
//   }

//   interface Product extends Entity {
//     description: string;
//   }

//   const mockUsers: User[] = [
//     { id: "1", name: "Santa Claus" },
//     { id: "2", name: "Jon Doe" },
//   ];
//   const mockProducts: Product[] = [
//     { id: "1", description: "Product 1" },
//     { id: "2", description: "Product 2" },
//   ];

//   type UsersApiResponse =
//     | {
//         status: "success";
//         data: User[];
//       }
//     | {
//         status: "error";
//         error: string;
//       };

//   type ProductsApiResponse =
//     | {
//         status: "success";
//         data: Product[];
//       }
//     | {
//         status: "error";
//         error: string;
//       };

//   type ApiResponse<Data extends Entity> =
//     | {
//         status: "success";
//         data: Data[];
//       }
//     | {
//         status: "error";
//         error: string;
//       };

//   async function fetchMock<Data extends Entity>(
//     mockData: Data[]
//   ): Promise<ApiResponse<Data>> {
//     return new Promise((resolve) => {
//       resolve({
//         status: "success",
//         data: mockData,
//       });
//     });
//   }

//   async function fetchProducts(): Promise<ApiResponse<Product>> {
//     return fetchMock(mockProducts);
//   }

//   async function fetchUsers(): Promise<ApiResponse<User>> {
//     return fetchMock(mockUsers);
//   }

fetchProducts();
fetchUsers();
