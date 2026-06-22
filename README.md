# TechSouq Backend API 🛒

A robust, highly scalable e-commerce RESTful API built with **.NET 8** following **Clean Architecture** principles. This backend powers the TechSouq client store and the admin dashboard, providing secure payments, real-time notifications, and high-performance data delivery.

🚀 **Live API / Swagger:** [teckseq-api.runasp.net/swagger](https://teckseq-api.runasp.net/swagger/index.html)

## 🛠️ Tech Stack & Technologies Used

* **Framework:** .NET 8 / ASP.NET Core Web API
* **Architecture:** Clean Architecture (Domain, Application, Infrastructure, API)
* **Database & ORM:** SQL Server, Entity Framework Core
* **Caching:** Redis (StackExchange.Redis) for high-speed product/category retrieval.
* **Real-time Communication:** SignalR (Live notifications for new orders/events).
* **Background Jobs:** Hangfire (Automated daily cleanup for expired coupons and discounts).
* **Payment Gateway:** Stripe Integration (Payment Intents & Webhooks).
* **Media Management:** Cloudinary API (Handling product images upload and storage).
* **Logging & Monitoring:** Serilog connected to BetterStack for real-time cloud log streaming.
* **Authentication & Security:** JWT (JSON Web Tokens) with Role-Based Authorization, Global Exception Handling Middleware.

## ✨ Key Features

* **Advanced Product Management:** Full CRUD with image gallery uploads (Cloudinary), stock tracking, and automated discount expiration.
* **Optimized Queries:** Paged responses and Redis caching to handle large catalogs with zero lag.
* **Cart & Checkout Flow:** Secure cart management transitioning into automated Stripe payment sessions.
* **Event-Driven Actions:** SignalR pushes immediate notifications to the Admin Dashboard upon successful checkouts.
* **Background Processing:** Hangfire runs scheduled tasks (Cron jobs) efficiently without blocking the main thread.

## 🏗️ Clean Architecture Layers

1. **Domain:** Contains Enterprise logic, Entities, Enums, and Repository Interfaces.
2. **Application:** Business logic, Services, DTOs, Mapping (AutoMapper), and CQRS patterns.
3. **Infrastructure:** Data Access (EF Core), DbContext, external integrations (Stripe, Cloudinary, Redis).
4. **API:** Controllers, Middlewares, SignalR Hubs, and Dependency Injection setups.

## ⚙️ How to Run Locally

1. Clone the repository: `git clone https://github.com/YOUR_USERNAME/TechSouq-Backend.git`
2. Update `appsettings.json` with your credentials:
   * SQL Server Connection String
   * Redis Connection String
   * Stripe API Keys & Webhook Secret
   * Cloudinary Keys
   * JWT Secret Key
3. Apply Entity Framework Migrations: `dotnet ef database update`
4. Run the application: `dotnet run`