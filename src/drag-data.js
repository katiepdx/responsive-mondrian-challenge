export const dragData = {
  words: {
    'word-1': { id: 'word-1', word: 'Hi,  ' },
    'word-2': { id: 'word-2', word: 'I ' },
    'word-3': { id: 'word-3', word: 'really ' },
    'word-4': { id: 'word-4', word: 'like ' },
    'word-5': { id: 'word-5', word: 'coffee. ' },
  },
  sentences: {
    // Column id to look up column
    'sentence-1': {
      id: 'sentence-1',
      title: 'Coffee sentence',
      wordIds: ['word-1', 'word-2', 'word-3', 'word-4', 'word-5']
    }
  },
  // Record order of columns/sentences
  sentenceOrder: ['sentence-1']
};
