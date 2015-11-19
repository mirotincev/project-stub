({
    block : 'page',
    title : 'bem-components: radio-group',
    mods : { theme : 'islands' },
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : '_simple.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : '_simple.ie.css' }
        }
    ],
    scripts : [{ elem : 'js', url : '_simple.js' }],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'default1',
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'default2',
            mods : { disabled : true },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'simple1',
            mods : { theme : 'simple' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'simple2',
            mods : { theme : 'simple', disabled : true },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'simple-button1',
            mods : { theme : 'simple', type : 'button' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'simple-button2',
            mods : { theme : 'simple', type : 'button', disabled : true },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'simple-button3',
            mods : { theme : 'simple', type : 'button' },
            options : [
                {
                    val : 'vk',
                    text : 'VK',
                    icon : { block : 'icon', mods : { social : 'vk' } }
                },
                {
                    val : 'twitter',
                    text : 'Twitter',
                    icon : { block : 'icon', mods : { social : 'twitter' } },
                    checked : true
                }
            ]
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands1',
            mods : { theme : 'islands', size : 'm' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands2',
            mods : { theme : 'islands', size : 'm', disabled : true },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-size1',
            mods : { theme : 'islands', size : 'm' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-size2',
            mods : { theme : 'islands', size : 'l' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },

        { tag : 'h3', content : 'line' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-line1',
            mods : { theme : 'islands', size : 'm', type : 'line' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-line2',
            mods : { theme : 'islands', size : 'l', type : 'line' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', disabled : true }
            ]
        } },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-button1',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true },
                { val : 4, text : 'fourth', disabled : true }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-button2',
            mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-button3',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            val : 2,
            options : [
                {
                    val : 'vk',
                    text : 'VK',
                    icon : { block : 'icon', mods : { social : 'vk' } }
                },
                {
                    val : 'twitter',
                    text : 'Twitter',
                    icon : { block : 'icon', mods : { social : 'twitter' } }
                }
            ]
        } },

        { tag : 'h3', content : 'radio-check mode' },
        { tag : 'p', content : {
            block : 'radio-group',
            name : 'islands-button4',
            mods : { theme : 'islands', size : 'm', type : 'button', mode : 'radio-check' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        } }
    ]
});
