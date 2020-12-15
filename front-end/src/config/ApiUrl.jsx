// let ipUrl = "http://localhost:8080//api/";
let ipUrl = "http://211.64.41.227:8080//api/";
let tableUrl = {
  Announcement: ipUrl + "Announcement",
  ApplyInformation: ipUrl + "ApplyInformation",
  GeneralUser: ipUrl + "GeneralUser",
  ManageUser: ipUrl + "ManageUser",
  News: ipUrl + "News",
};

let ApiUrl = {
  //GeneralUser
  getAllGeneralUser: tableUrl.GeneralUser + "/getAllGeneralUser",
  getGeneralUserById: tableUrl.GeneralUser + "/getGeneralUserById",
  getGeneralUserByName: tableUrl.GeneralUser + "/getGeneralUserByName",
  saveGeneralUser: tableUrl.GeneralUser + "/saveGeneralUser",
  updateGeneralUser: tableUrl.GeneralUser + "/updateGeneralUser",
  deleteGeneralUser: tableUrl.GeneralUser + "/deleteGeneralUser",
};
export default ApiUrl;
