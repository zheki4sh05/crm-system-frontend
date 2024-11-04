import DialogEntityProvider from "../../processes/contextProvider/api/DialogEntityProvider";
import CustomTable from "../Customtable";
import EntityOverviewWindow from "../EntityOverviewWindow";

function MyTaskTable() {
    return ( 

        <Box>
          
           
        <DialogEntityProvider>
        <CustomTable
          rows={myTasks}
          tableTitle="Таблица задач"
          tableHeadCells={[
            {
              id: "id",
              numeric: true,
              disablePadding: true,
              label: "ID",
            },
            {
              id: "name",
              numeric: false,
              disablePadding: false,
              label: "Название",
            },
            {
              id: "stageName",
              numeric: true,
              disablePadding: false,
              label: "Стадия",
            },
            {
              id: "deadline",
              numeric: false,
              disablePadding: false,
              label: "Срок",
            },
    
            {
              id: "dealName",
              numeric: false,
              disablePadding: false,
              label: "Сделка",
            }
          ]}
        />

        <AsideDrawer
        widthLevel={1}
          anchorProp="right"
          content={<EntityOverviewWindow
          
            accordionBodyType={"myTasks"}
            title={"Мои задачи"}

          />}
        />
      </DialogEntityProvider>
    </Box> 


     );
}

export default MyTaskTable;