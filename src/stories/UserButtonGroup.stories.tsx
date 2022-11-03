import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserButtonGroup } from '../ui/components/UserButtonGroup'

export default {
  title: 'Example/UserButtonGroup',
  component: UserButtonGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserButtonGroup>;

const Template: ComponentStory<typeof UserButtonGroup> = (args) => <UserButtonGroup {...args} />;

export const Unfold = Template.bind({});
Unfold.args = {
  unfold: true,
};

export const Folding = Template.bind({});
Folding.args = {
  unfold: false,
};

export const MicOn = () => {
  const [micStatue, setMicStatue] = React.useState(true);
  const micHandler = () => {
      setMicStatue(!micStatue);
  };
  return <UserButtonGroup userName='Anonymous' micOn={micStatue} micClick={micHandler}/>
}

export const MicOff = Template.bind({});
MicOff.args = {
  unfold: false,
  backgroundColor: "#000000",
  userName: 'Anonymous',
  micOn: false,
};