import { Box } from "@mui/material";
import RadioButtonsGroup from "../../shared/RadioButtonsGroup";
import { useSelector } from "react-redux";
import { getGroups } from "../../app/slices/groupsSlice";
import { getStages } from "../../app/slices/stagesSlice";
import { getDealTypes } from "../../app/slices/typeDeal";
import Deal from './../../entity/Deal';
import { getWorkers } from "../../app/slices/workersSlice";
import { useEffect, useState } from "react";

function WorkerDeals({list,activeWorker}) {



    const groups = useSelector(getGroups)
    const stages = useSelector(getStages)
    const dealTypes = useSelector(getDealTypes)
    const workers = useSelector(getWorkers)

    const [group, setGroup] = useState(groups[0].id);
  const [stage, setStage] = useState(stages[0].id);
  const [type, setType] = useState(dealTypes[0].id);
  const getGroupsByDealType = (type) => {
    return groups.filter((item) => item.type == type);
  };
  const getStagesByGroup = (value) => {
    return stages.filter((item) => item.groupId == value);
  };

  const changeTypeHandler = (value) => {
   
    setType(value);

    let list = getGroupsByDealType(value)

    if(list.length>0){
      setGroup(list[0].id)
    }else{
      setGroup(0)
    }
    
  };

  useEffect(()=>{

    let list = getStagesByGroup(group)

    if(list.length>0){
      setStage(list[0].id)
    }else{
      setStage(0)
    }

  

  },[group])

 

  const changeStageHandler = (value) => {
   
    setStage(value);
   
  };
  const handleChangeGroup = (value) => {
    
    setGroup(value);

  };

  

const getList=(stageId, list)=>{
  console.log("---------")
  console.log(stageId)
  console.log(list)
  const l = list.filter(item=>item.stageId==stageId)
  console.log(l)
  console.log("---------")
  return l;
}

    return ( 
    <Box>

<RadioButtonsGroup
            title={"Тип сделки"}
            items={dealTypes}
            handleChange={changeTypeHandler}
            initialValue={type}
          />

            <RadioButtonsGroup
                title={"Группа"}
                items={getGroupsByDealType(type)}
                handleChange={handleChangeGroup}
                initialValue={group}
              />

        
             
              <RadioButtonsGroup
                title={"Стадия"}
                items={getStagesByGroup(group)}
                handleChange={changeStageHandler}
                initialValue={stage}
              />

              {
                   getList(stage,list).map((item,index)=>(
                       

                          <Deal
                          key={index}
                          type={"overview"}
                          deal={item}
                          workers={workers}
                          activeWorker={activeWorker}
                          moveHandler={()=>{}}
                          stages={stages}
                          
                          />
                        
                        
                    ))
                
              }

    </Box> 
    
);
}

export default WorkerDeals;