## CommunityEats
Welcome to CommunityEats, where every meal shared is a step towards a hunger-free world and every waste reused is a stride towards a cleaner, greener planet. Our mission is simple: to make society and the world a better place to live in by connecting those in need with those who have resources to spare.

At the heart of CommunityEats are two main user roles: Requestors and Donators. Requestors can raise requests for food or specific types of waste, while Donators can fulfill these requests by providing either food items or recyclable materials.

Whether it's a meal for a hungry individual or waste materials waiting to be repurposed, CommunityEats facilitates the exchange seamlessly. Requestors can specify their needs, from food items to recyclable waste, and Donators can contribute by providing either the requested items or monetary support.


## Team members

- Aswin K O
- Sreyas Satheesh
- Jerry James
- Manu Jose

## Link for the project


[link to ppt](./docs/Waste%20Control%20and%20food%20donation%20application.pptx)
-communityEats

## Libraries used
- Node.js
- Bun
- Clerk
- Prisma
- MongoDb

## How to configure

[link to ppt](ppt-link)

- communityEats

CommunityEats is built on a robust technology stack to ensure seamless functionality and efficient management of resources. Here's how the web application is configured:

Frontend: The frontend of CommunityEats is developed using Next.js, a React framework known for its performance and scalability. Next.js provides server-side rendering, allowing for fast loading times and improved SEO. Its modular architecture enables easy development and maintenance of complex user interfaces.

Backend: The backend of CommunityEats is also implemented in Next.js, leveraging its server-side capabilities for handling requests and managing data. Next.js provides a unified development experience, enabling developers to build both frontend and backend components within the same framework. This ensures consistency and simplifies the development process.

Database: MongoDB is used as the database for CommunityEats. MongoDB is a NoSQL database known for its flexibility and scalability, making it well-suited for handling large volumes of data and accommodating changes in data structure over time. Its document-oriented model allows for easy storage and retrieval of complex data structures, such as user profiles, donation records, and request details.

ORM: Prisma is used as the ORM (Object-Relational Mapping) tool for CommunityEats. Prisma simplifies database access and manipulation by providing a type-safe query builder and schema management tools. It generates efficient database queries and handles data validation, ensuring data integrity and security.

By leveraging Next.js for both frontend and backend development, MongoDB for data storage, and Prisma for database access, CommunityEats is equipped to handle the complexities of managing donations, requests, and user interactions effectively. This technology stack enables easier donations, efficient waste management and allocation, and cost efficiency, aligning with the core objectives of the application to achieve zero hunger and waste reuse.

## How project runs

CommunityEats operates as a dynamic platform aimed at eradicating hunger and promoting waste reuse for the betterment of society and the environment. The system caters to two primary user roles: Requestors and Donators, facilitating the exchange of resources to fulfill essential needs and promote sustainability.

Here's how the CommunityEats web application functions:

1. User Registration and Authentication: Users can sign up for an account on CommunityEats, providing necessary details such as name, email, and password. Upon registration, users are authenticated and granted access to the platform.
2. Request Creation: Requestors can raise requests for either food or waste items. These requests can be initiated by individuals or organizations. For food requests, users specify the type and quantity of food needed, while waste requests detail the type of waste material required.
3. Donation Submission: Donators can browse through active requests and choose to fulfill them by donating either food items or waste materials. Donations can be made in the form of actual items or monetary contributions.
4. Expiry Time Setting: When raising a request for surplus food donation, the requester sets an expiry time. This time frame determines the duration within which the donation must be collected to prevent food waste.
5. Notification System: Upon accepting a donation request, the recipient is notified and provided with relevant details such as pickup location and time. In case the recipient is unable to collect the donation on time, a grace period, or "mercy time," is granted.
6. Mercy Time Expiry Handling: If the recipient fails to collect the donation within the mercy time, the confirmation is canceled, and nearby users within the specified radius are notified of the available donation.
7. Food Waste Handling: If no recipient collects the donation before the expiry time, the surplus food is marked as food waste. Users in need of food waste can accept the request and arrange for its collection, promoting efficient resource utilization.
8. Efficient Resource Allocation: CommunityEats acts as an intermediary between those in need and those with resources, facilitating easier donations and promoting efficient waste management and allocation.
9. Technology Stack: The web application is built using Next.js for both frontend and backend development, ensuring a seamless user experience. MongoDB serves as the database for storing user data and donation requests, while Prisma functions as the ORM for efficient data access and manipulation.

By leveraging modern technology and fostering a collaborative community, CommunityEats strives to achieve its mission of zero hunger and waste reuse while providing tangible benefits such as cost efficiency and environmental sustainability.

## How to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!