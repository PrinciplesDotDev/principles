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


Functionality, such a methods of a class, that is next to other similar functionality and are ordered logically. Create no additional cognitive complexity.

For example in the back of a textbook that contains an index. That index will contain a list of words with page numbers. No complexity is created if an additional word with page number is added to the index. This is true of methods in a file.

## Why
Humans are good with patterns [1](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4141622/). If the mind can see the overall pattern of relatedness, we intuitively understand the rest of the code simply by understanding one part of.

## Article

This principle will help structure your code to reduce cognitive load, by putting methods next to each that are related.

It is beneficial for the organization of code in files such as those that often have multiple pieces of functionality, e.g. bootstrapping the application, which tends to over-accumulate functionality. And files with strict purposes, such as models (e.g. DDD domain models or MVC models), which can end up as a dumping ground for all data manipulation functionality.

This dumping of functionality increases complexity due to lack of relatedness.

Let's look at some code I wrote (method signatures only) a while back that demonstrates how complexity goes up without following the relatedness pattern:

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

Above, whilst every method does something useful, they aren't related to each other. This makes it hard to figure out the intent of the file.

Lets clean this up:

```go

type PageManager struct {}

func NewPageManager(comms comms.HttpComms, appointmentTime string, host string, attempts int) *PageManager {}


func (pm *PageManager) PreLogin() error {}

func (pm *PageManager) AttemptLogin(username string, password string) error {}

func (pm *PageManager) PrepareForBooking(transit []map[string]interface{}) error {}

func (pm *PageManager) AttemptBooking(selectSlot int, transit map[string]interface{}) error {}

```

Much clearer. The intent should start to become clear - It's a file that performs a booking. The methods are all related - they perform similar actions: Load web pages, transition between them and attempt to perform actions upon them. It's ordered by what happens first to last.


Let's have a look at another example, this time with more code:

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

The ` updateOnServer` method is the odd method out - it is an asynchronous method that calls the server.

The previous simple pattern of: an immutable data manipulator with occasional sanity checking has been destroyed.

It adds additional complexity and prevents the engineer from trusting that everything in the file is related to another.

As the file grows larger, the destruction of the relatedness will cause the engineer a higher cognitive workload. It's lost its index-like nature and will continue to break down over time. **Avoid this**, remove the asynchronous functionality out of here.

### On relation to the single-responsibility principle

This principle complements the [single-responsibility principle](https://principles.dev/p/single-responsibility-principle/) - which states that files should do one thing.

## Exceptions

Reducing cognitive load locally (i.e. in the file) has to be balanced with increasing complexity non-locally (e.g. within the module). As following this principle strictly may lead to over-abstraction. Instead of opting for over-abstraction, you can increase complexity locally as long as every other method follows a similar pattern.
