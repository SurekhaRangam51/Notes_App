export const findDeletednotes = (deletednotes, id) => {
    if (!deletednotes || !Array.isArray(deletednotes)) return false; // Ensure it's an array
    return deletednotes.some(note => note && note.id === id); // Ensure note is not undefined
};
