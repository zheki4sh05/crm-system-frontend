const PathConstants = {
    HOME: "/",
    DEALS: "deals",
    TASKS:"/tasks",
    DOCS:"/documents",
    CUSTOMER:"/customer",
    WORKERS:"/workers"

}

const delimetr = "/"

export function getPageNameByPath(path){
    switch(path){
        case delimetr+PathConstants.DEALS :{
            return "Сделки"
        } 
    }
}

export default PathConstants