snacks = [
    {"id":1,"name":"chicken roll","price":90,"availabe":True},
    {"id":2,"name":"panner roll","price":190,"availabe":True},
    {"id":3,"name":"fried rice","price":50,"availabe":False},
    {"id":4,"name":"corn pizza","price":90,"availabe":True},
    {"id":5,"name":"veg soup","price":50,"availabe":False},
]
snacks.append({"id":6,"name":"sandwich","price":150,"availabe":True})
# print(snacks)
sales_records = []

# function to add the snack to snack inventory:
def add_snacks():
    snack_id = int(input("enter the snack id: "))
    snack_name = input("enter the snack name : ")
    snack_price = int(input("enter the price of snack: "))
    availabel = input("enter the availability Status : ")

    new_item = {"id":snack_id,"name":snack_name,"price":snack_price,"availabe":availabel}
    snacks.append(new_item)
    print(f"Snack '{snack_name}' with ID {snack_id} added to the inventory.")

# function to remove the snacks from the snack inventory:
def remove_snack():
    snack_id = int(input("enter the snack_id : "))
    for item in snacks:
        if item["id"] == snack_id:
            snacks.remove(item)
            break
            print(f"Snack with ID {snack_id} removed from the inventory.")

    else:
        print(f"Snack with ID {snack_id} not found in the inventory.")        
       

# function to update the availability of snack status:

def update_snack_status():
    snack_id = int(input("enter the snack id: "))
    status = input("enter the availability status of snack: ")
    for snack in snacks:
        if snack["id"] == snack_id:
            snack["availabe"] = status
            print(f"status of '{snack_id} is updated successfully!")

# snack_inventory.py

# Step 4: Implement the sales record functionality

# Function to record a snack sale
def record_sale():
    snack_id = int(input("Enter the snack ID sold: "))
    
    for snack in snacks:
        if snack["id"] == snack_id:
            if snack["availabe"]:
                sale_timestamp = input("Enter the sale timestamp (optional): ")
                sale_record = {"id": snack_id, "timestamp": sale_timestamp}
                sales_records.append(sale_record)
                snack["availabe"] = False
                print(f"Snack with ID {snack_id} sold and sale recorded.")
                break
            else:
                print(f"Snack with ID {snack_id} is not available for sale.")
                break
    else:
        print(f"Snack with ID {snack_id} not found in the inventory.")


# snack_inventory.py

# Step 5: Implement a function to display inventory and sales records

# Function to display the snack inventory
def display_inventory():
    print("---- Snack Inventory ----")
    for snack in snacks:
        print(f"ID: {snack['id']}, Name: {snack['name']}, Price: ${snack['price']:.2f}, Availability: {'Yes' if snack['availabe'] else 'No'}")
    print("-------------------------")

# Function to display the sales records
def display_sales():
    print("---- Sales Records ----")
    for sale in sales_records:
        snack = next((item for item in snacks if item["id"] == sale["id"]), None)
        if snack:
            print(f"ID: {snack['id']}, Name: {snack['name']}, Price: ${snack['price']:.2f}, Timestamp: {sale['timestamp']}")
        else:
            print(f"Snack with ID {sale['id']} not found in the inventory.")
    print("-----------------------")

# snack_inventory.py

# Step 6: Implement the main application loop

# Function to display the main menu
def display_menu():
    print("===== Canteen Snack Inventory Management =====")
    print("1. Add a snack to the inventory")
    print("2. Remove a snack from the inventory")
    print("3. Update snack availability")
    print("4. Record a snack sale")
    print("5. Display snack inventory")
    print("6. Display sales records")
    print("7. Exit")
    print("==============================================")

# Function to execute the main application loop
def main():
    while True:
        display_menu()
        choice = input("Enter your choice (1-7): ")

        if choice == "1":
            add_snacks()
        elif choice == "2":
            remove_snack()
        elif choice == "3":
            update_snack_status()
        elif choice == "4":
            record_sale()
        elif choice == "5":
            display_inventory()
        elif choice == "6":
            display_sales()
        elif choice == "7":
            print("Thank you for using the snack inventory management application. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

