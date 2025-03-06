function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

document.querySelectorAll('.dock-item').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('window1').style.display = 'block';
    });
});
