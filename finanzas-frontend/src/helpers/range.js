export const range = (totalPages) => {
    const pages = [];
    for (let i = 0; i <= totalPages; i++) {
        pages.push(i);
    }
    return pages;
}