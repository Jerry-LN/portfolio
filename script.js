const contact = document.getElementById("contact");
const popup = document.getElementById("contact_info")

contact.addEventListener('mouseover', function() {
    popup.style.display = 'block';
});

contact.addEventListener('mouseout', function() {
    popup.style.display = 'none';
});