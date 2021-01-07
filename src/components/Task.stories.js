import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task'
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const OverflowText = Template.bind({});
OverflowText.args = {
  task: {
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl lectus, lobortis ac varius ut, blandit congue justo. Mauris id dolor efficitur, porttitor libero id, aliquam est. Cras nec massa placerat, mollis tellus et, feugiat nunc. Sed at placerat ante. Nam lobortis erat eu sollicitudin tempus. Cras quis dui vel nisi pretium molestie molestie vel arcu. Duis euismod id eros et scelerisque.',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};