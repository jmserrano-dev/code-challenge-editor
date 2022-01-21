import React from "react";

import { EditorCanvas } from "./editor-canvas/editor-canvas";
import { BoxLayout, PageLayout } from "../../components/layout";
import { EditorToolbar } from "./editor-toolbar/editor-toolbar";

const Editor = () => {
  return (
    <BoxLayout data-testid="editor">
      <PageLayout>
        <EditorToolbar />
        <EditorCanvas />
      </PageLayout>
    </BoxLayout>
  );
};

export { Editor };
