export const formatSearchTerms = (
  searchTerm: string,
  operator: 'and' | 'or' = 'and',
) => {
  if (searchTerm.trim() === '') {
    return '';
  }
  const words = searchTerm.trim().split(/\s+/);
  const formattedWords = words.map((word) => {
    // Normalize phone formatting characters to match database normalization
    const normalized = word.replace(/[\s\-\(\)\+]/g, '');
    const escapedWord = normalized.replace(/[\\:'&|!()@<>]/g, '\\$&');

    return `${escapedWord}:*`;
  });

  return formattedWords.join(` ${operator === 'and' ? '&' : '|'} `);
};
