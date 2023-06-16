# How to add a new item
**Step 1**: Open the database file called ```ProjectDatabase.json```.
<br>**Step 2**: Add a new item by copying the sample below.
<br>
## Sample Database Item
```json
    {
        "id" : 1, 
        "content": { 
            "title" : "My First Visit to Japan",
            "date" : "June 20, 2023",
            "itemType" : "Travel",
            "description" : "Finally, after all these year I have traveled to japan! More stuff...",
            "client" : "John Doe)",
            "role" : "Bartender",
            "url" : ""
        },
        "images": {
            "thumbnail" : "coffee-beans.jpg",
            "samples" : [ 
                { "sampleImage" : "coffee-beans.jpg", "caption" : "This is caption one."},
                { "sampleImage" : "coffee-beans.jpg", "caption" : "This is caption two refer to image one."}
            ]
        }
    }
```
<br>**ID**: Refers to the id of the item. Items are rendered descendingly so recent items are on top.
> Make sure to that each item id is unique. Do not have duplicates.

<br>### Content
<br>**Title**: The title of the item.
<br>**Date**: The date of the item.
| Format | Sample |
| :-- | :--: |
| Date occured | June 20, 2023 |
| Year published | 2023 |
| Year to year | 2020-2023 |
| Year to present |  2023-present(ongoing) |


<br>**Item Type**: Refers to the category of the item. Is it an ```Event, Recipe, Work Experience, Project, Travel, or anything else.```.
<br>**Description**: The description of the ongoing or previous events on what happened.
<br>**Client**: Refers to the client of someone who you worked for.
<br>**Role**: Refers to your contribution to the said item.
<br>**Url**: The link to a hosted project, article, or event. 
