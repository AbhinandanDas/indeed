package com.indeed.server.service;

import com.indeed.server.dao.PostDao;
import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostDao postDao;

    @Override
    public PostModel savePost(PostDTO postDTO) {
        // populate the values in the model using the setters in the dto.
        PostModel postModel = new PostModel();
        postModel.setProfile(postDTO.getProfile());
        postModel.setDescription(postDTO.getDescription());
        postModel.setSalary(postDTO.getSalary());
        postModel.setTechnology(postDTO.getTechnology());
        postModel.setType(postDTO.getType());
        postModel.setExperience(postDTO.getExperience());

        return postDao.save(postModel);
    }
}