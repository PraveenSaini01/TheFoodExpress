package com.OrderNow.RestaurantService.Service;

import com.OrderNow.RestaurantService.Domain.FoodMenu;
import com.OrderNow.RestaurantService.Domain.Restaurant;
import com.OrderNow.RestaurantService.Exception.FoodNotFoundException;
import com.OrderNow.RestaurantService.Exception.ItemNotFoundException;
import com.OrderNow.RestaurantService.Exception.RestaurantAlreadyExistsException;
import com.OrderNow.RestaurantService.Exception.RestaurantNotFoundException;

import java.util.List;

public interface RestaurantService {
    Restaurant registerRestaurant(Restaurant restaurant) throws RestaurantAlreadyExistsException;
    Restaurant getRestaurant(String restaurantId) throws RestaurantNotFoundException;
    FoodMenu registerFoodMenuItem(String restaurantId, FoodMenu foodMenu) throws RestaurantNotFoundException;

    List<Restaurant> getAllRestaurant() throws RestaurantNotFoundException;

    public List<FoodMenu> getAllFoodMenu(String restaurantId) throws FoodNotFoundException;

    public List<FoodMenu> getFoodMenuById(String itemId)throws ItemNotFoundException;

}
