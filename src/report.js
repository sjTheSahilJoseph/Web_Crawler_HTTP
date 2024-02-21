function sortPages(pages) {

    pagesArr = Object.entries(pages);
    pagesArr.sort((a, b) => {
        aHits = a[1];
        bHits = b[1];

        return b[1] - a[1];
    });

    return pagesArr;
}

module.exports = {
    sortPages,
};
