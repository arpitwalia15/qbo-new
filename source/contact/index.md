---
title: Contact
date: 2025-08-25T00:00:00.000Z
type: page
---

<section class="why-qbo-hero-section contact-page">
  <div class="container">
  <div class="why-qbo-hero-content">
  <h1>We Love to Hear <br>From You</h1>
  <p>Have questions or need a live demo? We’re here to help.</p>
</div>
</div>
</section>

<section class="get-in-touch">
  <div class="container">
  <h2>Get In Touch</h2>
  <p>Please fill out the form or send your inquiry to info@qbo.io if you prefer. We’ll get back to you as soon as possible.</p>
<form id="contactFormQBO">
  <div class="form-row">
    <div class="form-group">
      <label for="firstName">First Name <span style="color:red">*</span></label>
      <input type="text" id="firstName" name="firstName" required>
    </div>
    <div class="form-group">
      <label for="lastName">Last Name <span style="color:red">*</span></label>
      <input type="text" id="lastName" name="lastName" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label for="email">Business Email <span style="color:red">*</span></label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="company">Company Name <span style="color:red">*</span></label>
      <input type="text" id="company" name="company" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label for="jobTitle">Job Title <span style="color:red">*</span></label>
      <input type="text" id="jobTitle" name="jobTitle" required>
    </div>
    <div class="form-group">
      <label>Request Demo <span style="color:red">*</span></label>
      <div class="radio-group">
        <label><input type="radio" name="demo" value="yes" required> Yes</label>
        <label><input type="radio" name="demo" value="no"> No</label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" maxlength="180"></textarea>
    <div class="char-count" id="charCount">0 / 180</div>
  </div>
  <div class="checkbox-group">
    <input type="checkbox" id="optin" name="optin">
    <label for="optin">I agree to receive other communications from QBO.</label>
  </div>
  <div class="checkbox-group">
    <input type="checkbox" id="privacy" name="privacy" required>
    <label for="privacy">I have read and agree to QBO's Privacy Policy.<span style="color:red">*</span></label>
  </div>
  <button type="submit" class="submit-btn">Get in Touch</button>
</form>
<script>
  const messageInput = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  messageInput.addEventListener("input", () => {
    charCount.textContent = `${messageInput.value.length} / 180`;
  });
</script>
</section>

--------------------------------------------------------------------------------
