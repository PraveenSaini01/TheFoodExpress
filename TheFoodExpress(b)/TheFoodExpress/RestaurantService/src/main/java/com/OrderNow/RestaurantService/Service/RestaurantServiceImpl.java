package com.OrderNow.RestaurantService.Service;

import com.OrderNow.RestaurantService.Domain.FoodMenu;
import com.OrderNow.RestaurantService.Domain.Restaurant;
import com.OrderNow.RestaurantService.Exception.FoodNotFoundException;
import com.OrderNow.RestaurantService.Exception.ItemNotFoundException;
import com.OrderNow.RestaurantService.Exception.RestaurantAlreadyExistsException;
import com.OrderNow.RestaurantService.Exception.RestaurantNotFoundException;
import com.OrderNow.RestaurantService.Repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class RestaurantServiceImpl implements RestaurantService{


    private RestaurantRepository restaurantRepository;
    @Autowired
    public RestaurantServiceImpl( RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }
    @Override
    public Restaurant registerRestaurant(Restaurant restaurant) throws RestaurantAlreadyExistsException {
        // Register a new user
        Optional<Restaurant> existingRestaurant = restaurantRepository.findById(restaurant.getRestaurantId()    );
        if (existingRestaurant.isPresent()) {
            throw new RestaurantAlreadyExistsException();
        }
        Restaurant savedRestaurant = restaurantRepository.save(restaurant);
        return savedRestaurant;
    }



    @Override
    public Restaurant getRestaurant(String restaurantId) throws RestaurantNotFoundException {
        return restaurantRepository.findById(restaurantId)
                .orElseThrow(RestaurantNotFoundException::new);
    }








//    @Override
//    public FoodMenu registerFoodMenuItem(String restaurantId, FoodMenu foodMenu) throws RestaurantNotFoundException {
//        // Check if the restaurant exists
//        Optional<Restaurant> existingRestaurant = restaurantRepository.findById(restaurantId);
//        if (existingRestaurant.isPresent()) {
//            Restaurant restaurant = existingRestaurant.get();
//            restaurant.getFoodMenu().add(foodMenu);
//            restaurantRepository.save(restaurant);
//            return foodMenu; // Return the added food menu
//        } else {
//            throw new RestaurantNotFoundException();
//        }
//    }
@Override
public FoodMenu registerFoodMenuItem(String restaurantId, FoodMenu newFoodMenu) throws RestaurantNotFoundException {
    // Check if the restaurant exists
    Optional<Restaurant> existingRestaurant = restaurantRepository.findById(restaurantId);
    if (existingRestaurant.isPresent()) {
        Restaurant restaurant = existingRestaurant.get();
        // Initialize foodMenu if it's null
        if (restaurant.getFoodMenu() == null) {
            restaurant.setFoodMenu(new ArrayList<>());
        }
        restaurant.getFoodMenu().add(newFoodMenu);
        restaurantRepository.save(restaurant);
        return newFoodMenu; // Return the added food menu
    } else {
        throw new RestaurantNotFoundException();
    }
}



    @Override
    public List<Restaurant> getAllRestaurant() throws RestaurantNotFoundException {
            List <Restaurant> restaurants=restaurantRepository.findAll();
            if (restaurantRepository.findAll().isEmpty())
            {
                throw new RestaurantNotFoundException();
            }

        return restaurants;
    }

    @Override
    public List<FoodMenu> getAllFoodMenu(String restaurantId) throws FoodNotFoundException {
        System.out.println(restaurantId+" hh ");
        Optional<Restaurant> restaurantOptional = Optional.of(restaurantRepository.findById(restaurantId).get());

        if (restaurantOptional.isPresent()) {
            Restaurant restaurant = restaurantOptional.get();
            return (List<FoodMenu>) restaurant.getFoodMenu();
        } else {
            throw new FoodNotFoundException();
        }
    }



    @Override
    public List<FoodMenu> getFoodMenuById(String itemId) throws ItemNotFoundException {
        Optional<Restaurant> restaurantOptional = restaurantRepository.findById(String.valueOf(itemId));

        if (restaurantOptional.isPresent()) {
            Restaurant restaurant = restaurantOptional.get();
            return restaurant.getFoodMenu();
        } else {
            throw new ItemNotFoundException();
        }
    }
}

