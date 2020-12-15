package com.bxg.registration.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//管理员账号表
@Data@NoArgsConstructor
@AllArgsConstructor
public class ManageUser {
    private int manageUserId;
    private String manageUserRealName;
    private int manageUserSex;
    private String manageUserBirthday;
    private String manageUserProvince;
    private String manageUserCity;
    private int manageUserTelephone;
    private String manageUserEmail;
    private String manageUserQuestion;
    private String manageUserAnswer;
}

