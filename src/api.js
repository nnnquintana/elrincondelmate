export const fetchGitHubData = async () => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
  
    const apiUrl = 'https://api.github.com/repos/nnnquintana/unacopadecafe.'; 
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener datos de GitHub');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };