+++
principle = "Relatedness pattern"
tags = ["cognitive", "code", "comprehension", "individual", "focused"]
summary = "Things that are related to one another and ordered logically do not increase cognitive complexity"
authors = ["AdamCraven"]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "60f225ff-3110-4c4c-bf1c-677aa2c2b602"
+++

Relatedness pattern is a pattern of cognition that states: Cognitive complexity is not increased with things that have high relatedness. Meaning your mind doesn't have to work any harder with highly related items (e.g. code, methods in a class, configuration , etc.), even if there are many of them.

To have high relatedness, it must have these properties:


1. Similar things should be next to each other
2. Those things should be used in a consistent way
3. They should be logically ordered or grouped

### High relatedness example

```js
[
    new Spotlight({ visible: false, x: -2, color: 'red' }),
    new Spotlight({ visible: true,  x: 0,  color: 'white' }),
    new Spotlight({ visible: false, x: 2,  color: 'blue' }),
    new Spotlight({ visible: false, x: 4,  color: 'orange' }),
]
```
Adding another `Spotlight` would not increase complexity because:

1. Spotlights are all next to each other
2. The spotlights are used in a consistent way by having the same arguments defined.
3. The spotlights are logically ordered. In this case, by their x value.


### Low relatedness example

```js
[
    new Spotlight({ visible: false, x: -6, color: 'green' }),
    new Window({ width:3, false, y: -4, height: 8,   }),
    new HttpRequester(),
    new Floor({ opacity:0.7,  width:40, height: 40, x:4, texture: 'marble-floor-2048x2048.png' }),
    new Spotlight({ y: 2,  color: 'blue' }),
    new Spotlight({ visible: false, z: 4,  color: 'orange' }),
    new Spotlight({ beam: false, x: 6,  color: 'pink' }),
    new Bootstrapper(6),
    new Light(),
]
```
Adding another object will increase complexity because:

1. Many objects, some completely unrelated, are next to each other.
2. Even related objects (spotlights) are used inconsistently due to variations in arguments.
3. There is no logical ordering - or grouping

### Non-coding example

A real-life example would be in the back of a textbook that contains an index. That index includes a list of words. Those words reference a location - usually a page number. You will experience no increase in cognitive complexity if an additional word with page numbers is added to the index. Because:

1. The words are next to each other.
2. They follow the format: word, location(s)
3. They are ordered alphabetically, and indexes use indentation to group sub-words.




## Why

Humans are good with patterns [1](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4141622/). If the mind can recognise an overall pattern, it intuitively understands the rest of the code by understanding one part.


[TOC]


## Article

This principle will help structure your code to reduce cognitive load by increasing relatedness. Let's take you through some examples:

### Related objects with unrelated arguments

How to handle objects with varying arguments:

#### High relatedness

```js
[
    new Spotlight({ visible: false, x: -6, color: 'green' }),
    new Spotlight({ visible: false, x: -4, color: 'yellow' }),
    new Spotlight({ visible: false, x: -2, color: 'red' }),
    new Spotlight({ visible: true,  x: 0,  color: 'white' }),
    new Spotlight({ visible: false, x: 2,  color: 'blue' }),
    new Spotlight({ visible: false, x: 4,  color: 'orange' }),
    new Spotlight({ visible: false, x: 6,  color: 'pink' }),
],

```
The code is highly related. It has a consistent pattern and organization. Adding another object using the same pattern would create no additional cognitive complexity.


#### Decreasing relatedness
```js
[
    new Spotlight({ visible: false, x: -6, color: 'green' }),
    new Spotlight({ visible: false, x: -4, color: 'yellow' }),
    new Spotlight({ visible: false, x: -2, color: 'red' }),
    new Spotlight({ showBeamHousing: false,  y: 9,  color: 'white' }),
    new Spotlight({ visible: false, x: 2 }),
    new Spotlight(),
    new Spotlight({ visible: false, x: 6,  color: 'pink' }),
],
```
The code has lost some of its relatedness. The objects are all related, but the arguments vary. This variation makes it much harder to scan the code because the pattern has been lost.

#### Bringing back high relatedness


```js
[
    new Spotlight({ showBeamHousing: true,  visible: false, x: -6, y: 0, color: 'green' }),
    new Spotlight({ showBeamHousing: true,  visible: false, x: -4, y: 0, color: 'yellow' }),
    new Spotlight({ showBeamHousing: true,  visible: false, x: -2, y: 0, color: 'red' }),
    new Spotlight({ showBeamHousing: false, visible: true,  x: 0,  y: 9, color: 'white' }),
    new Spotlight({ showBeamHousing: true,  visible: false, x: 2,  y: 0, color: 'white' }),
    new Spotlight({ showBeamHousing: true,  visible: false, x: 4,  y: 0, color: 'orange' }),
    new Spotlight({ showBeamHousing: true,  visible: false, x: 6,  y: 0, color: 'pink' }),
],
```
Relatedness has been brought back to high levels by defining all possible arguments. This explicitness adds verbosity to the code, but the verbosity increases relatedness.


