+++
title = 'Get Started'
draft = false
+++

<div class="grid-container">
	<p>This is a page outlining how to get started with the Foundation for Hugo theme.</p>
	<form method="POST" action="">
        <div class="input">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" />
        </div>
        <div class="input">
          <label for="email">Email Address</label>
          <input id="email" name="email" type="email" />
        </div>
        <div class="checkist margin-bottom-1">
          <label for="referers">How did you hear about us?</label>
          <ul class="menu simple">
            <li>
              <input id="r1" type="checkbox" name="referers" value="Google / Search" />
              <label for="r1">Google / Search</label>
            </li>
            <li>
              <input id="r2" type="checkbox" name="referers" value="Tech News" />
              <label for="r2">Tech News</label>
            </li>
            <li>
              <input id="r3" type="checkbox" name="referers" value="Colleagues or Coworkers" />
              <label for="r3">Colleagues or Coworkers</label>
            </li>
          </ul>
        </div>
        <div class="radio margin-bottom-1">
          <label>Feedback Type</label>
          <fieldset class="l">
		    <input type="radio" name="feedback-type" value="Comments" id="feedbackComments" required><label for="feedbackComments">Comments</label>
		    <input type="radio" name="feedback-type" value="Bugs / Issues" id="feedbackBugsIssues"><label for="feedbackBugsIssues">Bugs / Issues</label>
		    <input type="radio" name="feedback-type" value="Questions" id="feedbackQuestions"><label for="feedbackQuestions">Questions</label>
		  </fieldset>
        </div>
        <div class="input">
          <label for="feedback">Feedback</label>
          <textarea id="feedback" name="feedback" rows="4"></textarea>
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
</div>