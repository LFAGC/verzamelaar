import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jmfkkgdcowaqmdnbpaee.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZmtrZ2Rjb3dhcW1kbmJwYWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNjczMDUsImV4cCI6MjAxMzY0MzMwNX0.1vKEy5QE0TJh5Rk8tXY589p5rldpzW_7UDRGOPnTQD0'
export const supabase = createClient(supabaseUrl, supabaseKey)