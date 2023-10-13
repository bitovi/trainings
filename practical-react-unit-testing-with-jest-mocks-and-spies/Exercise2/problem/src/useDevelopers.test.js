/**
 * @jest-environment jsdom
 */
import { useDevelopers } from "./useDevelopers";
import { renderHook, waitFor } from '@testing-library/react';
import { getAllDevelopers, getDeveloper } from "./endpoints/get-developers";
import { getAllProjects } from "./endpoints/get-projects";
import cloneDeep from "lodash/cloneDeep"

//TODO: mock requests here:
jest.mock("./endpoints/get-developers", () => ({
    getAllDevelopers: jest.fn(),
    getDeveloper: jest.fn()
  }));
  
  jest.mock("./endpoints/get-projects", () => ({
    getAllProjects: jest.fn()
  }));

//mock response data
const getAllDevsResponse = [{
    id: 1,
    given_name: "Juniper",
    family_name: "Francis",
    current_projects: [1, 2]
  },
  {
    id: 2,
    given_name: "Jon",
    family_name: "Smith",
    current_projects: [3]
  },
  {
    id: 4,
    given_name: "Lola",
    family_name: "Jones",
    current_projects: []
  }];

  const getAllProjectsResponse = 
  [
  {
      id: 1,
      name: "Project Alpha"
  },
  {
      id: 2,
      name: "Project Beta"
  },
  {
      id: 3,
      name: "Project Charlie"
  }
];

  const resolvedDevs = [{
    id: 1,
    given_name: "Juniper",
    family_name: "Francis",
    current_projects: [{
      id: 1,
      name: "Project Alpha"
  },
  {
      id: 2,
      name: "Project Beta"
  },]
  },
  {
    id: 2,
    given_name: "Jon",
    family_name: "Smith",
    current_projects: [{
      id: 3,
      name: "Project Charlie"
  }]
  },
  {
    id: 4,
    given_name: "Lola",
    family_name: "Jones",
    current_projects: []
  }];

describe("use developers hook", () => {
  
  it("uses mocked lodash", async () => {
    const { result } = renderHook(() => useDevelopers());
    expect(cloneDeep).toBeCalled();
  });
  it("Should get all of the developers and their current projects from the endpoint", async () => {
    const mockGetAllDevelopers = getAllDevelopers.mockResolvedValue({data: getAllDevsResponse});
    const mockGetAllProjects = getAllProjects.mockResolvedValue({data: getAllProjectsResponse});

    const { result } = renderHook(() => useDevelopers());

      await waitFor(() => {
        expect(result.current.developerList).toEqual(resolvedDevs);
      });

    
    // expect(result.current.developer).toBeFalsy();
    // expect(result.current.error).toBeFalsy();
    
    // expect(mockGetAllDevelopers).toHaveBeenCalledTimes(1);
    // expect(mockGetAllProjects).toHaveBeenCalledTimes(1);
  });

  it("Should return only one developer if a developer id is passed into the hook", async () => {
    const mockGetDeveloper = getDeveloper.mockResolvedValue({data: getAllDevsResponse[0]});
    const mockGetAllProjects = getAllProjects.mockResolvedValue({data: getAllProjectsResponse});

    const { result, waitForNextUpdate } = renderHook(() => useDevelopers(getAllDevsResponse[0].id));

    // await waitForNextUpdate();

    expect(result.current.developerList).toBeFalsy();
    expect(result.current.developer).toEqual(resolvedDevs[0]);
    expect(result.current.error).toBeFalsy();

    expect(mockGetDeveloper).toHaveBeenCalledTimes(1);
    expect(mockGetAllProjects).toHaveBeenCalledTimes(1);
  });
});