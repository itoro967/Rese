import OwnerAppLayout from "@/Layout/OwnerAppLayout";
import {RestaurantsCard} from "@/common/restaurantsCard";
export default function App( {restaurants}) {
  return (
    <OwnerAppLayout>
      <div className="flex flex-wrap justify-center gap-3">
        {restaurants.map((restaurant) => (
            <RestaurantsCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </OwnerAppLayout>
  );
}
