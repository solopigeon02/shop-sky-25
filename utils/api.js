const API_BASE_URL ="http://localhost:3000/api";

// Fetching Categories Function
export async function fetchAllCategories () {
      const response = await fetch(`${API_BASE_URL}/categories`);
      const data = response.json();       // converting fetch into Object
      return data;            
} 