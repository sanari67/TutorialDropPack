import React, { forwardRef } from 'react';
import { Item } from '../types/Item';
import CanvasItem from './CanvasItem';

interface RightPanelProps {
  items: Item[];
  isOver: boolean;
  onRemoveItem: (id: number) => void;
  total: number;
  onExport: () => void;
}

const RightPanel = forwardRef<HTMLDivElement, RightPanelProps>(
  ({ items, isOver, onRemoveItem, total, onExport }, ref) => {
    // Groepeer items op naam en tel hoeveelheden
    const itemCounts = items.reduce((acc, item) => {
      if (acc[item.name]) {
        acc[item.name].count += 1;
        acc[item.name].totalPrice += item.price;
      } else {
        acc[item.name] = {
          count: 1,
          price: item.price,
          totalPrice: item.price
        };
      }
      return acc;
    }, {} as Record<string, { count: number; price: number; totalPrice: number }>);

    return (
      <div className="right-panel">
        <h2 className="panel-title">Klant Pakket Canvas</h2>
        
        <div 
          ref={ref}
          className={`canvas-area ${isOver ? 'drag-over' : ''}`}
        >
          {items.length === 0 ? (
            <div className="empty-canvas">
              Sleep items hierheen om het pakket samen te stellen
            </div>
          ) : (
            items.map((item) => (
              <CanvasItem
                key={item.id}
                item={item}
                onRemove={() => onRemoveItem(item.id)}
              />
            ))
          )}
        </div>

        {/* Kassabon-achtige weergave */}
        {items.length > 0 && (
          <div className="receipt-section">
            <h3>Pakket Overzicht</h3>
            <div className="receipt-items">
              {Object.entries(itemCounts).map(([itemName, itemData]) => (
                <div key={itemName} className="receipt-item">
                  <span className="item-name">
                    {itemData.count > 1 ? `${itemData.count}x ${itemName}` : itemName}
                  </span>
                  <span className="item-price">€{itemData.totalPrice.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="total-section">
          <div className="total-price">
            Totaal: €{total.toFixed(2)}
          </div>
          <button 
            className="export-button"
            onClick={onExport}
            disabled={items.length === 0}
          >
            Exporteer PDF
          </button>
        </div>
      </div>
    );
  }
);

RightPanel.displayName = 'RightPanel';

export default RightPanel;

