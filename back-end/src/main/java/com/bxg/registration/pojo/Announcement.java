package com.bxg.registration.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//公告表
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Announcement {
    //公告信息
    private  int announcementId;
    private String manageName;
    private String announcementTitle;
    private String announcementContent;
}
