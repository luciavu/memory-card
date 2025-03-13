export default async function getImage(identifier) {
  try {
    const imageUrl = `https://mc-heads.net/avatar/MHF_${identifier}`;
    const response = await fetch(imageUrl, { method: 'HEAD' });

    if (response.ok) {
      return imageUrl;
    } else {
      throw new Error('Image not found.');
    }
  } catch (error) {
    console.error('Error fetching avatar:', error);
    return identifier;
  }
}
