import jsPDF from 'jspdf';
import { Item } from '../types/Item';

export const exportToPDF = (items: Item[], total: number) => {
  const doc = new jsPDF();
  
  // Titel
  doc.setFontSize(20);
  doc.text('DropPack - Klant Pakket Overzicht', 20, 30);
  
  // Datum
  doc.setFontSize(12);
  doc.text(`Gegenereerd op: ${new Date().toLocaleDateString('nl-NL')}`, 20, 45);
  
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
      ? `${itemData.count}x ${itemName}` 
      : itemName;
    doc.text(itemText, 30, yPosition);
    doc.text(`€${itemData.totalPrice.toFixed(2)}`, 150, yPosition);
    yPosition += 15;
  });
  
  // Totaal
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont('Helvetica', 'bold');
  doc.text('Totaal:', 30, yPosition);
  doc.text(`€${total.toFixed(2)}`, 150, yPosition);
  
  // Footer
  doc.setFontSize(10);
  doc.setFont('Helvetica', 'normal');
  doc.text('© 2024 DropPack - Alle rechten voorbehouden | Ontwikkeld door Sandrine Prumpeler', 20, 280);
  
  // Download
  doc.save(`droppack-pakket-${new Date().toISOString().split('T')[0]}.pdf`);
};

