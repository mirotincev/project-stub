modules.define('hello', ['i-bem__dom'], function(provide, BEMDOM) {
    console.log(this.name);
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindTo('click', function() {
                        console.log('На меня кликнули')
                    });
                }
            }
        }
    }));

});