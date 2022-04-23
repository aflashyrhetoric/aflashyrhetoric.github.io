+++
title = "The Dangers of Blindly Loving Your Tools"
summary = ""
+++

<small>*This post was written back when Adelie was openly accepting new inquiries and projects.*</small>

---

I once heard two friends arguing. One of them had recently come upon a windfall of cash, and wanted to make a big purchase: an upscale sports car. Upon hearing this, his miserly friend fired back, “you don’t even go places! Don’t buy a Porsche to drive to 711.”

When I heard this biting exchange, I chuckled. But as I shampooed my hair into a glorious, frothy bubble afro later that night, I realized it was a much-needed lesson for web developers.

The quote itself plays on the relationship between utilization and cost. In other words: don’t pay for a Porsche if you’re not going to use it to its fullest. But the inverse of this idea is that if you are, in fact, going to use the Porsche to blaze across open tundras, then yes — it’s worth it! The quote also acknowledges that there are various _kinds_ of drivers.

We can simplify the _types of drivers_ down to two comical extremes:

*   Those who only drive to 711. (Simple use case)
*   Those who blaze across open tundras. (Sophisticated/advanced use case)

Obviously, reality is more nuanced. To continue the metaphor,  drivers exist on a spectrum, with a variety of car models and brands exist to accommodate every step on that spectrum.

Seems like a sustainable. But I’ve noticed a troubling trend recently.

All the same analogies exist in the realm of websites and web development: there are different kinds of clients with different kinds of needs. Some clients have modest budgets, others have limitless budgets. Some clients are tech-savvy, others will buy two routers to double their internet speed. (Of course, we love them both just the same!) And just as with cars, a variety of web development tools exist to accommodate the needs of every client.

But there are developers out there who view these tools as existing on a _vertical_ spectrum. They indiscriminately endorse one (or few) technologies as being the _best_. Of course, in some areas, that are definitive victors. A Javascript library from 2006 likely isn’t going to hold a candle to modern React. But within the realm of reason, it’s pretty dangerous to view (and use) web technologies this way. It leads to “one size fits all” syndrome, where one tool is used for everything. But you wouldn’t use a hammer to paint a portrait.

This indirectly hurts the developer, the client, and the industry as a whole.

#### It Hurts The Client

My parents are entrepreneurs with a successful interior design & reupholstery business. (Hi Mama Oh, Hi Papa Oh!) Several years ago, my mother was approached by some local web developers, who handed her a pamphlet. Intrigued, I read it over.

They offered to build a website on Shopify with **3–4 static informational pages for $750**. They hailed Shopify as “the best web platform, hands down,” or something like that. I'm an advocate of folks getting paid for their time, whether it's spent developing, communicating, or even writing an invoice. But this case was different - this agency was effectively sending out Google forms and converting client responses into premade templated websites, ad-lib style. If I’m being extremely generous, replicating their services would have taken me (or any competent web developer) around half of a work day  of copying and pasting.

For the services provided, this rate was (and still is) _grotesquely_ over-inflated. The $750 package didn’t even include the configuration of a functional shopping cart. It was just a static website, _built using Shopify_.

**Let’s take a quick look at the numbers.** Shopify’s lowest plan (that offers an online website) is $29/mo. A year would cost $350\. Add it all up, and you get 4 static pages for a **whopping $1100** for the first year alone. That’s too much. Overkill, much like purchasing a Porsche to drive to 711.

#### How It Hurts The Developers

Relying too heavily on a single tool has a limiting, pigeon-holing effect. Take the case above. If a developer stubbornly only uses Shopify, what do they do for a client that requests changes to their WordPress+WooCommerce website? Do you turn them away? You might be tempted to suggest a full migration from WordPress to Shopify, but that’s a hefty undertaking for the client, both financially and logistically. My guess: they’ll go elsewhere, and that’s lost business.

It also puts “all your eggs in one basket,” so to speak. What if Shopify goes out of business? That’s extremely unlikely, but things aren’t exactly unchanging in this industry. What if a new tool is released that completely eclipses Shopify in popularity or functionality? This point is more of an afterthought, but it still stands.

Before I continue, a quick note: I’ve been using Shopify in my examples, since it’s relatively well-known and because Shopify’s back-end is directly seen and used by the client. It affects both parties more directly. But these problems extend to internal tooling as well. If you do all your work with Bootstrap, or if you strictly use NoSQL or Static-Site-Generators or whatever, you may encounter problems.

#### How It Hurts The Industry

This point isn’t localized to web development, so skip ahead if you want. Everyone’s seen it: anytime a conversation starts to get overly one-sided, it becomes less productive. Consider the arguments between iOS and Android users. Between Mac and PC users. Between Vim and Emacs users. Those forums are a wasteland where each side simply gets further entrenched in their existing views.

Of course, some playful jest is welcome and fun. (Sublime Text w/ Vintage Mode all the way!) But taken too far — and it very frequently goes too far — it just stagnates productive conversation. I’ve seen many a Quora/Reddit/StackOverflow post where one-sided opinions have resulted in flame wars. Worse still, I’ve seen overly opinionated developers misleading newbies who are trying to get an objective overview of the web development scene.

#### Simple Solutions: Diversified Tooling & Client-Focused Workflows

These problems have a simple solution. Diversify your tools so that you can better accommodate your client, not just yourself.

As an overview, here are a few examples of how I’d build websites differently depending on the client’s needs. (I’m always open to suggestions, so if you have any, please feel free to share!)

*   **For extremely simple, static websites:** I’ll use Jekyll & Github Pages. Typically, these clients will be non-profits with modest budgets, so the free hosting is a big plus.
*   **For simple, general websites:** SquareSpace provides an amazing starting point — it’s a great value for what they offer, and enabling _Developer Mode_ allows you to really dig into the templates and customize things to your liking. If a client has past experience with WordPress and prefers it, I’ll probably use WordPress, hosted on Cloudways.
*   **For general e-commerce shops:** Shopify. Shopify has proven to be extremely reliable and has a great deal of flexibility out of the box. I’ve also explored the WooCommerce and Etsy platforms and have managed websites on both.
*   **For web applications & heavily customized websites:** Laravel, hosted on Forge. This framework is fast and a pleasure to use.

A final caveat before we wrap up: **I am not advising all developers to learn every single technology.** That would completely defy the ideas I espoused in my [last blog post](https://medium.com/the-waddle/websites-are-like-pants-13f4e608d199#.bbtmfcmh1). And I’m not even advising to blindly learning the “latest and greatest” stuff. I'm issuing a friendly reminder to my fellow devs: don’t blindly fall in love with — or become overly dependent on — your tools. A hammer is a hammer, a package manager is a package manager. Learn and master the specific tools that will help your client or otherwise create business value *first*. If every single person in your demographic is using Middleman to blog, maybe it’d be best not to learn Jekyll quite right now. If everyone around you loves and utilizes Rails, it’s okay to postpone learning Laravel or Express. You get the point.

Vim ftw.

---

By [Kevin Oh](https://medium.com/@aflashyrhetoric) on [<time class="dt-published" datetime="2016-01-29T17:31:33.779Z">January 29, 2016</time>](https://medium.com/p/b9a369f41e53).