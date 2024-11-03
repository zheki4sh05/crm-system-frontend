const PathConstants = {
    HOME: "/",

    DEALS: "deals",


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