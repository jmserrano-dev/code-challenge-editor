import interact from "interactjs";
import { useEffect, useRef, useState } from "react";

const useDraggable = (callback) => {
  const ref = useRef();
  const [isDragging, setDragging] = useState(false);

  useEffect(() => {
    interact(ref.current).draggable({
      inertia: true,
      autoScroll: false,
      modifiers: [
        interact.modifiers.restrictRect({
          endOnly: true,
          restriction: "parent",
        }),
      ],

      listeners: {
        start() {
          setDragging(true);
        },
        end({ target }) {
          setTimeout(() => setDragging(false));

          const { currentTop, currentLeft } = getCurrentPosition(target);
          callback(currentTop, currentLeft);
        },
        move({ target, dy, dx }) {
          const { currentTop, currentLeft } = getCurrentPosition(target);

          var top = currentTop + dy;
          var left = currentLeft + dx;

          target.style.transform = `translate(${left}px, ${top}px)`;

          target.setAttribute("data-top", top);
          target.setAttribute("data-left", left);
        },
      },
    });
  }, [callback]);

  const getCurrentPosition = (target) => {
    const currentTop = parseFloat(target.getAttribute("data-top")) || 0;
    const currentLeft = parseFloat(target.getAttribute("data-left")) || 0;

    return { currentTop, currentLeft };
  };

  return { ref, isDragging };
};

export { useDraggable };
