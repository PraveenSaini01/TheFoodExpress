package com.OrderNow.RestaurantService.Repository;

import com.OrderNow.RestaurantService.Domain.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RestaurantRepository extends MongoRepository<Restaurant,String> {
    Optional<Restaurant> findById(String restaurantId);
//    Optional<Restaurant> findByItemId(String itemId);
}
