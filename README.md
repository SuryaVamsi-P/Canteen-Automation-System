# Canteen Automation System

This project is a full-fledged **Canteen Automation System** designed to streamline and digitalize the food ordering process in campus canteens or small eateries. It allows customers, employees, and administrators to access customized dashboards, place or manage orders, and oversee transactions — all from a single responsive web interface.


## Key Features

- **Role-Based Login:** Distinct login interfaces for Admin, Employee, and Customer.
- **Customer Dashboard:** View food items, place orders, and receive billing summaries.
- **Employee Dashboard:** Access order requests in real-time and manage processing.
- **Admin Panel:** Monitor system activity, manage users, and oversee inventory/orders.
- **E-Menu & Cart System:** Browse an interactive food menu and checkout seamlessly.
- **Online Order Summary:** Immediate display of selected items and total billing.
- **User-Friendly UI:** Simple, clean, and responsive interface using HTML, CSS, JS.


## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** PHP
- **Database:** MySQL (via XAMPP server)
- **Tools:** XAMPP, VS Code


## Project Structure

```
Canteen-Automation-System/
├── 📁 CSS/
│   ├── admin_module.css               # Styling for Admin views
│   ├── cart.css                       # Styling for cart and shared UI
│   ├── customer_module.css           # Styling for Customer views
│   ├── employee_module.css           # Styling for Employee views
│   └── shared_styles.css             # Common/shared styles across pages
│
├── 📁 HTML/
│   ├── 📁 Admin Login Interface/
│   │   └── admin_login.html          # Admin login page
│   ├── 📁 Customer Login Interface/
│   │   └── customer_login.html       # Customer login page
│   ├── 📁 Employee Login Interface/
│   │   └── emp_login.html            # Employee login page
│   └── 📁 Role Selection Page/
│       └── webpage_login.html        # Landing page for role-based selection
│
├── 📁 Java Script/
│   ├── admin_login.js                # Admin login logic
│   ├── customer_login.js             # Customer login logic
│   ├── employee_login.js             # Employee login logic
│   └── form_validation.js            # Form-level validations (email, phone, confirm-password, etc.)
│
├── 📁 PHP/
│   ├── 📁 Customer Login Flow/
│   │   └── customer_login.php        # Backend logic for customer login
│   ├── 📁 Employee Login Logic/
│   │   └── emp_login.php             # Backend logic for employee login
│   ├── 📁 New Customer Registration/
│   │   └── register_customer.php     # PHP for handling new customer signups
│   ├── 📁 Role-based User Dashboard/
│   │   ├── admin_dashboard.php       # Admin dashboard page
│   │   ├── customer_dashboard.php    # Customer dashboard page
│   │   ├── dashboard.php             # Universal dashboard redirect logic
│   │   └── employee_dashboard.php    # Employee dashboard page
│   ├── 📁 Secured Admin Login/
│   │   └── admin_login.php           # PHP backend for admin login
│   ├── 📁 Secured Database Config/
│   │   └── db_config.php             # DB connection and security config
│   ├── 📁 Session Logout/
│   │   └── logout.php                # Universal logout handling
│   ├── bill_logic.php                # Handles customer billing + item total
│   └── connect.php                   # Master DB connection logic used across the app
│
└── README.md                         # Detailed project documentation

```


## How It Works

1. Launch XAMPP and start Apache & MySQL services.
2. Host project files in the `htdocs` directory.
3. Access the system via `http://localhost/YourFolderName/Webpage_Login.html`
4. Choose your role → login → interact with your dashboard.


## Use Case

This system is best suited for:
- College or university canteens
- Office cafeterias
- School meal management
- Event food ordering systems


## Highlights

- Designed to **minimize queue time** and **eliminate food shortages**.
- Enables **pre-ordering** and **order tracking** with real-time feedback.
- Great foundational system to scale for mobile apps or IoT integrations.


## Author

**Surya vamsi Patiballa**  
MS in Data Science at the George Washington University

- Email  :-  svamsi2002@gmail.com
- LinkedIn  :-  https://www.linkedin.com/in/surya-patiballa-b724851aa/


Built with ❤️ to bring tech into everyday dining !!!
