package com.bxg.registration.service;

import com.bxg.registration.mapper.GeneralUserMapper;
import com.bxg.registration.pojo.GeneralUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneralUserService {
    @Autowired
    private GeneralUserMapper generalUserMapper;

    public List<GeneralUser> findAllGeneralUser() {
        return generalUserMapper.findAllGeneralUser();
    }

    public GeneralUser queryGeneralUserById(int generalUserId) {
        return generalUserMapper.queryGeneralUserById(generalUserId);
    }

    public GeneralUser queryGeneralUserByName(String generalUserName) {

        return generalUserMapper.queryGeneralUserByName(generalUserName);
    }

    public int addGeneralUser(GeneralUser generalUser) {
        return generalUserMapper.addGeneralUser(generalUser);
    }

    public int updateGeneralUser(GeneralUser generalUser) {
        return generalUserMapper.updateGeneralUser(generalUser);
    }

    public int deleteGeneralUser(int GeneralUserId) {
        return generalUserMapper.deleteGeneralUser(GeneralUserId);
    }
}
