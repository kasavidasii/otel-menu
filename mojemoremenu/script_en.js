// Menu content in English
const menus = {
  breakfast: `
    <h2>Breakfast</h2>
    <ul>
      <li>Traditional Breakfast Platter – 180₺</li>
      <li>Menemen (Turkish Scrambled Eggs with Tomato and Peppers) – 70₺</li>
      <li>Omelette (Cheese / Sausage / Mushroom) – 75₺</li>
      <li>Fried Eggs – 60₺</li>
      <li>Eggs with Pastrami – 90₺</li>
      <li>Gözleme (Potato / Cheese / Minced Meat) – 65₺</li>
      <li>Cigarette Pastry (Sigara Böreği) – 50₺</li>
      <li>Mini Simit Plate – 45₺</li>
      <li>Small Breakfast Plate – 85₺</li>
      <li>Toast (Cheese / Sausage / Mixed) – 70₺</li>
    </ul>
  `,

  snacks: `
    <h2>Snacks</h2>
    <ul>
      <li>French Fries – 50₺</li>
      <li>Onion Rings – 55₺</li>
      <li>Cigarette Pastry – 50₺</li>
      <li>Mozzarella Sticks – 65₺</li>
      <li>Crunchy Chicken Basket – 90₺</li>
      <li>Mini Pizza – 75₺</li>
      <li>Nugget Plate – 70₺</li>
      <li>Corn – 35₺</li>
      <li>Spicy Ezme & Chips – 40₺</li>
      <li>Paçanga Pastry – 65₺</li>
    </ul>
  `,

  mainCourse: `
    <h2>Main Courses</h2>
    <ul>
      <li>Grilled Meatballs – 140₺</li>
      <li>Chicken Skewer – 130₺</li>
      <li>Beef Skewer – 170₺</li>
      <li>Lamb Chop – 210₺</li>
      <li>Chicken Fajita – 150₺</li>
      <li>Beef Fajita – 180₺</li>
      <li>Mixed Grill – 220₺</li>
      <li>Manti (Turkish Dumplings with Yogurt or Tomato Sauce) – 120₺</li>
      <li>Lasagna – 130₺</li>
      <li>Creamy Chicken Pasta – 125₺</li>
    </ul>
  `,

  appetizers: `
    <h2>Appetizers</h2>
    <ul>
      <li>Haydari (Yogurt Dip with Garlic and Dill) – 40₺</li>
      <li>Hummus – 45₺</li>
      <li>Şakşuka (Eggplant and Vegetable Mix) – 50₺</li>
      <li>Kisir (Bulgar Wheat Salad) – 40₺</li>
      <li>Eggplant Spread – 50₺</li>
      <li>Russian Salad – 40₺</li>
      <li>Spicy Ezme – 35₺</li>
      <li>Yogurted Zucchini – 45₺</li>
      <li>Fava (Broad Bean Puree) – 40₺</li>
      <li>Stuffed Vine Leaves with Olive Oil – 55₺</li>
    </ul>
  `,

  drinks: `
    <h2>Drinks</h2>
    <h3>Hot Drinks</h3>
    <ul>
      <li>Turkish Tea – 15₺</li>
      <li>Herbal Teas (Sage, Linden, Fennel) – 25₺</li>
      <li>Nescafe / Filter Coffee / Espresso – 35₺</li>
      <li>Cappuccino / Latte / Mocha – 45₺</li>
    </ul>

    <h3>Cold Drinks</h3>
    <ul>
      <li>Fresh Orange Juice – 40₺</li>
      <li>Lemonade – 35₺</li>
      <li>Cola / Fanta / Sprite – 30₺</li>
      <li>Fruit Soda – 25₺</li>
      <li>Ayran (Yogurt Drink) – 20₺</li>
      <li>Water (0.5L / 1.5L) – 10₺ / 20₺</li>
    </ul>

    <h3>Alcoholic Drinks</h3>
    <ul>
      <li>Raki (Glass) – 90₺</li>
      <li>Raki (Double) – 150₺</li>
      <li>Raki 35 cl – 350₺</li>
      <li>Raki 50 cl – 460₺</li>
      <li>Raki 70 cl – 550₺</li>

      <li>Wine (Glass) – 80₺</li>
      <li>Wine (Local Bottle) – 350₺</li>
      <li>Wine (Imported Bottle) – 450₺</li>

      <li>Efes Pilsen Beer – 60₺</li>
      <li>Bomonti Unfiltered Beer – 65₺</li>
      <li>Corona – 85₺</li>

      <li>Margarita – 110₺</li>
      <li>Mojito – 100₺</li>
      <li>Bloody Mary – 105₺</li>
      <li>Whiskey Sour – 120₺</li>
      <li>Long Island Iced Tea – 130₺</li>
    </ul>
  `,

  desserts: `
    <h2>Desserts</h2>
    <ul>
      <li>Künefe – 70₺</li>
      <li>Rice Pudding – 55₺</li>
      <li>Baked Halva – 60₺</li>
      <li>Trileçe – 65₺</li>
      <li>Profiterole – 60₺</li>
      <li>Tiramisu – 65₺</li>
      <li>Ice Cream (3 scoops) – 45₺</li>
      <li>Semolina Halva (with Ice Cream) – 70₺</li>
      <li>Chocolate Souffle – 75₺</li>
      <li>Cheesecake (Raspberry / Lemon / Chocolate) – 70₺</li>
    </ul>
  `
};

const photoMap = {
  breakfast: 'foto1.jpg',
  snacks: 'foto2.jpg',
  mainCourse: 'foto3.jpg',
  appetizers: 'foto4.jpg',
  drinks: 'foto5.jpg',
  desserts: 'foto6.jpg'
};

function showMenu(category) {
  document.getElementById('menuContent').innerHTML = menus[category] || '<p>Menu not found.</p>';
  document.getElementById('menuPhoto').src = 'images/' + (photoMap[category] || 'foto1.jpg');

  if (window.innerWidth <= 768) {
    document.getElementById('menuContentContainer').scrollIntoView({ behavior: 'smooth' });
  }
}

// Show breakfast menu on page load
window.onload = () => showMenu('breakfast');
