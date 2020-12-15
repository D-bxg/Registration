package com.bxg.registration.service;

import com.bxg.registration.mapper.AnnouncementMapper;
import com.bxg.registration.pojo.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementService {
    @Autowired
    private AnnouncementMapper announcementMapper;

    public List<Announcement> findAllAnnouncement() {
        return announcementMapper.findAllAnnouncement();
    }

    public Announcement queryAnnouncementById(int announcementId) {
        return announcementMapper.queryAnnouncementById(announcementId);
    }

    public int addAnnouncement(Announcement announcement) {

        return announcementMapper.addAnnouncement(announcement);
    }

    public int updateAnnouncement(Announcement announcement) {
        return announcementMapper.updateAnnouncement(announcement);
    }

    public int deleteAnnouncement(int announcementId) {
        return announcementMapper.deleteAnnouncement(announcementId);
    }
}
