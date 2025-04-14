import AppLayout from '@/Layout/AppLayout';
import {RestaurantsCard} from '@/common/restaurantsCard';
export default function App({ restaurants,genres,areas,user}) {
  return (
    <AppLayout genres={genres} areas={areas} user={user}>
      <div className="flex flex-wrap md gap-3">
        {restaurants.map((restaurant) => (
          <RestaurantsCard key={restaurant.id} restaurant={restaurant}/>
        ))}
      </div>
      </AppLayout>
  );
}
