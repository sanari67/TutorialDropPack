# DropPack Canvas

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
```bash
npm install
```

2. Start de development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in je browser

## Gebruik

1. **Items Toevoegen**: Voer een naam en prijs in het linker panel in
2. **Items Slepen**: Sleep items van links naar het rechter canvas
3. **Items Verwijderen**: Klik op de × knop op items in het canvas
4. **PDF Export**: Klik op "Exporteer PDF" om het pakket te downloaden

## Project Structuur

```
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
```

## Browser Ondersteuning

- Chrome (aanbevolen)
- Firefox
- Safari
- Edge

## Licentie

© 2024 DropPack. Alle rechten voorbehouden.

