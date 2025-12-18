// Minimal API wrapper — replace baseURL with your backend
export const api = {
baseURL: process.env.VITE_API_BASE || 'https://api.example.com',
async fetchDashboard() {
// replace with fetch/axios/GraphQL call
return Promise.resolve({
activeDevices: 1234,
incidents: 12,
avgResponse: 120,
utilization: 73
})
}
} 