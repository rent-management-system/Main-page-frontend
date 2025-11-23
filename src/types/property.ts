export interface Property {
  id: string;
  type: 'apartment' | 'condominium' | 'house';
  name: string;
  image: string;
  price: string;
  furnishing?: 'Furnished' | 'Unfurnished';
  bedrooms: string;
  area: string;
}
