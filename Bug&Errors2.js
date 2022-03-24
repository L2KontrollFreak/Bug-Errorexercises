const contain ={
    locked: true,
    unlock() {this.locked = false;},
    Lock() {this.locked = true;},
    _content: [],
    get content() {
        if (this.locked) throw new Error("locked!");
        return this._content;
    }
};

function withContainUnlocked(body){
    let locked = contain.locked;
    if (!locked){
        return body();
    }

    contain.unlock();
    try {
        return body();
    } finally{
        contain.Lock();
    }
    }

    withContainUnlocked(function(){
        contain.content.push("Money");
    });

    try{
        withContainUnlocked(function() {
            throw new Error("it's the FBI! Abort the Mission and Run!!!");
        });
        } catch (e) {
            console.log("Error raised:",e);
        }

        console.log(contain.locked);h