import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Item } from '../types/Item';
import DraggableItem from './DraggableItem';

interface LeftPanelProps {
  items: Item[];
  onAddItem: (name: string, price: number) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ items, onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.trim() && itemPrice.trim()) {
      const price = parseFloat(itemPrice);
      if (!isNaN(price) && price > 0) {
        onAddItem(itemName.trim(), price);
        setItemName('');
        setItemPrice('');
      }
    }
  };

  return (
    <div className="left-panel">
      <h2 className="panel-title">Items Toevoegen</h2>
      
      <form className="add-item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Naam:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Voer item naam in..."
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="itemPrice">Prijs (€):</label>
          <input
            type="number"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            required
          />
        </div>
        
        <button type="submit" className="add-button">
          Item Toevoegen
        </button>
      </form>

      <div className="items-list">
        <h3 style={{ marginBottom: '1rem', color: '#555' }}>
          Beschikbare Items ({items.length})
        </h3>
        {items.length === 0 ? (
          <p style={{ color: '#999', fontStyle: 'italic', textAlign: 'center' }}>
            Voeg items toe om te beginnen
          </p>
        ) : (
          items.map((item) => (
            <DraggableItem key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default LeftPanel;

