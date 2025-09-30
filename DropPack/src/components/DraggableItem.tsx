import React from 'react';
import { useDrag } from 'react-dnd';
import { Item } from '../types/Item';

interface DraggableItemProps {
  item: Item;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="item-card"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-price">€{item.price.toFixed(2)}</div>
      </div>
      <div className="drag-icon">⋮⋮</div>
    </div>
  );
};

export default DraggableItem;

