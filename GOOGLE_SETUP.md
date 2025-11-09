# Google OAuth Setup Instructions

The Google Sign-in button is currently configured with placeholder credentials. To enable it:

## Steps to Enable Google OAuth:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or select existing)
   - Click "Select a project" → "New Project"
   - Name it (e.g., "ToDo App")

3. **Enable Google+ API**
   - Go to "APIs & Services" → "Library"
   - Search for "Google+ API"
   - Click "Enable"

4. **Create OAuth Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Application type: "Web application"
   - Name: "ToDo App"
   - Authorized redirect URIs: `http://localhost:5000/api/auth/google/callback`
   - Click "Create"

5. **Update .env File**
   - Copy the Client ID and Client Secret
   - Update `backend/.env`:
   ```
   GOOGLE_CLIENT_ID=your_actual_client_id
   GOOGLE_CLIENT_SECRET=your_actual_client_secret
   ```

6. **Restart Backend Server**
   ```bash
   cd backend
   npm start
   ```

## Current Status:
- ✅ Google button UI implemented
- ✅ OAuth routes configured
- ⚠️ Needs real Google credentials to work
- 📝 Using placeholder credentials (won't redirect to Google)

## Alternative:
Use email/password login with sample users:
- john@example.com / password123
- sarah@example.com / password123
- mike@example.com / password123
