import React, { useState } from "react";
import useApplicationData from "hooks/useApplicationData";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { state, fetchPhotosByTopic } = useApplicationData()
  const [selectedTopic, setSelectedTopic] = useState(null)

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId)
    fetchPhotosByTopic(topicId)
  }

  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic, index) => (
        <TopicListItem 
          key={topic.id + index} 
          topic={topic} 
          onClick={ () => handleTopicClick(topic.id) }
          isSelected={topic.id === selectedTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
