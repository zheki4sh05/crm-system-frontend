export const PathConstants = {
    HOME: "/",
    DEALS: "/deals",
    TASKS:"/tasks",
    DOCS:"/documents",
    CUSTOMER:"/customer",
    WORKERS:"/workers"

}


export function getPageNameByPath(path){

    switch(path){
        case PathConstants.DEALS :{
            return "Сделки"
        } 
        case PathConstants.DOCS:{
             return "Документы"
        }
        case PathConstants.WORKERS:{
            return "Сотрудники"
       }
    }
}

export default PathConstants