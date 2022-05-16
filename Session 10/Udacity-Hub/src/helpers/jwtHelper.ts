import { Request } from 'express';
import { verify, JwtPayload, sign } from 'jsonwebtoken';

const secretToken = process.env.TOKEN_SECRET as string; // The token secret saved in our env variable

function Verify(req: Request, userId?: number) {
  const authorizationHeader = req.headers.authorization; // Bearer token ex: bearer eyJhbGciOiJIUz...
  const token = authorizationHeader!.split(' ')[1]; // Split the string to get the token after the word bearer
  const decoded = verify(token as string, secretToken) as JwtPayload; // Return the decoded payload
  if (userId && decoded.user.userId != userId) {
    // If the userId is passed and the decoded userId is not the same as the passed userId
    throw new Error('User id does not match!'); // Throw an error
  }
}

function Sign(userId: number) {
  return sign({ user: { userId } }, secretToken); // Sign the token and add the userId to it
}

export { Verify, Sign };
