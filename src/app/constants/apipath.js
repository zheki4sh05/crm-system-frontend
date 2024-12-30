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
        fetchAll:"/fetchAll"
    },
    stats:{
        url:base.concat("stage"),
        fetch:base.concat("/fetch")
    },
    documents:{
        url:base.concat("document"),
        fetch:base.concat("/fetch"),
        upload:base.concat("/upload"),
        update:base.concat("/update")
    },
    workers:{
        url:base.concat("employee"),
        fetch:base.concat("/fetch"),
    },
    search:{
        url:base.concat("/search"),
    
       
    },
    api:{
        url:base.concat("key"),
        generate:"/generate"
    },
    order:{
        url:base.concat("order"),
        create:"/create"
    }
}

export default api;