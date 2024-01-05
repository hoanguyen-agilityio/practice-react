type MethodRequest = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const apiRequest = async <T, K> (
  url: string,
  method: MethodRequest,
  data?: T,
) => {
  const requestOptions: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (data) {
    requestOptions.body = JSON.stringify(data)
  }

  const request = await fetch(url, requestOptions)
  const responseData = await request.json()

  return responseData as K
}
