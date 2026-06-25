# The Hidden Cost of Complexity
#### 8 July 2026

every engineer has, at some point, built a first version of a project.

then they work on a second version that fixes what the first got wrong.

a third with added features, a fourth with abstractions and dynamic options. and eventually, at some point, no one remembers why and how the process or code exists anymore.

complexity isn't something that arrives all at once. it builds over "small improvements," until the project becomes harder to understand than it is to use.

the weird part is, no one decided to make it complicated on purpose. every addition, when introduced made perfect sense.

---

## complexity feels productive
a physicist seeks to explain how the universe works. a mathematician searches for elegant proofs. a computer scientist studies computation itself.

engineers however, are relentlessly practical. they take all those ideas and ask one single question:

"does it solve the probem?"

this mindset is what makes engineering so satisfying. every design decision, every line of code, every PCB, every gearbox, every algorithm exists for a reason. they are not built to impress but to work.

ironically, that's where complexity begins.

no engineering problem can be solved in a straight line. well if it can, you are doing something wrong.

you first try to create a pipeline of how you'll go about solving it. only when you actually get to solving it do you realise, "oh there is another underlying issue." you then solve that to find another one.

once you sort them out, you feel you've made progress. you add a feature, you feel you've made progress. you add sensors, another machine learning model, another configuration maybe, and you feel the project is moving forward because there is something new.

a lot of times these additions solve problems. a lot of times, they only create newer problems for the engineer maintaining the project six months later. 

the danger isn't that engineers enjoy making things complicated. it's that complexity disguises itself as progress.

---

## the costs nobody budgets for
complexity is expensive. not because complicated things cannot work, but because every layer added to a project carries a cost.

the problem is, those costs rarely appear in a project's requirements, documents, or reviews. no one estimates or budgets them. 

yet everyone ends up paying for them.

and "costs" here don't necessarily mean money.

sometimes it could be measured in milliseconds. sometimes in hours spent debugging. sometimes in manufacturing effort. sometimes in opportunities lost because changing anything has become too risky.

complexity will always demand payments, whatever form it takes. the only question is, what currency will it ask for.

### maintenance tax
every new component has to be understood. every new feature has to be tested. every interface has to be documented and every configuration has to be supported.

projects don't become difficult because of one massive change. rather it happens due to hundreds of perfectly reasonable ones.

### knowledge tax
at some point in time, every project has reached that stage: "dont touch that module"

nobody knows why. nobody remembers who wrote it but everybody knows, if it's touched, everything will collapse. why bother if it works.

knowledge becomes concentrated in one person. as soon as they retire, quit or transfer elsewhere, the project goes from engineering to archaeology.

### testing tax
adding one feature rarely means testing it alone. in any system, adding a single feature means testing whether it works in harmony with whatever already exists.

when it doesn't work, we end up at "debugging" the system. what follows is another fix. then another. then another. before you realise it, solving one poorly implemented feature has wasted time, resources and probably introduced three more bugs.

### decision tax
every option creates another decision. every checkbox creates another discussion. every configurable parameter creates another argument.

more options don't always create better softwares or products. sometimes they lead to further decisions which spread out and now you have ten people wasting away trying to "decide" what is right.

### manufacturing tax
mechanical systems suffer the same problem. one added pocket in the design becomes another machining operation. this calls for a change in the tooling. this adds to the setup time which affects machining cost. and inspection becomes harder.

one harmless design decision affects the entire production process.

complexity doesn't charge an upfront fee. it sends invoices over the lifetime of the project.

---

## the paradox
if complexity is so expensive, why do experienced engineers produce systems that look... simple?

because simplicity isn't what engineers start with but what good engineers end at.

anyone can add another feature. another design operation. another algorithm or option or part.

the real challenege is about removing one without sacrificing capability. that is optimisation.

the first approach grows the project. the second improves it. that's the paradox.

good engineering looks deceptively simple from the outside because it's not that the complexity disappeared. it's that the complexity has been managed, contained or eliminated before it reached the user.

the cleanest API isn't the easiest to design. 

the simplest gearbox isn't the one with few gears rather the gearbox that accomplishes exactly what it needs to do.

the best designs aren't remembered for how much they contain but for how little they needed.

---

## well.... how do you actually progress?
more features is progress. that isn't wrong but the difference is to recognise isolated progress and efficient progress.

isolated progress asks: "did this feature make the project better?"

efficient progress asks: "did the entire system become better due to the addition of this feature?"

the difference sounds subtle but it isn't. 

adding another sensor may improve accuracy. adding another configuration option may make make it more flexible. adding anothe abstraction may make one module clearer.

viewed in isolation, each addition seems justified. however, when viewed together, they might increase maintenance effort, reduce performance, make onboarding harder and leave the next engineer wondering why are things so complicated.

never measure progress by how much was added. measure it based on the value returned compared to the complexity added.

adding another feature, decision, option might genuinely improve the system but was it really needed.

engineering has never been about building complicated or fancy systems. it has always been about building effective ones.

complexity isn't the enemy. unnecessary complexity is. 

the most dangerous, however, is unrecognised complexity. it convinces us that because we've added more, we've built better. sometimes we have but more often than we'd like to admit, we've just made the project bigger.

and perhaps, that's the hidden cost after all. not that complexity exists. it's that by the time we notice it, we've already been paying for it all along.

---

*written after debugging one too many "temporary" solutions that somehow became permanent.*

*krish iyer*