```js
[
    new Spotlight(SpotlightOpts1),
    new Spotlight(SpotlightOpts2),
...
],
```

Alternatively, you could also define the arguments away from the new object. This code will be highly related at the potential expense of making it less so elsewhere.


### Variable objects

How to handle objects that are unrelated:

#### Poor relatedness

```js
[
    new Spotlight({ visible: false, x: -6, color: 'green' }),
    new Window({ visible: false, y: -4, height: '80' }),
    new Spotlight({ visible: false, x: -2, color: 'red' }),
    new Floor({ visible: true,  width:4, height: 4, x:4 }),
    new Spotlight({ visible: false, x: 2,  color: 'blue' }),
    new Spotlight({ visible: false, x: 4,  color: 'orange' }),
    new Spotlight({ visible: false, x: 6,  color: 'pink' }),
],
```
Relatedness is low due to different types of objects with different arguments.

#### Conditional relatedness

```js
[
    new Spotlight(),
    new Window(),
    new Spotlight(),
    new Floor(),
    new Spotlight(),
    new Ceiling(),
    new Spotlight(),
],
```

**If** you can recognize these are 3d objects being added to a scene, then you will view it as related. If you cannot, you would say it is unrelated.

```js
const objectsToAddTo3dScene = [
    new Spotlight(),
    new Window(),
    new Spotlight(),
    new Floor(),
    new Spotlight(),
    new Ceiling(),
    new Spotlight(),
],
```

We can help with the relatedness by creating a variable - `const objectsToAddTo3dScene` - which informs you of the pattern.


```js
[
    new Floor(),
    new Ceiling(),
    new Window(),
    new Spotlight(),
    new Spotlight(),
    new Spotlight(),
    new Spotlight(),
],
```

The logical ordering used here is: parts of the building first, then lighting after. However, it is hard to enforce that ordering.

#### Full relatedness

```js

const building = [
    new Floor(),
    new Ceiling(),
    new Window(),
    new Window(),
]


const lighting = [
    new Spotlight(),
    new Spotlight(),
    new Spotlight(),
    new Spotlight(),
    new Pointlight(),
]

```

If we group the objects - So the building objects and lighting objects go together - we are back to full relatedness. No additional complexity is created by adding another object to either one of those arrays.

### Indexes

How to handle indexes:

#### High relatedness

```python
    path("about/", loadPage("pages/about.html")),
    path("contact/", loadPage("pages/contact.html"))
    path("home/", loadPage("pages/home.html"))
    path("license/", loadPage("pages/license.html") ),
    path("terms-of-service/", loadPage("pages/tos.html")),

```

A highly related index of paths ordered alphabetically.


#### Relatedness Lost

```python
    path("license/", loadPage("pages/license.html"), searchEngineCache=False, cachePage="10 seconds", ),
    path("about/", loadPage("pages/about.html"), alwaysReload=True,),
    path("terms-of-service/", loadPage("pages/tos.html")),
    path("principles/", loadPageDynamicPage("principle/index.html", view('principle.index')))
    path("home/", loadPage("pages/home.html"))
    path("contact/", loadPage("pages/contact.html"))
    path("blog/", loadPageDynamicPage("blog/blog.html", view('blog.index')))

```
The paths are related, but relatedness has been lost by: dynamic loading mixed with static loading of files, different arguments passed in and no order. The file will get very overwhelming in future.

#### Relatedness regained

```python
    group('static',
        path("about/", loadPage("pages/about.html"), searchEngineCache=True, cachePage="0 seconds"),
        path("contact/", loadPage("pages/contact.html"), searchEngineCache=True, cachePage="10 seconds",)
        path("home/", loadPage("pages/home.html"), searchEngineCache=True, cachePage="60 seconds",)
        path("license/", loadPage("pages/license.html"), searchEngineCache=False, cachePage="60 seconds", ),
        path("terms-of-service/", loadPage("pages/tos.html"), searchEngineCache=True, cachePage="60 seconds"),
    ),
    group('dynamic',
        path("principles/", loadPageDynamicPage("principle/index.html", view('principle.index'))),
        path("blog/", loadPageDynamicPage("blog/blog.html", view('blog.index')))
    )

```

We've grouped the paths. So that the groups are related (static + dynamic) and options that are relevant to those groups are all defined explicitly.


### Methods in a class

How to handle methods in a class:

#### High unrelatedness


