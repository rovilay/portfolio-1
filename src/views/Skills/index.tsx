import * as React from 'react';

import './Skills.scss';
import { ISkillGroup } from '../../types';
import { SKILL_GROUPS } from '../../settings/index';

interface ISkillStackProps {
}

const renderSkillGroup = (skillGroup: ISkillGroup): React.ReactElement => {
  return (
        <div className="skill-list">
          <div className="skill-list__title">
            {skillGroup.icon &&
              <i className='material-icons'>
                {skillGroup.icon}
              </i>
            }
              <span>{skillGroup.title}</span>
          </div>
          <ul className="skill-list__list">
            {skillGroup.skills.map((skill: string) => {
              return (<li className="skill-list__list-item">{skill}</li>);
            })}
          </ul>
        </div>
  );
}

const Skills: React.FC<ISkillStackProps> = () => {
  return (
    <div>
      <h1 className='center'>Skills & Technologies</h1>

      <div className="skill-card">
        <div className="skill-content">
          {SKILL_GROUPS.map((skillGroup: ISkillGroup): React.ReactElement => {
            return renderSkillGroup(skillGroup);
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
