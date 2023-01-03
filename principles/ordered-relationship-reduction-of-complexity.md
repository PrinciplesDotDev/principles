+++
principle = "Things that are related do not increase cognitive complexity"
tags = ["cognitive"]
summary = "
Using indexes, preferably ordered Ordered Relationship reduction of complexity
Things (e.g. methods), that are next to other things (e.g. other methods), that 1) behave in a similar way 2) are ordered logically - Add no additional cognitive complexity."
authors = ["AdamCraven"]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "60f225ff-3110-4c4c-bf1c-677ac2c2b602"
+++
Things (e.g. methods), that are next to other things (e.g. other methods), that 1) behave in a similar way 2) are ordered logically - Add no additional cognitive complexity.

For example, if you have an index of words like those used in the back of a book, there is no additional complexity by adding a further word to that index.

You can also think of this as: Creating indexes (of methods, modules or applications), ordered logically, which behave similarly do not increase complexity

## Why
humans are good with patterns (1). If the mind can see the overall pattern at play, we can intuitively understand the rest of the code in a file simply by understanding one part of it well and the relationships within.



## Content

Let's look at some code that I wrote (without methods contents). It demonstrates how complexity goes up without adequate relationships between the methods

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

The file is unclear. Because it is doing several different and unrelated things.

Lets re-write this and move out the un-related things to separate files.

```go

type PageManager struct {}

func NewPageManager(comms comms.HttpComms, appointmentTime string, host string, attempts int) *PageManager {}


func (pm *PageManager) DoFirstPageLoad() {}

func (pm *PageManager) DoAttemptLogin(username string, password string) {}

func (pm *PageManager) DoTransitionToPrepareForBooking(transit []map[string]interface{}) {}

func (pm *PageManager) DoBooking(selectSlot int, transit map[string]interface{}) error {}

```

Much clearer. It's a file that transitions and performs actions on web pages. It's ordered by what happens first to last.


Here's another pseudo code (removing async JS syntax) example. This time focusing on how the wrong code affects simplicity

```js

class messageManipulator{
    constructor() {

    }

    // Creates empty data object with uuid.
    create () {
        return {
            id: uuid(),
            title: '',
            message: '',
        }
    },

    // Merges new data with previous data, if valid
    update (newData, previousData) {
        if checkData(newData) {
            return {previousData, ...newData}
        }
        return previousData;
    }

    // Updates data on server
    updateOnServer (newData, previousData) {
        const data = this.update(newData, previousData)
        result = http.updateData(data);
        if (result.success == true) {
            return result.data;
        } else {
            return previousData;
        }
    }

    // deletes data
    remove (newData, previousData) {
        return {
            uuid : previousData.uuid,
            _tombstoneFlag: true,
        }
    }

}


```

The ` updateOnServer` method adds additional complexity. As the file grows larger, it will cause the engineer a much higher congitive workload, as previously the other methods had a simple pattern: Manipulate data in an immutable way, sometimes checking it's validity before allowing the change.

It did not communicate to an external server prior. So now the file has lost its defined structure - It's lost it's index-like-nature - and it will to continue to break down over time. Avoid this when you can, you will add a lot of complexity.