import React from 'react';

const TutorialSection: React.FC = () => {
  return (
    <div className="tutorial-section" style={{ 
      background: 'linear-gradient(135deg, #ff8a50 0%, #da1b60 100%)',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <section className="tutorial-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="container" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ 
            color: '#8B4513',
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            🍂 DropPack Tutorial - Stap voor Stap
          </h2>
          <p style={{ 
            color: '#A0522D',
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            Leer hoe je een complete drag-and-drop applicatie maakt met React, TypeScript en React DnD
          </p>
          
          {/* Stap 1: Project Setup */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>1</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🚀 Project Setup & Installation
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een nieuw React project maken en alle benodigde dependencies installeren.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 1.1: Maak een nieuw React project
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`npx create-react-app droppack-canvas --template typescript
cd droppack-canvas`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Dit maakt een nieuwe React app met TypeScript ondersteuning.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 1.2: Installeer dependencies
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`npm install react-dnd react-dnd-html5-backend jspdf
npm install --save-dev @types/react-dnd`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> react-dnd voor drag-and-drop, jspdf voor PDF export.
              </p>
            </div>
          </div>

          {/* Stap 2: Package.json */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>2</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              📦 Package.json Configuratie
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De package.json aanpassen met de juiste dependencies.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 2.1: Vervang package.json
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                overflow: 'auto',
                border: '2px solid #8B4513',
                maxHeight: '300px'
              }}>
{`{
  "name": "droppack-canvas",
  "version": "1.0.0",
  "description": "Drag-and-drop canvas voor accountmanagers",
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
  }
}`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Dit definieert alle dependencies en scripts voor ons project.
              </p>
            </div>
          </div>

          {/* Stap 3: TypeScript Types */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>3</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🏷️ TypeScript Types - Item.ts
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een TypeScript interface maken voor onze items.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 3.1: Maak de types folder
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`mkdir src/types`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Maakt een folder voor TypeScript type definities.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 3.2: Maak Item.ts
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/types/Item.ts
export interface Item {
  id: number;
  name: string;
  price: number;
}`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Dit definieert de structuur van een item met id, naam en prijs.
              </p>
            </div>
          </div>

          {/* Stap 4: App.tsx - Deel 1 */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>4</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎯 App.tsx - Deel 1: Imports & State
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De basis structuur van onze hoofdcomponent maken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 4.1: Imports toevoegen
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/App.tsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Item } from './types/Item';`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> useState voor state management, useDrop voor drag-and-drop, Item voor types.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 4.2: State definiëren
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`const App: React.FC = () => {
  // State voor beschikbare items
  const [availableItems, setAvailableItems] = useState<Item[]>([]);
  
  // State voor items in het canvas
  const [canvasItems, setCanvasItems] = useState<Item[]>([]);`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Twee arrays: één voor beschikbare items, één voor items in het canvas.
              </p>
            </div>
          </div>

          {/* Stap 5: App.tsx - Deel 2 */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>5</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎯 App.tsx - Deel 2: Drop Functionaliteit
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Drop functionaliteit toevoegen voor het canvas.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 5.1: useDrop hook
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Drop functionaliteit voor het canvas
const [{ isOver }, drop] = useDrop({
  accept: 'item',
  drop: (item: Item) => {
    setCanvasItems(prev => [...prev, item]);
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
  }),
});`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> accept: 'item' accepteert alleen items, drop voegt item toe aan canvas.
              </p>
            </div>
          </div>

          {/* Stap 6: App.tsx - Deel 3 */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>6</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎯 App.tsx - Deel 3: JSX Return
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De JSX return statement maken met het canvas.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 6.1: Basis JSX structuur
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`return (
  <div style={{ padding: '20px' }}>
    <h1>DropPack Canvas</h1>
    
    <div
      ref={drop}
      className={isOver ? 'drag-over' : ''}
      style={{
        minHeight: '300px',
        border: '2px dashed #ccc',
        borderRadius: '8px',
        padding: '20px',
        background: isOver ? '#f0f8ff' : '#fafafa',
        marginTop: '20px'
      }}
    >`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> ref=&#123;drop&#125; koppelt drop functionaliteit, isOver verandert styling.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 6.2: Canvas content
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`      <h3>Canvas - Sleep items hierheen</h3>
      {canvasItems.length === 0 ? (
        <p>Geen items in canvas</p>
      ) : (
        canvasItems.map((item) => (
          <div key={item.id} style={{ 
            background: '#667eea', 
            color: 'white', 
            padding: '10px', 
            margin: '5px',
            borderRadius: '5px',
            display: 'inline-block'
          }}>
            {item.name} - €{item.price}
          </div>
        ))
      )}
    </div>
  </div>
);`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Toont items in canvas, map() loopt door alle items, key is verplicht.
              </p>
            </div>
          </div>

          {/* Stap 7: Index.tsx */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>7</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🚀 Index.tsx - DnD Provider
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De DndProvider toevoegen zodat drag-and-drop werkt.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 7.1: Vervang index.tsx
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/index.tsx
import React from 'react';
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
);`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> DndProvider omhult de app, HTML5Backend zorgt voor drag-and-drop functionaliteit.
              </p>
            </div>
          </div>

          {/* Stap 8: DraggableItem Component */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>8</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎯 DraggableItem Component
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een component maken dat sleepbaar is.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 8.1: Maak components folder
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`mkdir src/components`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Maakt een folder voor alle React componenten.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 8.2: DraggableItem.tsx - Imports
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/components/DraggableItem.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { Item } from '../types/Item';

interface DraggableItemProps {
  item: Item;
}`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> useDrag maakt elementen sleepbaar, interface definieert props.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 8.3: useDrag hook
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> type: 'item' matcht met accept: 'item', isDragging voor styling.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 8.4: JSX Return
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`  return (
    <div
      ref={drag}
      style={{
        background: '#f8f9fa',
        border: '2px solid #e1e5e9',
        borderRadius: '8px',
        padding: '1rem',
        cursor: isDragging ? 'grabbing' : 'grab',
        opacity: isDragging ? 0.5 : 1,
        margin: '5px',
        display: 'inline-block'
      }}
    >
      <div>{item.name}</div>
      <div>€{item.price.toFixed(2)}</div>
    </div>
  );
};

export default DraggableItem;`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> ref=&#123;drag&#125; koppelt drag functionaliteit, opacity verandert tijdens slepen.
              </p>
            </div>
          </div>

          {/* Stap 9: Test */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>9</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🧪 Test de Basis Functionaliteit
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De applicatie testen om te zien of alles werkt.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 9.1: Start de server
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`npm start`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Start de development server op localhost:3000.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 9.2: Test functionaliteiten
              </h5>
              <ul style={{ color: '#A0522D', fontSize: '1rem', paddingLeft: '2rem' }}>
                <li>Controleer of de app laadt zonder errors</li>
                <li>Kijk of het canvas zichtbaar is</li>
                <li>Test of de drag-and-drop functionaliteit werkt</li>
              </ul>
            </div>
          </div>

          {/* Stap 10: Items Toevoegen Functionaliteit */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>10</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              ➕ Items Toevoegen Functionaliteit
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Functionaliteit toevoegen om nieuwe items te maken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 10.1: addItem functie
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg deze functie toe aan App.tsx (binnen de App component)
const addItem = (name: string, price: number) => {
  const newItem: Item = {
    id: Date.now(),  // Unieke ID gebaseerd op timestamp
    name,
    price,
  };
  setAvailableItems(prev => [...prev, newItem]);
};`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Date.now() geeft unieke ID, spread operator voegt item toe aan array.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 10.2: Form state
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg deze state toe aan App.tsx
const [itemName, setItemName] = useState('');
const [itemPrice, setItemPrice] = useState('');

// Form submit handler
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (itemName.trim() && itemPrice.trim()) {
    const price = parseFloat(itemPrice);
    if (!isNaN(price) && price > 0) {
      addItem(itemName.trim(), price);
      setItemName('');
      setItemPrice('');
    }
  }
};`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> trim() verwijdert spaties, parseFloat() converteert naar number, form reset na toevoegen.
              </p>
            </div>
          </div>

          {/* Stap 11: Form UI */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>11</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              📝 Form UI Toevoegen
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een form toevoegen om nieuwe items te maken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 11.1: Form JSX
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg dit toe in de return statement (voor de canvas div)
<form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', background: '#f8f9fa' }}>
  <div style={{ marginBottom: '10px' }}>
    <label>Item Naam:</label>
    <input
      type="text"
      value={itemName}
      onChange={(e) => setItemName(e.target.value)}
      placeholder="Voer item naam in..."
      required
      style={{ marginLeft: '10px', padding: '5px' }}
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <label>Prijs (€):</label>
    <input
      type="number"
      value={itemPrice}
      onChange={(e) => setItemPrice(e.target.value)}
      placeholder="0.00"
      min="0"
      step="0.01"
      required
      style={{ marginLeft: '10px', padding: '5px' }}
    />
  </div>
  <button type="submit" style={{ padding: '10px 20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '5px' }}>
    Item Toevoegen
  </button>
</form>`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Controlled inputs met value en onChange, required voor validatie.
              </p>
            </div>
          </div>

          {/* Stap 12: DraggableItem Import */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>12</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🔗 DraggableItem Import
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> DraggableItem importeren en beschikbare items tonen.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 12.1: Import toevoegen
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg deze import toe bovenaan App.tsx
import DraggableItem from './components/DraggableItem';`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Importeert de DraggableItem component die we eerder hebben gemaakt.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 12.2: Beschikbare items tonen
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg dit toe in de return statement (na het form, voor de canvas)
<div style={{ margin: '20px', padding: '20px', background: '#e9ecef' }}>
  <h3>Beschikbare Items ({availableItems.length})</h3>
  {availableItems.length === 0 ? (
    <p>Voeg items toe om te beginnen</p>
  ) : (
    availableItems.map((item) => (
      <DraggableItem key={item.id} item={item} />
    ))
  )}
</div>`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Toont aantal items, map() loopt door array, key is verplicht voor React.
              </p>
            </div>
          </div>

          {/* Stap 13: Items Verwijderen */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>13</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🗑️ Items Verwijderen uit Canvas
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Functionaliteit toevoegen om items uit het canvas te verwijderen.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 13.1: removeFromCanvas functie
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg deze functie toe aan App.tsx
const removeFromCanvas = (id: number) => {
  setCanvasItems(prev => prev.filter(item => item.id !== id));
};`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> filter() verwijdert item met matching ID uit de array.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 13.2: Canvas items met remove button
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Vervang de canvas items mapping met:
{canvasItems.map(item => (
  <div key={item.id} style={{ 
    background: '#667eea', 
    color: 'white', 
    padding: '10px', 
    margin: '5px',
    borderRadius: '5px',
    display: 'inline-block',
    position: 'relative'
  }}>
    <button 
      onClick={() => removeFromCanvas(item.id)}
      style={{
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        background: '#ff4757',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        cursor: 'pointer'
      }}
    >
      ×
    </button>
    {item.name} - €{item.price}
  </div>
))}`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> position: 'relative' en 'absolute' voor button positioning, × is Unicode X symbool.
              </p>
            </div>
          </div>

          {/* Stap 14: Prijsberekening */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>14</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              💰 Prijsberekening
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De totale prijs van alle items in het canvas berekenen.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 14.1: calculateTotal functie
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg deze functie toe aan App.tsx
const calculateTotal = () => {
  return canvasItems.reduce((sum, item) => sum + item.price, 0);
};`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> reduce() telt alle prijzen op, 0 is de startwaarde.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 14.2: Totaal weergave
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Voeg dit toe na de canvas div
{canvasItems.length > 0 && (
  <div style={{ 
    margin: '20px', 
    padding: '20px', 
    background: '#28a745', 
    color: 'white',
    borderRadius: '5px',
    textAlign: 'center'
  }}>
    <h3>Totaal: €{calculateTotal().toFixed(2)}</h3>
  </div>
)}`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> && operator toont alleen als er items zijn, toFixed(2) toont 2 decimalen.
              </p>
            </div>
          </div>

          {/* Stap 15: PDF Export */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>15</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              📄 PDF Export Functionaliteit
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een PDF export functie maken met jsPDF.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 15.1: Maak utils folder
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`mkdir src/utils`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Maakt een folder voor utility functies.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 15.2: Maak pdfExport.ts
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                overflow: 'auto',
                border: '2px solid #8B4513',
                maxHeight: '400px'
              }}>
{`// src/utils/pdfExport.ts
import jsPDF from 'jspdf';
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
  
  let yPosition = 80;
  items.forEach((item) => {
    doc.setFontSize(12);
    doc.text(item.name, 30, yPosition);
    doc.text(\`€\${item.price.toFixed(2)}\`, 150, yPosition);
    yPosition += 15;
  });
  
  // Totaal
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont('Helvetica', 'bold');
  doc.text('Totaal:', 30, yPosition);
  doc.text(\`€\${total.toFixed(2)}\`, 150, yPosition);
  
  // Download
  doc.save(\`droppack-pakket-\${new Date().toISOString().split('T')[0]}.pdf\`);
};`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> jsPDF maakt PDF, setFontSize() voor tekstgrootte, save() downloadt bestand.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 15.3: PDF export in App.tsx
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Import bovenaan App.tsx
import { exportToPDF } from './utils/pdfExport';

// Functie voor PDF export
const handleExportToPDF = () => {
  exportToPDF(canvasItems, calculateTotal());
};

// Voeg button toe in de totaal sectie:
<button 
  onClick={handleExportToPDF}
  disabled={canvasItems.length === 0}
  style={{
    padding: '10px 20px',
    background: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px'
  }}
>
  Exporteer PDF
</button>`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> disabled voorkomt export bij lege canvas, onClick roept export functie aan.
              </p>
            </div>
          </div>

          {/* Stap 16: Navbar Component */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>16</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🧭 Navbar Component
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een navigatiebalk component maken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 16.1: Maak Navbar.tsx
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>DropPack Canvas</h1>
    </nav>
  );
};

export default Navbar;`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Simpele navigatiebalk met gradient achtergrond en titel.
              </p>
            </div>
          </div>

          {/* Stap 17: LeftPanel Component */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>17</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              📋 LeftPanel Component - Deel 1
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een linker panel maken voor het toevoegen van items.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 17.1: Maak LeftPanel.tsx - Imports
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/components/LeftPanel.tsx
import React, { useState } from 'react';
import { Item } from '../types/Item';
import DraggableItem from './DraggableItem';

interface LeftPanelProps {
  availableItems: Item[];
  onAddItem: (name: string, price: number) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ availableItems, onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Interface definieert props, useState voor form state management.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 17.2: Form handler
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.trim() && itemPrice.trim()) {
      const price = parseFloat(itemPrice);
      if (!isNaN(price) && price > 0) {
        onAddItem(itemName.trim(), price);
        setItemName('');
        setItemPrice('');
      }
    }
  };`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> preventDefault() voorkomt page reload, onAddItem callback naar parent.
              </p>
            </div>
          </div>

          {/* Stap 18: LeftPanel JSX */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>18</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              📋 LeftPanel Component - Deel 2
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De JSX return voor LeftPanel afmaken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 18.1: Return statement
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                overflow: 'auto',
                border: '2px solid #8B4513',
                maxHeight: '500px'
              }}>
{`  return (
    <div style={{
      background: '#f8f9fa',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '1rem'
    }}>
      <h3 style={{ marginTop: 0, color: '#333' }}>Items Toevoegen</h3>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Item Naam:
          </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Voer item naam in..."
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Prijs (€):
          </label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
        >
          Item Toevoegen
        </button>
      </form>

      <h4>Beschikbare Items ({availableItems.length})</h4>
      <div style={{ minHeight: '200px', border: '1px dashed #ccc', padding: '1rem', borderRadius: '4px' }}>
        {availableItems.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
            Voeg items toe om te beginnen
          </p>
        ) : (
          availableItems.map((item) => (
            <DraggableItem key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default LeftPanel;`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Volledige form met styling, beschikbare items lijst met DraggableItem components.
              </p>
            </div>
          </div>

          {/* Stap 19: RightPanel Component */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>19</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎯 RightPanel Component - Deel 1
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Het rechter panel maken waar items worden gedropt.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 19.1: Maak RightPanel.tsx - Imports
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/components/RightPanel.tsx
import React from 'react';
import { useDrop } from 'react-dnd';
import { Item } from '../types/Item';
import CanvasItem from './CanvasItem';
import { exportToPDF } from '../utils/pdfExport';

interface RightPanelProps {
  canvasItems: Item[];
  onRemoveFromCanvas: (id: number) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ canvasItems, onRemoveFromCanvas }) => {`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> useDrop hook voor drop functionaliteit, CanvasItem voor individuele items.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 19.2: Drop functionaliteit
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (item: Item) => {
      // Item wordt toegevoegd aan canvas (dit wordt door parent component afgehandeld)
      console.log('Item dropped:', item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const calculateTotal = () => {
    return canvasItems.reduce((sum, item) => sum + item.price, 0);
  };

  const handleExportToPDF = () => {
    exportToPDF(canvasItems, calculateTotal());
  };`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> accept: 'item' matcht met DraggableItem type, isOver voor visuele feedback.
              </p>
            </div>
          </div>

          {/* Stap 20: RightPanel JSX */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>20</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎯 RightPanel Component - Deel 2
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De JSX return voor RightPanel afmaken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 20.1: Return statement
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                overflow: 'auto',
                border: '2px solid #8B4513',
                maxHeight: '500px'
              }}>
{`  return (
    <div style={{
      background: '#f8f9fa',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '1rem',
      minHeight: '400px'
    }}>
      <h3 style={{ marginTop: 0, color: '#333' }}>Drop Canvas</h3>
      
      <div
        ref={drop}
        style={{
          minHeight: '300px',
          border: isOver ? '3px dashed #28a745' : '3px dashed #ccc',
          borderRadius: '8px',
          padding: '1rem',
          background: isOver ? '#f8fff8' : '#fff',
          transition: 'all 0.3s ease'
        }}
      >
        {canvasItems.length === 0 ? (
          <p style={{ 
            textAlign: 'center', 
            color: '#666', 
            fontStyle: 'italic',
            marginTop: '100px'
          }}>
            Sleep items hierheen om je pakket samen te stellen
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {canvasItems.map((item) => (
              <CanvasItem 
                key={item.id} 
                item={item} 
                onRemove={onRemoveFromCanvas}
              />
            ))}
          </div>
        )}
      </div>

      {canvasItems.length > 0 && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          background: '#28a745', 
          color: 'white',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>
            Totaal: €{calculateTotal().toFixed(2)}
          </h4>
          <button 
            onClick={handleExportToPDF}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'white',
              color: '#28a745',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            📄 Exporteer PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default RightPanel;`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> ref=&#123;drop&#125; koppelt drop zone, isOver geeft visuele feedback, CanvasItem voor items.
              </p>
            </div>
          </div>

          {/* Stap 21: CanvasItem Component */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>21</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎨 CanvasItem Component
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een component maken voor items in het canvas met remove functionaliteit.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 21.1: Maak CanvasItem.tsx
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                overflow: 'auto',
                border: '2px solid #8B4513',
                maxHeight: '400px'
              }}>
{`// src/components/CanvasItem.tsx
import React from 'react';
import { Item } from '../types/Item';

interface CanvasItemProps {
  item: Item;
  onRemove: (id: number) => void;
}

const CanvasItem: React.FC<CanvasItemProps> = ({ item, onRemove }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'relative',
      minWidth: '150px',
      textAlign: 'center'
    }}>
      <button
        onClick={() => onRemove(item.id)}
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          background: '#ff4757',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ×
      </button>
      
      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
        {item.name}
      </h4>
      <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>
        €{item.price.toFixed(2)}
      </p>
    </div>
  );
};

export default CanvasItem;`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> position: 'relative' en 'absolute' voor remove button, gradient styling voor mooie look.
              </p>
            </div>
          </div>

          {/* Stap 22: Footer Component */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>22</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🦶 Footer Component
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een simpele footer component maken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 22.1: Maak Footer.tsx
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      marginTop: 'auto'
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        © 2024 DropPack Canvas. Alle rechten voorbehouden.
      </p>
    </footer>
  );
};

export default Footer;`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Simpele footer met copyright tekst en gradient styling.
              </p>
            </div>
          </div>

          {/* Stap 23: App.tsx Updaten */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>23</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🔄 App.tsx Updaten met Nieuwe Componenten
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> App.tsx updaten om alle nieuwe componenten te gebruiken.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 23.1: Nieuwe imports
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                overflow: 'auto',
                border: '2px solid #8B4513'
              }}>
{`// Vervang alle imports in App.tsx met:
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Item } from './types/Item';
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import './index.css';`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Alle component imports en DndProvider voor drag-and-drop functionaliteit.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 23.2: Nieuwe App component
              </h5>
              <pre style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                overflow: 'auto',
                border: '2px solid #8B4513',
                maxHeight: '400px'
              }}>
{`const App: React.FC = () => {
  const [availableItems, setAvailableItems] = useState<Item[]>([]);
  const [canvasItems, setCanvasItems] = useState<Item[]>([]);

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

  const handleDrop = (item: Item) => {
    setCanvasItems(prev => [...prev, { ...item, id: Date.now() }]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ 
          display: 'flex', 
          flex: 1, 
          gap: '1rem',
          padding: '1rem',
          background: '#f5f5f5'
        }}>
          <LeftPanel 
            availableItems={availableItems} 
            onAddItem={addItem} 
          />
          <RightPanel 
            canvasItems={canvasItems} 
            onRemoveFromCanvas={removeFromCanvas}
          />
        </div>
        <Footer />
      </div>
    </DndProvider>
  );
};

export default App;`}
              </pre>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> DndProvider wrapper, flexbox layout, component props voor data flow.
              </p>
            </div>
          </div>

          {/* Stap 24: CSS Styling */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>24</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              🎨 CSS Styling Toevoegen
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Mooie CSS styling toevoegen aan index.css.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 24.1: Maak index.css
              </h5>
              <div style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                border: '2px solid #8B4513',
                whiteSpace: 'pre-wrap'
              }}>
{`/* src/index.css */
* {
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Drag and drop styling */
.draggable-item {
  cursor: grab;
  transition: transform 0.2s ease;
}

.draggable-item:hover {
  transform: scale(1.05);
}

.draggable-item:active {
  cursor: grabbing;
}

/* Canvas styling */
.canvas-item {
  transition: all 0.3s ease;
}

.canvas-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Button styling */
button {
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

/* Responsive design */
@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
  
  .left-panel, .right-panel {
    width: 100%;
  }
}`}
              </div>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> CSS reset, font families, transitions voor smooth animations, responsive design.
              </p>
            </div>
          </div>

          {/* Stap 25: Public/index.html */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>25</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              📄 Public/index.html Aanpassen
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> De HTML titel en meta tags aanpassen.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 25.1: Update public/index.html
              </h5>
              <div style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                border: '2px solid #8B4513',
                whiteSpace: 'pre-wrap'
              }}>
{`<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#667eea" />
    <meta name="description" content="DropPack Canvas - Drag and Drop Pakket Samensteller" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>DropPack Canvas</title>
  </head>
  <body>
    <noscript>Je hebt JavaScript nodig om deze app te gebruiken.</noscript>
    <div id="root"></div>
  </body>
</html>`}
              </div>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Nederlandse taal, aangepaste titel en description, theme-color voor mobile browsers.
              </p>
            </div>
          </div>

          {/* Stap 26: tsconfig.json */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>26</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              ⚙️ TypeScript Configuratie
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> TypeScript configuratie toevoegen.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 26.1: Maak tsconfig.json
              </h5>
              <div style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                border: '2px solid #8B4513',
                whiteSpace: 'pre-wrap'
              }}>
{`{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}`}
              </div>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> TypeScript configuratie voor React project, strict mode voor betere type checking.
              </p>
            </div>
          </div>

          {/* Stap 27: README.md */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>27</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              📚 README.md Documentatie
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Een uitgebreide README maken voor het project.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 27.1: Maak README.md
              </h5>
              <div style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
                border: '2px solid #8B4513',
                whiteSpace: 'pre-wrap'
              }}>
{`# DropPack Canvas

Een moderne React applicatie voor het samenstellen van pakketten met drag-and-drop functionaliteit.

## 🚀 Functionaliteiten

- **Drag & Drop Interface**: Sleep items van de linker panel naar het canvas
- **Item Management**: Voeg nieuwe items toe met naam en prijs
- **Prijsberekening**: Automatische berekening van totaalprijs
- **PDF Export**: Exporteer je pakket als PDF
- **Responsive Design**: Werkt op desktop en mobile
- **TypeScript**: Volledige type safety

## 🛠️ Technologieën

- **React 18** - UI library
- **TypeScript** - Type safety
- **React DnD** - Drag and drop functionaliteit
- **jsPDF** - PDF generatie
- **HTML5 Backend** - Native drag and drop

## 📦 Installatie

\`\`\`bash
npm install
\`\`\`

## 🎯 Gebruik

1. Start de development server:
\`\`\`bash
npm start
\`\`\`

2. Open [http://localhost:3000](http://localhost:3000) in je browser

3. **Items Toevoegen**: Vul het formulier in om nieuwe items toe te voegen
4. **Drag & Drop**: Sleep items van links naar het canvas rechts
5. **Items Verwijderen**: Klik op de × knop om items uit het canvas te verwijderen
6. **PDF Export**: Klik op "Exporteer PDF" om je pakket te downloaden

## 📁 Project Structuur

\`\`\`
src/
├── components/
│   ├── CanvasItem.tsx      # Items in canvas
│   ├── DraggableItem.tsx   # Sleepbare items
│   ├── Footer.tsx          # Footer component
│   ├── LeftPanel.tsx       # Linker panel
│   ├── Navbar.tsx          # Navigatie
│   └── RightPanel.tsx      # Rechter panel (canvas)
├── types/
│   └── Item.ts             # TypeScript interfaces
├── utils/
│   └── pdfExport.ts        # PDF export functionaliteit
├── App.tsx                 # Hoofdcomponent
├── index.tsx               # Entry point
└── index.css               # Styling
\`\`\`

## 🔧 Scripts

- \`npm start\` - Start development server
- \`npm build\` - Build voor productie
- \`npm test\` - Run tests

## 📝 Licentie

Dit project is gemaakt voor educatieve doeleinden.`}
              </div>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> Uitgebreide documentatie met installatie, gebruik, structuur en scripts.
              </p>
            </div>
          </div>

          {/* Stap 28: Finale Test */}
          <div className="step" style={{
            background: 'linear-gradient(135deg, #ff8a50 0%, #d2691e 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="step-number" style={{
              background: '#8B4513',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>28</div>
            <h4 style={{ color: '#8B4513', fontSize: '1.8rem', marginBottom: '1rem' }}>
              ✅ Finale Test en Afronding
            </h4>
            <p style={{ color: '#A0522D', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              <strong>Wat we gaan doen:</strong> Het project testen en afronden.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 28.1: Test checklist
              </h5>
              <ul style={{ color: '#A0522D', fontSize: '1rem', paddingLeft: '2rem' }}>
                <li>✅ Start de applicatie met \`npm start\`</li>
                <li>✅ Voeg items toe via het formulier</li>
                <li>✅ Sleep items van links naar rechts</li>
                <li>✅ Verwijder items uit het canvas</li>
                <li>✅ Controleer of de prijsberekening klopt</li>
                <li>✅ Test de PDF export functionaliteit</li>
                <li>✅ Controleer responsive design op mobile</li>
                <li>✅ Controleer of alle componenten correct laden</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ color: '#8B4513', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Stap 28.2: Terminal commands
              </h5>
              <div style={{ 
                background: '#2C1810',
                color: '#FFD700',
                padding: '1.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                border: '2px solid #8B4513',
                whiteSpace: 'pre-wrap'
              }}>
{`# Build het project voor productie
npm run build

# Test de productie build lokaal (optioneel)
npx serve -s build`}
              </div>
              <p style={{ color: '#A0522D', fontSize: '1rem', marginTop: '0.5rem' }}>
                <strong>Uitleg:</strong> npm run build maakt geoptimaliseerde productie versie, serve test deze lokaal.
              </p>
            </div>
          </div>

          {/* Voltooide applicatie */}
          <div style={{
            background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#FFD700', fontSize: '2.5rem', marginBottom: '1rem' }}>
              🎉 GEFELICITEERD!
            </h3>
            <p style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Je hebt de VOLLEDIGE DropPack Canvas applicatie gemaakt!
            </p>
            <p style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '1rem' }}>
              ✅ Alle 15 bestanden zijn compleet!
            </p>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              padding: '1.5rem',
              marginTop: '1.5rem'
            }}>
              <p style={{ color: '#FFD700', fontSize: '1.1rem', marginBottom: '1rem' }}>
                <strong>Je hebt geleerd over:</strong>
              </p>
              <ul style={{ color: '#FFD700', fontSize: '1rem', textAlign: 'left', display: 'inline-block' }}>
                <li>React met TypeScript</li>
                <li>Drag and Drop functionaliteit (React DnD)</li>
                <li>State management met hooks</li>
                <li>Component architectuur</li>
                <li>PDF export met jsPDF</li>
                <li>CSS styling en responsive design</li>
                <li>Project structuur en best practices</li>
                <li>TypeScript configuratie</li>
                <li>Project documentatie</li>
              </ul>
            </div>
            <p style={{ color: '#FFD700', fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 'bold' }}>
              Je kunt nu je eigen drag-and-drop applicaties maken! 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialSection;