package com.bxg.registration.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//报名信息表
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplyInformation {
    //普通用户报名信息
    private int applyInformationId;
    private String applyInformationUserName;
    private String applyInformationRegTime;
    private int applyInformationLoginTimes;
    private String applyInformationLastTimes;
    private String applyInformationLasTip;
}
