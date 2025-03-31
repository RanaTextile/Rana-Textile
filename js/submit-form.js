// Import the required methods from Firebase config file and Firestore SDK
import { db } from "./firebase-config.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Event listener for form submission
document.getElementById("contact-form-main").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form field values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const note = document.getElementById("note").value;

    try {
        // Add document to Firestore
        const docRef = await addDoc(collection(db, "contactMessages"), {
            name: name,
            phone: phone,
            note: note,
            timestamp: Timestamp.now()  // Save timestamp as well
        });

        alert("Data successfully submitted!");
        console.log("Document written with ID: ", docRef.id);

        // Clear form after submission
        document.getElementById("contact-form-main").reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to submit data. Please try again later.");
    }
});
