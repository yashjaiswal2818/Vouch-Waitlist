import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <HeroUIProvider>
        <App />
    </HeroUIProvider>
);
