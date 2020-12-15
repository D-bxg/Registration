package com.bxg.registration.service;

import com.bxg.registration.mapper.ApplyInformationMapper;
import com.bxg.registration.pojo.ApplyInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyInformationService {
    @Autowired
    private ApplyInformationMapper applyInformationMapper;

    public List<ApplyInformation> findAllApplyInformation() {
        return applyInformationMapper.findAllApplyInformation();
    }

    public ApplyInformation queryApplyInformationById(int applyInformationId) {
        return applyInformationMapper.queryApplyInformationById(applyInformationId);
    }

    public int addApplyInformation(ApplyInformation applyInformation) {

        return applyInformationMapper.addApplyInformation(applyInformation);
    }

    public int updateApplyInformation(ApplyInformation applyInformation) {
        return applyInformationMapper.updateApplyInformation(applyInformation);
    }

    public int deleteApplyInformation(int applyInformationId) {
        return applyInformationMapper.deleteApplyInformation(applyInformationId);
    }

}
