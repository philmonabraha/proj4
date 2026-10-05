// Week 7: Interactive Portfolio
// Your mission: Add JavaScript interactivity to your static portfolio!

// ============================================
// PART 1: SMOOTH SCROLL NAVIGATION (15 min)
// ============================================

// TODO: Select all navigation links
// Hint: Use querySelectorAll with the class '.nav-link'
const navLinks = null; // Replace null with your selector

// TODO: Add click event listeners to each nav link
// Hint: Use forEach to loop through navLinks
// For each link:
//   1. Add 'click' event listener
//   2. Prevent default link behavior (preventDefault)
//   3. Get the href attribute to find target section
//   4. Use scrollIntoView() to smoothly scroll to that section

// BONUS: Update active nav link on scroll
// TODO: Add scroll event listener to window
// Hint: As user scrolls, highlight the nav link for the current section


// ============================================
// PART 2: PROJECT FILTERING (20 min)
// ============================================

// TODO: Select all filter buttons
// Hint: Use querySelectorAll with the class '.filter-btn'
const filterButtons = null; // Replace null with your selector

// TODO: Select all project cards
// Hint: Use querySelectorAll with the class '.project-card'
const projectCards = null; // Replace null with your selector

// TODO: Add click event listeners to filter buttons
// For each button:
//   1. Add 'click' event listener
//   2. Remove 'active' class from all buttons
//   3. Add 'active' class to clicked button
//   4. Get the data-filter attribute from clicked button
//   5. Filter project cards based on their data-category attribute
//      - If filter is 'all', show all cards
//      - Otherwise, show only cards matching the filter
//   6. Use style.display to show ('block') or hide ('none') cards

// Hint: To get a data attribute, use element.dataset.filter or element.getAttribute('data-filter')


// ============================================
// PART 3: MOBILE MENU TOGGLE (10 min)
// ============================================

// TODO: Select the mobile menu toggle button
// Hint: Use querySelector with the class '.nav-toggle'
const navToggle = null; // Replace null with your selector

// TODO: Select the navigation menu
// Hint: Use querySelector with the class '.nav-menu'
const navMenu = null; // Replace null with your selector

// TODO: Add click event listener to toggle button
// When clicked:
//   1. Toggle 'active' class on navMenu
//   2. Toggle 'active' class on navToggle (for hamburger animation)

// BONUS: Close menu when a nav link is clicked
// TODO: Add click listeners to nav links to close the mobile menu


// ============================================
// PART 4: SKILL ANIMATIONS (15 min)
// ============================================

// TODO: Select all skill progress bars
// Hint: Use querySelectorAll with the class '.skill-progress'
const skillBars = null; // Replace null with your selector

// TODO: Create a function to animate skills when they come into view
// Hint: Add a scroll event listener
// When skills section is visible:
//   1. For each skill bar, animate its width from 0 to the --skill-level value
//   2. Use the style property to set the width
//   3. Add a CSS transition for smooth animation

// Advanced: Use Intersection Observer for better performance (optional)


// ============================================
// PART 5: FORM VALIDATION (20 min)
// ============================================

// TODO: Select the contact form
// Hint: Use querySelector with the id '#contact-form'
const contactForm = null; // Replace null with your selector

// TODO: Select form inputs
const nameInput = null; // querySelector for #name
const emailInput = null; // querySelector for #email
const messageInput = null; // querySelector for #message

// TODO: Create validation functions

// Function to validate email format
function isValidEmail(email) {
    // Hint: Use a simple regex or check for @ and .
    // Example: return email.includes('@') && email.includes('.');
    return false; // Replace with actual validation
}

// Function to show error message
function showError(input, message) {
    // TODO:
    // 1. Create a span element for error message
    // 2. Set its textContent to the message
    // 3. Add a class 'error-message' for styling
    // 4. Append it after the input field
    // Hint: Use createElement, classList.add, and appendChild
}

// Function to clear error message
function clearError(input) {
    // TODO:
    // 1. Find the error message element (next sibling)
    // 2. Remove it from the DOM
    // Hint: Use querySelector or nextElementSibling and remove()
}

// TODO: Add 'input' event listeners for real-time validation
// For name input:
//   - Check if value length > 0
//   - Show/clear error accordingly

// For email input:
//   - Check if email is valid using isValidEmail()
//   - Show/clear error accordingly

// For message input:
//   - Check if value length > 10
//   - Show/clear error accordingly

// TODO: Add 'submit' event listener to form
// When submitted:
//   1. Prevent default form submission
//   2. Validate all fields
//   3. If all valid:
//      - Show success message
//      - Clear form fields
//   4. If invalid:
//      - Show error messages
//      - Don't submit


// ============================================
// EXTENSION ACTIVITIES (after Parts 1 to 5)
// ============================================

// See the README's "Extension Activities" section: three tiers of tasks with
// the requirement, what done looks like, one hint, and why it matters.
// No code is given for them on purpose. Add your extension code below Part 5.


// ============================================
// HELPFUL TIPS & REMINDERS
// ============================================

// DOM Selection:
// - querySelector() returns first matching element
// - querySelectorAll() returns NodeList of all matching elements
// - Use forEach() to loop through NodeList

// Event Listeners:
// - addEventListener('event', function)
// - Common events: 'click', 'submit', 'input', 'scroll'
// - Use event.preventDefault() to stop default behavior

// Class Manipulation:
// - classList.add('classname')
// - classList.remove('classname')
// - classList.toggle('classname')

// Style Manipulation:
// - element.style.property = 'value'
// - element.style.display = 'none' or 'block'

// Data Attributes:
// - HTML: data-category="frontend"
// - JS: element.dataset.category or element.getAttribute('data-category')

// Creating Elements:
// - document.createElement('tagname')
// - element.textContent = 'text'
// - element.classList.add('classname')
// - parentElement.appendChild(element)

// Good luck! Remember to test frequently and use console.log() to debug!
