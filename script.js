function saveEntry() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const entry = document.getElementById('entry').value;

    const entriesList = document.getElementById('entries-list');
    const entryItem = document.createElement('li');
    entryItem.innerHTML = `<strong>${name}</strong> (${date}): ${entry}`;
    entriesList.appendChild(entryItem);

    // Clear input fields after saving
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('entry').value = '';
}
