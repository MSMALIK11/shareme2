import React from "react";

import { Modal, useMantineTheme } from "@mantine/core";
import "../auth/login.css";

import "../postShare/postsahre.css";
import PostShare from '../postShare/PostShare'
const ShareModal = ({ opened, setOpened }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
    >
      {/* Modal content */}
      <PostShare />
    
    </Modal>
  );
};

export default ShareModal;
