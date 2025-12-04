import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions:{
      input:{
        task: "task.html",
        note: "note.html",
        profile: "profile.html",
        timer: "timer.html",
        guestbook: "guestbook.html",
      }
    }
  }
})
