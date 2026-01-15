import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input } from '../../ui/shared';

const DiscussionChatBox: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <PageLayout title="Community and Discussion Forum">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-[#6366F1] text-white px-4 py-1 rounded-full text-sm font-semibold">Discussion Chat Box</div>
        <span className="text-blue-700 font-bold text-sm">Active Users: 12</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-150 border-orange-200 border rounded-xl overflow-hidden bg-gray-50">
        <div className="bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 font-bold text-indigo-900 border-b bg-gray-50">Channels</div>
          <div className="flex-1 overflow-y-auto">
            {['General Announcement', 'Parent-Teacher Meet', 'Sports Updates', 'Technical Support'].map((item, i) => (
              <div key={i} className={`p-4 cursor-pointer hover:bg-orange-50 border-b ${i === 0 ? 'bg-orange-100 border-r-4 border-r-orange-500' : ''}`}>
                <p className="text-sm font-bold text-gray-700"># {item}</p>
                <p className="text-xs text-gray-500">Last message 2m ago</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col bg-white">
          <div className="p-4 border-b flex justify-between items-center shadow-sm">
            <span className="font-bold text-indigo-800"># General Announcement</span>
            <Button icon="pi pi-info-circle" className="p-button-text p-button-secondary" />
          </div>
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-[#f8f9fa]">
            <div className="flex flex-col items-start max-w-[70%]">
              <span className="text-xs font-bold text-blue-700 ml-1">Admin (System)</span>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm">
                Welcome to the official discussion forum. Please maintain decorum.
              </div>
              <span className="text-[10px] text-gray-400 mt-1 ml-1">10:00 AM</span>
            </div>
            <div className="flex flex-col items-end self-end max-w-[70%]">
              <span className="text-xs font-bold text-blue-600 mr-1">You</span>
              <div className="bg-blue-700 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
                Got it, thank you!
              </div>
              <span className="text-[10px] text-gray-400 mt-1 mr-1">10:05 AM</span>
            </div>
          </div>
          <div className="p-4 bg-white border-t flex gap-3 items-center">
            <Button icon="pi pi-paperclip" className="p-button-text p-button-secondary" />
            <Input placeholder="Write a message..." className="flex-1" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button icon="pi pi-send" style={{ backgroundColor: '#6366F1', border: 'none' }} onClick={() => setMessage('')} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DiscussionChatBox;