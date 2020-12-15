package com.bxg.registration.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//新闻表
@Data
@NoArgsConstructor
@AllArgsConstructor
public class News {
    private  int newsId;
    private String manageName;
    private String newsType;
    private String newsTitle;
    private String newsContent;
}
