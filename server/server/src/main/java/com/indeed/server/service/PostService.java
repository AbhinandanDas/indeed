package com.indeed.server.service;

import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;

public interface PostService {
    public PostModel savePost(PostDTO postDTO);
}
