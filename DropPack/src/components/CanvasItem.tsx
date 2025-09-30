import React from 'react';
import { Item } from '../types/Item';

interface CanvasItemProps {
  item: Item;
  onRemove: () => void;
}

const CanvasItem: React.FC<CanvasItemProps> = ({ item, onRemove }) => {
  return (
    <div className="canvas-item">
      <button 
        className="remove-button"
        onClick={onRemove}
        title="Verwijder item"
      >
        ×
      </button>
      <div className="canvas-item-name">{item.name}</div>
      <div className="canvas-item-price">€{item.price.toFixed(2)}</div>
    </div>
  );
};

export default CanvasItem;

