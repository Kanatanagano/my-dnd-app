import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface DraggableItemProps {
  id: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-4 bg-blue-500 text-white rounded mb-2 cursor-grab">
      {id}
    </div>
  );
};

export default DraggableItem;