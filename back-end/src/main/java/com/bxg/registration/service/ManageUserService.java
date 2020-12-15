package com.bxg.registration.service;

import com.bxg.registration.mapper.ManageUserMapper;
import com.bxg.registration.pojo.ManageUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManageUserService {
    @Autowired
    private ManageUserMapper manageUserMapper;

    public List<ManageUser> findAllManageUser() {
        return manageUserMapper.findAllManageUser();
    }

    public ManageUser queryManageUserById(int manageUserId) {
        return manageUserMapper.queryManageUserById(manageUserId);
    }

    public int addManageUser(ManageUser manageUser) {

        return manageUserMapper.addManageUser(manageUser);
    }

    public int updateManageUser(ManageUser manageUser) {
        return manageUserMapper.updateManageUser(manageUser);
    }

    public int deleteManageUser(int manageUserId) {
        return manageUserMapper.deleteManageUser(manageUserId);
    }
}
