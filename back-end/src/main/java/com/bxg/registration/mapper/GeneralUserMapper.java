package com.bxg.registration.mapper;

import com.bxg.registration.pojo.GeneralUser;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GeneralUserMapper {
    //    查询所有
    @Select("select * from GeneralUser")
    List<GeneralUser> findAllGeneralUser();

    //    按号查询
    @Select("select * from GeneralUser where generalUserId=#{generalUserId}")
    GeneralUser queryGeneralUserById(int generalUserId);

    @Select("select * from GeneralUser where generalUserName=#{generalUserName}")
    GeneralUser queryGeneralUserByName(String generalUserName);

    //    增加一个
    @Insert("insert into GeneralUser (generalUserName, generalUserPassword, generalUserType, generalUserRegTime," +
            " generalUserLoginTimes, generalUserLastTimes, generalUserLasTip)" +
            "values (#{generalUserName}, #{generalUserPassword}, #{generalUserType}, #{generalUserRegTime}," +
            "#{generalUserLoginTimes}, #{generalUserLastTimes}, #{generalUserLasTip})")
    int addGeneralUser(GeneralUser generalUser);

    //    更新一个数据
    @Update("update GeneralUser set generalUserName=#{generalUserName}," +
            "generalUserPassword=#{generalUserPassword}," +
            "generalUserType=#{generalUserType}," +
            "generalUserRegTime=#{generalUserRegTime}," +
            "generalUserLoginTimes=#{generalUserLoginTimes}," +
            "generalUserLastTimes=#{generalUserLastTimes}," +
            "generalUserLasTip=#{generalUserLasTip} where generalUserId=#{generalUserId}")
    int updateGeneralUser(GeneralUser generalUser);

    //    删除一个数据
    @Delete("delete from GeneralUser where generalUserId=#{generalUserId}")
    int deleteGeneralUser(int generalUserId);
}
