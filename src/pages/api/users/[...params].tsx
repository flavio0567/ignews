import { NextApiRequest, NextApiResponse } from 'next';

// *** Authentication ***
// JWT (Storage)
// NextAuthjd (Social) - backend is not necessary
// Cognito, Auth0 - Users, password etc. (authentication SASS)

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)

  const users = [
    { id: 1, name: 'Flavio' },
    { id: 2, name: 'Gisele' },
    { id: 3, name: 'Francisco' },
  ]

  return response.json(users)
}