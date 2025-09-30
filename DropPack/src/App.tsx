import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import { Item } from './types/Item';
import { exportToPDF } from './utils/pdfExport';

const App: React.FC = () => {
  const [availableItems, setAvailableItems] = useState<Item[]>([]);
  const [canvasItems, setCanvasItems] = useState<Item[]>([]);

  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (item: Item) => {
      setCanvasItems(prev => [...prev, { ...item, id: Date.now() }]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addItem = (name: string, price: number) => {
    const newItem: Item = {
      id: Date.now(),
      name,
      price,
    };
    setAvailableItems(prev => [...prev, newItem]);
  };

  const removeFromCanvas = (id: number) => {
    setCanvasItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return canvasItems.reduce((sum, item) => sum + item.price, 0);
  };

  const handleExportToPDF = () => {
    exportToPDF(canvasItems, calculateTotal());
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <LeftPanel 
          items={availableItems} 
          onAddItem={addItem} 
        />
        <RightPanel
          ref={drop}
          items={canvasItems}
          isOver={isOver}
          onRemoveItem={removeFromCanvas}
          total={calculateTotal()}
          onExport={handleExportToPDF}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
