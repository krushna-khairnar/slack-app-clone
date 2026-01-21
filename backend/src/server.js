import "../instrument.mjs"
import express from "express";
import { ENV } from "./config/env.js"; 
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";
import chatRoutes from "./routes/chat.route.js";
import cors from "cors";
import * as Sentry from "@sentry/node";

const app = express();
app.use(express.json());

// CORS configuration - simplified for Vercel
const allowedOrigins = [
    'http://localhost:5173',
    'https://slack-clone-frontend-beta.vercel.app',
    'https://slack-clone-frontend-qsqlaqzwl.vercel.app'
];

if (ENV.CLIENT_URL) {
    allowedOrigins.push(ENV.CLIENT_URL);
}

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(clerkMiddleware()); 

app.get("/debug-sentry", (req, res) => {
    throw new Error("Sentry debug error!");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/inngest", serve({client: inngest, functions}));
app.use("/api/chat",chatRoutes);

Sentry.setupExpressErrorHandler(app);


const startServer = async () => {
    try {
        await connectDB();
        if(ENV.NODE_ENV !== "production") {
            app.listen(ENV.PORT, () => {
                console.log(`Server running in development mode on port ${ENV.PORT}`);
            });
        }
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
export default app;