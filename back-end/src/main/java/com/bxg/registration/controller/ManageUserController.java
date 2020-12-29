package com.bxg.registration.controller;

import com.bxg.registration.pojo.ManageUser;
import com.bxg.registration.service.ManageUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/ManageUser")
public class ManageUserController {
    @Autowired
    private ManageUserService manageUserService;


    @CrossOrigin
    @GetMapping("/getAllManageUser")
    public List<ManageUser> getAll() {
        System.out.println("测试是否已经找到");
        List<ManageUser> manageUserList = manageUserService.findAllManageUser();
        System.out.println(manageUserList);
        return manageUserList;
    }


    @GetMapping("/getManageUserById/{id}")
    public ManageUser getById(@PathVariable("id") Integer manageUserId) {
        ManageUser manageUser = manageUserService.queryManageUserById(manageUserId);
        return manageUser;
    }


    @PostMapping("/saveManageUser")
    public String save(@RequestBody ManageUser manageUser) {
        int flag = manageUserService.addManageUser(manageUser);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/updateManageUser")
    public String update(@RequestBody ManageUser manageUser) {
        int flag = manageUserService.updateManageUser(manageUser);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/deleteManageUser/{id}")
    public String delete(@PathVariable("id") Integer manageUserId) {
        int flag = manageUserService.deleteManageUser(manageUserId);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }
}
