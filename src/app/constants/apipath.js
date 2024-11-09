const  base="http://localhost:8080/api/v1/";
const api={
    company:{
        url:base.concat("company"),
        create:"/create",
        update:"/update",
        fetch:"/fetch",
    },
    user:{
        url:base.concat("user"),
        register:"/register",
        authenticate:"/authenticate",
        fetch:base.concat("user/"),
        update:base.concat("user/update")
    },
    deal:{
        url:base.concat("deal"),
        create:"/create",
        update:"/update",
        fetch:"/fetch",
    },
    groups:{
        url:base.concat("group"),
        fetchAll:"/fetchAll",
        create:"/create",
        delete:"/delete",
        update:"/update"

    },
    stages:{
        url:base.concat("stage"),
        create:"/create",
        fetchAll:"/fetch"
    },
    stats:{
        url:base.concat("stage"),
        fetch:base.concat("/fetch")
    }
}

export default api;