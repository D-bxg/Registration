let ipUrl = "http://localhost:8080/api/";
// let ipUrl = "http://211.64.41.227:8080//api/";
let tableUrl = {
  Announcement: ipUrl + "Announcement",
  ApplyInformation: ipUrl + "ApplyInformation",
  GeneralUser: ipUrl + "GeneralUser",
  ManageUser: ipUrl + "ManageUser",
  News: ipUrl + "News",
};

let ApiUrl = {
  // GeneralUser
  getAllGeneralUser: tableUrl.GeneralUser + "/getAllGeneralUser",
  getGeneralUserById: tableUrl.GeneralUser + "/getGeneralUserById",
  getGeneralUserByName: tableUrl.GeneralUser + "/getGeneralUserByName",
  saveGeneralUser: tableUrl.GeneralUser + "/saveGeneralUser",
  updateGeneralUser: tableUrl.GeneralUser + "/updateGeneralUser",
  deleteGeneralUser: tableUrl.GeneralUser + "/deleteGeneralUser",
  // News
  getAllNews: tableUrl.News + "/getAllNews",
  getNewsById: tableUrl.News + "/getNewsById",
  getNewsByName: tableUrl.News + "/getNewsByName",
  saveNews: tableUrl.News + "/saveNews",
  updateNews: tableUrl.News + "/updateNews",
  deleteNews: tableUrl.News + "/deleteNews",
  // ManageUser
  getAllManageUser: tableUrl.ManageUser + "/getAllManageUser",
  getManageUserById: tableUrl.ManageUser + "/getManageUserById",
  getManageUserByName: tableUrl.ManageUser + "/getManageUserByName",
  saveManageUser: tableUrl.ManageUser + "/saveManageUser",
  updateManageUser: tableUrl.ManageUser + "/updateManageUser",
  deleteManageUser: tableUrl.ManageUser + "/deleteManageUser",
  // Announcement
  getAllAnnouncement: tableUrl.Announcement + "/getAllAnnouncement",
  getAnnouncementById: tableUrl.Announcement + "/getAnnouncementById",
  getAnnouncementByName: tableUrl.Announcement + "/getAnnouncementByName",
  saveAnnouncement: tableUrl.Announcement + "/saveAnnouncement",
  updateAnnouncement: tableUrl.Announcement + "/updateAnnouncement",
  deleteAnnouncement: tableUrl.Announcement + "/deleteAnnouncement",
  // ApplyInformation
  getAllApplyInformation: tableUrl.ApplyInformation + "/getAllApplyInformation",
  getApplyInformationById: tableUrl.ApplyInformation + "/getApplyInformationById",
  getApplyInformationByName: tableUrl.ApplyInformation + "/getApplyInformationByName",
  saveApplyInformation: tableUrl.ApplyInformation + "/saveApplyInformation",
  updateApplyInformation: tableUrl.ApplyInformation + "/updateApplyInformation",
  deleteApplyInformation: tableUrl.ApplyInformation + "/deleteApplyInformation",
};
export default ApiUrl;
