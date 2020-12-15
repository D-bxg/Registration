package com.bxg.registration.controller;

import com.bxg.registration.pojo.ApplyInformation;
import com.bxg.registration.service.ApplyInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/ApplyInformation")
public class ApplyInformationController {
    @Autowired
    private ApplyInformationService applyInformationService;

    //       获取全部
    @CrossOrigin
    @GetMapping("/getAllApplyInformation")
    public List<ApplyInformation> getAll() {
        System.out.println("测试是否已经找到");
        List<ApplyInformation> ApplyInformationList = applyInformationService.findAllApplyInformation();
        System.out.println(ApplyInformationList);
        return ApplyInformationList;
    }

    //       根据merchID找
    @GetMapping("/getApplyInformationById/{id}")
    public ApplyInformation getById(@PathVariable("id") Integer applyInformationId) {
        ApplyInformation ApplyInformation = applyInformationService.queryApplyInformationById(applyInformationId);
        return ApplyInformation;
    }

    //       保存
    @PostMapping("/saveApplyInformation")
    public String save(@RequestBody ApplyInformation applyInformation) {
        int flag = applyInformationService.addApplyInformation(applyInformation);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/updateApplyInformation")
    public String update(@RequestBody ApplyInformation applyInformation) {
        int flag = applyInformationService.updateApplyInformation(applyInformation);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/deleteApplyInformation/{id}")
    public String delete(@PathVariable("id") Integer applyInformationId) {
        int flag = applyInformationService.deleteApplyInformation(applyInformationId);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }
}
