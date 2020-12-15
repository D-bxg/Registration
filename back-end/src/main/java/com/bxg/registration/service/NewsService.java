package com.bxg.registration.service;

import com.bxg.registration.mapper.NewsMapper;
import com.bxg.registration.pojo.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {
    @Autowired
    private NewsMapper newsMapper;

    public List<News> findAllNews() {
        return newsMapper.findAllNews();
    }

    public News queryNewsById(int newsId) {
        return newsMapper.queryNewsById(newsId);
    }

    public int addNews(News news) {

        return newsMapper.addNews(news);
    }

    public int updateNews(News news) {
        return newsMapper.updateNews(news);
    }

    public int deleteNews(int newsId) {
        return newsMapper.deleteNews(newsId);
    }

}
