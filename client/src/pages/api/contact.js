export default async function handler(req, res) {
  const { data = {} } = req.body;

  try {
    const result = await fetch(
      'https://6co9dsolwl.execute-api.us-east-1.amazonaws.com/default/sendContactEmail',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      }
    );
    const responseData = await result.json();

    if (responseData.errors) {
      return res.status(500).json({ error: responseData.message });
    }
    return res.status(201).json(responseData);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
