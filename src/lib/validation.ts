import { z } from "zod";

export const generateRequestSchema = z.object({
  prompt: z
    .string()
    .min(1, "Prompt is required")
    .max(500, "Prompt must be under 500 characters")
    .trim(),
});

export const webhookEventSchema = z.object({
  type: z.string(),
  data: z.object({
    subscription: z
      .object({
        customer_id: z.string(),
        status: z.string(),
      })
      .optional(),
  }),
});

export type GenerateRequestInput = z.infer<typeof generateRequestSchema>;
export type WebhookEventInput = z.infer<typeof webhookEventSchema>;
