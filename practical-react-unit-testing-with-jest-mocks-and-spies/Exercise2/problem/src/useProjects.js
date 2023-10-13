import {useEffect, useState} from "react";
export function useProjects(developerId) {
    // const { projectList: availableProjects } = useProjects();
    const [projectList, setProjectList] = useState(null);
    const [developer, setDeveloper] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        // if(!developerList && !developerId && availableProjects) {
            // const fetchAllProjects = async () => {
            //     const response = await getAllProjects();
            //     if(!response.data){
            //         setError({status: response.error.status, message: response.error.message})
            //     } else {
            //         const developers = cloneDeep(response.data);
            //         for(let dev of developers) {
            //             if(dev.current_projects.length > 0){
            //                 const devPrj = [...dev.current_projects];
            //                 const projectResp = await getCurrentProjectInfo(devPrj, availableProjects);
                            
            //                 dev.current_projects = projectResp;
            //             }
            //         }
            //         setDeveloperList(developers);
            //     }
            // }

        //     fetchAllDevelopers();
            
        // }
        // if(projectId && availableProjects) {
        //     const fetchDeveloper = async() => {
        //         const devResp = await getDeveloper(developerId);

        //         if(!devResp.data){
        //             setError({status: devResp.error.status, message: devResp.error.message})
        //         } else {
        //             const projectResp = await getCurrentProjectInfo(devResp.data.current_projects, availableProjects);
        //             const selected = {
        //                 ...devResp.data,
        //                 current_projects: projectResp
        //             };
                    
        //             setDeveloper(selected);
        //         }
        //     }
        //     fetchDeveloper();

        // }
    }, [developerId])

return { error, projectList }
}