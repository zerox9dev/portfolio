export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  
  const clientId = config.dribbbleClientId
  const clientSecret = config.dribbbleClientSecret
  const code = query.code as string
  
  if (!code) {
    return { error: 'No authorization code provided' }
  }
  
  try {
    // Exchange code for access token
    const response = await $fetch('https://dribbble.com/oauth/token', {
      method: 'POST',
      body: {
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      }
    })
    
    return response
  } catch (error) {
    console.error('Dribbble OAuth error:', error)
    return { error: 'Failed to get access token' }
  }
})
