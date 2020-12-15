package com.bxg.registration.mapper;

import com.bxg.registration.pojo.Announcement;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementMapper {
    //    查询所有
    @Select("select *" +
            "from announcement")
    List<Announcement> findAllAnnouncement();

    //    按号查询
    @Select("select *" +
            "from announcement" +
            "where announcementId = #{announcementId}")
    Announcement queryAnnouncementById(int announcementId);

    //    增加一个
    @Insert("insert into announcement (manageName, announcementTitle, announcementContent)\n" +
            "values (#{manageName}, #{announcementTitle}, #{announcementContent})")
    int addAnnouncement(Announcement announcement);

    //    更新一个数据
    @Update("update announcement" +
            "set manageName=#{manageName}," +
            "    announcementTitle=#{announcementTitle}," +
            "    announcementContent=#{announcementContent}" +
            "where announcementId = #{announcementId}")
    int updateAnnouncement(Announcement announcement);

    //    删除一个数据
    @Delete(" delete" +
            "from announcement" +
            "where announcementId = #{announcementId}")
    int deleteAnnouncement(int announcementId);
}
