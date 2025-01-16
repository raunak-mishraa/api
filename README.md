
## Getting Started

### Installation

1. To install all dependencies, run the following command:

```bash
npm install
```

### Running the Application

2. To start the development server, run:

```bash
npm run dev
```

3. Set up your database either locally or on a remote server:

- For a local database, ensure you have PostgreSQL installed and running. Create a new database using the following command or use PgAdmin:

- For a remote database, obtain the connection URL from your database provider.

4. Add your database URL to the `.env` file:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


<!-- - Make sure to implement caching
- Implement Zod for input validation
- Rate limiting
- Ensure request is secure and using HTTPS protocol -->



Refer to [Api Endpoints](https://docs.google.com/document/d/1D9j6f8A1IdRSlVwt-ND4ExBRFW57jTu6RKl0DSXPs-k/edit?tab=t.0)

Refer for Prisma Docs [Docs](https://www.prisma.io/docs/orm/reference/prisma-client-reference#where)