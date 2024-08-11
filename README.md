# How To Change Portfolio Content
**Step 1**: Find and open ```index.ts``` at ```my-portfolio/src/constants/index.ts```.
<br>**Step 2**: Change the content.

Note: All the variables are self-explanatory. I hope there would be no problems when adding data. 

## Sample Database Item
```json
[
    {
        "id": 1,
        "content": {
            "title": "My First Visit to Japan",
            "date": "June 20, 2023",
            "itemType": "Travel",
            "description": "Finally, after all these years, I have traveled to Japan! More stuff...",
            "client": "John Doe",
            "role": "Bartender",
            "url": "/"
        },
        "images": [
            {
                "id": 1,
                "note": "You are gay"
            }
        ]
    }
]

```
<br>**ID**: Refers to the id of the item. Items are rendered descendingly so recent items are on top.
> Make sure to that each item id is unique. Do not have duplicates.

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

# How to add an optimized image
Step 1: Go to tinyPNG and compress all your images. Save them on the same directory on a compressed folder. 
<br>Step 2: Upload the compressed images to ImageKit and copy the URL as the img src. (You can use other services as intermediaries)
<br>Step 3: Setup image transformations for each of your image ```srcset```. When implementing ```srcset``` your ```src``` becomes your default. 

**Note**: Shane make sure to add a note or comment when adding an image in the database.

# Be Careful When Adding Images!
Make sure to attribute any image you use for your gallery or read the content license for any image from a source you use.
<br>1.) [Pixabay](https://pixabay.com/service/license-summary/)

