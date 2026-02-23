export interface UserCredits {
  id: string;
  credits: number;
  subscription_tier: "free" | "pro";
  created_at: string;
  updated_at: string;
}

export interface GenerateRequest {
  prompt: string;
}

export interface GenerateResponse {
  data: {
    explanation: string;
    application: string;
    prayer: string;
    imageUrl: string | null;
  } | null;
  error: string | null;
}

export interface WebhookEvent {
  type: string;
  data: {
    subscription?: {
      customer_id: string;
      status: string;
    };
  };
}
