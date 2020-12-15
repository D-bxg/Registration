package com.bxg.registration.controller;

import com.bxg.registration.pojo.News;
import com.bxg.registration.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/News")
public class NewsController {
    @Autowired
    private NewsService newsService;

    //       获取全部
    @CrossOrigin
    @GetMapping("/getAllNews")
    public List<News> getAll() {
        System.out.println("测试是否已经找到");
        List<News> newsList = newsService.findAllNews();
        System.out.println(newsList);
        return newsList;
    }

    //       根据merchID找
    @GetMapping("/getNewsById/{id}")
    public News getById(@PathVariable("id") Integer newsId) {
        News news = newsService.queryNewsById(newsId);
        return news;
    }

    //       保存
    @PostMapping("/saveNews")
    public String save(@RequestBody News news) {
        int flag = newsService.addNews(news);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/updateNews")
    public String update(@RequestBody News news) {
        int flag = newsService.updateNews(news);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }

    @PostMapping("/deleteNews/{id}")
    public String delete(@PathVariable("id") Integer newsId) {
        int flag = newsService.deleteNews(newsId);
        if (flag == 0) {
            return "error";
        } else {
            return "success";
        }
    }
}
