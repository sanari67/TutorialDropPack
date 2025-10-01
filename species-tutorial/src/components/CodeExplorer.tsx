import React, { useState } from 'react';
import Logo from './Logo';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
}

const CodeExplorer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [fileContent, setFileContent] = useState<string>('');

  // DropPack project structure
  const projectStructure: FileNode = {
    name: 'DropPack',
    type: 'folder',
    children: [
      {
        name: 'package.json',
        type: 'file',
        content: `{
  "name": "droppack-canvas",
  "version": "1.0.0",
  "description": "Drag-and-drop canvas voor accountmanagers om pakketopties samen te stellen",
  "private": true,
  "dependencies": {
    "@types/node": "^16.18.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.0",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "jspdf": "^2.5.1",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "backend": "react-scripts start"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`
      },
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'App.tsx',
            type: 'file',
            content: `import React, { useState } from 'react';
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

export default App;`
          },
          {
            name: 'index.tsx',
            type: 'file',
            content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </React.StrictMode>
);`
          },
          {
            name: 'index.css',
            type: 'file',
            content: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.profile-icon {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.main-content {
  flex: 1;
  display: flex;
  padding: 2rem;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.left-panel {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  height: fit-content;
}

.right-panel {
  flex: 2;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.panel-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
}

.add-item-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #555;
}

.form-group input {
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input[type="number"] {
  -moz-appearance: textfield;
}

.form-group input[type="number"]::-webkit-outer-spin-button,
.form-group input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
}

.add-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;
}

.add-button:hover {
  transform: translateY(-2px);
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.item-card {
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem;
  cursor: grab;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-card:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.item-card:active {
  cursor: grabbing;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-name {
  font-weight: 600;
  color: #333;
}

.item-price {
  color: #667eea;
  font-weight: 500;
}

.drag-icon {
  color: #999;
  font-size: 1.2rem;
}

.canvas-area {
  flex: 1;
  min-height: 400px;
  border: 2px dashed #e1e5e9;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-content: flex-start;
  transition: border-color 0.2s;
}

.canvas-area.drag-over {
  border-color: #667eea;
  background-color: rgba(102, 126, 234, 0.05);
}

.canvas-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 120px;
  position: relative;
  cursor: move;
  transition: transform 0.2s;
}

.canvas-item:hover {
  transform: scale(1.05);
}

.canvas-item-name {
  font-weight: 600;
  font-size: 0.9rem;
}

.canvas-item-price {
  font-size: 0.8rem;
  opacity: 0.9;
}

.remove-button {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-button:hover {
  background: #ff3742;
}

.total-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e1e5e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.export-button {
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.export-button:hover {
  background: #218838;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

.empty-canvas {
  color: #999;
  font-style: italic;
  text-align: center;
  margin: auto;
}

.receipt-section {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e5e9;
}

.receipt-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.receipt-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.receipt-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e1e5e9;
}

.receipt-item:last-child {
  border-bottom: none;
}

.receipt-item .item-name {
  font-weight: 500;
  color: #333;
}

.receipt-item .item-price {
  font-weight: 600;
  color: #667eea;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    padding: 1rem;
  }
  
  .navbar {
    padding: 1rem;
  }
  
  .canvas-area {
    min-height: 300px;
  }
}`
          },
          {
            name: 'components',
            type: 'folder',
            children: [
              {
                name: 'Navbar.tsx',
                type: 'file',
                content: `import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>DropPack Canvas</h1>
      <div className="profile-section">
        <div className="profile-icon">AM</div>
        <span>Account Manager</span>
      </div>
    </nav>
  );
};

export default Navbar;`
              },
              {
                name: 'LeftPanel.tsx',
                type: 'file',
                content: `import React, { useState } from 'react';
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

export default LeftPanel;`
              },
              {
                name: 'RightPanel.tsx',
                type: 'file',
                content: `import React, { forwardRef } from 'react';
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
          className={\`canvas-area \${isOver ? 'drag-over' : ''}\`}
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
                    {itemData.count > 1 ? \`\${itemData.count}x \${itemName}\` : itemName}
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

export default RightPanel;`
              },
              {
                name: 'DraggableItem.tsx',
                type: 'file',
                content: `import React from 'react';
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

export default DraggableItem;`
              },
              {
                name: 'CanvasItem.tsx',
                type: 'file',
                content: `import React from 'react';
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

export default CanvasItem;`
              },
              {
                name: 'Footer.tsx',
                type: 'file',
                content: `import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 DropPack. Alle rechten voorbehouden. | Ontwikkeld door Sandrine Prumpeler</p>
    </footer>
  );
};

export default Footer;`
              }
            ]
          },
          {
            name: 'types',
            type: 'folder',
            children: [
              {
                name: 'Item.ts',
                type: 'file',
                content: `export interface Item {
  id: number;
  name: string;
  price: number;
}`
              }
            ]
          },
          {
            name: 'utils',
            type: 'folder',
            children: [
              {
                name: 'pdfExport.ts',
                type: 'file',
                content: `import jsPDF from 'jspdf';
import { Item } from '../types/Item';

export const exportToPDF = (items: Item[], total: number) => {
  const doc = new jsPDF();
  
  // Titel
  doc.setFontSize(20);
  doc.text('DropPack - Klant Pakket Overzicht', 20, 30);
  
  // Datum
  doc.setFontSize(12);
  doc.text(\`Gegenereerd op: \${new Date().toLocaleDateString('nl-NL')}\`, 20, 45);
  
  // Items lijst
  doc.setFontSize(14);
  doc.text('Items in Pakket:', 20, 65);
  
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
  
  let yPosition = 80;
  Object.entries(itemCounts).forEach(([itemName, itemData]) => {
    doc.setFontSize(12);
    const itemText = itemData.count > 1 
      ? \`\${itemData.count}x \${itemName}\` 
      : itemName;
    doc.text(itemText, 30, yPosition);
    doc.text(\`€\${itemData.totalPrice.toFixed(2)}\`, 150, yPosition);
    yPosition += 15;
  });
  
  // Totaal
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont('Helvetica', 'bold');
  doc.text('Totaal:', 30, yPosition);
  doc.text(\`€\${total.toFixed(2)}\`, 150, yPosition);
  
  // Footer
  doc.setFontSize(10);
  doc.setFont('Helvetica', 'normal');
  doc.text('© 2024 DropPack - Alle rechten voorbehouden | Ontwikkeld door Sandrine Prumpeler', 20, 280);
  
  // Download
  doc.save(\`droppack-pakket-\${new Date().toISOString().split('T')[0]}.pdf\`);
};`
              }
            ]
          }
        ]
      },
      {
        name: 'public',
        type: 'folder',
        children: [
          {
            name: 'index.html',
            type: 'file',
            content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="DropPack Canvas - Drag and drop canvas voor accountmanagers"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>DropPack Canvas</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`
          }
        ]
      },
      {
        name: 'README.md',
        type: 'file',
        content: `# DropPack Canvas

Een drag-and-drop canvas applicatie voor accountmanagers om interactief pakketopties samen te stellen met klanten.

## Functionaliteiten

- **Navbar**: Profiel van de accountmanager met naam
- **Linker Panel**: Handmatig items toevoegen met naam en prijs
- **Rechter Panel**: Drag-and-drop canvas waar items naar gesleept kunnen worden
- **Prijsberekening**: Automatische optelsom van alle items
- **PDF Export**: Exporteer het pakket naar een PDF bestand
- **Responsive Design**: Werkt op desktop en mobiel

## Technologieën

- React 18 met TypeScript
- React DnD voor drag-and-drop functionaliteit
- jsPDF voor PDF export
- CSS Grid en Flexbox voor layout
- Modern CSS met gradients en animaties

## Installatie

1. Installeer dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start de development server:
\`\`\`bash
npm start
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in je browser

## Gebruik

1. **Items Toevoegen**: Voer een naam en prijs in het linker panel in
2. **Items Slepen**: Sleep items van links naar het rechter canvas
3. **Items Verwijderen**: Klik op de × knop op items in het canvas
4. **PDF Export**: Klik op "Exporteer PDF" om het pakket te downloaden

## Project Structuur

\`\`\`
src/
├── components/          # React componenten
│   ├── Navbar.tsx      # Navigatiebalk
│   ├── LeftPanel.tsx   # Linker panel voor items
│   ├── RightPanel.tsx  # Rechter panel (canvas)
│   ├── DraggableItem.tsx # Sleepbare items
│   ├── CanvasItem.tsx  # Items in canvas
│   └── Footer.tsx      # Footer
├── types/              # TypeScript types
│   └── Item.ts         # Item interface
├── utils/              # Utility functies
│   └── pdfExport.ts    # PDF export functionaliteit
├── App.tsx             # Hoofdcomponent
├── index.tsx           # Entry point
└── index.css           # Styling
\`\`\`

## Browser Ondersteuning

- Chrome (aanbevolen)
- Firefox
- Safari
- Edge

## Licentie

© 2024 DropPack. Alle rechten voorbehouden.`
      }
    ]
  };

  const renderFileTree = (node: FileNode, path: string = '') => {
    const fullPath = path ? `${path}/${node.name}` : node.name;
    
    return (
      <div key={fullPath}>
        <div 
          className={`file-tree-item ${node.type} ${selectedFile === fullPath ? 'active' : ''}`}
          onClick={() => {
            if (node.type === 'file' && node.content) {
              setSelectedFile(fullPath);
              setFileContent(node.content);
            }
          }}
        >
          {node.type === 'folder' ? '📁' : '📄'} {node.name}
        </div>
        {node.children && (
          <div style={{ marginLeft: '1rem' }}>
            {node.children.map(child => renderFileTree(child, fullPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <section className="section">
        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Logo />
        </div>
        
        <h2>DropPack Code Explorer</h2>
        <p>
          Verken de volledige codebase van het DropPack project. 
          Klik op bestanden om de code te bekijken en leer hoe elk onderdeel werkt.
        </p>
        
        <div className="code-explorer">
          <div className="explorer-header">
            <div className="explorer-title">DropPack Project Structure</div>
            <div style={{ fontSize: '0.9rem', color: '#999' }}>
              {selectedFile ? `Bekijkt: ${selectedFile}` : 'Selecteer een bestand om code te bekijken'}
            </div>
          </div>
          <div className="explorer-content">
            <div className="file-tree">
              {renderFileTree(projectStructure)}
            </div>
            <div className="code-viewer">
              {fileContent ? (
                <div className="code-content">{fileContent}</div>
              ) : (
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  height: '100%', 
                  color: '#666',
                  fontSize: '1.1rem'
                }}>
                  Selecteer een bestand om de code te bekijken
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeExplorer;
