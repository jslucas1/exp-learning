import React from 'react';
import SkillUserList from '../components/SkillUserList';
import MySkillList from '../components/MySkillList';

//if admin --> SkillUserList, else (User) --> MySkillsList

const DashboardSkillUser = () => (
  <div>
    <SkillUserList />
  </div>
);

export default DashboardSkillUser;