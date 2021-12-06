import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Tabs } from "../components";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <>
      <Tabs {...args} setContentIndex={(id) => setContentIndex(id)} />
      <br />
      <pre>Content: {args.tabsContent[contentIndex]}</pre>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  tabsNames: ["Label 1", "Label 2", "Label 3"],
  tabsContent: [<>1</>, <>2</>, <>3</>],
  condtitionTabIndex: 1,
  disabledTabsIndex: [2],
};

Default.storyName = "Default";
