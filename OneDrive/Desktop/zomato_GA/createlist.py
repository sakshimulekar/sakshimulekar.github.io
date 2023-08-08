
menu = [
    {"id":1,"dish":"pizza","price":50,"availability":True},
    {"id":2,"dish":"burger","price":150,"availability":False},
    {"id":3,"dish":"fried rice","price":70,"availability":True},
    {"id":4,"dish":"biryani","price":90,"availability":True},
    {"id":5,"dish":"Hot dog","price":100,"availability":False},
]
order = []

def main():
    print("Welcome to Zomato Chronicles: The Great Food Fiasco!")
    print("--------- Zesty Zomato Menu ---------")
    for item in menu:
        availability = "Available" if item["availability"] else "Not Available"
        print(f"{item['id']}. {item['dish']} - ${item['price']} ({availability})")
    print("------------------------------------")

def add_to_menu(id, dish, price, available):
    menu.append({"id": id, "dish": dish, "price": price, "availability": available})

def item_update(id, price, available):
    for item in menu:
        if item["id"] == id:
            item["price"] = price
            item["availability"] = available

def remove_item(id):
    menu[:] = [item for item in menu if item["id"] != id]

def take_order():
    customer_name = input("enter your name : ")
    ordered_item = []

    while True:
        main()
        dish_id = input("enter the dish'ID to order (or 'done' if finish): ")
        
        if dish_id == 'done':
            break

        dish_id = int(dish_id)
        selected_item = next((item for item in menu if item["id"] == dish_id and item["availability"]), None)

        if selected_item:
            ordered_item.append(selected_item)
        else:
            print("invalid dishID or dish is not available")
        
    if ordered_item:
        order_id = len(order)+1
        new_order = {"order_id":order_id,"customer_name":customer_name,"ordered_item":ordered_item,"status":"received"}

        order.append(new_order)
        print(f" order {order_id} placed successfully!")
    else:
        print("No items were added to the order.")

# Function to display the status of all orders
# Function to display the status of all orders
def display_order_status():
    if not order:  # Corrected variable name from 'order' to 'orders'
        print("No orders placed yet.")
    else:
        print("--------- Order Status ---------")
        for o in order:  # Corrected variable name from 'order' to 'orders'
            print(f"Order {o['order_id']} - Customer: {o['customer_name']}, Status: {o['status']} 67")
        print("--------------------------------")

# Function to update the status of an order
def update_order_status(order_id, new_status):
    orders = next((o for o in order if o["order_id"] == order_id), None)  # Corrected variable name from 'order' to 'orders'

    if orders:
        orders["status"] = new_status
        print(f"Order {order_id} status updated to '{new_status}'.")
    else:
        print("Invalid order ID. Please provide a valid order ID.")



if __name__ == "__main__":
    main()
    add_to_menu(6, "roll", 90, True)
    item_update(6,250,True)
    remove_item(5)
    main()
    
    # Test the order functionalities
    take_order()
    # take_order()
    display_order_status()

    # Test updating the status of an order
    order_id_to_update = 1  # Provide a valid order ID that exists in the orders list
    new_status = "preparing"  # Replace this with the desired new status
    update_order_status(order_id_to_update,new_status)
    display_order_status()
    
