package com.bxg.registration.mapper;

import com.bxg.registration.pojo.ApplyInformation;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplyInformationMapper {
    //    查询所有
    @Select("select *" +
            "from ApplyInformation")
    List<ApplyInformation> findAllApplyInformation();

    //    按号查询
    @Select("select *" +
            "from ApplyInformation" +
            "where applyInformationId = #{applyInformationId}")
    ApplyInformation queryApplyInformationById(int applyInformationId);

    //    增加一个
    @Insert(" insert into ApplyInformation (applyInformationUserName, applyInformationRegTime, applyInformationLoginTimes," +
            "      applyInformationLastTimes, applyInformationLasTip)" +
            "values (#{applyInformationUserName}, #{applyInformationRegTime}, #{applyInformationLoginTimes}," +
            "#{applyInformationLastTimes}, #{applyInformationLasTip})")
    int addApplyInformation(ApplyInformation applyInformation);

    //    更新一个数据
    @Update("update ApplyInformation" +
            "set applyInformationUserName=#{applyInformationUserName}," +
            "    applyInformationRegTime=#{applyInformationRegTime}," +
            "    applyInformationLoginTimes=#{applyInformationLoginTimes}," +
            "    applyInformationLastTimes=#{applyInformationLastTimes}," +
            "    applyInformationLasTip=#{applyInformationLasTip}" +
            "where applyInformationId = #{applyInformationId}")
    int updateApplyInformation(ApplyInformation applyInformation);

    //    删除一个数据
    @Delete("delete" +
            "from ApplyInformation" +
            "where applyInformationId = #{applyInformationId}")
    int deleteApplyInformation(int applyInformationId);
}
