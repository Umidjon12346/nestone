export class CreateCarCategoryDto {
  name: string;
  description: string;
  seat_count: number;
  luggage_capacity: number;
  doors_count: number;
  is_automatic: boolean;
  daily_price: number;
  image_url: string;
}
