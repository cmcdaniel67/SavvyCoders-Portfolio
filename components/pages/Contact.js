export default function(){
    return ` <div class="content">

<form action="form-"//formspree.io/nannayarn@gmail.com" method="POST">

    <input type="text" name="firstname" placeholder="First Name" size="100" autofocus required>
    <input type="text" name="lastname" placeholder="Last Name" size="100" required>
    <input type="email" name="userEmail" placeholder="your.email@example.com"><br
  
    <label>What's this message about?
      <input type="radio" name="subject" value="professional" checked><span>I'd like to hire you!</span><br
      <input type="radio" name="subject" value="personal" checked><span>Personal message</span><br
      <input type="radio" name="subject" value="other" checked><span>Don't know/something else</span><br
    </label>
  
    <label for="marketing">How did you hear about me?</label>
    <select name="marketing">
      <optgroup label="Online">
        <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
        <option value="github">Online Portfolio (GitHub)</option>
        <option value="search">Search Engine</option>
        <option value="email">Email</option>
      </optgroup>
      <optgroup label="In-Person">
        <option value="networking">We met at a networking event</option>
        <option value="referral">Personal referral</option>
        <option value="random">We met somewhere else</option>
      </optgroup>
      <option value="other">Other</option>
    </select>
  
    <textarea name="user_message" rows="8" cols="40"></textarea>
    <input type="submit">
  </form>
    </div>
    ` }