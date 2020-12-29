package com.bxg.registration.mapper;

import com.bxg.registration.pojo.News;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsMapper {
    //    查询所有
    @Select("select *" +
            " from News")
    List<News> findAllNews();

    //    按号查询
    @Select("select *" +
            " from News" +
            " where newsId = #{newsId}")
    News queryNewsById(int newsId);

    //    增加一个
    @Insert(" insert into News (  newsTitle, newsContent)" +
            " values ( #{newsTitle}, #{newsContent})")
    int addNews(News news);

    //    更新一个数据
    @Update(" update News" +
            " set " +

            "    newsTitle=#{newsTitle}," +
            "    newsContent=#{newsContent}" +
            " where newsId = #{newsId}")
    int updateNews(News news);

    //    删除一个数据
    @Delete("delete" +
            " from News" +
            " where newsId = #{newsId}")
    int deleteNews(int newsId);

}