Tip: If you are unfamiliar with Go, it may read easier if you ignore the `(pm *Page)` after the `func` definition. In Go it just means something belongs to that object.
```go

type Page struct {
    comms           comms.HttpComms
    appointmentTime time.Time
}

func NewPage(comms comms.HttpComms, appointmentTime string) *Page {}

func (pm *Page) GetFirstPage() {}

func (pm *Page) Next() {}

func (pm *Page) markTimer(str string) {}

func (pm *Page) NextFast() {}

func WriteFile(page PageMain, html []byte) {}

func (pm *Page) NextWithPageCheckFast(nextPageSelector string) bool {}

func (pm *Page) NextWithPageCheck(nextPageSelector string) bool {}

func (pm *Page) DoPrelogin(username string, password string) {}

func (pm *Page) DoTransit(transit []map[string]interface{}) {}

func (pm *Page) DoPrepareForBooking(timeStr string) {}

func (pm *Page) DoBook(selectSlot int, transit map[string]interface{}) error {}

```

The methods are unrelated to each other. It's tough to figure out what the file is doing.


#### Better relatedness

```go

type Page struct {
    comms           comms.HttpComms
    appointmentTime time.Time

}

func NewPage(comms comms.HttpComms, appointmentTime string) *Page {}


func (pm *Page) PreLogin() error {}

func (pm *Page) AttemptLogin(username string, password string) error {}

func (pm *Page) PrepareForBooking(transit []map[string]interface{}) error {}

func (pm *Page) AttemptBooking(selectSlot int, transit map[string]interface{}) error {}

```

All unrelated methods have been removed where possible, which has increased clarity. This clarity should make it easier for you to guess what the application may do- It's a file that performs a booking. The methods are all related - they perform similar actions: Load web pages, transition between pages and attempt to perform actions upon them. It's ordered by what happens first to last. However, we can still there is some unrelatedness in arguments. That is sometimes unavoidable, but in this case we can fix it


#### Full relatedness between the methods

```go

type Page struct {
    comms           comms.HttpComms
    appointmentTime time.Time
    username:       string
    password:       string
    transit:        []map[string]interface{}
    selectSlot:     int
}

func NewPage(comms comms.HttpComms, appointmentTime string, selectSlot int, username string, password string) *Page {}


func (pm *Page) PreLogin() error {}

func (pm *Page) AttemptLogin() error {}

func (pm *Page) PrepareForBooking() error {}

func (pm *Page) AttemptBooking() error {}

```

We've moved out all the arguments into the object definition. This code is now easy to parse. Adding additional methods of the same type would not increase complexity.

#### Method and functions

How to handle relatedness within executing code:

```js
class MessageManipulator {
  constructor() {}

  // Creates empty data object with uuid.
  create() {
    return {
      id: uuid(),
      title: "",
      message: "",
    };
  }

  // Merges new data with previous data, if valid
  update(newData, previousData) {
    if (checkData(newData)) {
      return { ...previousData, ...newData };
    }
    return previousData;
  }

  // Updates data on server
  async updateOnServer(newData, previousData) {
    const data = this.update(newData, previousData);
    const result = await http.updateData(data);
    if (result.success) {
      return result.data;
    }
    return previousData;
  }

  // deletes data
  remove(newData, previousData) {
    if (checkData(newData)) {
        return {
        uuid: previousData.uuid,
        _tombstoneFlag: true,
        };
    }
    return previousData;

  }
}
```

The ` updateOnServer` method is the odd method out - it is an asynchronous method that calls the server. The previous simple pattern of: a data manipulator with sanity checking has been destroyed. It adds additional complexity and prevents the engineer from trusting that everything in the file is related to another. As the file grows larger, the destruction of the relatedness will cause the engineer a higher cognitive workload. It's lost its index-like nature and will continue to break down over time. To fix this, remove the asynchronous functionality.


```js
class MessageManipulator {
  constructor() {}

  // Creates empty data object with uuid.
  create() {
    return {
      id: uuid(),
      title: "",
      message: "",
      tombstoneFlag: false,
    };
  }

  // Merges new data with previous data, if valid
  update(newData, previousData) {
    if (checkData(newData)) {
      return { ...previousData, ...newData };
    }
    return previousData;
  }

  // deletes data
  remove(newData, previousData) {
    if (checkData(newData)) {
        return {
            uuid: previousData.uuid,
            tombstoneFlag: true,
        };
    }
    return previousData;

  }
}
```

It won't always be possible to have highly related methods within executing code - but doing so will reduce cognitive complexity.

### Related principles:

This principle complements:

[single-responsibility principle](https://principles.dev/p/single-responsibility-principle/) - which states that files should do one thing.

"Explicit is better than implicit" - Being explicit often increases relatedness.



## Exceptions

Reducing cognitive load locally (i.e. in the file) has to be balanced with increasing complexity non-locally (e.g. within the module). As following this principle strictly may lead to over-abstraction. Instead of opting for over-abstraction, you can increase complexity locally as long as every other method follows a similar pattern.
