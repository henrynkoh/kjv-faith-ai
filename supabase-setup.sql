-- Run this in your Supabase SQL Editor to set up the database

-- User credits table
CREATE TABLE IF NOT EXISTS user_credits (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  credits INTEGER NOT NULL DEFAULT 10,
  subscription_tier TEXT NOT NULL DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_credits ENABLE ROW LEVEL SECURITY;

-- Users can read their own credits
CREATE POLICY "Users can read own credits"
  ON user_credits FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own credits (for deduction)
CREATE POLICY "Users can update own credits"
  ON user_credits FOR UPDATE
  USING (auth.uid() = id);

-- Users can insert their own row (for first-time setup)
CREATE POLICY "Users can insert own credits"
  ON user_credits FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Service role can do everything (for webhooks)
CREATE POLICY "Service role full access"
  ON user_credits FOR ALL
  USING (auth.role() = 'service_role');

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_credits_updated_at
  BEFORE UPDATE ON user_credits
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
