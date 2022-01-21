import React from "react";
import { observer } from "mobx-react";

import { useStore } from "../../../hooks";
import { Text } from "../../../components/text";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { useColorPicker } from "./editor-toolbar.service";
import { useToolbarActions } from "./editor-toolbar.service";
import { Toolbar, ToolbarGroup } from "../../../components/toolbar";

const EditorToolbar = observer(() => {
  const store = useStore();
  const { color, onChangeColor } = useColorPicker(store);
  const { actions, onUndo, onRedo, onAddBox, onRemoveBoxes } =
    useToolbarActions(store);

  return (
    <Toolbar data-testid="toolbar">
      <ToolbarGroup>
        <Button label="Add Box" onClick={() => onAddBox(color)} />
        <Button
          label="Remove Box"
          disabled={actions.remove.disabled}
          onClick={onRemoveBoxes}
        />

        <Input
          type="color"
          defaultValue={color}
          onChange={(event) => onChangeColor(event.target.value)}
        />
      </ToolbarGroup>

      <Text content={`${store.countSelection} boxes selected`} />

      <ToolbarGroup justify="end">
        <Button
          label="Undo"
          disabled={actions.undo.disabled}
          onClick={onUndo}
        />

        <Button
          label="Redo"
          disabled={actions.redo.disabled}
          onClick={onRedo}
        />
      </ToolbarGroup>
    </Toolbar>
  );
});

export { EditorToolbar };
