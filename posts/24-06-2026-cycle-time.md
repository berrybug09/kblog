# Why Predicting CNC Cycle Time from a STEP File Is Harder Than It Sounds
#### 24 June, 2026

during my internship at 'Indo-MIM,' i spent four weeks trying to predict <abbr title="Computer Numerical Control. A machine that performs various complex machining processes across multiple axes">CNC</abbr> machining <abbr title="The time it takes for any part to get machined/manufactured">cycle time</abbr> directly from a <abbr title="A file format that stores 3D geometry and is used for cross-platform CAD accessibility">STEP</abbr> file.

if that sentence made perfect sense, you're probably in manufacturing.

if it didn't, don't worry. hover over the words to read their definition.

---

## the challenge
on my first day, i was introduced to a problem that sounded surprisingly straightforward:

"Can we estimate how long a part will take to machine directly from its STEP file?"

when i was given the problem statement, it sounded deceptively simple and the idea seemed obvious.

a STEP file contains the geometry of the part. if you know the geometry, you should be able to identify the machining operations required. if you know the machining operations, you should be able to estimate how long they will take.

at least, that was the theory.

---

## the approach
the first step was figuring out how people normally approach this problem.

as it turns out, there aren't many people trying to estimate CNC cycle time directly from STEP geometry. there are, however, a lot of people on Reddit who are very confident about how it should be done.

after spending several evenings reading forum discussions, research papers, and CAM-related documentation, i decided to use Python.

the plan?
- use Python to read the STEP files.
- extract geometric features.
- estimate machining effort associated with those features.
- combine the estimates into a final cycle time prediction.

---

## extracting geometry
using <abbr title="OpenCASCADE Technology, a python library that helps in reading 3D CAD files">OCC</abbr>, i started extracting properties from the parts.

the obvious candidates were:
- final volume
- surface area
- bounding box dimensions
- face count, edge count, etc.

the assumption was that more complex geometry would require more machining effort and therefore longer cycle times.

unfortunately, geometry isn't machining. two parts with the same volume can require completely different machining operations.

---

## the data
on the other hand, i wasn't starting completely from scratch.

the company already had historical data for previously manufactured parts, including their actual cycle times and corresponding STEP files. i also received tool datasets and parameters.

this gave me something to compare against and use as the basis for the machining operations.

if a relationship existed between geometry and machining time, it should show up somewhere in the data.

the task now shifted from extracting geometry to finding patterns.

---

## looking for correlations
the obvious place to start was correlation analysis.

if geometric properties such as volume, surface area, or feature counts influenced machining time, they should exhibit some measurable relationship with cycle time.

![Correlation Analysis](images/correlation.jpg)

*(initial correlation analysis between extracted geometric features and program cycle time.)*

some features exhibited surprisingly strong relationships with cycle time, particularly feature-count based metrics such as faces, edges, vertices, and holes.

at first glance, this seemed promising. if geometric complexity correlated with machining time, perhaps accurate prediction was achievable after all.

sadly, correlation and prediction are not the same thing.

---

## the missing information
the more i explored, the more a pattern emerged.

a STEP file tells you what a part looks like but not how it gets manufactured.

two parts with similar geometry can be machined with completely different strategies.

---

## maybe machine learning knows better
at this point, i knew hard-coding machining logic for every possible feature, operation, machine, and tool was going to be impossible in 4 weeks.

so i considered a different approach.

instead of manually defining the relationship between geometry and machining time, perhaps a machine learning model could learn it from the data.

- feed the model geometric features extracted from the STEP file.
- provide the corresponding cycle times from the received historical data.
- allow the model to discover patterns that weren't immediately obvious through correlation analysis alone.

---

## reality check
the results were mixed.

some models performed better than others, but none delivered the level of accuracy required to reliably estimate machining time across a wide range of parts.

by this stage, the limitations of the available information had become increasingly obvious.

the model was being asked to predict manufacturing decisions using data that primarily described geometry.

geometry matters. manufacturing strategy matters too, and those are not always the same thing.

---

## what i learned
when i started the internship, i thought the challenge was predicting machining time.

by the end of it, i realised that it was understanding what machining depends on. to figure out decisions like tooling, machining strategies, machining parameters, setup considerations, and countless other factors that never appear in the geometry alone.

the project didn't produce a magic "upload STEP file, get cycle time" solution.

what it did produce was a much better understanding of why existing CAM software is as complex as it is.

for all its limitations, geometry still matters. it influences the operations that will be performed on a part, but geometry alone rarely tells the entire story.

and that is what makes predicting CNC cycle times from a STEP file much harder than it sounds.

---

*written during the final week of my internship at Indo-MIM in June 2026.*

*krish iyer*