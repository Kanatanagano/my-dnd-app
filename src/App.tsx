import React, { useState } from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DroppableContainer from './components/DroppableContainer';
import DraggableItem from './components/DraggableItem';


const App: React.FC = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
  
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(String(active.id));
        const newIndex = items.indexOf(String(over.id));
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <DroppableContainer>
          {items.map((item) => (
            <DraggableItem key={item} id={item} />
          ))}
        </DroppableContainer>
      </SortableContext>
    </DndContext>
  );
};

export default App;