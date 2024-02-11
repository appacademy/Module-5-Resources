# Turkey Display, Phase 4: User-Friendly Messaging

Finally, you can complete the minimum functionality for this application by
setting the message below the picture based on the number of feathers selected.

The current message only works well when there are no feathers (meaning the
`count` is zero).

* Open __App.jsx__.
* Pass the `featherCount` prop into the `Message` component.

## Solution (if you need it)

Here is one possible solution. Yours will likely vary somewhat, and that's a
good thing. :)

Modify in __src/App.jsx__.

```javascript
<Message size={size} featherCount={featherCount} />
```

Add to __src/components/Message.jsx__.

```javascript
  const [message, setMessage] = useState('');

  useEffect(() =>{
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])
```

Modify in __src/components/Message.jsx__.

```javascript
  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
```

Well done!
