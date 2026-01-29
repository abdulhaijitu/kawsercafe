-- Create table for storing contact enquiries
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert enquiries (public contact form)
CREATE POLICY "Anyone can submit enquiries"
  ON public.enquiries
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading enquiries from authenticated admin users (for future admin panel)
-- For now, no one can read directly - admin would access via edge function
CREATE POLICY "No direct read access to enquiries"
  ON public.enquiries
  FOR SELECT
  USING (false);