package com.bxg.registration.mapper;

import com.bxg.registration.pojo.ManageUser;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManageUserMapper {
    //    查询所有
    @Select(" select *" +
            "from ManageUser")
    List<ManageUser> findAllManageUser();

    //    按号查询
    @Select(" select *" +
            "from ManageUser" +
            "where manageUserId = #{manageUserId}")
    ManageUser queryManageUserById(int manageUserId);

    //    增加一个
    @Insert("insert into ManageUser (manageUserRealName, manageUserSex, manageUserBirthday, manageUserProvince," +
            "manageUserCity, manageUserTelephone, manageUserEmail, manageUserQuestion," +
            "manageUserAnswer)" +
            "values (#{manageUserRealName}, #{manageUserSex}, #{manageUserBirthday}, #{manageUserProvince}," +
            "#{manageUserCity}, #{manageUserTelephone}, #{manageUserEmail}, #{manageUserQuestion}," +
            "#{manageUserAnswer})")
    int addManageUser(ManageUser manageUser);

    //    更新一个数据
    @Update("update ManageUser" +
            "set manageUserRealName=#{manageUserRealName}," +
            "    manageUserSex=#{manageUserSex}," +
            "    manageUserBirthday=#{manageUserBirthday}," +
            "    manageUserProvince=#{manageUserProvince}," +
            "    manageUserCity=#{manageUserCity}," +
            "    manageUserTelephone=#{manageUserTelephone}," +
            "    manageUserEmail=#{manageUserEmail}," +
            "    manageUserQuestion=#{manageUserQuestion}," +
            "    manageUserAnswer=#{manageUserAnswer}" +
            "where manageUserId = #{manageUserId}")
    int updateManageUser(ManageUser manageUser);

    //    删除一个数据
    @Delete("delete" +
            "from ManageUser" +
            "where manageUserId = #{manageUserId}")
    int deleteManageUser(int manageUserId);

}
