-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the waitlist form)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Optional: Create a policy to allow reading (if you want to display the count)
-- Uncomment the following if you want to allow reading the waitlist
-- CREATE POLICY "Allow public reads" ON waitlist
--   FOR SELECT
--   TO public
--   USING (true);

