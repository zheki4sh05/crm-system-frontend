import { Box, Button, CircularProgress, Divider, Grid2, Typography } from "@mui/material";

import CreateCompany from "./CreateCompany";
import CustomCreateAlert from './../CustomCreateAlert';

import CompanyInformation from "./CompanyInformation";
function AboutCompany() {
 
  return (
    <Box>
      <Grid2 container spacing={1}>
        <Grid2 item xs={7}>
          <Typography variant="subtitle1" gutterBottom>
            Ваше место работы:
          </Typography>
          <Box sx={{ mb: 1 }}>
            {userInCompany.name == "" ? (
              <Typography>Вы ни где не работаете</Typography>
            ) : (
              <>
              
                <Typography variant="h4" gutterBottom>
                  {userInCompany.name}
                </Typography>{" "}
                <Button size="small" sx={{ mr: 1 }} variant="outlined" onClick={handleOpenTabsAboutCompany}>

                  {open ? "Скрыть" : "Подробнее"}
                </Button>
              </>
            )}
          </Box>

          <Divider textAlign="right"></Divider>
          {isWorked ? (
            <>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Ваша роль:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {userInCompany.currentRole == "admin"
                    ? "Основатель компании"
                    : "Работник компании"}
                </Typography>
              </Box>
              <Divider textAlign="right"></Divider>

              {
                  isCreared ? 
                  <CustomCreateAlert
                
                  messageText="Вы успешно создали компанию!"
                  duration={6000}
                  userSeverity="success"

                  /> :
                  <></>
                }{
                  fetchingResult
                }

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                  alignItems: "flex-end",
                }}
              >
                

               
                {userInCompany.currentRole == "admin" ?
                    <Button variant="outlined" size="small" color="error" onClick={handleDeligateCompany}>
                    Передать компанию
                    </Button> :
                     <Button variant="outlined" size="small" color="error" onClicl={handleRetireFromCompany} >
                     Уволиться
                   </Button>
                }
               
              </Box>
            </>
          ) : (
            <Box sx={{ mt: 1 }}>
              <CreateCompany handleCreate={handleWork} />
            </Box>
          )}
        </Grid2>
        <Grid2 item xs={5}>
          {
            open ? 
            // <CustomTabPanel  content={{
            //   tabNames: ["О компании", "Сотрудники", ],
            // }}>
              
            //     <Typography>
            //       Hello
            //     </Typography>
            //   </CustomTabPanel>
            <CompanyInformation/>
              :
              null
          }
         

        </Grid2>
      </Grid2>
      <Grid2 container spacing={1}>
        <Grid2 item xs={4}></Grid2>
      </Grid2>
 
    </Box>
  );
}

export default AboutCompany;