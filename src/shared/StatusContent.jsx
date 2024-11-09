
import {  CircularProgress, LinearProgress } from "@mui/material";

import React from "react";
import statusTypes from "../app/constants/statusTypes";


class StatusContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      result,
      errorDomain,
      errorCode,
      loadingType,
      successType,
      errorType,
      failedText,
    } = this.props;

    switch (result) {
      case statusTypes.failed:
        // switch (errorType) {
        // case "alert":{
        //   return <CustomizedSnackbars
        //   message={failedText}
        //   type="error"
        // />
        // }
         
        //   default: {
        //     return (
        //       <CustomCreateAlert
        //         messageText={`${this.props.failedText}. ${getErrorName(
        //           errorDomain | "",
        //           errorCode
        //         )}`}
        //         duration={2000}
        //         userSeverity={statusTypes.error}
        //       />
        //     );
        //   }
        // }

      case statusTypes.loading:{
        switch (loadingType) {
         
            case "linear":{
              return <LinearProgress />
            }
         
            default: {
              return (
                <CircularProgress />
              );
            }
          }
      }
      case statusTypes.succeeded:
        // switch(successType){
        //     case "none":{
        //       return <></>
        //     }
        //     case "alert":{
        //       return <CustomizedSnackbars
        //         message="Приглашение отправлено!"
        //         type="success"
        //       />
        //     }
        //     default:{
        //         return (
        //             <CustomCreateAlert
        //               messageText={this.props.successText}
        //               duration={2000}
        //               userSeverity="success"
        //             />
        //           );
        //     }
        // }
        break;
      default:
        return null;
    }
  }
}

export default StatusContent;