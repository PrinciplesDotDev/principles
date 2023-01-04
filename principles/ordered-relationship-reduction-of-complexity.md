+++
principle = "Relatedness doesn't increase cognitive complexity"
tags = ["cognitive"]
summary = "Things that are related to one another and ordered logically do not increase cognitive complexity"
authors = ["AdamCraven"]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "60f225ff-3110-4c4c-bf1c-677ac2c2b602"
+++


Functionality (e.g. methods) that is next to other functionality (e.g. another method), that: 1) behave in a similar way and 2) are ordered logically. Add no additional cognitive complexity to the reader.

For example, if you have an index of words with page numbers like you would find in the back of a book, there is no additional complexity to the reader if an additional word and page number is added to that index.

You can also think of this as: Creating indexes (of methods, modules or applications), ordered logically, which behave similarly does not increase complexity.

## Why
Humans are good with patterns [1](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4141622/). If the mind can see the overall pattern at play, we can intuitively understand the rest of the code in a file simply by understanding if one part of it is related to everything else.


## Article

This principle helps you structure your code to reduce cognitive load. If methods act similarly and you order them logically, it will reduce cognitive load.

It is beneficial for the organization of code in files such as those that often have multiple pieces of functionality, e.g. bootstrapping the application, which tends to over-accumulate functionality. And files with strict purposes, such as models (e.g. DDD domain models or MVC models), which can end up as a dumping ground for all data manipulation functionality.

This dumping of functionality increases complexity as too much functionality is littered throughout the files.

Let's look at some code I wrote (without methods contents) in a rush that demonstrates how complexity goes up without good relationships between the methods.




```go


type PageManager struct {}

func NewPageManager(comms comms.HttpComms, appointmentTime string, host string, attempts int) *PageManager {}

func (pm *PageManager) GetFirstPage() {}

func (pm *PageManager) Next() {}

func (pm *PageManager) markTimer(str string) {}

func (pm *PageManager) NextFast() {}

func WriteFile(page PageMain, html []byte) {}

func (pm *PageManager) NextWithPageCheckFast(nextPageSelector string) bool {}

func (pm *PageManager) NextWithPageCheck(nextPageSelector string) bool {}

func (pm *PageManager) DoPrelogin(username string, password string) {}

func (pm *PageManager) DoTransit(transit []map[string]interface{}) {}

func (pm *PageManager) DoPrepareForBooking(timeStr string) {}

func (pm *PageManager) DoBook(selectSlot int, transit map[string]interface{}) error {}


```

As you can see, it's quite hard to figure out the intent of the file. Because it is has several pieces of unrelated functionality.

Lets clean this up

```go

type PageManager struct {}

func NewPageManager(comms comms.HttpComms, appointmentTime string, host string, attempts int) *PageManager {}


func (pm *PageManager) PreLogin() {}

func (pm *PageManager) AttemptLogin(username string, password string) {}

func (pm *PageManager) PrepareForBooking(transit []map[string]interface{}) {}

func (pm *PageManager) AttemptBooking(selectSlot int, transit map[string]interface{}) error {}

```

Much clearer. Even if you don't know much Go, the intent should start to become clear - The methods in the file perform similar actions: Load web pages, transition between them, and attempt to perform actions upon on those web pages. It's ordered by what happens first to last.


Below is a different example showing the problem with unrelatedness:

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
        } else {
            return previousData;
        }
    }

    // deletes data
    remove(newData, previousData) {
        return {
            uuid: previousData.uuid,
            _tombstoneFlag: true,
        };
    }
}

```

The ` updateOnServer` method is the odd method out, as it is an asynchronous method that calls the server.

The previous simple pattern of: an immutable data manipulator with occasional sanity checking has been destroyed.

It adds additional complexity and prevents the engineer from trusting that everything in the file is related to another, especially as it isn't ordered logically.

As the file grows larger, the destruction of the relationships will cause the engineer a  higher cognitive workload because there is no pattern and will have to examine the file each time. It's lost its index-like nature and will continue to break down over time. **Avoid this**, and remove the asynchronous functionality out of here.

### On relation to the single-responsibility principle

This principle complements the [single-responsibility principle](https://principles.dev/p/single-responsibility-principle/) - which states that files should do one thing.

## Exceptions

Reducing cognitive load locally (i.e. in the file) has to be balanced with increasing complexity non-locally (e.g. within the module). As following this principle strictly may lead to over-abstraction.

Instead of opting for over-abstraction, you can add complexity locally but ensure that every other method behaves similarly.
