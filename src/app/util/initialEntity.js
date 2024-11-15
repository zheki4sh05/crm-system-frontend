export function initOrder(){
    return {
        id: 0,
        name: "",
        count: 0,
        code: "",
        dealId: 0,
        price: 0.0
      }
}

export function initTask(){
   return {
  
        id:0,
        name:"",
        deal:0,
        worker:0,
        is_done:false,
        start:0,
        finishAt:0,

      }
}

export function initDeal(){
    return {
        id: 0,
        name: "",
        description: "",
        stageId: 1,
        started: 0,
        organizationName:"",
        customerDto: {
          id: 0,
          email: "",
          surname:"",
          name: "",
          lastname: "",
          address: "",
           phone:""
        },
        orderList: [],
        tasks:[]
      }
}

export function initMoreAboutDeal(){
    return {
        type: "B2C",
        source: 1,
        group: 0,
        stage: 0,
    }
}
// export function initCustomerDto(){
//     return {
        
//     }
// }

