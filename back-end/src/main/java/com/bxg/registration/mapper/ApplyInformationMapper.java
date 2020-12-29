package com.bxg.registration.mapper;

import com.bxg.registration.pojo.ApplyInformation;
import com.bxg.registration.pojo.GeneralUser;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplyInformationMapper {
    //    查询所有
    @Select("select * " +
            "from ApplyInformation")
    List<ApplyInformation> findAllApplyInformation();

    //    按号查询    @Select("select * from GeneralUser where generalUserId=#{generalUserId}")
    @Select("select * " +
            " from ApplyInformation " +
            " where applyInformationId = #{applyInformationId}")
    ApplyInformation queryApplyInformationById(@Param("applyInformationId") int applyInformationId);

    @Select("select * from ApplyInformation where applyInformationUserName=#{applyInformationUserName}")
    List<ApplyInformation> queryApplyInformationByName(String applyInformationUserName);

    //    增加一个
    @Insert(" insert into ApplyInformation (applyInformationUserName, " +
            "applyInformationLasTip)" +
            " values (#{applyInformationUserName}," +
            "  #{applyInformationLasTip})")
    int addApplyInformation(ApplyInformation applyInformation);

    //    更新一个数据
    @Update("update ApplyInformation" +
            " set applyInformationUserName=#{applyInformationUserName}," +
            "    applyInformationLasTip=#{applyInformationLasTip}" +
            " where applyInformationId = #{applyInformationId}")
    int updateApplyInformation(ApplyInformation applyInformation);

    //    删除一个数据
    @Delete("delete" +
            " from ApplyInformation" +
            " where applyInformationId = #{applyInformationId}")
    int deleteApplyInformation(int applyInformationId);
}
