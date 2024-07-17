package com.OrderNow.RestaurantService.Domain;

import org.springframework.data.annotation.Id;

public class FoodMenu {
    private String itemName;
    @Id
    private String itemId;
    private String description;
    private Double price;
    private String image;

    public FoodMenu(String itemName, String itemId, String description, Double price, String image) {
        this.itemName = itemName;
        this.itemId = itemId;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public FoodMenu() {
    }

    @Override
    public String toString() {
        return "FoodMenu{" +
                "itemName='" + itemName + '\'' +
                ", itemId=" + itemId +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", image='" + image + '\'' +
                '}';
    }
}
