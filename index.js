// Validation functions
function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  if (!phone.trim()) return true; // Optional field
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

function validateMessage(msg) {
  return msg.trim().length >= 10;
}

function validateSubject(sub) {
  return sub !== "";
}

// Show error
function showError(element, message) {
  const formGroup = element.closest(".form-group");
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
  const errorDiv = formGroup.querySelector(".error-message");
  if (errorDiv) errorDiv.textContent = message;
}

// Show success
function showSuccess(element) {
  const formGroup = element.closest(".form-group");
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}

// Clear validation
function clearValidation(element) {
  const formGroup = element.closest(".form-group");
  formGroup.classList.remove("error", "success");
}
