import { useState } from "react";
import Card from "../components/Card";
const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const menuItems = [
    new Map([
      ['id', 'espresso'],
      ['name', 'Espresso'],
      ['description', 'A shot of pure espresso, made from our finest coffee beans'],
      ['price', 2.50],
      ['image', 'https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso']],
      ['customizable', false],
      ['tags', ['strong', 'bold', 'classic']]
    ]),
    new Map([
      ['id', 'cappuccino'],
      ['name', 'Cappuccino'],
      ['description', 'A combination of espresso, steamed milk, and foam'],
      ['price', 4.50],
      ['image', 'https://images.pexels.com/photos/533393/pexels-photo-533393.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso', 'steamed milk', 'foam']],
      ['customizable', true],
       ['tags', ['creamy', 'rich', 'coffee']]
    ]),
    new Map([
      ['id', 'latte'],
      ['name', 'Latte'],
      ['description', 'A combination of espresso and steamed milk, topped with a light layer of foam'],
      ['price', 4.25],
      ['image', 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso', 'steamed milk', 'foam']],
      ['customizable', true],
      ['tags', ['creamy', 'smooth', 'milky']]
    ]),
    new Map([
      ['id', 'mocha'],
      ['name', 'Mocha'],
      ['description', 'A variant of latte made with chocolate syrup or cocoa powder'],
      ['price', 4.75],
      ['image', 'https://images.pexels.com/photos/27666789/pexels-photo-27666789.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso', 'steamed milk', 'chocolate syrup']],
      ['customizable', true], 
      ['tags', ['chocolatey', 'rich', 'decadent']]
    ]),
    new Map([
      ['id', 'americano'],
      ['name', 'Americano'],
      ['description', 'A shot of espresso \'cut\' with hot water, giving a milder flavor'],
      ['price', 3.00],
      ['image', 'https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso', 'hot water']],
      ['customizable', false],
      ['tags', ['mild', 'smooth', 'classic']]
    ]),
    new Map([
      ['id', 'macchiato'],
      ['name', 'Macchiato'],
      ['description', 'A shot of espresso \'marked\' with a small amount of milk'],
      ['price', 3.25],
      ['image', 'https://images.pexels.com/photos/28935033/pexels-photo-28935033.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso', 'steamed milk']],
      ['customizable', true],
      ['tags', ['strong', 'bold', 'milky']]
    ]),
    new Map([
      ['id', 'flat-white'],
      ['name', 'Flat White'],
      ['description', 'A type of coffee drink that originated in Australia and New Zealand'],
      ['price', 4.00],
      ['image', 'https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso', 'steamed milk']],
      ['customizable', true],
      ['tags', ['velvety', 'smooth', 'rich']]
    ]),
    new Map([
      ['id', 'breve'],
      ['name', 'Breve'],
      ['description', 'A coffee drink made with espresso, steamed half-and-half, and a layer of foam'],
      ['price', 4.75],
      ['image', 'https://images.pexels.com/photos/35409274/pexels-photo-35409274.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['espresso', 'steamed half-and-half', 'foam']],
      ['customizable', true],
      ['tags', ['rich', 'creamy', 'indulgent']]
    ]),
    new Map([
      ['id', 'cafe-au-lait'],
      ['name', 'Café au Lait'],
      ['description', 'A coffee drink made with brewed coffee and scalded milk'],
      ['price', 3.50],
      ['image', 'https://images.pexels.com/photos/35397644/pexels-photo-35397644.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['brewed coffee', 'scalded milk']],
      ['customizable', true],
      ['tags', ['mild', 'smooth', 'comforting']]
  ]),
    new Map([
      ['id', 'cold-brew'],
      ['name', 'Cold Brew'],
      ['description', 'A type of coffee that is brewed without heat, using cold water to extract the flavors'],
      ['price', 3.25],
      ['image', 'https://images.pexels.com/photos/35380299/pexels-photo-35380299.jpeg'],
      ['category', 'coffee'],
      ['ingredients', ['cold brew coffee']],
      ['customizable', false],
      ['tags', ['smooth', 'refreshing', 'cold']]
    ]),
  ];

   const findBeverages = (query, array) => {
    return array.filter(beverage => {
      let name = beverage.get('name').toLowerCase();
      let description = beverage.get('description').toLowerCase();
      let ingredients = beverage.get('ingredients').join(' ').toLowerCase();
      let category = beverage.get('category').toLowerCase();
      let tags = beverage.get('tags');
      if (tags) {
        tags = tags.join(' ').toLowerCase();
      } else {
        tags = '';
      }
      let lowerCaseQuery = query.trim().toLowerCase();
      return name.includes(lowerCaseQuery) ||
             description.includes(lowerCaseQuery) ||
             ingredients.includes(lowerCaseQuery) ||
             category.includes(lowerCaseQuery) ||
             tags.includes(lowerCaseQuery);
    })
  }

  const filteredItems = searchQuery.trim() === '' ? menuItems : findBeverages(searchQuery, menuItems);

  return (
    <div className="menu">
      <div className="menu-page-header-container">
        <h1 className="menu-page-header">Menu</h1>
        <div className="search-bar-container">
          <input type="text" placeholder="Enter your search query" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
        </div>
      </div>
      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Menu; 