
import { Route, Routes } from 'react-router-dom';
import TopicMaster from './TopicMaster';
import DiscussionChatBox from './DiscussionChatBox';
export default function CommunityDiscussionForum
() {
  return (
    <Routes>
        <Route path="topic-master/*" element={<TopicMaster/>} />
        <Route path="discussion-chat-box/*" element={<DiscussionChatBox />} />
    </Routes>
  );
}
    