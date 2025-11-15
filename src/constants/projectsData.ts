export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

const baseProjects: Omit<Project, 'id'>[] = [
  {
    name: 'Durra Cheese',
    description:
      'Brand identity and packaging design for premium cheese products',
    image:
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=500&fit=crop',
  },
  {
    name: 'LIGHT Water Filters',
    description:
      'Marketing materials for water filtration systems wholesale and retail',
    image:
      'https://images.unsplash.com/photo-1548839140-5a516c255eb3?w=400&h=300&fit=crop',
  },
  {
    name: 'Tokyo Restaurant',
    description: 'Social media campaign for new dessert menu launch',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop',
  },
  {
    name: 'FASTRIN Detergent',
    description:
      'Product photography and advertising campaign for laundry detergent',
    image:
      'https://images.unsplash.com/photo-1584483766114-2cea6dadcf43?w=400&h=600&fit=crop',
  },
  {
    name: 'Durra Tomatoes',
    description:
      'Fresh produce marketing with emphasis on quality and freshness',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=350&fit=crop',
  },
  {
    name: 'Double Shot Beverages',
    description:
      'Branding and visual identity for coffee and mango vanilla drinks',
    image:
      'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=450&fit=crop',
  },
  {
    name: 'Signature Perfume',
    description: 'Luxury product photography and brand positioning campaign',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=550&fit=crop',
  },
  {
    name: 'Arugula Salad',
    description: 'Food photography and menu design for healthy salad options',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
  },
  {
    name: 'Fantastic Burger',
    description:
      'Appetizing food photography and social media content creation',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=500&fit=crop',
  },
  {
    name: 'Bravoly Cleaner',
    description: 'Product launch campaign for new cleaning solution',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=450&fit=crop',
  },
];

export const projectsData: Project[] = Array.from(
  { length: 20 },
  (_, index) => ({
    ...baseProjects[index % 10],
    id: String(index + 1),
  }),
);
