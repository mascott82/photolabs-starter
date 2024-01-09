import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic, index) => (
        <TopicListItem key={topic.id + index} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
