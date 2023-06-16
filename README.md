# How to add a new item

1. You must first open the database file called ```ProjectDatabase.json```.
2. You can add a new item by copying an item and changing its values. 
```json
[
    {
        "id" : 1,
        "itemType" : "Sample Event",
        "altMessage" : "Sample message",
        "title" : "Sample Title.",
        "imgURl" : "sample-image.jpg"
    }
] 
```
ID: Refers to the id of the item. Items are rendered descendingly so recent items are on top.
Item Type: Refers to the purpose of the item. Is it an event, recipe, work experience, project, or travel.
Alternative Message: Is the message shown when the image fails to render. 
Title: Refers to name of the event, recipe, company, project, or travel experience.
Image URL: Refers to the image placed in the src/assets/ folder. You can immediately place an image URL without 
a folder refernce since I have omitted the common string during mapping the components.

# Adding Images
