package com.bxg.registration.pojo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//普通用户表
@ApiModel("用户实体")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GeneralUser {
    //普通用户信息
    @ApiModelProperty("用户 id")
    private int generalUserId;
    private String generalUserName;
    private String generalUserPassword;
    private String generalUserType;
    private String generalUserRegTime;
    private String generalUserLoginTimes;
    private String generalUserLastTimes;
    private String generalUserLasTip;
}
