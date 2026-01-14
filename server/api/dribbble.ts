export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const accessToken = config.dribbbleAccessToken
  
  if (!accessToken) {
    return { error: 'No access token configured. Please authenticate first.' }
  }
  
  try {
    // Fetch user's shots with access token
    const response = await $fetch('https://api.dribbble.com/v2/user/shots', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        per_page: 12
      }
    })
    
    return response
  } catch (error) {
    console.error('Dribbble API error:', error)
    return { error: 'Failed to fetch shots' }
  }
})
