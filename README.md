# 28 - Refs
1. Creare Ref =>

``` 
 this.inputRef = React.createRef()
Attach =>   <input type="text" ref={this.inputRef}/>
Access =>  this.inputRef.current.focus();

```

2. Callback Ref => 

```
this.callbackRef = null;
this.setCallbackRef = element => {
    this.callbackRef = element
}
Attach => <input type="text" ref={this.setCallbackRef}/>
Access =>  this.callbackRef.focus();

```

# 29 - Refs with Class Components

# 30 - Forwarding Refs
