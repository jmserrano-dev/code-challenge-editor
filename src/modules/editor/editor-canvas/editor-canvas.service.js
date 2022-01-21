const useEditorCanvas = (store) => {
  const onSelect = (event, isDragging, box) => {
    if (!isDragging) box.toogleSelection();

    event.preventDefault();
    event.stopPropagation();
  };

  const onUnSelectAll = () => store.unselect();

  return { boxes: store.boxes, onSelect, onUnSelectAll };
};

export { useEditorCanvas };
