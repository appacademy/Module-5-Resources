## API Docs

### Get all users

- Route: /api/users/all
- response shape:
```javascript
[
    {
        'id': 1, 
        'name': 'Patch', 
        'username': 'Patchenator', 
        'profile': 'url for image'
    },
    {}
]
```

### Get all posts

- Route: /api/posts/all
- response shape:
```javascript
[
    {
        'id': 6,
        'title': 'Look who I saw outside today...',
        'image': 'image url', 'likes': 6, 
        'date': datetime.date(2023, 10, 26), 
        "likes": 3
        'author': {
            'id': 1, 
            'name': 'Patch', 
            'username': 'Patchenator', 
            'profile': 'image url'
            },
        'comments': [
            {'id': 12, 'body': 'How dare he!!!'},
            {'id': 13, 'body': 'Awww, its a cat in a tent!!!!'}
        ]
    },
    {}
]
```

### Create a Post

- Route: /api/posts/new
- request shape
```javascript
{
    title, //string
    image, // string
    author, // int id
}
```
- response shape:
```javascript
{
        'id': 6,
        'title': 'Look who I saw outside today...',
        'image': 'image url', 'likes': 6, 
        'date': datetime.date(2023, 10, 26),
        'likes': 0, 
        'author': {
            'id': 1, 
            'name': 'Patch', 
            'username': 'Patchenator', 
            'profile': 'image url'
            },
        'comments': []
}

```