import { rateLimit } from "express-rate-limit";

export const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // Número máximo de solicitações permitidas por período de tempo
  message: {
    message:
      "Limite de solicitações excedido. Você poderá tentar novamente em alguns minutos.",
  },
});
