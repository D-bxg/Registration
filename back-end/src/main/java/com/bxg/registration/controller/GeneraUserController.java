package com.bxg.registration.controller;

import com.bxg.registration.pojo.GeneralUser;
import com.bxg.registration.service.GeneralUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionIdListener;
import java.util.List;

@RestController

@RequestMapping("/api/GeneralUser")
@Api(tags = "一般用户表单", description = "提供用户相关的 Rest API")
public class GeneraUserController {
    @Autowired
    private GeneralUserService generalUserService;


    @CrossOrigin
    @GetMapping("/getAllGeneralUser")
    public List<GeneralUser> getAll() {
        System.out.println("测试是否已经找到");
        List<GeneralUser> generalUserList = generalUserService.findAllGeneralUser();
        System.out.println(generalUserList);
        return generalUserList;
    }


    @GetMapping("/getGeneralUserById/{id}")
    public GeneralUser getById(@PathVariable("id") Integer generalUserId) {
        GeneralUser generalUser = generalUserService.queryGeneralUserById(generalUserId);
        return generalUser;
    }


    @ApiOperation("根据一般用户姓名查找")
    @CrossOrigin
    @PostMapping("/getGeneralUserByName")
    public String getByName(@RequestBody GeneralUser generalUser, HttpSession httpSession) {
        GeneralUser generalUser1 = generalUserService.queryGeneralUserByName(generalUser.getGeneralUserName());
        if (generalUser1.getGeneralUserName().equals(generalUser.getGeneralUserName())) {
            if (generalUser1.getGeneralUserPassword().equals(generalUser.getGeneralUserPassword())) {
                httpSession.setAttribute("user",generalUser1);
                return "success";
            }
        }
        return "";
    }


    @CrossOrigin
    @PostMapping("/saveGeneralUser")
    public String save(@RequestBody GeneralUser generalUser) {
        int flag = generalUserService.addGeneralUser(generalUser);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/updateGeneralUser")
    public String update(@RequestBody GeneralUser generalUser) {
        int flag = generalUserService.updateGeneralUser(generalUser);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/deleteGeneralUser/{id}")
    public String delete(@PathVariable("id") Integer generalUserId) {
        int flag = generalUserService.deleteGeneralUser(generalUserId);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }
}
