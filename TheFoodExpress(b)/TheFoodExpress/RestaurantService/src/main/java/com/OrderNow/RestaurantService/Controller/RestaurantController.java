package com.OrderNow.RestaurantService.Controller;

import com.OrderNow.RestaurantService.Domain.FoodMenu;
import com.OrderNow.RestaurantService.Domain.Restaurant;
import com.OrderNow.RestaurantService.Exception.*;
import com.OrderNow.RestaurantService.Service.RestaurantService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v3")
public class RestaurantController {

    private ResponseEntity<?> responseEntity;
    private RestaurantService restaurantService;

    @Autowired
    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }
    @PostMapping("/restaurant/register")
    public ResponseEntity<?> registerRestaurant(@RequestBody Restaurant restaurant) {
        try {
            return new ResponseEntity<>(restaurantService.registerRestaurant(restaurant), HttpStatus.CREATED);
        } catch (RestaurantAlreadyExistsException e) {
            return new ResponseEntity<>("Restaurant with the same details already exists", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/restaurant")
    public ResponseEntity<?> getAllRestaurant() {
        try {
            List<Restaurant> restaurants = restaurantService.getAllRestaurant();
            return new ResponseEntity<>(restaurants, HttpStatus.OK);
        } catch (RestaurantNotFoundException e) {
            return new ResponseEntity<>("No restaurants found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<?> getRestaurant(@PathVariable String restaurantId) {
        try {
            Restaurant restaurant = restaurantService.getRestaurant(restaurantId);
            return new ResponseEntity<>(restaurant, HttpStatus.OK);
        } catch (RestaurantNotFoundException e) {
            return new ResponseEntity<>("Restaurant not found", HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/register/{restaurantId}/foodMenu")
    public ResponseEntity<?> registerFoodMenuItem(@PathVariable String restaurantId, @RequestBody FoodMenu foodMenu) {
        try {
            return new ResponseEntity<>(restaurantService.registerFoodMenuItem(restaurantId, foodMenu), HttpStatus.CREATED);
        } catch (RestaurantNotFoundException e) {
            return new ResponseEntity<>("Restaurant not found", HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/{restaurantId}/foodMenu")
    public ResponseEntity<?> getAllFoodMenu(@PathVariable String restaurantId) {
        try {
            List<FoodMenu> foodMenu = restaurantService.getAllFoodMenu(restaurantId);
            return new ResponseEntity<>(foodMenu, HttpStatus.OK);
        } catch (FoodNotFoundException e) {
            return new ResponseEntity<>("Food menu not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/foodMenu/{itemId}")
    public ResponseEntity<?> getFoodMenuById(@PathVariable String itemId ) throws ItemNotFoundException{
        try {
            List<FoodMenu> foodMenu = restaurantService.getFoodMenuById(itemId);
            return new ResponseEntity<>(foodMenu, HttpStatus.OK);
        } catch (ItemNotFoundException e) {
            return new ResponseEntity<>("Food menu item not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/restaurant/{restaurantId}/foodMenu")
    public ResponseEntity<?> getFoodListForRestaurant(@PathVariable String restaurantId) {
        try {
            System.out.println("in BE food menu");
            List<FoodMenu> foodMenu = restaurantService.getAllFoodMenu(restaurantId);
            return new ResponseEntity<>(foodMenu, HttpStatus.OK);
        } catch (FoodNotFoundException e) {
            return new ResponseEntity<>("Food list not found for the restaurant", HttpStatus.NOT_FOUND);
        }
    }
}
