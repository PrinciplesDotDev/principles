+++
principle = "Code an off-switch"
tags = ["feature flag", "feature toggle", "off switch", "practices", "team", "medium"]
summary = "Always plan for a way to switch your work off"
authors = ["Kealan Parr"]
contributors = []
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "d06dd439-634a-40f2-b2b4-bcb583c1bba8"
+++
When you're in the planning stage of introducing a major piece of software into your system, from the beginning, ensure there's an off switch.

This is normally done via **Feature Flags** (AKA **Feature Toggles**)

Giving yourself an easy way out if something goes wrong on site, pays you back tenfold for the time you do need it, alongside reducing risk on your site.

It helps ensure:

* You plan out your work in a modular way, to ensure your work can simply be "removed" and it falls back into an alternate state.
* Provides a smooth release path for you to deploy your code.
* Gives your on-call developers a very simple resolution if they get waken up at 1am to fix it.
* It also will make it easier to configure your different features for different geolocations for example - Italian users shouldn't see this, but everyone else should.

If there is a large cognitive overhead of having too many flags in your system, you can always remove the flag once your feature is bedded in.
