export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  return response.status(200).json({ text: 'I am an Vercel Function!' });
}
