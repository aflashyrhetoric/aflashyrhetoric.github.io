+++
slug = "on-compromise"
title = "Soft Skills - Compromising"
ogdescription = ""
date = "2022-04-25T17:00:21-05:00"
series = "soft skills"
+++

An unjustifiably stubborn engineer is a ceiling for their team's potential.

<!--more-->

## Semantics first.

_Opinions are my own._

Healthy, productive compromise **IS NOT**:

- automatically yielding to another engineer’s opinion to avoid conflict
- going with the “exact middle ground” or “straight down the middle” route every time

Healthy, productive compromise **IS**:

- an iterative, pragmatic, data-driven mindset that is less interested in blindly enforcing axioms and more interested in implementing successful solutions as a team.

## Examples

You’re the mediator who has to resolve conflicts between two engineers. Lucky you. Let’s run some scenarios.

- Engineer A wants to use a new technology, which will require adding 4 NPM dependencies.
- Engineer B does not want to use it.

What would you advise that they do?

Bad compromise would be splitting the difference and only adding 2 out of 4 dependencies. For obvious reasons, thats completely ridiculous in this context, but it can be harder to spot elsewhere.

Story time. Years ago, I wanted to adopt Prettier with some colleagues. Some were yay, others were nay. I offered a silly, short-sighted compromise and said:

> “I’ll add the Prettier config file and dependency, and those who want to use it can use it. Others can ignore it.”

But that kinda defeats the whole purpose. We did get some partial benefits, but in order to leverage the order-of-magnitude-increase in value that Prettier offers, it has to be a team-wide effort.

Partial adoption leads to, “hey, this code formatter is handy.”

Full adoption leads to, “wow, we do not have to waste time at all on discussing codestyle during code reviews.”

Partial “right down the middle” often isn't really a compromise at all, it's just a half-measure, when a full-measure is needed.

## A Better Alternative

Use time as a factor in these discussions. Let’s revisit the same scenario above, pasted below for convenience:

- Engineer A wants to use a new technology, which will require adding 4 NPM dependencies.
- Engineer B does not want to use it.

In this case, if Engineer A’s proposal does offer some value, how might we use time as a tool?

**Consider**: Engineer A and B agree to _a trial period_. Engineer A offers to take ownership of the project and get it set up, with the understanding that in `n` weeks, they’ll revisit the tool’s value after taking some metrics:

- how much time is this saving us?
- what are the costs of keeping this system?

Looking at these metrics can help answer the simple, but million dollar question:

- Are the pros worth the cons?

## A second example

- UI/UX Designer: The design should look like xyz because of reasons 1, 2 and 3.
- Developer: No, the design should look like abc because of reasons 4, 5 and 6.

What’s the right call?

Immediately, we’re faced with the obvious: there’s usually no one right call, but many options with their own pros and cons. Circumstances differ spectacularly from case to case. Either party could be 100% wrong here.

In tie-breakers like this, the decision shouldn’t be left just to a single mediator. While “death by committee” (where an overload of clashing opinions paralyzes the decision-making process altogether) is an ever-present threat, the discussion should ideally involve other voices.

It’s critical, too, that in the ensuing the discussion, the emphasis is not on finding the right answer, because it’s likely that both parties will have strong arguments to support their side. Rarely is one so fantastically wrong that they can be overruled outright.
Rather, the discussion should be had with an emphasis on the best implementation to try _first_.

In the worst case scenario, a manager can leverage their authority to push a decision forward, and in x weeks or months, we can pivot to the same follow-up routine as before: assess the success of the decision and revisit the conversation.

## Takeaway?

Iteratively and constantly revisiting and improving your workflow should be baked into the conflict-resolution process. In embracing an iterative mindset, “compromise” becomes less an arbitrary, absolute battle of wills - with all of the inevitable politics and bitterness - and more of a collaborative effort, where the shared priority is the efficiency and benefit of the entire team. And in fact, in yielding tactfully to another engineer, you absolutely do bolster your own reputation as being a team player - not with cheap lip service but with action and sincere humility. Win win.
