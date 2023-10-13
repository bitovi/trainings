import { useEffect, useState } from "react";
import { getAllDevelopers, getDeveloper } from "./endpoints/get-developers";
import { useProjects } from "./useProjects";
// import { getCurrentProjectInfo } from "../utils/helper-functions";
import { cloneDeep } from "lodash"

export function useDevelopers(developerId) {
    const { projectList: availableProjects } = useProjects();
    const [developerList, setDeveloperList] = useState(null);
    const [developer, setDeveloper] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        if(!developerList && !developerId && availableProjects) {
            const fetchAllDevelopers = async () => {
                const response = await getAllDevelopers();
                if(!response.data){
                    setError({status: response.error.status, message: response.error.message})
                } else {
                    const developers = cloneDeep(response.data);
                    for(let dev of developers) {
                        if(dev.current_projects.length > 0){
                            const devPrj = [...dev.current_projects];
                            const projectResp = await getCurrentProjectInfo(devPrj, availableProjects);
                            
                            dev.current_projects = projectResp;
                        }
                    }
                    setDeveloperList(developers);
                }
            }

            fetchAllDevelopers();
            
        }
        if(developerId && availableProjects) {
            const fetchDeveloper = async() => {
                const devResp = await getDeveloper(developerId);

                if(!devResp.data){
                    setError({status: devResp.error.status, message: devResp.error.message})
                } else {
                    const projectResp = await getCurrentProjectInfo(devResp.data.current_projects, availableProjects);
                    const selected = {
                        ...devResp.data,
                        current_projects: projectResp
                    };
                    
                    setDeveloper(selected);
                }
            }
            fetchDeveloper();

        }
    }, [availableProjects, developerList, developerId])

return { error, developerList, developer }
}