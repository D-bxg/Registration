package com.bxg.registration.controller;


import com.bxg.registration.pojo.Announcement;
import com.bxg.registration.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Announcement")
//@Controller
public class AnnouncementController {
    //       从spring的bean库里面获取
    @Autowired
    private AnnouncementService announcementService;

    //       获取全部
    @CrossOrigin
    @GetMapping("/getAllAnnouncement")
    public List<Announcement> getAll() {
        System.out.println("测试是否已经找到");
        List<Announcement> AnnouncementList = announcementService.findAllAnnouncement();
        System.out.println(AnnouncementList);
        return AnnouncementList;
    }

    //       根据merchID找
    @GetMapping("/getAnnouncementById/{id}")
    public Announcement getById(@PathVariable("id") Integer announcementId) {
        Announcement Announcement = announcementService.queryAnnouncementById(announcementId);
        return Announcement;
    }

    //       保存
    @PostMapping("/saveAnnouncement")
    public String save(@RequestBody Announcement Announcement) {
        int flag = announcementService.addAnnouncement(Announcement);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/updateAnnouncement")
    public String update(@RequestBody Announcement Announcement) {
        int flag = announcementService.updateAnnouncement(Announcement);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/deleteAnnouncement/{id}")
    public String delete(@PathVariable("id") Integer announcementId) {
        int flag = announcementService.deleteAnnouncement(announcementId);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

}
